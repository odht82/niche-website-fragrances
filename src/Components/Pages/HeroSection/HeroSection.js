import React from 'react';
import './HeroSection.css';
import dropico from '../../../Assets/dropdown.png';
import topimage from '../../../Assets/topbanner.png';
import Companies from '../Companies/Companies';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-heading">Discover New Destination</h1>
                    <p className="hero-description">A Team of devoted and experienced tourism professionals will
                        provide you with the best advice and tips.</p>
                    <div className="explorer">
                        <div className="explorer-input">
                            <div className="location">
                                <div className="heading">
                                    <p className="drop-heading">Location</p>
                                    <img className="dropico" src={dropico} alt="" />
                                </div>
                                <p className="dorp-placeholder">Enter your Destination</p>
                            </div>
                            <div className="date">
                                <div className="heading">
                                    <p className="drop-heading">Date</p>
                                    <img className="dropico" src={dropico} alt="" />
                                </div>
                                <p className="dorp-placeholder">When it'll start?</p>
                            </div>
                            <div className="people">
                                <div className="heading">
                                    <p className="drop-heading">People</p>
                                    <img className="dropico" src={dropico} alt="" />
                                </div>
                                <p className="dorp-placeholder">How many people?</p>
                            </div>
                            <button className="explore-btn">Explore Now</button>
                        </div>
                    </div>
                    <div className="popular">
                        <p className="popular-one">Popular Search:</p>
                        <p className="popular-two">Bali, Yogyakarta,</p>
                        <p className="popular-three">Lombok,</p>
                        <p className="popular-four">Hokaido, Sumbawa</p>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={topimage} alt="" />
                </div>
            </div>
            <Companies></Companies>
        </div>
    );
};

export default HeroSection;