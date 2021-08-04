import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointements] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


    const addContact = (newContactObject) => {
      setContacts(prev => {
        return [...prev, newContactObject];
      })
    }

    const deleteContact = (contactIndex) => {
      setContacts(prev => {
        return contacts.filter((_, index) => index !== contactIndex);
      })
    }

    const addAppointment = (newAppointmentObject) => {
      setAppointements(prev => {
        return [ ...prev, newAppointmentObject];
      })
    }

    const pastAppointments = (appointment, appointmentIndex) => {
      if (completedAppointments.find((index) => index === appointmentIndex)) 
      return;
      setAppointements(prev => {
        return appointments.filter((appointment, index) => index !== appointmentIndex);
      });
      setCompletedAppointments(prev => {
        return [...prev, appointment]
      });
    }

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} sm={12}>
            <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
          <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} deleteContact={deleteContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} pastAppointments={pastAppointments} completedAppointments={completedAppointments} />
          </Route>
        </Switch>        
      </main>
          </Col>
        </Row>
        
      </Container>
      
    </>
  );
}

export default App;
