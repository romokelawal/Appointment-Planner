import React from 'react';
import Button from 'react-bootstrap/Button';

export const ContactItem = ({ contact, deleteContact }) => {

	return (
		<React.Fragment>
			<tr>
				<td className="justify-items-center">{contact.name}</td>
				<td><a href={`tel:${contact.phone}`}>{contact.phone}</a></td>
				<td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
        		<td onClick={deleteContact}><Button>Delete</Button></td>
			</tr>
		</React.Fragment>
	);
  }
