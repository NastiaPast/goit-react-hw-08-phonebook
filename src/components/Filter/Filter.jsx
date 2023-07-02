import { WrapperFiler, FilterText, FilterTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'Redux/Filter/filterSlice';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const noContactsFound = filter !== '' && filteredContacts.length === 0;

  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <WrapperFiler>
        <TextField
          variant="standard"
          color="secondary"
          type="text"
          value={filter}
          onChange={e => dispatch(filtration(e.target.value))}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
        {noContactsFound && <FilterText>No contacts found</FilterText>}
      </WrapperFiler>
    </>
  );
};
