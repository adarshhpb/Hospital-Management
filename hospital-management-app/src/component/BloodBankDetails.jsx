import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BloodBankDetails.css';
import DocHeader from './DocHeader';

const BloodBankDetails = () => {
    const [bloodBankDetails, setBloodBankDetails] = useState([]);

    useEffect(() => {
        // Fetch blood bank details from the backend
        const fetchBloodBankDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getBloodBankDetails');
                setBloodBankDetails(response.data);
            } catch (error) {
                console.error('Error fetching blood bank details:', error);
            }
        };

        fetchBloodBankDetails();
    }, []);

    return (
        <div>
            <DocHeader isDoctor={true} />
            <div className="container">
                <h2>Blood Bank Details</h2>
                <div className="row">
                    {bloodBankDetails.map(detail => (
                        <div key={detail.id} className="col-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Patient: {detail.name}</h5>
                                    <p className="card-text">Blood Type: {detail.blood_type}</p>
                                    <p className="card-text">Age: {detail.age}</p>
                                    <p className="card-text">Donation Date: {detail.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BloodBankDetails;