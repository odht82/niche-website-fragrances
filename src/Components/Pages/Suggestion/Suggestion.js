import React from 'react';
import './Suggestion.css';
import bottomimage from '../../../Assets/bottombanner.png';

const Suggestion = () => {
    return (
        <div className="two-hero-section">
            <div className="two-hero-container">
                <div className="two-hero-image-container">
                    <img src={bottomimage} alt="" />
                </div>
                <div className="two-hero-text-container">
                    <h1 className="two-hero-heading">ALUMINUM FREE DEODORANT <br />TO TRY</h1>
                    <p className="two-hero-description">You’re not going to believe how good a deodorant formulated without aluminum can make you smell. That odor-busting technology is going to blow your mind like the ending of Inception x1000.</p>
                    <button className="two-hero-btn">Check List</button>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;