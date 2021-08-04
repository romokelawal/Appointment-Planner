import React from 'react';
import Form from 'react-bootstrap/Form'

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
	const handleNameChange = (e) => {
		setName(e.target.value);
	};

  const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
  const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicText">
				<Form.Control type="text" value={name} onChange={handleNameChange} placeholder="Name of the contact" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPhone">
				<Form.Control type="tel" onChange={handlePhoneChange} value={phone} placeholder="111111111" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control type="email" onChange={handleEmailChange} value={email} placeholder="Email address" />
			</Form.Group>
			<input type="submit" value="Add Contact" />
		</Form>
	);
};
