import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/home.css';
import { useAuth } from "../Contexts/authContext";

const Navigation = () => {
    const localToken = localStorage.getItem("token");
    const [isLoggedIn, setIsLoggedIn] = useState(!!localToken);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src="logo/logo_without_bg.png" className="logo" alt="Logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/reservation">Reservation</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/reservationlist">Reservation List</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    {isLoggedIn ? (
                        <li className="nav-item active">
                            <button className="nav-link" onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;




// import React,{Component, useState} from "react";
// import { Link } from "react-router-dom";
// import '../style/home.css';
// import { useAuth } from "../Contexts/authContext";
// import { useNavigate } from "react-router-dom";


// export default class Navigation extends Component {
    
//     constructor(props) {
//         super(props);
//         const localToken = localStorage.getItem("token");
//         console.log(!!localToken);
//         this.state = {
//             isLoggedIn: !!localToken // Login status
//         };

//     }
    
  
//     // LogOut function
//     handleLogout = () => {
//         const [isLoggedIn, setIsLoggedIn] = useState(true);
    
//         // const navigate = useNavigate();
//         localStorage.clear();
//         const localToken = localStorage.getItem("token");
//         console.log(!!localToken);
//         this.state = {
//             isLoggedIn: !!localToken // Login status
//         };
//         setIsLoggedIn(false); 
//         // navigate('/login');
//         // const { logout } = useAuth();
//         // const navigate = useNavigate();

//         // logout()
//         // .then(res => {
//         //     navigate('/login')
//         // })
//         // .catch(error => {
//         //     console.error('LogOut Error:', error);
//         // });
//     };

    
   

//     render() {
     

//         const { isLoggedIn } = this.state;
        
//         return (
       
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >

//                     <Link class="navbar-brand" to="/"> <img src="logo/logo_without_bg.png" class="logo"></img> </Link>

//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav">
//                             <li class="nav-item active">
//                                 <Link class="nav-link" to="/">Home </Link>
//                             </li>
// {/* 
//                             <li class="nav-item active">
//                                 <Link class="nav-link" to="/menu">Menu </Link>
//                             </li> */}

//                             <li class="nav-item active">
//                                 <Link class="nav-link" to="/reservation">Reservation </Link>
//                             </li>

//                             <li class="nav-item active">
//                                 <Link class="nav-link" to="/reservationlist">Reservation List</Link>
//                             </li>

//                             <li class="nav-item active">
//                                 <Link class="nav-link" to="/about">About Us </Link>
//                             </li>


//                            {/* UI changed accroding to Log in-out status */}
                  
                      
//                             {isLoggedIn ? (
//                                 <li className="nav-item active">
//                                 <button className="nav-link" onClick={this.handleLogout}>
//                                     Logout
//                                 </button>
//                                 </li>
//                             ) : (
//                                 <li className="nav-item active">
//                                 <Link className="nav-link" to="/login">
//                                     Login
//                                 </Link>
//                                 </li>
//                             )}


                 

//                         </ul>
//                     </div>

//                 </nav>
                
//         )
//     }
// }