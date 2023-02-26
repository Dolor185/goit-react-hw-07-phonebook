import { List } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const foundContacts = filterContacts();

  return (
    <List>
      {foundContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};
