import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './HomeProductsCard.css';
const HomeProductsCard = (props) => {
    const { name, price, image } = props.product;
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const d = new Date()
    const handlesubmit = e => {
        if (!user.email) {
            const destination = location?.state?.from || '/log-in';
            history.replace(destination);
        }
        else {
            const orderinfo = {
                productName: name,
                orderer: user.email,
                productPrice: price,
                productImage: image,
                orderDate: d.toLocaleDateString(),
                orderStatus: 'pending'
            }
            console.log(orderinfo)
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderinfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        // console.log(data.acknowledged)
                        const destination = location?.state?.from || '/orders';
                        history.replace(destination);
                    }
                })
        }

        e.preventDefault();
    }
    return (
        <div className="package-card">
            <div className="package-img">
                <img className="pckg-img" src={image} alt="" />
            </div>
            <h3 className="package-name">{name}</h3>
            <div className="pckg-price-btn">
                <div className="pkg-price">
                    <h2 className="pkg-price-tag">From ${price}</h2>
                </div>
                <button className="pkg-btn" onClick={handlesubmit}>Make Order</button>
            </div>
        </div >
    );
};

export default HomeProductsCard;
