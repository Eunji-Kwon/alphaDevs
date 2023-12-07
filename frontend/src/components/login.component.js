import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(
            "Email:",
            this.state.email,
            "and password:",
            this.state.password
        );
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

   
     render() {
        return (
            <div class="container">
                <div class="col-lg-4">
                    <p>LogIn Page</p>
                </div>
                <div class="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                    <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder="Enter your email"
                            required
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                   
                        {/* <div class="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="text" class="form-control" value="Email"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Password</label>
                            <input type="text" class="form-control" value="password" />
                        </div> */}

                        
                        <button type="submit" class="btn btn-primary">Login</button>
                      
                    </form>
                </div>
                <Link to="/register" className="btn btn-link">Sign In</Link>

            </div>
        )
    }
}