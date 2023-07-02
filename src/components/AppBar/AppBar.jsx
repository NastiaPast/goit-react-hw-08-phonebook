import { Nav, Link, Container, Wrap } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import CottageIcon from '@mui/icons-material/Cottage';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);
  return (
    <header>
      {isLoading && <Loader />}
      <Container>
        <Nav>
          <Wrap>
            <Link to="/">
              <CottageIcon />
              Home
            </Link>
          </Wrap>
          <Wrap>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactsIcon />
                Contacts
              </Link>
            )}
          </Wrap>
          <Wrap>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <AppRegistrationIcon />
                  Register
                </Link>
                <Link to="/login">
                  <LoginIcon />
                  Log in
                </Link>
              </>
            )}
          </Wrap>
        </Nav>
      </Container>
    </header>
  );
};

export default AppBar;
