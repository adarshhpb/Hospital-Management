import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import SubHeader from './SubHeader';
import './AddSubscribersPage.css'; // Assuming you want a separate CSS for styles

const AddSubscribersPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        username: '',
        date: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

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

    return (
        <div>
            <SubHeader />
            <div className="container mt-5">
                <div className="row">
                    {/* Left side with the patient details form */}
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="form-container">
                            <div className="row g-3">
                                <div className="col-12 text-center">
                                    <h1 className="form-heading">Create Patient Account</h1> {/* Form heading */}
                                    <p className="caption-text">Please fill in the necessary details</p> {/* Caption text */}
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        className="form-control" 
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username" 
                                        required 
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="date" className="form-label">Date of Birth</label>
                                    <input 
                                        type="date" 
                                        id="date" 
                                        className="form-control" 
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="form-control" 
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password" 
                                        required 
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        className="form-control" 
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password" 
                                        required 
                                    />
                                </div>

                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        Create Account <span>&#8594;</span> {/* Arrow symbol added */}
                                    </button>
                                </div>

                                {/* Link to create a new account */}
                                <div className="col-12 text-center mt-3">
                                    <p>
                                        Already have an account? 
                                        <Link to="/login" className="/"> Log in</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side with the background image */}
                    <div className="col-12 col-md-6 background-image">
                        {/* Background image can be applied through CSS */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSubscribersPage;
