// src/components/MotivationDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import climbingImage from '../assets/climbing.webp'
import skiingImage from '../assets/skiing.webp'
import sketchingImage from '../assets/sketching.webp'
import runningImage from '../assets/running.webp'
import fishingImage from '../assets/fishing.webp'
import golfImage from '../assets/golf.webp'
import photographyImage from '../assets/photography.webp'
import baseballImage from '../assets/baseball.webp'
import './MotivationDetailPage.css';

const themeDetails = {
    climbing: {
        header: "What's holding you back?",
        text: "Take our friend Oli, for example. He decided to rock climb with his guitar strapped to his back, all while clutching his phone to keep an eye on his crypto. Because why just risk life and limb when you can also gamble your savings and serenade yourself while doing it? Whether he’s scaling cliffs, strumming a tune, or refreshing his portfolio mid-ascent, Oli’s all about living on the edge—literally and financially. So, what’s holding you back? If Oli can conquer mountains while multitasking his passions, surely you can take on whatever challenge lies ahead. Go climb your own mountain—who knows what heights you’ll reach?",
        image: climbingImage,
    },
    skiing: {
        header: "Let your enthusiasm for the slopes fuel your drive in life.",
        text: "Meet Bish, the guy who hits the slopes with the same enthusiasm he has for his trusty Dodge Caravan. Whether he's carving through fresh powder or loading up the van for another epic ski trip, Bish is always in his element. Just imagine him, flying down the mountain with a grin, knowing that at the end of the day, he'll be cruising home in his beloved Caravan—because why should the thrill of the ride stop at the base of the hill?",
        image: skiingImage,
    },
    sketching: {
        header: "Your day is a blank canvas—what will you create?",
        text: "Take Amanda, for instance. During her presidential campaign, she didn’t just stand on the podium and give a speech—she sketched a Charizard while doing it. Because why not mix a bit of creativity with leadership? As a designer, Amanda knows that inspiration can strike at any moment, even when she’s addressing a crowd. And nothing says ‘vote for me’ like a well-drawn Charizard on the campaign trail. What will you create?",
        image: sketchingImage,
    },
    running: {
        header: "Leadership is a Marathon, Not a Sprint—So Why Not Carry Your Investors Along the Way?",
        text: "Marc isn’t just a CEO; he’s a long-distance runner who knows that success is a journey, not a race. Picture him jogging along a scenic trail, effortlessly carrying a potential investor on his back, all while delivering a flawless pitch about the company’s future. Because when you’re Marc, even running a marathon is an opportunity to close deals. After all, who says you can’t mix business with pleasure?",
        image: runningImage
    },
    fishing: {
        header: "Reel in your dreams, one catch at a time.",
        text: "Francois knows that both fishing and QA require a keen eye for detail and a lot of patience. Imagine him sitting by a serene lake, rod in hand, patiently waiting for a bite while simultaneously reviewing bug reports on his laptop. For Francois, every caught fish is like finding and fixing a bug—a reward for persistence and precision. Whether he’s reeling in a big one or hunting down glitches, he’s always in his element.",
        image: fishingImage
    },
    golf: {
        header: "Fore! Your drive to succeed is a hole in one.",
        text: "Gabrimiel brings the same focus and precision to software engineering as he does to his golf game. Picture him on a lush golf course, perfectly poised to swing, while mentally debugging a complex algorithm. Because for Gabrimiel, mastering the code is just like mastering the perfect golf swing—both require patience, practice, and an eye for detail. And when you’re this good, every day is a hole in one.",
        image: golfImage
    },
    photography: {
        header: "Capture the moment, seize the day.",
        text: "Meet Nico, a photographer so dedicated to his craft that he’s willing to go to extreme lengths for the perfect shot. Like that time he disguised himself as a bee—yes, a bee—just to capture the ultimate close-up of a bee giving honey. Because why settle for ordinary when you can blend in with the hive? For Nico, it’s all about commitment, creativity, and a little bit of buzzing around to get the perfect shot.",
        image: photographyImage
    },
    baseball: {
        header: "Hit a home run with your goals.",
        text: "Dany hits home runs both on and off the field. When he’s not swinging for the fences in baseball, he’s fixing leaks and building dreams with his trusty tools. Whether he’s patching up a plumbing issue or constructing the perfect DIY project, Dany’s always in the game, proving that every problem is just another pitch to knock out of the park.",
        image: baseballImage
    },
    nsfw: {
        header: "NSFW: Not Safe For Work, but Safe for Motivation.",
        text: "When you need a little extra push to get through the day, sometimes you have to turn to the unexpected. That’s where NSFW motivation comes in. Whether it’s a spicy meme, a cheeky joke, or a sassy quote, NSFW motivation is all about giving you that extra spark to keep going. So, when you need a little pick-me-up, don’t be afraid to get a little NSFW. After all, a little spice never hurt anyone.",
        videoUrl: 'https://youtube.com/embed/xETtS-gIPzg?si=5XE3-yVkGOvBwylc'
    }
    // Add more themes if needed
};

function MotivationDetailPage() {
    const { theme } = useParams();
    const navigate = useNavigate();
    const { header, text, image, videoUrl } = themeDetails[theme] || {};

    return (
        <div className="detail-page">
            <h2>{header || 'Motivation is key!'}</h2>
            <p className="motivation-content">{text}</p>
            {videoUrl ? (
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={videoUrl}
                        title={theme}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                image && <img src={image} alt={theme} className="theme-image" />
            )}
            <button onClick={() => navigate('/motivation-list')} className="back-button">Back</button>
        </div>
    );
}

export default MotivationDetailPage;
