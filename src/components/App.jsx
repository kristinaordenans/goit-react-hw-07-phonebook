import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContacForm/ContactForm';
import { Filter } from './FilterContacts/FilterContacts';
import { Container, ContainerTitle, ContactsTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from '../redux/operations';
import { getError, getItems } from "../redux/selector";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchContact())
  }, [dispatch])
  
    const items = useSelector(getItems);
    const isError = useSelector(getError);
  
  return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContactForm/>
        <ContactsTitle>Contacts</ContactsTitle>
        {items?.length !== 0 && !isError && <Filter/>}
        <ContactList contacts={items}/> 
    </Container>
    );
}
