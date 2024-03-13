import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ loggedin, setLoggedin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            // document.cookie = `username=${username}; expires=Sun, 1 Jan 9999 12:00:00 UTC;`;
            axios.post('https://bad-jokes.onrender.com/auth', { username:username }).then((res) => {
                const token = res.data;
                document.cookie = `username=${token}; expires=Sun, 1 Jan 9999 12:00:00 UTC;`;
                console.log(document.cookie);
        });
        } else {
            alert('Username and password are required');
        }
    };
    const handleLogout = () => {
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        // document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        setLoggedin(false);
        navigate('/');
    };

    return (
        <div>
            <Navbar />
            <div>
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
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleLogout}>Logout</button>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
