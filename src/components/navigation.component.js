import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../components/style.css';


export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/"> <img src="logo/logo_without_bg.png" class="logo"></img> </Link>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
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