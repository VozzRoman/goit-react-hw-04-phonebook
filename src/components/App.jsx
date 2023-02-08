import React from 'react';
import { ContactList } from './ContcatList/ContactList';
import { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  console.log(contacts);

  useEffect(() => {});

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

// import { ContactList } from './ContcatList/ContactList';

// import { Filter } from './Filter/Filter';

// export class App extends Component {
//   static LOCAL__KEY = 'contacts';

//     state = {
//       contacts: [],

//       filter: '',
//     };

//   //-----------------------------LocalStorage------------------------------//

//     componentDidMount() {
//       console.log('didAmount');
//       const contact = localStorage.getItem(this.LOCAL__KEY);
//       const parsedContacts = JSON.parse(contact);
//       if (parsedContacts) {
//         this.setState({
//           contacts: parsedContacts,
//         });
//       }
//       console.log(parsedContacts);
//     }

//     componentDidUpdate(prevProps, prevState) {
//       console.log('didUpdate');
//       if (this.state.contacts !== prevState.contacts) {
//         console.log('добавил контакт');
//         localStorage.setItem(
//           this.LOCAL__KEY,
//           JSON.stringify(this.state.contacts)
//         );
//       }
//     }
//   //----------------------------------------------------------------------//
//    hendlerFormData = (name, number, numberId) => {
//     console.log({ name, number }); // data
//     const addContact = {
//       id: numberId,
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [addContact, ...prevState.contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(item => item.id !== contactId),
//     }));
//   };

//   onchangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const normaLized = this.state.filter.toLocaleLowerCase();
//     const sameName = this.state.contacts.filter(item =>
//       item.name.toLocaleLowerCase().includes(normaLized)
//     );
//     return sameName;
//   };

//   render() {
//      const filteredContacts = this.getFilteredContacts();

//     return (
//       <Background>
//         <Box
//           m="0 auto"
//           maxWidth="500px"
//           background="orange"
//           borderRadius="12px"
//           p="20px"
//           boxShadow="3px 4px 6px #888888"
//         >
//           <h1>Phonebook</h1>
//           <ContactForm
//             onSubmit={hendlerFormData}
//             contacts={this.state.contacts}
//           />
//           {this.state.contacts.length === 0 ? (
//             <h2>The phonebook is empty</h2>
//           ) : (
//             <>
//               <h2>Contacts</h2>
//               <Filter
//                 onChange={this.onchangeFilter}
//                 value={this.state.filter}
//               />
//               <ContactList
//                 phoneContact={filteredContacts}
//                 onDeleteContact={this.deleteContact}
//               />
//             </>
//           )}
//         </Box>
//       </Background>
//     );
//   }
// }
