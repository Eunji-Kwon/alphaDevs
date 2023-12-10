import React,{Component} from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from '../AuthService';

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            error: ""
            
        };
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(
    //         "Email:",
    //         this.state.email,
    //         "and password:",
    //         this.state.password
    //     );
    // };

    // handleEmailChange = (e) => {
    //     this.setState({ email: e.target.value });
    // };

    // handlePasswordChange = (e) => {
    //     this.setState({ password: e.target.value });
    // };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        // Call the login function with user credentials
        login(email, password)
            .then(res => {
                // Login successful, update state to reflect logged-in status
                this.setState({ isLoggedIn: true });
                this.props.history.push("/");
            })
            .catch(error => {
                // Login failed, handle error (display error message, etc.)
                console.error('Login Error:', error);
                this.setState({ error: "Login failed. Please check your credentials." });
            });
    };
   
     render() {
        const { email, password, isLoggedIn, error } = this.state;

   // Redirect to '/' if the user is logged in
   if (isLoggedIn) {
    return <Link to="/" />;
}

      return (
        <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
    </div>
      );
    }
  }

    //     return (
    //         <div class="container">
    //             <div class="col-lg-4">
    //                 <p>LogIn Page</p>
    //             </div>
    //             <div class="col-lg-6">
    //                 <form onSubmit={this.onSubmit}>
    //                 <div className="form-group">

    //                 <label htmlFor="email">Email</label>
    //                     <input
    //                         type="email"
    //                         className="form-control"
    //                         id="email"
    //                         value={this.state.email}
    //                         onChange={this.handleEmailChange}
    //                         placeholder="Enter your email"
    //                         required
    //                     />
    //                     </div>

    //                     <div className="form-group">
    //                     <label htmlFor="password">Password</label>
    //                     <input
    //                         type="password"
    //                         className="form-control"
    //                         id="password"
    //                         value={this.state.password}
    //                         onChange={this.handlePasswordChange}
    //                         placeholder="Enter your password"
    //                         required
    //                     />
    //                 </div>
                   
    //                     {/* <div class="form-group">
    //                         <label for="exampleFormControlInput1">Email</label>
    //                         <input type="text" class="form-control" value="Email"/>
    //                     </div>

    //                     <div class="form-group">
    //                         <label for="exampleFormControlInput1">Password</label>
    //                         <input type="text" class="form-control" value="password" />
    //                     </div> */}

                        
    //                     <button type="submit" class="btn btn-primary">Login</button>
                      
    //                 </form>
    //             </div>
    //             <Link to="/register" className="btn btn-link">Sign In</Link>

    //         </div>
    //     )
    // }
//}