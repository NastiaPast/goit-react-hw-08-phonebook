import { Title, HomeText, HomeLink, Section } from './Home.styled';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>Wellcome to your PhoneBook</Title>
      {!isLoaggedIn ? (
        <HomeText>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </HomeText>
      ) : (
        <HomeText>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </HomeText>
      )}
    </Section>
  );
};

export default Home;
