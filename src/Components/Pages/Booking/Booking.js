import React, { useEffect, useState } from 'react';
import './Booking.css';
import BookingCard from './BookingCard/BookingCard';
import "./css/ui.css";
import "./css/responsive.css";
import Loading from '../../Loading';

const Booking = () => {
    const [packages, setPackages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loadpackages, setLoadpackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pure-island-82181.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
            .finally(data => setLoading(false));
    }, [])

    useEffect(() => {
        fetch('https://pure-island-82181.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
            .finally(data => setLoading(false));
    }, [loading])

    useEffect(() => {
        if (packages) {
            const storedBook = [];
            const savedPackages = bookings;
            const savedBook = savedPackages.map(obj => obj.key);
            const packets = packages.map(b => b);
            for (const key in savedBook) {
                const bookedPackages = packets.find(pack => pack._id === savedBook[key]);
                storedBook.push(bookedPackages);

                // console.log(bookedPackages, "hello")
            }
            setLoadpackages(storedBook)
        }
    }, [packages, bookings]);

    // Delet Booking
    const handleDeleteBooking = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://pure-island-82181.herokuapp.com/bookings/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = loadpackages.filter(booking => booking._id !== _id);
                        setBookings(remainingBookings);
                    }
                    // console.log(data)
                    // console.log(data)
                });
        }
    };

    return (
        <div className="App">
            <section className="section-pagetop">
                <div className="container-pagetop">
                    <h2 className="title-page">Booking cart</h2>
                </div>
            </section>

            <section className="section-content">
                <div className="section-container">

                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">

                                <div className="table-shopping-cart">
                                    <div className="text-muted">
                                        <div className="small">
                                            <div className="heading-lavel-one">Product</div>
                                            <div className="heading-lavel-two">Price</div>
                                            <div className="heading-lavel-three"> </div>
                                        </div>
                                    </div>
                                    {loadpackages && <div>
                                        {!loading ?
                                            <div className="table-body">
                                                {
                                                    packages.map(book => <BookingCard
                                                        key={book._id}
                                                        book={book}
                                                        handleDeleteBooking={handleDeleteBooking}
                                                    ></BookingCard>)
                                                }
                                            </div> : <Loading></Loading>}
                                    </div>}


                                    {/* {!loading ?
                                        <div className="table-body">
                                            {
                                                bookings.map(book => <BookingCard
                                                    key={book._id}
                                                    book={book}
                                                    handleDeleteBooking={handleDeleteBooking}
                                                ></BookingCard>)
                                            }
                                        </div> : <Loading></Loading>} */}
                                </div>

                                <div className="card-bdy">
                                    <button href="#" className=" btn-primary"> Make Purchase </button>
                                    <button href="#" className="btn-light">Browse More Package </button>
                                </div>
                            </div>

                        </main>
                        <aside className="col-md-3">
                            <div className="mb-3">
                                <div className="card-bdy">
                                    <form>
                                        <div className="form-group">
                                            <h4>Have Coupon?</h4>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="" placeholder="Coupon code" />
                                                <span className="input-group-append">
                                                    <button className="btn-apply">Apply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-purchase">
                                <h4>Total Summery</h4>
                                <div className="card-bdy-total">
                                    <div className="dlist-align">
                                        <p className="text-sum">Total price:</p>
                                        <p className="text-sum">USD$ 568</p>
                                    </div>
                                    <div className="dlist-align">
                                        <p className="text-sum">Discount:</p>
                                        <p className="text-sum">USD$ 658</p>
                                    </div>
                                    <div className="dlist-align">
                                        <p className="text-bold">Total:</p>
                                        <p className="text-bold"><strong>$1,650</strong></p>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <img src="assets/images/misc/payments.png" alt="" height="26" />
                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>

            <section className="section-name">
                <div className="privacy-container">
                    <h6>Payment and refund policy</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </section>
        </div >
    );
};

export default Booking;



// const AddUser = () => {
//     const nameRef = useRef();
//     const emailRef = useRef();

//     const handleAddBooking = e => {
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;

//         const newBooking = { name, email };

//         fetch('http://localhost:5000/bookings', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newBooking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     alert('Successfully added the Booking.')
//                     e.target.reset();
//                 }
//             })
//         e.preventDefault();
//     }
//     return (
//         <div>
//             <h2>Please Add an User</h2>
//             <form onSubmit={handleAddBooking}>
//                 <input type="text" ref={nameRef} />
//                 <input type="email" name="" id="" ref={emailRef} />
//                 <input type="submit" value="Add" />
//             </form>
//         </div>
//     );
// };