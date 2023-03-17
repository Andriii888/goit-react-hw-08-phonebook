import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { FilterByName } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactList />
    </>
  );
}
