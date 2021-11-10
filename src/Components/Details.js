import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import './Details.css';
import DetailsCard from './DetailsCard';
import Loading from './Loading';

const Details = () => {
    const { packageId, homepackageId } = useParams();
    const [packages, setPackages] = useState({});
    const [homepackages, setHomepackages] = useState({});
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    let local = location.pathname.split('/')
    let prevPath = '/' + local[1];
    let homePrevPath = true;
    let pathPrefix = local[1];
    // console.log(prevPath);

    useEffect(() => {
        fetch(`https://pure-island-82181.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackages(data))
            .finally(data => setLoading(false));
    }, [packageId, loading]);

    useEffect(() => {
        fetch(`https://pure-island-82181.herokuapp.com/packages/${homepackageId}`)
            .then(res => res.json())
            .then(data => setHomepackages(data))
            .finally(setLoading(false));
    }, [homepackageId, loading]);


    return (
        <>
            <div className="details">
                <div className="details-container">
                    <h2 className='details-section-heading'>
                        {pathPrefix}
                    </h2>
                    {packageId &&
                        (!loading ?
                            <div className="details-list-section">
                                <DetailsCard
                                    key={packages._id}
                                    details={packages}
                                    prevPath={prevPath}
                                    review={true}
                                    special={false}
                                    price={true}
                                ></DetailsCard>
                            </div> :
                            <Loading></Loading>)
                    }
                    {homepackageId &&
                        (!loading ?
                            <div className="details-list-section">
                                <DetailsCard
                                    key={homepackages._id}
                                    details={homepackages}
                                    homePrevPath={homePrevPath}
                                    review={false}
                                    special={true}
                                    price={true}
                                ></DetailsCard>
                            </div> :
                            <Loading></Loading>
                        )
                    }
                </div>
            </div >
        </>
    );
};

export default Details;