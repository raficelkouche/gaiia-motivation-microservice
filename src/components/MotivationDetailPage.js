// src/components/MotivationDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productivityImage from '../assets/productivity.jpg'
import teamworkImage from '../assets/teamwork.jpg'
import innovationImage from '../assets/innovation.jpg'
import './MotivationDetailPage.css';

const themeDetails = {
    productivity: {
        text: "Productivity: Because staying busy is the key to forgetting you're tired.",
        image: productivityImage,
    },
    teamwork: {
        text: "Teamwork: Because it’s amazing what we can accomplish when no one cares who gets the credit.",
        image: teamworkImage,
    },
    innovation: {
        text: "Innovation: Creating new solutions to problems you didn’t know you had.",
        image: innovationImage,
    },
    // Add more themes if needed
};

function MotivationDetailPage() {
    const { theme } = useParams();
    const navigate = useNavigate();
    const { text, image } = themeDetails[theme] || {};

    return (
        <div className="detail-page">
            <h2>{text || 'Motivation is key!'}</h2>
            <img src={image} alt={theme} className="theme-image" />
            <button onClick={() => navigate('/motivation-list')} className="back-button">Back</button>
        </div>
    );
}

export default MotivationDetailPage;
