import { List } from './ContactList.styled';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const foundContacts = filterContacts();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {foundContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        );
      })}
    </List>
  );
};
