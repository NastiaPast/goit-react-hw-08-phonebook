import React, { useState } from 'react';
import { RegLink, RegText, Container, RegTitle } from './Register.styled';
import { Button } from '@mui/material';
import { Form } from 'antd';
import { register } from 'Redux/Authorization/operations';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = () => {
    const filledFields = form.getFieldsValue();
    const isFilled = Object.values(filledFields).every(Boolean);
    setIsFormFilled(isFilled);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const onFinish = values => {
    const { name, email, password, confirm } = values;
    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };

  return (
    <section>
      <Container>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirm: '',
          }}
          style={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <RegTitle>Registration</RegTitle>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name',
                whitespace: true,
              },
            ]}
          >
            <TextField
              fullWidth
              label="Name"
              color="secondary"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid email',
              },
              {
                required: true,
                message: 'Please input your email',
              },
            ]}
          >
            <TextField
              fullWidth
              label="Email"
              color="secondary"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
              {
                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,
                message:
                  'Password must contain at least one number, one uppercase and lowercase letter, and be at least 7 characters long',
              },
            ]}
            hasFeedback
          >
            <TextField
              fullWidth
              label="Password"
              color="secondary"
              type={showPassword ? 'text' : 'password'}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The passwords do not match')
                  );
                },
              }),
            ]}
          >
            <TextField
              fullWidth
              label="Confirm Password"
              color="secondary"
              type={showConfirmPassword ? 'text' : 'password'}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(prevState => !prevState)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              variant="contained"
              type="submit"
              disabled={!isFormFilled}
              color="secondary"
              fullWidth
            >
              Register
            </Button>
            <RegText>
              or <RegLink to="/login">log in</RegLink> if you already have an
              account
            </RegText>
          </Form.Item>
        </Form>
      </Container>
    </section>
  );
};

export default Register;
