import {
  ContItem,
  ContList,
  ContWrap,
  ContTitle,
  Container,
  DialogWrap,
  DialogTitle,
  InputWrap,
  BtnWrap,
} from './Contacts.styled';
import { Loader } from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  updateContact,
  fetchContacts,
} from 'Redux/Contacts/operations';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Popconfirm } from 'antd';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PortraitIcon from '@mui/icons-material/Portrait';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Button, Dialog, TextField, InputAdornment } from '@mui/material';

const Contacts = () => {
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [isChangeEnabled, setIsChangeEnabled] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = () => {
    const isNameChanged =
      subName.toLowerCase() !==
      contacts.find(contact => contact.id === subId)?.name.toLowerCase();

    if (
      !isNameChanged &&
      subNumber === contacts.find(contact => contact.id === subId)?.number
    ) {
      Notify.warning(`No changes were made to the contact.`);
      return;
    }
    const isNameAlreadyExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === subName.toLowerCase() &&
        contact.id !== subId
    );

    if (isNameAlreadyExists) {
      Notify.warning(`A contact with the name "${subName}" already exists.`);
      return;
    }

    dispatch(updateContact({ id: subId, name: subName, number: subNumber }));
    setIsModalOpen(false);
    Notify.success(`Contact modified`);
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

  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { isLoading } = useSelector(state => state.contacts);
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase();

  const visibleContacts = contacts.filter(subscriber =>
    subscriber.name.toLowerCase().includes(filterData)
  );

  return (
    <section>
      <Container>
        <div>
          {contacts.length < 1 ? (
            <ContTitle>Add your first contact</ContTitle>
          ) : (
            <Filter />
          )}
          <ContactForm />
          {isLoading && <Loader />}
        </div>
        <ContList>
          {visibleContacts.map(({ id, name, number }) => (
            <ContItem key={id}>
              <ContWrap>
                <PortraitIcon color="disabled" fontSize="large" />
                {name}:
              </ContWrap>
              <ContWrap>
                <LocalPhoneIcon color="disabled" fontSize="large" />
                {number}
              </ContWrap>
              <div>
                <Button
                  variant="outlined"
                  onClick={() => showModal(name, number, id)}
                  style={{ marginRight: '8px' }}
                >
                  <DriveFileRenameOutlineIcon />
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure to delete this contact?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                    dispatch(deleteContact(id));
                    Notify.success(`Contact deleted`);
                  }}
                >
                  <Button
                    variant="outlined"
                    title="delete contact"
                    color="error"
                  >
                    <DeleteOutlineIcon /> Delete
                  </Button>
                </Popconfirm>
              </div>
            </ContItem>
          ))}

          <Dialog open={isModalOpen} onClose={handleCancel}>
            <DialogWrap>
              <DialogTitle id="modal-title">Edit a contact</DialogTitle>
              <InputWrap>
                <TextField
                  placeholder="Name"
                  variant="standard"
                  fullWidth
                  color="success"
                  value={subName}
                  onChange={({ target }) => {
                    setSubName(target.value);
                    setIsChangeEnabled(target.value && subNumber);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PortraitIcon color="disabled" fontSize="large" />
                      </InputAdornment>
                    ),
                  }}
                />
              </InputWrap>
              <InputWrap>
                <TextField
                  onKeyDown={handleNumberKeyPress}
                  placeholder="Number"
                  variant="standard"
                  fullWidth
                  color="success"
                  value={subNumber}
                  onChange={({ target }) => {
                    setSubNumber(target.value);
                    setIsChangeEnabled(subName && target.value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon color="disabled" fontSize="large" />
                      </InputAdornment>
                    ),
                  }}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                />
              </InputWrap>
              <BtnWrap>
                <Button
                  variant="outlined"
                  onClick={handleChange}
                  disabled={!isChangeEnabled}
                >
                  Change
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Close
                </Button>
              </BtnWrap>
            </DialogWrap>
          </Dialog>
        </ContList>
      </Container>
    </section>
  );
};

export default Contacts;
