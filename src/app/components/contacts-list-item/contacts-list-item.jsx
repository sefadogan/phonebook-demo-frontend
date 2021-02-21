import React from "react";
import { Button, Row, Col } from "reactstrap";
import ContactService from "../../services/contact/contact-service";

const ContactsListItem = ({ contact, setContactsList }) => {
  const onClickedDelete = () => {
    const response = ContactService.delete(contact.id);
    response.then(() => {
      const response = ContactService.getList();
      response.then((data) => {
        setContactsList(data);
      });
    });
  };

  return (
    <>
      <Row>
        <Col className="col-md-6">
          <li>{contact.firstName}</li>
        </Col>
        <Col className="col-md-6">
          <Button color="danger" onClick={onClickedDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ContactsListItem;
