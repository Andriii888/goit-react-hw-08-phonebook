import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const style={width:'250px'}

  return (
    <>
      <Heading as='h1' size='4xl' noOfLines={1}>Register</Heading>
      <form onSubmit={handleSubmit} autoComplete="off" style={style}>
        <label>
          Username
          <Input variant='filled' placeholder='Filled' type="text" name="name" />
        </label>
        <label>
          Email
          <Input variant='filled' placeholder='Filled' type="email" name="email" />
        </label>
        <label>
          Password
          <Input variant='filled' placeholder='Filled' type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
}
