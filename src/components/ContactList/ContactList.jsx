import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListContainer } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from 'redux/selector';
import { getItems, getFilter } from "redux/selector";


export const ContactList = () => {
    const contacts = useSelector(getItems);
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
    <div>
        <ContactListContainer>
           {filteredContacts && filteredContacts.map(({ name, number, id })=>{
               return (
                   <ContactItem key={id}
                        id={id}
                        name={name}
                        tel={number} />
                )
             })
           }     
       </ContactListContainer>
    </div>
    )
}
