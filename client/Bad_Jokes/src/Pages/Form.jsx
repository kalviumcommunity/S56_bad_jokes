import React, { useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Form = () => {
    const [JokeId, setJokeId] = useState(""); 
    const [joke, setJoke] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [dateAdded, setDateAdded] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            JokeId: JokeId,
            Joke: joke,
            Rating: parseFloat(rating), 
            Category: category,
            DateAdded: dateAdded
        };

        try {
            const response = await axios.post("https://bad-jokes.onrender.com/post", data);
            console.log("Response:", response);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div>
            <Navbar />
                <div>
                    <div>
                        <form className='form-insert' onSubmit={handleSubmit}>
                            <label>Joke Id:</label>
                            <input type="text" value={JokeId} onChange={(e) => setJokeId(e.target.value)} />

                            <label>Joke:</label>
                            <textarea value={joke} onChange={(e) => setJoke(e.target.value)} rows="4" required />

                            <label>Rating:</label>
                            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />

                            <label>Category:</label>
                            <input value={category} onChange={(e) => setCategory(e.target.value)} required />

                            <label>Date Added:</label>
                            <input type="date" value={dateAdded} onChange={(e) => setDateAdded(e.target.value)} required />
                            
                            <input type="submit" value="Submit" />
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
