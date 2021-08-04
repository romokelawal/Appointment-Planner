import React from 'react';
import Form from 'react-bootstrap/Form';

export const AppointmentCheckbox = ({ handleChecked }) => {

	return (
		<React.Fragment>
				<td>
					<Form.Check id="appointmentChecked" onChange={handleChecked} />
				</td>
		</React.Fragment>
	);
};
