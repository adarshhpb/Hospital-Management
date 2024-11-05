import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSubscribersPage.css'; // Optional: Import custom CSS for styling
import axios from 'axios';

const AddDoctorPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        username: '',
        date: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: ''
    });

    const handleBack = () => {
        navigate('/doctorlogin'); // Navigate to the login page (or another route if needed)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the API or update state
        console.log('Form Data:', formData);
    };

    const handleSubmitClick = async () => {
        try {
            // Send the form data to the backend
            console.log(formData);
            const response = await axios.post('http://localhost:5000/registerDoctor', {
                username: formData.username,
                date: formData.date,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
            });

            if (response.status === 200) {
                // If registration is successful, navigate to the login page
                alert('Registration successful');
                navigate('/login');
            } else {
                // Handle registration failure (e.g., show an error message)
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('An error occurred during registration:', error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred during registration.');
            }
        }
    };

    return (
        <div className="row m-0"> {/* Remove margin from the row */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-5" style={{ backgroundColor: 'white' }}>
                <button
                    onClick={handleBack}
                    className="btn btn-light mb-4"
                >
                    &larr; Back
                </button>
                <h1 className="text-center">Create Doctor Account</h1> {/* Title for the page */}
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label htmlFor="username" className="form-label">Enter Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="date" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Enter Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="email" className="form-label">Email ID</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success" onClick={handleSubmitClick}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Right side with the background image */}
            <div className="col-12 col-md-6 background-image"></div>
        </div>
    );
}

export default AddDoctorPage;