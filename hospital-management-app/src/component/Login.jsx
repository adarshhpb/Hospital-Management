import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios'; // Import axios
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role is patient

  const handleLoginClick = async () => {
    try {
      // Send the username, password, and role to the backend
      const response = await axios.post('http://localhost:5000/loginUser', {
        username,
        password,
        role,
      });

      if (response.status === 200) {
        // If login is successful, navigate to the view page
        navigate('/view');
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('An error occurred during login:', error);
      alert(error.response.data.message);
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
              <p className="caption-text text-center">Stay connected and improve your treatment's efficiency together</p>

              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>



                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary" onClick={handleLoginClick}>
                    Login <span>&#8594;</span> {/* Arrow symbol added */}
                  </button>
                </div>

                <div className="col-12 text-center mt-3">
                  <p>
                    Don't have an account?
                    <Link to="/sub" className=""> Create an account</Link>
                  </p>
                </div>
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
}

export default Login;