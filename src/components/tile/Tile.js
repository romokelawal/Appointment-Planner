import React, { useCallback } from 'react';

export const Tile = ({ contact, deleteContact, appointment, pastAppointments, completedAppointments }) => {

  const handleChecked = useCallback ( () => {
    pastAppointments();
  }, [pastAppointments, completedAppointments])

	return (
		<React.Fragment>
      {contact ?
			<tr>
				<td>{contact.name}</td>
				<td>{contact.phone}</td>
				<td>{contact.email}</td>
        <td onClick={deleteContact}><button>Delete</button></td>
			</tr>
      : 
      <tr>
        <td>{appointment.title}</td>
        <td>{appointment.contact}</td>
        <td>{appointment.date}</td>
        <td>{appointment.time}</td>
        <td><input type="checkbox" id="appointmentChecked" onChange={handleChecked} /></td>
      </tr>
      }
		</React.Fragment>
	);
};
