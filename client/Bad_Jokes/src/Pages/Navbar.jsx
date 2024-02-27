import React from 'react';
import './Navbar.css';

function NavigationBar() {
    return (
        <nav className="navbar">
            <h1 className="nav-logo">Bad Jokes</h1>
            <ul className="nav-menu">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Trnding</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
