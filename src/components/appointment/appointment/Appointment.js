import React, { useCallback } from 'react';
import { AppointmentCheckbox } from '../appointmentCheckbox/AppointmentCheckbox'

export const Appointment = ({appointment, pastAppointments, showCheckbox}) => {
    	const handleChecked = useCallback(
		() => {
			pastAppointments();
		},
		[ pastAppointments ]
	);
    return (
        <React.Fragment>
            <tr>
                <td>{appointment.title}</td>
                <td>{appointment.contact}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                {showCheckbox && <AppointmentCheckbox handleChecked={handleChecked} />}
            </tr>
        </React.Fragment>
    );
}