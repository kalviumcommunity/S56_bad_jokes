import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
function NavigationBar() {
    return (
        <nav className="navbar">
            <h1 className="nav-logo">Bad Jokes</h1>
            <ul className="nav-menu">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/form">Add</Link></li>
                <li className="nav-item"><Link to="/login">Login</Link></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Trending</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
