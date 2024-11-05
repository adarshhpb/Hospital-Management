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
                                    <h5 className="card-title">Patient: {appointment.patientName}</h5>
                                    <p className="card-text">Doctor: {appointment.doctorName}</p>
                                    <p className="card-text">Date: {appointment.date}</p>
                                    <p className="card-text">Time: {appointment.time}</p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleFinish(appointment.id)}
                                    >
                                        Mark as Finished
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