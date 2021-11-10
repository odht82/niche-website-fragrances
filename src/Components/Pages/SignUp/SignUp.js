import React, { useEffect } from 'react';
import { Button } from '../../Button';
import './SignUp.css';
import { AiFillGoogleCircle, } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const {
        user,
        signInUsingGoogle,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/sign-up';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => { history.push(redirect_uri); })
    }
    useEffect(() => {
        if (user.email) {
            history.push(redirect_uri);
        }
    }, [history, redirect_uri, user.email]);
    return (
        <div className="signup">
            <section className="signup-container">
                <div className='input-area-btn'>
                    <h2 className='signup-heading'>
                        Sign Up with</h2>
                    <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign Up With Google</Button>
                </div>
            </section>
        </div>
    );
};

export default SignUp;