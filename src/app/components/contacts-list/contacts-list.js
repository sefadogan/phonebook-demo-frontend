import React from "react";
import ContactsListItem from "../contacts-list-item/contacts-list-item";

export default function ContactsList() {
  return (
    <>
      <ul>
        <ContactsListItem />
        <ContactsListItem />
        <ContactsListItem />
        <ContactsListItem />
      </ul>
    </>
  );
}
