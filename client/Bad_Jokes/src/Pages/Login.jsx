import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';
const LoginPage = ({ loggedin, setLoggedin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            // document.cookie = `username=${username}; expires=Sun, 1 Jan 9999 12:00:00 UTC;`;
            axios.post('https://bad-jokes.onrender.com/auth', { username: username }).then((res) => {
                const token = res.data;
                document.cookie = `username=${token}; expires=Sun, 1 Jan 9999 12:00:00 UTC;`;
                console.log(document.cookie);
                // Send username to the specified endpoint
                axios.post('https://bad-jokes.onrender.com/postUsers', { username: username })
                    .then(response => {
                        console.log('Username posted successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error posting username:', error);
                    });
            });
        } else {
            alert('Username and password are required');
        }
    };

    const handleLogout = () => {
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        setLoggedin(false);
        navigate('/');
    };

return (
    <div>
        <Navbar />
        <div  className="container">
            <h1>Login Page</h1>
            <div>
                <label>Enter Username:</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Enter Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <Link to={"/"}><button className="link-btn" onClick={handleLogin}>Login</button></Link>
                <button className="cancel-btn" onClick={handleLogout}>Logout</button>
                <Link to='/'>
                    <button className="cancel-btn">Cancel</button>
                </Link>
            </div>
        </div>
    </div>
);
}

export default LoginPage;
