import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://649ecf95245f077f3e9cee3b.mockapi.io/contacts"

export const fetchContact = () => {
    // contacts/fetchAll
}

export const addContact = () => {
    // contacts/addContact
}

export const deleteContact = () => {
    // contacts/deleteContact
}