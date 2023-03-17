import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuStyle } from '../UserMenu/UserMenuStyle.styled';
import { Button } from "@chakra-ui/react";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyle>
      <p>
        Welcome,
        {user.name}
      </p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuStyle>
  );
};
