import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const style={width:'250px'}
  return (
    <form onSubmit={handleSubmit} autoComplete="off" style={style}>
      <label>
        Email
        <Input variant='filled' placeholder='Filled' type="email" name="email" />
      </label>
      <label>
        Password
        <Input variant='filled' placeholder='Filled' type="password" name="password" />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
};
