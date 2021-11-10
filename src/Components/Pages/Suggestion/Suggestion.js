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
                    <h1 className="two-hero-heading">Visit Most Popular <br /><span className="two-hero-heading-under">Destination</span></h1>
                    <p className="two-hero-description">Dosen’t have an ideas hwere to go? maybe you can check our popular destination list you can visit, you sure want to go there after you check it up</p>
                    <button className="two-hero-btn">Check List</button>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;