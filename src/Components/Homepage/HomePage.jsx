import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className='container'>
            <div className='header'> 
                <h1 className='heading'>ProLinker</h1>
                <div>
                    <button className='buttons' onClick={navigateToSignup}>Sign up</button>
                    <button className='buttons' onClick={navigateToLogin}>Login</button>
                </div>
            </div>
            <div className='leftdiv'>
                <h1>Make your way Easy.</h1>
            </div>
        </div>
    );
}

export default HomePage;
