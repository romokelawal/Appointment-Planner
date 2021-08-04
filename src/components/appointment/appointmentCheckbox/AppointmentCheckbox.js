import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export const AppointmentCheckbox = ({ handleChecked }) => {

	return (
		<React.Fragment>
				<td>
					<Button id="appointmentChecked" onClick={handleChecked}></Button>
				</td>
		</React.Fragment>
	);
};
