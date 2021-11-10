import React from 'react';
import './Activities.css';
import beach from '../../../Assets/beach.png';
import bungee from '../../../Assets/bungee.png';
import city from '../../../Assets/city.png';
import hiking from '../../../Assets/hiking.png';
import mountain from '../../../Assets/mountain.png';
import scuba from '../../../Assets/scuba.png';
import hunting from '../../../Assets/hunting.png';
import sail from '../../../Assets/sail.png';

const Activities = () => {
    return (
        <div className="activity">
            <div className="activity-container">
                <div className="activity-heading">
                    <h1 className="activity-headline">Explore Wonderfull
                        <br /><span className="activity-headline-under">Experience</span></h1>
                    <p className="activity-desc">Feel the excited activities on the way you’re going to trip, we have a<br />
                        lot of activities that you can explore with our professional guide.</p>
                </div>
                <div className="activity-cards">
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={beach} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Beach Activity</h3>
                            <p className="active-card-properties">124 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={bungee} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Bungee Jumping</h3>
                            <p className="active-card-properties">213 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={city} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">City Tours</h3>
                            <p className="active-card-properties">210 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={hiking} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Hiking Trips</h3>
                            <p className="active-card-properties">20 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={mountain} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Mountain Bike</h3>
                            <p className="active-card-properties">123 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={scuba} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Scuba Diving</h3>
                            <p className="active-card-properties">546 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={hunting} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Hunting Trips</h3>
                            <p className="active-card-properties">109 Properties</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="active-card-img">
                            <img src={sail} alt="" />
                        </div>
                        <div className="active-card-text">
                            <h3 className="active-card-heading">Sailing Trips</h3>
                            <p className="active-card-properties">129 Properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Activities;
