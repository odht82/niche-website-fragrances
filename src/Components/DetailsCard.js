import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './DetailsCard.css';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const DetailsCard = (props) => {
    const { user } = useAuth();
    const { _id, name, price, place, places, pricetype, duration, image, } = props.details;

    const handleAddBooking = e => {
        const key = _id;
        const email = user.email;

        const newBooking = { key, email };

        fetch('https://pure-island-82181.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the Booking.')
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <div className="details-image-container">
                        <CardImg top style={{
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }} width="100%" src={image} alt="Card image" />
                    </div>
                    <div className="details-name-price">
                        <CardTitle className='details-price price' tag="h1">
                            {name}
                        </CardTitle>
                        <CardSubtitle
                            tag="h2" className="">
                            ${price}/per {pricetype}
                        </CardSubtitle>
                        <CardText tag="h3" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            {place}
                        </CardText>
                        <CardText tag="h3" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            {places} Places to visit
                        </CardText>
                        <CardText tag="p" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            {duration} Weeks
                        </CardText>
                    </div>
                    <Link className="details-button" to={`/bookings`}>
                        <Button className='cart-add-btn  btn-secondary' onClick={handleAddBooking}>Add to Booking</Button>
                    </Link>
                </CardBody>
            </Card>
        </div >
    );
};

export default DetailsCard;