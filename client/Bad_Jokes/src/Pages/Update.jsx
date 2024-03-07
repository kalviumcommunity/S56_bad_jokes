import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
    const { id } = useParams();
    const [JokeId, setJokeId] = useState(""); 
    const [Joke, setJoke] = useState("");
    const [Rating, setRating] = useState("");
    const [Category, setCategory] = useState("");
    const [DateAdded, setDateAdded] = useState("");
   
    useEffect(() => {
        axios.get(`https://bad-jokes.onrender.com/getUsers/${id}`)
        .then(result=>{console.log(result)
        setJokeId(result.data.JokeId)
        setJoke(result.data.Joke)
        setRating(result.data.Rating)
        setCategory(result.data.Category)
        setDateAdded(result.data.DateAdded)
        })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit =  (e) => {
        e.preventDefault();
        axios.put("https://bad-jokes.onrender.com/updateUser/"+id, {JokeId,Joke,Rating, Category,DateAdded})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h1>Update Page</h1>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="joke">Joke:</label>
                    <input type="number" id="joke" name="id" value={JokeId} onChange={(e) => setJokeId(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="joke">Joke:</label>
                    <input type="text" id="joke" name="joke" value={Joke}  onChange={(e) => setJoke(e.target.value)} rows="3" required  />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" value={Rating}   onChange={(e) => setRating(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={Category} onChange={(e) => setCategory(e.target.value)} required  />
                </div>
                <div>
                    <label htmlFor="joke">Joke:</label>
                    <input type="date" id="dateAdded" name="dateAdded" value={DateAdded} onChange={(e) => setDateAdded(e.target.value)} required />
                </div>
                <button type="submit">Update Joke</button>
            </form>
        </div>
    );
};

export default Update;
