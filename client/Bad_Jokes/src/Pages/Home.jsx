import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchJokes();
        await fetchUsers();
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchJokes = async () => {
    const response = await fetch("https://bad-jokes.onrender.com/getUsers");
    const data = await response.json();
    setJokes(data);
  };

  const fetchUsers = async () => {
    const response = await fetch("https://bad-jokes.onrender.com/getUsersa");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://bad-jokes.onrender.com/deleteUser/${id}`);
      setJokes((prevJokes) => prevJokes.filter((joke) => joke._id !== id));
    } catch (err) {
      console.error("Error deleting joke:", err);
      setError("Failed to delete joke");
    }
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Nav />
      <div className="home">
        <h1>Home Page</h1>
        <div>
          <label htmlFor="userDropdown">Select User:</label>
          <select
            id="userDropdown"
            onChange={handleUserChange}
            value={selectedUser}
          >
            <option value="">All</option>
            {users.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className="jokes-container">
          {(selectedUser === ""
            ? jokes
            : jokes.filter((joke) => joke.CreatedBy === selectedUser)
          ).map((joke) => (
            <div className="joke-card" key={joke._id}>
              <p className="joke">{joke.Joke}</p>
              <p className="rating">Rating: {joke.Rating}</p>
              <p className="category">Category: {joke.Category}</p>
              <p className="Creator">Created By: {joke.CreatedBy}</p>
              <div className="button-container">
                <button onClick={() => handleDelete(joke._id)}>Delete</button>
                <Link to={`/update/${joke._id}`}>
                  <button>Update</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
