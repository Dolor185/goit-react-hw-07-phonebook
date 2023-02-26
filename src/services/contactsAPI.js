import axios from 'axios';

axios.defaults.baseURL = 'https://63fbb3aa6ecb7e3702aed2c8.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContact(contacId) {
  const response = await axios.delete(`/contacts/${contacId}`);
  return response.data;
}
