import React, { useState, useEffect } from "react";
import ContactService from "../../services/contact/contact-service";
import ContactsListItem from "../contacts-list-item/contacts-list-item";

export default function ContactsList() {
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    const response = ContactService.getList();
    response.then((data) => {
      setContactsList(data);
    });
  }, []);

  return (
    <>
      <ul>
        {contactsList.map((contact, idx) => {
          return <ContactsListItem key={idx} contact={contact} />;
        })}
      </ul>
    </>
  );
}
