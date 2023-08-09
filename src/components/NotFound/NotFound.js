import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Link to='/'>
            <img className='lg:max-w-6 lg:mx-auto' src="assets/404-error.jpg" alt="" />
        </Link>
    );
};

export default NotFound;