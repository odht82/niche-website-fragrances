import React from 'react';
import './Companies.css';
import companyOne from '../../../Assets/one.png';
import companyTwo from '../../../Assets/two.png';
import companyThree from '../../../Assets/three.png';
import companyFour from '../../../Assets/four.png';
const Companies = () => {
    return (
        <div className="company-section" style={{ height: '32px' }}>
            <img style={{ height: '32px', opacity: '20%' }} src={companyOne} alt="" />
            <img style={{ height: '32px', opacity: '20%' }} src={companyTwo} alt="" />
            <img style={{ height: '32px', opacity: '20%' }} src={companyThree} alt="" />
            <img style={{ height: '32px', opacity: '20%' }} src={companyFour} alt="" />
        </div>
    );
};

export default Companies;