import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/operations';
import { useState } from 'react';
import {
  Container,
  Wrap,
  DialogText,
  DialogWrap,
  WrapBtn,
} from './ContactForm.styled';
import { Notify } from 'notiflix';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Dialog, TextField, InputAdornment } from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const currentContacts = useSelector(state => state.contacts.items);
  const loader = useSelector(state => state.contacts.isLoading);

  const handleInputChange = () => {
    const isValid = form.getFieldValue('name') && form.getFieldValue('number');
    setIsFormValid(isValid);
  };

  const handleNumberKeyPress = e => {
    const key = e.key;
    const isAllowedKey = /^[0-9+\-()\s]+$/.test(key);
    const isNumberPadKey =
      (key.length === 1 && /\d/.test(key)) ||
      /^Digit\d$/.test(key) ||
      /^Numpad\d$/.test(key);
    const isDeleteKey = key === 'Backspace' || key === 'Delete';
    if (!isAllowedKey && !isDeleteKey && !isNumberPadKey) {
      e.preventDefault();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEscapeKeyDown = event => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const showModal = () => {
    form.resetFields();
    setOpen(true);
  };

  const submit = value => {
    const formatTel = () => {
      const number = value.number;
      const phoneLength = number.length;
      if (phoneLength < 7) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`;
      }
      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
        6,
        10
      )}`;
    };

    const newContact = { name: value.name, number: formatTel() };
    const newContactName = newContact.name.toLowerCase();
    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      Notify.failure(`${newContact.name} is already in contact`);
    } else {
      dispatch(addContact(newContact));
      if (!loader) {
        form.resetFields();
        setOpen(false);
        Notify.success(`${newContact.name} is added to contacts`);
      }
    }
  };

  return (
    <Wrap>
      <Button
        color="secondary"
        onClick={showModal}
        title="add new contact"
        variant="outlined"
        style={{ marginBottom: '10px' }}
      >
        <Container>
          <AddCircleOutlineIcon />
          Add contact
        </Container>
      </Button>
      <Dialog
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        onKeyDown={handleEscapeKeyDown}
        onClose={handleClose}
      >
        <DialogWrap>
          <DialogText>Add new contact</DialogText>
          <Form
            name="normal_login"
            initialValues={{
              name: '',
              number: '',
              remember: true,
            }}
            onFinish={submit}
            onValuesChange={handleInputChange}
            form={form}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input Name!',
                  type: 'text',
                },
              ]}
            >
              <TextField
                variant="standard"
                fullWidth
                color="secondary"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PortraitIcon color="disabled" fontSize="large" />
                    </InputAdornment>
                  ),
                  autoComplete: 'off',
                }}
              />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: 'Please input Number!',
                  type: 'phone',
                },
              ]}
            >
              <TextField
                onKeyDown={handleNumberKeyPress}
                variant="standard"
                fullWidth
                color="secondary"
                placeholder="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon color="disabled" fontSize="large" />
                    </InputAdornment>
                  ),
                  autoComplete: 'off',
                }}
              />
            </Form.Item>
            <Form.Item noStyle>
              <WrapBtn>
                <Button
                  type="submit"
                  color="secondary"
                  title="add new contact"
                  variant="outlined"
                  disabled={!isFormValid}
                >
                  Create contact
                </Button>
              </WrapBtn>
            </Form.Item>
          </Form>
        </DialogWrap>
      </Dialog>
    </Wrap>
  );
};
