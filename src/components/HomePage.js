// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Styling

function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/motivation-list');
    };

    return (
        <div className="home-page">
            <div className="overlay">
                <h1>Need a Kick to Get Going?</h1>
                <p>Your daily dose of motivation, handpicked for what you love most. Whether you’re into hiking,
                    running, fishing, or something else entirely (like NSFW content for example 🫢), we’ve got a little
                    spark just for you</p>
                <br/>
                <em>Not sure where to start? Try them all! Sometimes, the most unexpected sources can spark the greatest
                    inspiration. Who knows, you might find motivation in places you never thought to look.</em>
                <br/>
                <br/>
                <button onClick={handleClick} className="motivation-button">Get Your Dose of Motivation</button>
            </div>
        </div>
    );
}

export default HomePage;
