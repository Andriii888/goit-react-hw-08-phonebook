import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@chakra-ui/react'
import { addContact } from '../../redux/operations';
import { Button } from "@chakra-ui/react";


export function ContactForm() {
  const dispatch = useDispatch();
  const contactCurrent = useSelector(state => state.numbers.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [done, setDone] = useState(false);

  const handleInputChange = e => {
    setDone(false);
    if (e.currentTarget.name === 'name') {
      return setName(e.currentTarget.value);
    }
    return setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setDone(false);
    const repietedContact = contactCurrent.filter(contact => {
      const saved = contact.name.toLowerCase() === name.toLowerCase();

      return saved && name;
    });
    if (repietedContact.length > 0) {
      return setDone(true);
    }
    const info = { name, phone: number };
    dispatch(addContact(info));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
const style={width:'250px'}
  return (
    <>
      <form onSubmit={handleSubmit} style={style}>
        <h2>Name</h2>
        <label htmlFor="name">
          <Input
          variant='filled' placeholder='Filled'
            onChange={handleInputChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <h2>Number</h2>
        <label htmlFor="number">
          <Input
          variant='filled' placeholder='Filled'
            onChange={handleInputChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit" onSubmit={handleSubmit}>
          Add contact
        </Button>
      </form>
      {done && <h1>This contact {name} already done</h1>}
    </>
  );
}
