import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.jstyled';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
