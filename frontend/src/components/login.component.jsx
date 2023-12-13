import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useNavigate } from "react-router-dom";
import '../style/commonStyles.css';
import '../style/home.css';
import axios from "axios";
import Footer from '../components/footer.componet';




function Login () {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleFormSubmit = async (event) => {
        console.log('hey')
        event.preventDefault();

        // // Call the login function with user credentials
        // login(email, password)
        //     .then(res => {
        //         // Login successful, update state to reflect logged-in status
        //         setIsLoggedIn(true);
        //         // Redirect to home page using history object
              
        //     })
        //     .catch(error => {
        //         // Login failed, handle error (display error message, etc.)
        //         console.error('Login Error:', error);
        //         setError("Login failed. Please check your credentials.");
        //     });

        try {
            const response = await axios.post('http://localhost:8080/admin/login', { email, password });
            console.log(response.data)
            login({ ...response.data });
            navigate('/menu')
        } catch (error) {
            console.error('Login failed:', error);
            setError("Login failed. Please check your credentials.");
        }
    };

    // if (isLoggedIn) {
    //     // Return null or another component when logged in
    //     return   window.location.href = "http://localhost:3000/"; 
    // }

    return (
        <div>
        <div className="common-style-container">
            <div className="common-input-field">
                <h2>Login</h2>
            </div>
            {error && <p>{error}</p>}
            <div className="col-lg-6">
                <form onSubmit={handleFormSubmit}>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register" className="btn btn-link">Register</Link>
                </p>
            </div>
            </div>
            <Footer />
            </div>
    );
}

export default Login;
