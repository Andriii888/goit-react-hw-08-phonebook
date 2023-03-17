import {LogInForm} from '../../components/LogInForm/LogInForm';
import { Heading } from '@chakra-ui/react';

export default function LoginView() {
  
  return (
    <>
      <div>
        <Heading as='h1' size='4xl' noOfLines={1}>LogIn</Heading>
        <LogInForm/>
      </div>
    </>
  );
}
