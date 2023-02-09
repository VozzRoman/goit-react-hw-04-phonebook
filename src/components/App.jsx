import { ContactList } from './ContcatList/ContactList';
import { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const hendlerFormData = (name, number, numberId) => {
    console.log(name, number, numberId); // data
    const addContact = {
      id: numberId,
      name,
      number,
    };
    setContacts(prevContacts => {
      return [...prevContacts, addContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(item => item.id !== contactId);
    });
  };

  const onchangeFilter = e => {
    setFilter(e.currentTarget.value);
    // this.setState({ filter: e.currentTarget.value });
  };

  const getFilteredContacts = () => {
    const normaLized = filter.toLocaleLowerCase();
    const sameName = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(normaLized)
    );
    return sameName;
  };

  return (
    <Background>
      <Box
        m="0 auto"
        maxWidth="500px"
        background="orange"
        borderRadius="12px"
        p="20px"
        boxShadow="3px 4px 6px #888888"
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={hendlerFormData} contacts={contacts} />
        {contacts.length === 0 ? (
          <h2>The phonebook is empty</h2>
        ) : (
          <>
            <h2>Contacts</h2>
            <Filter onChange={onchangeFilter} value={filter} />
            <ContactList
              phoneContact={getFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </Box>
    </Background>
  );
};
