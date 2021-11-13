import React, { useEffect, useState } from 'react';
import Loading from '../../Loading';
import ProductCard from './ProductsCard/ProductsCard';
import './Products.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(setLoading(false))
    }, [products])
    // console.log(products)
    // console.log(loading)

    return (
        <>
            <NavBar></NavBar>
            <div className="package">
                <div className="package-container">
                    <div className="package-heading">
                        <div className="package-heading-text">
                            <h1 className="package-headline-under">YOU GOT THIS</h1>
                        </div>
                    </div>
                    {!loading ?

                        (<div className="package-cards">
                            {products.map(product =>
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                ></ProductCard>
                            )}
                        </div>)
                        :
                        <Loading></Loading>
                    }
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Products;