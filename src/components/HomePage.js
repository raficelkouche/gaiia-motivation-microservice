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
                <p>Your daily dose of motivation, with a hint of sarcasm.</p>
                <button onClick={handleClick} className="motivation-button">Get Your Dose of Motivation</button>
            </div>
        </div>
    );
}

export default HomePage;
