import React, { useEffect, useState } from 'react';
import { ContactForm } from '../../components/contact/contactForm/ContactForm';
import { ContactTable } from '../../components/contact/contactTable/ContactTable';

export const ContactsPage = ({ contacts, addContact, deleteContact }) => {
	
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ duplicate, setDuplicate ] = useState(false);

	useEffect(() => {
		if (contacts.includes(name)) {
			setDuplicate(true);
		}
	}, [contacts, name]);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!duplicate) {
			const formData = {
				name: name,
				phone: phone,
				email: email
			};
			addContact(formData);
			setName('');
			setPhone('');
			setEmail('');
		}
	};
	return (
		<div>
			<section>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<ContactTable contactsArray={contacts} deleteContact={deleteContact} /> 
			</section>
		</div>
	);
};
