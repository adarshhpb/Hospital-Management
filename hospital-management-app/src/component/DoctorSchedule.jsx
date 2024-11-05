import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './DoctorSchedule.css';
import DocHeader from './DocHeader';

const DoctorSchedule = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch scheduled appointments from the backend
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getScheduledAppointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);



    const handleFinish = async (appointmentId) => {
        try {
            // Send request to handle the appointment
            const response = await axios.post('http://localhost:5000/handleAppointment', { appointmentId });

            if (response.status === 200) {
                // Remove the handled appointment from the list
                setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
                alert('Appointment handled successfully');
            } else {
                console.error('Handling appointment failed');
            }
        } catch (error) {
            console.error('An error occurred while handling the appointment:', error);
        }
    };

    const finishAppointment = (appointmentId) => {
        axios.post('http://localhost:5000/finishAppointment', { appointmentId })
            .then(response => {
                alert(response.data.message);
                // Optionally, refresh the appointments list
                setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
            })
            .catch(error => console.error('Error finishing appointment:', error));
    };

    return (
        <div>
            <DocHeader isDoctor={true} />
            <div className="container">
                <h2>Scheduled Appointments</h2>
                <div className="row">
                    {appointments.map(appointment => (
                        <div key={appointment.id} className="col-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Patient: {appointment.patient_name}</h5>
                                    <p className="card-text">Doctor: {appointment.doctor_name}</p>
                                    <p className="card-text">Date: {appointment.date}</p>
                                    <p className="card-text">Time: {appointment.time}</p>
                                    <button onClick={() => finishAppointment(appointment.id)} className="btn btn-primary">
                                        Finish Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorSchedule;


