import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({
	contactsArray,
	deleteContact,
	appointmentsArray,
	pastAppointments,
	completedAppointments
}) => {
	return (
		<div>
			{contactsArray ? (
				<div>
					<h3>Contacts</h3>
					{contactsArray.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Phone Number</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								{contactsArray.map((contact, index) => {
									return (
										<Tile
											key={index}
											contact={contact}
											deleteContact={() => deleteContact(index)}
										/>
									);
								})}
							</tbody>
						</table>
					) : (
						<p>No contacts yet!</p>
					)}
				</div>
			) : (
				<div>
					<h3>Appointments</h3>
					{appointmentsArray.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Title</th>
									<th>Name</th>
									<th>Date</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>
								{appointmentsArray.map((appointment, index) => {
									return (
										<Tile
											key={index}
											appointment={appointment}
											pastAppointments={() => pastAppointments(appointment, index)}
											completedAppointments={completedAppointments}
										/>
									);
								})}
							</tbody>
						</table>
					) : (
						<p>No appointment yet!</p>
					)}
				</div>
			)}
		</div>
	);
};
