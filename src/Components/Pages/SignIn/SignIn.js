import { Button } from '../../Button';
import './SignIn.css';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';

const SignIn = () => {
    const {
        user,
        signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/sign-in';

    console.log(location.state);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((response) => { history.push(redirect_uri); })
    }
    useEffect(() => {
        if (user.email) {
            history.push(redirect_uri);
        }
    }, [history, redirect_uri, user.email]);

    return (
        <div className="signin">
            <section className="signin-container">
                <div className='input-area-btn'>
                    <h2 className='signin-heading'>
                        Sign In with</h2>
                    <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign In With Google</Button>
                </div>
            </section>
        </div >
    );
};

export default SignIn;