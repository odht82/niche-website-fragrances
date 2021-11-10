import React from 'react';
import './Review.css';
import qoute from '../../../Assets/qoute.png';
import avatarOne from '../../../Assets/1.png';
import avatarTwo from '../../../Assets/2.png';
import avatarThree from '../../../Assets/3.png';

const REview = () => {
    return (
        <div className="review">
            <div className="review-container">
                <div className="review-heading">
                    <div className="review-heading-text">
                        <span className="review-heading-text-head">
                            <h1 className="review-headline-under">What They Says</h1><h1 className="review-headline">About
                                Our Services</h1>
                        </span>
                    </div>
                    <button className="all-revw-btn">View Reviews</button>
                </div>
                <div className="review-cards">
                    <div className="review-card">
                        <img className="review-img" src={qoute} alt="" />
                        <h3 className="review-text">The holiday of a life time- our gulet <br />
                            adventure in the Dodecanese<br />
                            Greek Islands was without a doubt<br />
                            our favourite family trip. The crew<br />
                            also taking care of us</h3>
                        <div className="reviewer">
                            <div className="reviewer-image">
                                <img src={avatarOne} alt="" className="reviewer-avater" />
                            </div>
                            <div className="reviewer-details">
                                <h2 className="reviewer-name-tag">Obaydul H.</h2>
                                <p className="reviewer-post-type">Web developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                        <img className="review-img" src={qoute} alt="" />
                        <h3 className="review-text">The holiday of a life time- our gulet <br />
                            adventure in the Dodecanese<br />
                            Greek Islands was without a doubt<br />
                            our favourite family trip. The crew<br />
                            also taking care of us</h3>
                        <div className="reviewer">
                            <div className="reviewer-image">
                                <img src={avatarTwo} alt="" className="reviewer-avater" />
                            </div>
                            <div className="reviewer-details">
                                <h2 className="reviewer-name-tag">Obaydul H.</h2>
                                <p className="reviewer-post-type">Web developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                        <img className="review-img" src={qoute} alt="" />
                        <h3 className="review-text">The holiday of a life time- our gulet <br />
                            adventure in the Dodecanese<br />
                            Greek Islands was without a doubt<br />
                            our favourite family trip. The crew<br />
                            also taking care of us</h3>
                        <div className="reviewer">
                            <div className="reviewer-image">
                                <img src={avatarThree} alt="" className="reviewer-avater" />
                            </div>
                            <div className="reviewer-details">
                                <h2 className="reviewer-name-tag">Obaydul H.</h2>
                                <p className="reviewer-post-type">Web developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default REview;