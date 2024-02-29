import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import data from '../data.json'; 

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className='home'>
                <h1>Home Page</h1>
                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
                <div className="jokes-container">
                    {data.jokes.map((joke, index) => (
                        <div className="joke-card" key={index}>
                            <p className="question">{joke.question}</p>
                            <p className="answer">{joke.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
