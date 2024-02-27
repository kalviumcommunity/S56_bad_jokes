import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <Navbar/>
            <div className='home'>
            <h1>Home Page</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />

            </div>
        </div>
    );
};

export default Home;
