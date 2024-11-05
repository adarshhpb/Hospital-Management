import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Mainlog = () => {
    const navigate = useNavigate();

    const handleLoginClick = async (selectedRole) => {
        if (selectedRole === 'patient') {
            // Navigate to the Login page if the user selects 'patient'
            navigate('/login');
            return;
        }

        if (selectedRole === 'doctor') {
            // Navigate to the Doctor Login page if the user selects 'doctor'
            navigate('/doctorLogin');
            return;
        }

        try {
            // For other roles, attempt login and navigate to /view if successful
            const response = await axios.post('http://localhost:5000/loginUser', {
                role: selectedRole,
            });

            if (response.status === 200) {
                navigate('/view');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {/* Left side with the login form */}
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="w-75">
                            <h1 className="login-heading text-center">LOGIN</h1>
                            <p className="caption-text text-center">
                                Select your role to continue
                            </p>

                            {/* Two login buttons for Doctor and Patient */}
                            <div className="col-12 d-flex justify-content-between mt-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleLoginClick('patient')}
                                >
                                    Login as Patient
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => handleLoginClick('doctor')}
                                >
                                    Login as Doctor
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right side with the background image */}
                    <div className="col-12 col-md-6 background-image">
                        {/* Empty column for background image */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainlog;
