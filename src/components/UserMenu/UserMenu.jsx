import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuStyle } from '../UserMenu/UserMenuStyle.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyle>
      <p>
        Welcome,
        {user.name}
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyle>
  );
};
