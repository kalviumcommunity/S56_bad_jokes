import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [jokes, setJokes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getUsers');
            setJokes(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='home'>
                <h1>Home Page</h1>
                {error && <p>{error}</p>}
                <div className="jokes-container">
                    {jokes.map((joke, index) => (
                        <div className="joke-card" key={joke._id}>
                            <p className="question">{joke.Joke}</p>
                            <p className="answer">Rating: {joke.Rating}</p>
                            <p className="answer">Category: {joke.Category}</p>
                            <p className="answer">Date Added: {joke.DateAdded}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
