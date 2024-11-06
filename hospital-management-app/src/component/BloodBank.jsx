import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeader from './SubHeader';
import './BloodBank.css';
import axios from 'axios';

const BloodBank = () => {
    const navigate = useNavigate();
    const [donors, setDonors] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        blood_type: '',
        age: '',
        date: ''
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
        setDonors([...donors, formData]);
        setFormData({
            name: '',
            blood_type: '',
            age: '',
            date: ''
        });
    };

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            const formDataWithUserId = {
                ...formData,
                user_id: 12  // Replace with the actual user_id
            };
            console.log(formDataWithUserId);
            const response = await axios.post('http://localhost:5000/addDonor', formDataWithUserId);

            if (response && response.data) {
                console.log(response.data);
                alert('Donor added successfully');
            } else {
                console.error('Unexpected response format:', response);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
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
                        <h2>Add a Donor</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Donor Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="blood_type" className="form-label">Blood Group</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blood_type"
                                    name="blood_type"
                                    value={formData.blood_type}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    value={formData.age}
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
                            <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Add Donor</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodBank;