import React, { useState, useEffect } from "react";
import ContactService from "../../services/contact/contact-service";
import ContactsListItem from "../contacts-list-item/contacts-list-item";
import "./contacts-list.css";

const ContactsList = () => {
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    const response = ContactService.getList();
    response.then((data) => {
      setContactsList(data);
    });
  }, []);

  return (
    <>
      <ul className="no-bullets-list">
        {contactsList.length === 0 ? (
          <span>There is no contacts yet.</span>
        ) : (
          contactsList.map((contact, idx) => (
            <ContactsListItem
              key={idx}
              contact={contact}
              //? We pass this paramater to reload contacts list for now.
              setContactsList={setContactsList}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default ContactsList;
