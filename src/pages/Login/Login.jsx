import React, { useState } from 'react';
import { LogText, Container, LogTitle, LogLink } from './Login.styled';
import { Form } from 'antd';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { login } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [form] = Form.useForm();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    form.setFieldsValue({ [field]: value });
    const filledFields = form.getFieldsValue();
    const isFilled = Object.values(filledFields).every(Boolean);
    setIsFormFilled(isFilled);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const onFinish = values => {
    dispatch(login(values));
    form.resetFields();
  };

  return (
    <section>
      <Container>
        <Form
          form={form}
          name="normal_login"
          initialValues={{
            email: '',
            password: '',
            remember: true,
          }}
          onFinish={onFinish}
          style={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <LogTitle>Log in</LogTitle>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input correct Email',
                type: 'email',
              },
            ]}
          >
            <TextField
              fullWidth
              label="Email"
              color="secondary"
              onChange={({ target }) =>
                handleInputChange('email', target.value)
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input correct Password',
              },
            ]}
          >
            <TextField
              type={showPassword ? 'text' : 'password'}
              fullWidth
              label="Password"
              color="secondary"
              onChange={({ target }) =>
                handleInputChange('password', target.value)
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
              Log in
            </Button>
            <LogText>
              Or <LogLink to="/register">register now</LogLink>
            </LogText>
          </Form.Item>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
