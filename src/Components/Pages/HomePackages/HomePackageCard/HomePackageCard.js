import React from 'react';
import './HomePackageCard.css';
import placeholder from '../../../../Assets/placeholder.png';
const HomePackageCard = (props) => {
    const { _id, place, name, activities, places, duration, price, pricetype, image } = props.pack;
    return (
        <div className="package-card">
            <div className="place-location">
                <img className="place-img" src={placeholder} alt="" />
                <h5 className="place-text">{place}</h5>
            </div>
            <h3 className="package-name">{name}</h3>
            <div className="package-img">
                <img className="pckg-img" src={image} alt="" />
            </div>
            <div className="package-feature">
                <p className="pkg-activitis">{activities} Activities</p>
                <p className="pkg-places">{places} Places</p>
                <p className="pkg-duration">{duration} Week</p>
            </div>
            <div className="pckg-price-btn">
                <div className="pkg-price">
                    <h2 className="pkg-price-tag">From ${price}</h2>
                    <p className="pkg-price-type">/{pricetype}</p>
                </div>
                <button className="pkg-btn">Make Order</button>
            </div>
        </div >
    );
};

export default HomePackageCard;
