import React from 'react';
import { Appointment } from '../appointment/Appointment'
import Table from 'react-bootstrap/Table';

export const AppointmentTable = ({ appointmentsArray, pastAppointments, completedAppointments }) => {
	return (
		<div>
			<h3>Appointments</h3>
			{appointmentsArray.length > 0 ? (
				<Table bordered striped responsive="sm">
					<thead>
						<tr>
							<th>Title</th>
							<th>Name</th>
							<th>Date</th>
							<th>Time</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{appointmentsArray.map((appointment, index) => {
							return (
								<Appointment
									key={index}
									appointment={appointment}
									showCheckbox={true}
									pastAppointments={() => pastAppointments(appointment, index)}
									completedAppointments={completedAppointments}
								/>
							);
						})}
					</tbody>
				</Table>
			) : (
				<p>No appointment yet!</p>
			)}
		</div>
	);
};
