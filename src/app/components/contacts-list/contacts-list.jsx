import React, { useState, useEffect } from "react";
import ContactService from "../../services/contact/contact-service";
import ContactsListItem from "../contacts-list-item/contacts-list-item";
import NoResult from "../shared/no-result/no-result";
import "./contacts-list.css";
import { Spinner } from "reactstrap";

const ContactsList = () => {
  const [contactsList, setContactsList] = useState([]);
  const [visibleSpinner, setVisibleSpinner] = useState(true);

  useEffect(() => {
    const response = ContactService.getList();
    response
      .then((data) => {
        setContactsList(data);
      })
      .finally(() => setVisibleSpinner(false));
  }, []);

  return (
    <>
      {visibleSpinner && <Spinner color="primary" />}
      <ul className="no-bullets-list">
        {contactsList.length > 0
          ? contactsList.map((contact, idx) => (
              <ContactsListItem
                key={idx}
                contact={contact}
                setContactsList={setContactsList}
                setVisibleSpinner={setVisibleSpinner}
              />
            ))
          : !visibleSpinner && <NoResult text="There is no contacts." />}
      </ul>
    </>
  );
};

export default ContactsList;
