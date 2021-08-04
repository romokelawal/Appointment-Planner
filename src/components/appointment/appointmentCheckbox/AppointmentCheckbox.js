import React from 'react';
import Button from 'react-bootstrap/Button';

export const AppointmentCheckbox = ({ handleChecked }) => {
	return (
		<React.Fragment>
			<td>
				<Button id="appointmentChecked" onClick={handleChecked}>
					Done
				</Button>
			</td>
		</React.Fragment>
	);
};
