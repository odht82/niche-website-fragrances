import React from 'react';
import './ProductsCard.css';
import placeholder from '../../../../Assets/placeholder.png';
const ProductsCard = (props) => {
    const { _id, place, name, activities, places, duration, price, pricetype, image } = props.pack;
    return (
        <div className="Products-card">
            <div className="place-location">
                <img className="place-img" src={placeholder} alt="" />
                <h5 className="place-text">{place}</h5>
            </div>
            <h3 className="Products-name">{name}</h3>
            <div className="Products-img">
                <img className="Pdcts-img" src={image} alt="" />
            </div>
            <div className="Products-feature">
                <p className="Pdct-activitis">{activities} Activities</p>
                <p className="Pdct-places">{places} Places</p>
                <p className="Pdct-duration">{duration} Week</p>
            </div>
            <div className="Pdcts-price-btn">
                <div className="Pdct-price">
                    <h2 className="Pdct-price-tag">From ${price}</h2>
                    <p className="Pdct-price-type">/{pricetype}</p>
                </div>
                <button className="Pdct-btn">Make Order</button>
            </div>
        </div>
    );
};

export default ProductsCard;
