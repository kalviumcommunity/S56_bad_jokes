import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

const Home = () => {
    const [jokes, setJokes] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        fetchJokes();
        fetchUsers();
    }, []);

    const fetchJokes = async () => {
        try {
            const response = await fetch('https://bad-jokes.onrender.com/getUsers');
            const data = await response.json();
            setJokes(data);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://bad-jokes.onrender.com/getUsersa');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDelete = (id) => {
        axios.delete('https://bad-jokes.onrender.com/deleteUser/'+id)
        .then(result => {
            console.log(result);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    }

    return (
        <div>
            <Nav />
            <div className='home'>
                <h1>Home Page</h1>
                <div>
                    <label htmlFor="userDropdown">Select User:</label>
                    <select id="userDropdown" onChange={handleUserChange} value={selectedUser}>
                        <option value="">All</option>
                        {users.map((user, index) => (
                            <option key={index} value={user.username}>{user.username}</option>
                        ))}
                    </select>
                </div>
                <div className="jokes-container">
                    {selectedUser === "" 
                        ? jokes.map((joke, index) => (
                            <div className="joke-card" key={index}>
                                <p className="joke">{joke.Joke}</p>
                                <p className="rating">Rating: {joke.Rating}</p>
                                <p className="category">Category: {joke.Category}</p>
                                <p className="Creator">Created By: {joke.CreatedBy}</p>
                                <button onClick={(e) => handleDelete(joke._id)}>Delete</button>
                                <Link to={`/update/${joke._id}`}><button>Update</button></Link>
                            </div>
                        ))
                        : jokes.filter(joke => joke.CreatedBy === selectedUser).map((joke, index) => (
                            <div className="joke-card" key={index}>
                                <p className="joke">{joke.Joke}</p>
                                <p className="rating">Rating: {joke.Rating}</p>
                                <p className="category">Category: {joke.Category}</p>
                                <p className="Creator">Created By: {joke.CreatedBy}</p>
                                <button onClick={(e) => handleDelete(joke._id)}>Delete</button>
                                <Link to={`/update/${joke._id}`}><button>Update</button></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
