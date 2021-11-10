import './BookingCard.css';
const BookingCard = (props) => {
    const { place, name, activities, places, duration, price, image } = props.book;

    return (
        <section className="card-row">
            <div className="tabl-rw">
                <div className="tabl-rw-contain">
                    <div className="itemside">
                        <div className="aside">
                            <img src={image} alt="" className="img-sm" />
                        </div>
                        <div className="info" >
                            <h4 href="#" className="title-text-dark">{name}</h4>

                            <p className="text-muted-small">{place}<br />{activities} Activities, {places} Places, {duration} Weeks</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="price-wrap">
                        <h4 className="price-book">${price}</h4>
                    </div>
                </div>
                <div className="text-right">
                    <button className="btn-danger" onClick={() => props.handleDeleteBooking(props.book._id)}>Remove</button>
                </div>
            </div>
        </section>
    );
};

export default BookingCard;