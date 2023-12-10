import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/home.css';


export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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


                        <li class="nav-item active">
                            <Link class="nav-link" to="/login">Login </Link>
                        </li>                  

                    </ul>
                </div>
              
            </nav>
        )
    }
}