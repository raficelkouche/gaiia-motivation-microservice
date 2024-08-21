// src/components/MotivationListPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MotivationListPage.css';

function MotivationListPage() {
    const navigate = useNavigate();
    const themes = ['Climbing', 'Skiing', 'Sketching', 'Running', 'Baseball', 'Fishing', 'NSFW']; // Add more as needed

    return (
        <div className="list-page">
            <h2>Choose Your Flavor of Motivation</h2>
            <div className="buttons-container">
                {themes.map(theme => (
                    <button
                        key={theme}
                        onClick={() => navigate(`/motivation/${theme.toLowerCase()}`)}
                        className="theme-button"
                    >
                        {theme}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MotivationListPage;
