import { useSelector } from 'react-redux';
import { Wrap } from './UserMenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { Button, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { deepPurple } from '@mui/material/colors';
export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar sx={{ bgcolor: deepPurple[500], width: 35, height: 35 }}>
        {email.slice(0, 1).toUpperCase()}
      </Avatar>
      <p>{email}</p>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon /> Log out
      </Button>
    </Wrap>
  );
};
