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


// export default class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: ""
//         };
//     }

//     onSubmit = async(e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/admin/login', { email, password });
//             console.log(response.data)
//             login({ ...response.data });
//             navigate('/menu')
//         } catch {
//             console.log('Error')
//         }
//     };

//     handleNameChange = (e) => {
//         this.setState({ name: e.target.value });
//     };

//     handleEmailChange = (e) => {
//         this.setState({ email: e.target.value });
//     };

//     handlePasswordChange = (e) => {
//         this.setState({ password: e.target.value });
//     };

//     handleConfirmPasswordChange = (e) => {
//         this.setState({ confirmPassword: e.target.value });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <h2>Register</h2>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                     <label htmlFor="name">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         value={this.state.name}
//                         onChange={this.handleNameChange}
//                         placeholder="Enter your name"
//                         required
//                     />

//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             value={this.state.email}
//                             onChange={this.handleEmailChange}
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             value={this.state.password}
//                             onChange={this.handlePasswordChange}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="confirmPassword">Confirm Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="confirmPassword"
//                             value={this.state.confirmPassword}
//                             onChange={this.handleConfirmPasswordChange}
//                             placeholder="Confirm your password"
//                             required
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-primary">Sign In</button>
                    
//                 </form>
//             </div>
//         );
//     }
// }

