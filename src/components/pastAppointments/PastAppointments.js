import React from 'react';
import { PastAppointment } from '../pastAppointment/PastAppointment';

export const PastAppointments = ({ completedAppointments }) => {
	return (
		<div>
			<h3>Past Appointments</h3>
			<table>
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
						return <PastAppointment key={index} completedAppointment={completedAppointment} />;
					})}
				</tbody>
			</table>
		</div>
	);
};
