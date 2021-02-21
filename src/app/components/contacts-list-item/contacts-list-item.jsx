import React from "react";
import { Button, Row, Col } from "reactstrap";
import ContactService from "../../services/contact/contact-service";

const ContactsListItem = ({ contact, setContactsList, setVisibleSpinner }) => {
  const onClickedDelete = (e) => {
    e.preventDefault();

    const response = ContactService.delete(contact.id);
    response.then(() => {
      setVisibleSpinner(true);

      const response = ContactService.getList();
      response
        .then((data) => {
          setContactsList(data);
        })
        .finally(() => setVisibleSpinner(false));
    });
  };

  return (
    <>
      <Row>
        <Col className="col-md-6">
          <li>{contact.firstName}</li>
        </Col>
        <Col className="col-md-6">
          <Button color="danger" onClick={(e) => onClickedDelete(e)}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ContactsListItem;
