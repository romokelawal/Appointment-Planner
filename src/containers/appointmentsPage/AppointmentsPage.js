import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointment/appointmentForm/AppointmentForm';
import { PastAppointmentsTable } from '../../components/pastAppointments/pastAppointmentsTable/PastAppointmentsTable';
import { AppointmentTable } from '../../components/appointment/appointmentTable/AppointmentTable';

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
				<AppointmentTable
					appointmentsArray={appointments}
					pastAppointments={pastAppointments}
					completedAppointments={completedAppointments}
				/>
			</section>
			<section>
				{completedAppointments.length > 0 && <PastAppointmentsTable completedAppointments={completedAppointments} />}
			</section>
		</div>
	);
};
