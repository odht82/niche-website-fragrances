import React, { useEffect, useState } from 'react';
import Loading from '../../Loading';
import PackageCard from './ProductsCard/ProductsCard';
import './Products.css';
const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pure-island-82181.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setPackages(data))
            .finally(data => setLoading(false))
    }, [packages])
    // console.log(packages)
    // console.log(loading)

    return (
        <div className="package">
            <div className="package-container">
                <div className="package-heading">
                    <div className="package-heading-text">
                        <span className="package-heading-text-head">
                            <h1 className="package-headline-under">Hoque Travel</h1><h1 className="package-headline">Tour Packages</h1>
                        </span>
                        <p className="package-desc">Get the full package experience included with all of your needs on the trips</p>
                    </div>
                </div>
                {!loading ?

                    (<div className="package-cards">
                        {packages.map(pack =>
                            <PackageCard
                                key={pack._id}
                                pack={pack}
                            ></PackageCard>
                        )}
                    </div>)
                    : <Loading></Loading>
                }
            </div>
        </div >
    );
};

export default Packages;