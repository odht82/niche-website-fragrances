import React from 'react';
import './HeroSection.css';
import topimage from '../../../Assets/topbanner.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-heading">YOUNG, WILD AND... FORMULATED!</h1>
                    <p className="hero-description">Whatever scent you love, we’ve got a body spray for you. Whatever the occasion, our body spray smelling like a million dollars.</p>
                    <Link to="/products">
                        <button className="explore-btn">Explore Now</button>
                    </Link>
                </div>
                <div className="hero-image-container">
                    <img style={{ height: '100%', width: '100%' }} src={topimage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;