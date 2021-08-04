import React from 'react';
import { ContactItem } from '../contactItem/ContactItem';
import Table from 'react-bootstrap/Table';

export const ContactTable = ({
	contactsArray,
	deleteContact
}) => {
	return (
		<div>
			<div>
				<h3>Contacts</h3>
				{contactsArray.length > 0 ? (
					<Table bordered striped responsive="sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Phone Number</th>
								<th>Email Address</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{contactsArray.map((contact, index) => {
								return (
									<ContactItem key={index} contact={contact} deleteContact={() => deleteContact(index)} />
								);
							})}
						</tbody>
					</Table>
				) : (
					<p>No contacts yet!</p>
				)}
			</div>
		</div>
	);
};
