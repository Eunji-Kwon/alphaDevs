import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from '../AuthService';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();

        // Call the login function with user credentials
        login(email, password)
            .then(res => {
                // Login successful, update state to reflect logged-in status
                setIsLoggedIn(true);
                // Redirect to home page using history object
                window.location.href = "http://localhost:3000/"; // Replace with the desired URL
            })
            .catch(error => {
                // Login failed, handle error (display error message, etc.)
                console.error('Login Error:', error);
                setError("Login failed. Please check your credentials.");
            });
    };

    if (isLoggedIn) {
        // Return null or another component when logged in
        return null; // 또는 원하는 다른 컴포넌트를 반환할 수 있습니다.
    }

    return (
        <div className="container">
            <div className="col-lg-4">
                <h2>Login</h2>
            </div>
            {error && <p>{error}</p>}
            <div className="col-lg-6">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register" className="btn btn-link">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
