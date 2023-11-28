import React,{Component} from "react";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(
            "Form submitted with name:",
            this.state.name,
            ", email:",
            this.state.email,
            "and password:",
            this.state.password
        );
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value });
    };

    render() {
        return (
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Enter your name"
                        required
                    />

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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleConfirmPasswordChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    
                </form>
            </div>
        );
    }
}

