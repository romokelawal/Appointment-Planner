import React from 'react';
import { ContactPicker } from '../../components/contactPicker/ContactPicker';

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
		<form onSubmit={handleSubmit}>
			<input type="text" value={title} onChange={handleTitleChange} placeholder="Title of the appointment" />
			<input type="date" value={date} min={getTodayString()} onChange={handleDateChange} />
			<input type="time" value={time} onChange={handleTimeChange} />
			<ContactPicker contacts={contacts} handleContactChange={handleContactChange} />
			<input type="submit" value="Set Appointment" />
		</form>
	);
};
