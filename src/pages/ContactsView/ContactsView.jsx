import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { FilterByName } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Heading } from '@chakra-ui/react';


export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Heading as='h1' size='4xl' noOfLines={1}>PhoneBook</Heading>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactList />
    </>
  );
}
