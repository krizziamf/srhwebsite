import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/nav.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top srh-navbar">
                <div className="container">
                    <Link to="/bookappointment"><a className="navbar-brand">
                        <img src="./images/logo1.jpg" width="90px;" height="70px" />
                    </a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Find a Doctor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Patient Guide</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Latest Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
