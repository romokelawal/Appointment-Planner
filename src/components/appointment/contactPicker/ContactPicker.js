import React from "react";
import Form from 'react-bootstrap/Form'

export const ContactPicker = ({contacts, handleContactChange}) => {
  return (
    <Form.Select onChange={handleContactChange}>
      <option defaultValue={null} key="">Select Contact</option>
      {contacts.map(contact => {
        return <option key={contact.name} value={contact.name}>{contact.name}</option>
      })}
      
    </Form.Select>
  );
};
