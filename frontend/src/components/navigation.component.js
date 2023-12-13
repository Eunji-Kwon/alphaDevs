import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../style/home.css';
import { useAuth } from "../Contexts/authContext";
import { useNavigate } from "react-router-dom";

export default class Navigation extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false // Login status
        };

    }
    
  
    // LogOut function
    handleLogout = () => {
        const { logout } = useAuth();
        const navigate = useNavigate();

        logout()
        .then(res => {
            navigate('/login')
        })
        .catch(error => {
            console.error('LogOut Error:', error);
        });
    };

    
   

    render() {
     

        const { isLoggedIn } = this.state;
        
        return (
       
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >

                    <Link class="navbar-brand" to="/"> <img src="logo/logo_without_bg.png" class="logo"></img> </Link>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home </Link>
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" to="/menu">Menu </Link>
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" to="/reservation">Reservation </Link>
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" to="/reservationlist">Reservation List</Link>
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" to="/about">About Us </Link>
                            </li>


                           {/* UI changed accroding to Log in-out status */}
                       
                           {/* Display different buttons based on login status */}
                            {isLoggedIn ? (
                                <li className="nav-item active">
                                <button className="nav-link" onClick={this.handleLogout}>
                                    Logout
                                </button>
                                </li>
                            ) : (
                                <li className="nav-item active">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                                </li>
                            )}
                 

                        </ul>
                    </div>

                </nav>
                
        )
    }
}