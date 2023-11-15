import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/"> [Restaruant Name] </Link>
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
                            <Link class="nav-link" to="/location">Location </Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link" to="/about">About Us </Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link" to="/add">Temp  (for Reservation) </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}