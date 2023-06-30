import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContacForm/ContactForm';
import { Filter } from './FilterContacts/FilterContacts';
import { Container, ContainerTitle, ContactsTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchContacts())
  },[dispatch])
  
  return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContactForm/>
        <ContactsTitle>Contacts</ContactsTitle>
        {contacts.length !== 0 && <Filter/>}
        <ContactList/> 
    </Container>
    );
}
