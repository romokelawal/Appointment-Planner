import React from "react";

export const ContactPicker = ({contacts, handleContactChange}) => {
  return (
    <select onChange={handleContactChange}>
      <option defaultValue="" key="">Select Contact</option>
      {contacts.map(contact => {
        return <option key={contact.name} value={contact.name}>{contact.name}</option>
      })}
      
    </select>
  );
};
