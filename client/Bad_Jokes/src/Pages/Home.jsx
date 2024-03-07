import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    const handleDelete = (id) => {
        axios.delete('https://bad-jokes.onrender.com/deleteUser/'+id)
        .then(result=>{console.log(result)
        window.location.reload()
        })
        .catch(err=>console.log(err))
    }

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
                            <button
                             onClick={(e)=>handleDelete(joke._id)}>Delete</button>
                           <Link to={`/update/${joke._id}`}><button>Update</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
