import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';
import Form from 'react-bootstrap/Form'

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit
}) => {
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContactChange = (e) => {
		setContact(e.target.value);
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleTimeChange = (e) => {
		setTime(e.target.value);
	};

	const getTodayString = () => {
		const [ month, day, year ] = new Date().toLocaleDateString('en-US').split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicTitle">
				<Form.Control type="text" value={title} onChange={handleTitleChange} placeholder="Title of the appointment" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicDate">
				<Form.Control type="date" value={date} min={getTodayString()} onChange={handleDateChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicTime">
				<Form.Control type="time" value={time} onChange={handleTimeChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicName">
				<ContactPicker contacts={contacts} handleContactChange={handleContactChange} />
			</Form.Group>
			<input type="submit" value="Set Appointment" />
		</Form>
	);
};
