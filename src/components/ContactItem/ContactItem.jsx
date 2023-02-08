import {
  ButtonContact,
  DialeName,
} from 'components/ContcatList/ContactListStyle';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  console.log(id);
  return (
    <>
      <DialeName>
        {name} : <span>{number}</span>
      </DialeName>
      <ButtonContact onClick={() => onDeleteContact(id)}>Delete</ButtonContact>
    </>
  );
};
