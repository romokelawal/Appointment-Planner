import React from 'react';

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
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} onChange={handleNameChange} placeholder="Name of the contact" />
			<input type="tel" onChange={handlePhoneChange} value={phone} placeholder="111-111-111" />
			<input type="email" onChange={handleEmailChange} value={email} placeholder="Email address" />
			<input type="submit" value="Add Contact" />
		</form>
	);
};
