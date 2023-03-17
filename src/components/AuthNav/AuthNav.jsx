import { NavLink } from 'react-router-dom';
import { AuthNavStyle } from '../AuthNav/AuthNavStyle.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavStyle>
  );
};
