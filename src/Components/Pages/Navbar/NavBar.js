import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Button } from '../../Button';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { VscListSelection } from 'react-icons/vsc';
import useAuth from '../../../hooks/useAuth';


const NavBar = () => {
    const { user, logOut } = useAuth();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return window.removeEventListener('resize', showButton)
    }, []);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link style={{ color: '#020202', listStyle: 'none', textDecoration: 'none', fontWeight: '800', fontSize: '18px', }} to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <p style={{ color: '#020202', textDecoration: 'none', fontWeight: '700', fontSize: '22px', }}>Fragrance Shop.</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes style={{ color: '#FF844B' }} /> : <VscListSelection style={{ color: '#FF844B' }} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#FF844B' }} to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#FF844B' }}
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </NavLink>
                        </li>
                        {user.email && <li className='nav-item'>
                            <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#FF844B' }}
                                to='/orders'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Orders
                            </NavLink>
                        </li>
                        }
                        <div className=" nav-menu-btn">
                            {user.email ?
                                (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button className='btn-link' buttonStyle='btn--outline' onClick={logOut}>LOG Out</Button>
                                    {user.photoURL ?
                                        <div style={{ backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #020202' }}>
                                            <img style={{ width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                                        </div> :
                                        <div style={{ display: 'none', backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #020202' }}>
                                            <img style={{ display: 'none', width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                                        </div>
                                    }
                                    <p style={{
                                        fontSize: '18px', marginLeft: '10px', fontWeight: 'bold', color: '#020202'
                                    }}>{user.displayName}</p>
                                </div>
                                )
                                :
                                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                    <li className='nav-btn'>
                                        {button ?
                                            (<Link to='/log-in' className='btn-link'>
                                                <Button buttonStyle='btn--outline'>LOG IN</Button>
                                            </Link>)
                                            :
                                            (<Link to='/log-in' className='btn-link'>
                                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>LOG IN</Button>
                                            </Link>)}
                                    </li>
                                    <li className='nav-btn'>
                                        {button ? (<Link to='/register' className='btn-link'><Button buttonStyle='btn--primary'>REGISTER</Button></Link>) : (<Link to='/register' className='btn-link'><Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobileMenu} >REGISTER</Button></Link>)}
                                    </li>
                                </ul>
                            }
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;