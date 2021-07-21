import React from 'react';

export const PastAppointment = ({completedAppointment}) => {
    return (
        <React.Fragment>
            <tr>
                <td>{completedAppointment.title}</td>
                <td>{completedAppointment.contact}</td>
                <td>{completedAppointment.date}</td>
                <td>{completedAppointment.time}</td>
            </tr>
        </React.Fragment>
    );
}