import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewCard from './ReviewCard/ReviewCard';
import Loading from '../../Loading';


const REview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://fragrance-shop.herokuapp.com/reviews"
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
            .finally(data => setLoading(false))
    }, [])
    return (
        <div className="review">
            <div className="review-container">
                <div className="review-heading">
                    <div className="review-heading-text">
                        <h1 className="review-headline">What Customers Talk about our products</h1>
                    </div>
                </div>
                <div >
                    {!loading ?

                        (<div className="review-cards">
                            {reviews.slice(-3).map(review =>
                                <ReviewCard
                                    key={review._id}
                                    review={review}
                                ></ReviewCard>
                            )}
                        </div>)
                        : <Loading></Loading>
                    }
                </div>
            </div>
        </div >
    );
};

export default REview;