import React from 'react';
import qoutebg from '../../../../Assets/qoute.png';
import Rating from '../Rating/Rating';
import './ReviewCard.css';

const ReviewCard = (props) => {
    const { _id, avatar, qoute, revieweruser, rating } = props.review;
    return (
        <div>
            <div className="review-card">
                <img className="review-img" src={qoutebg} alt="" />
                <h3 className="review-text">{qoute}</h3>
                <div className="reviewer">
                    <div className="reviewer-image">
                        <img src={avatar} alt="" className="reviewer-avater" />
                    </div>
                    <div className="reviewer-details">
                        <h2 className="reviewer-name-tag">{revieweruser}</h2>
                        <Rating key={_id} rating={rating}></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;