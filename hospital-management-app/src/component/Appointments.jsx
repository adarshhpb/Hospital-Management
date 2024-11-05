import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeader from './SubHeader';
import './Appointment.css';
import axios from 'axios';

const Appointments = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [formData, setFormData] = useState({
        patientName: '',
        doctorName: '',
        date: '',
        time: ''
    });

    const handleBack = () => {
        navigate('/view'); // Navigate to the previous page or another route if needed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAppointments([...appointments, formData]);
        setFormData({
            patientName: '',
            doctorName: '',
            date: '',
            time: ''
        });
    };

    const handleSubmitClick = async () => {
        try {
            // Send the form data to the backend
            console.log(formData);
            const response = await axios.post('http://localhost:5000/scheduleAppointment', formData);

            if (response.status === 200) {
                // If scheduling is successful, navigate to the appointments list page
                alert('Appointment scheduled successfully');
                navigate('/ap');
            } else {
                // Handle scheduling failure (e.g., show an error message)
                console.error('Scheduling failed');
            }
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('An error occurred during scheduling:', error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <SubHeader />
            <div className="container">
                <button
                    onClick={handleBack}
                    className="btn btn-light mb-4"
                >
                    &larr; Back
                </button>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h2>Schedule an Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="patientName" className="form-label">Patient Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="patientName"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="doctorName"
                                    name="doctorName"
                                    value={formData.doctorName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Schedule Appointment</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;