import axios from 'axios'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'username') setUsername(value);
    };

    const handleFormSubmit = async (event) => {
        console.log('hey')
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/admin/signup', {username, email, password });
            console.log(response.data)
            navigate('/login')
        } catch (error) {
            console.error('Login failed:', error);
            setError("Login failed. Please check your credentials.");
        }
    };


return (
        <div className="common-style-container">
            <div className="common-input-field">
                <h2>Register</h2>
            </div>
            {error && <p>{error}</p>}
            <div className="col-lg-6">
            <form onSubmit={handleFormSubmit}>
                        <div className="common-input-field">
                        <label>Username:</label><br></br>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="common-input-field">
                        <label>Email:</label><br></br>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="common-input-field">
                        <label>Password:</label><br></br>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
}

export default signup;


