import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { PastAppointments } from '../../components/pastAppointments/PastAppointments';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
	contacts,
	appointments,
	addAppointment,
	pastAppointments,
	completedAppointments
}) => {
	const [ title, setTitle ] = useState('');
	const [ contact, setContact ] = useState({});
	const [ date, setDate ] = useState('');
	const [ time, setTime ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const appointmentData = {
			title: title,
			contact: contact,
			date: date,
			time: time
		};
		addAppointment(appointmentData);
		setTitle('');
		setContact('');
		setDate('');
		setTime('');
	};

	return (
		<div>
			<section>
				<AppointmentForm
					title={title}
					contact={contact}
					date={date}
					time={time}
					setTitle={setTitle}
					setContact={setContact}
					setDate={setDate}
					setTime={setTime}
					handleSubmit={handleSubmit}
					contacts={contacts}
				/>
			</section>
			<hr />
			<section>
				<TileList
					appointmentsArray={appointments}
					pastAppointments={pastAppointments}
					completedAppointments={completedAppointments}
				/>
			</section>
			<section>
				{completedAppointments.length > 0 && <PastAppointments completedAppointments={completedAppointments} />}
			</section>
		</div>
	);
};
