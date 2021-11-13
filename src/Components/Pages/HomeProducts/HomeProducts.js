import React, { useEffect, useState } from 'react';
import HomeProductCard from './HomeProductsCard/HomeProductsCard';
import './HomeProducts.css';
import { NavLink } from 'react-router-dom';
import Loading from '../../Loading';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(data => setLoading(false))
    }, [loading])

    return (
        <div className="home-pckg">
            <div className="home-pckg-container">
                <div className="home-pckg-heading">
                    <div className="home-pckg-heading-text">
                        <h1 className="home-pckg-headline">Our Best Products</h1>
                    </div>
                    <NavLink to='/products'>
                        <button className="all-home-pckg-btn">View Products</button>
                    </NavLink>
                </div>
                {!loading ?
                    (<div className="home-pckg-cards">
                        {products.slice(-6).map(product =>
                            <HomeProductCard
                                key={product._id}
                                product={product}
                            ></HomeProductCard>)}
                    </div>)
                    :
                    <Loading></Loading>
                }
            </div>
        </div >
    );
};

export default HomeProducts;