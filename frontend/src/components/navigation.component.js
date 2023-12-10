import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/home.css';
import '../style/AD.css';


export default class Navigation extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false // Login status
        };
    }

    // LogOut function
    handleLogout = () => {
        // 여기에서 로그아웃 API를 호출하고 로그아웃 상태를 백엔드에 전달할 수 있습니다.
        // 성공적으로 로그아웃되면 상태를 업데이트하고, UI를 변경합니다.
        // 예시: 성공적으로 로그아웃되었다고 가정하여 상태를 변경
        this.setState({ isLoggedIn: false });
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


                           {/* 로그인 상태에 따라 다른 버튼을 표시 */}
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