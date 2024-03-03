import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetchJokes();
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

    return (
        <div>
            <Navbar />
            <div className='home'>
                <h1>Home Page</h1>
                <div className="jokes-container">
                    {jokes.map((joke, index) => (
                        <div className="joke-card" key={index}>
                            <p className="joke">{joke.Joke}</p>
                            <p className="rating">Rating: {joke.Rating}</p>
                            <p className="category">Category: {joke.Category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
