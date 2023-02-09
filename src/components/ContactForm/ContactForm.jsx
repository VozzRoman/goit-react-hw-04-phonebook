// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, EnterName, FildName, Forms } from './ContactFormStyle';
import shortid from 'shortid';

export const ContactForm = ({ contacts, onSubmit }) => {
  console.log(contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    console.log(name, number);
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
      return;
    }

    onSubmit(name, number, shortid.generate());
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Forms onSubmit={hendleSubmit}>
      <FildName htmlFor="name">
        Name
        <EnterName
          value={name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FildName>
      <FildName htmlFor="number">
        Number
        <EnterName
          value={number}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FildName>
      <Button type="submit">Add contact</Button>
    </Forms>
  );
};
