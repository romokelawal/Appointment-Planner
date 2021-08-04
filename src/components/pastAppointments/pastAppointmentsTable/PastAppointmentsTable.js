import React from 'react';
import { Appointment } from '../../appointment/appointment/Appointment';
import Table from 'react-bootstrap/Table';

export const PastAppointmentsTable = ({ completedAppointments }) => {
	return (
		<div>
			<h3>Past Appointments</h3>
			<Table striped bordered>
				<thead>
					<tr>
						<td>Title</td>
						<td>Name</td>
						<td>Date</td>
						<td>Time</td>
					</tr>
				</thead>
				<tbody>
					{completedAppointments.map((completedAppointment, index) => {
						return <Appointment key={index} appointment={completedAppointment} />;
					})}
				</tbody>
			</Table>
		</div>
	);
};
