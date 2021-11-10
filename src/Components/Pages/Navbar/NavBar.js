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
                        <p >Hoque Travel.</p>
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
                                to='/packages'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Packages
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#FF844B' }}
                                to='/aboutUs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </NavLink>
                        </li>
                        {user.email && <li className='nav-item'>
                            <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#FF844B' }}
                                to='/bookings'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Bookings
                            </NavLink>
                        </li>
                        }
                        <div className=" nav-menu-btn">
                            {user.email ?
                                (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button className='btn-link' buttonStyle='btn--outline' onClick={logOut}>Sign Out</Button>
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
                                            (<Link to='/sign-in' className='btn-link'>
                                                <Button buttonStyle='btn--outline'>SIGN IN</Button>
                                            </Link>)
                                            :
                                            (<Link to='/sign-in' className='btn-link'>
                                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN IN</Button>
                                            </Link>)}
                                    </li>
                                    <li className='nav-btn'>
                                        {button ? (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary'>REGISTER</Button></Link>) : (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobileMenu} >REGISTER</Button></Link>)}
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