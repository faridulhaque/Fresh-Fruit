import React from 'react';
import error from '../images/errorImg.png';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%', height: '100vh'}} src={error} alt="404 error"/>
            
        </div>
    );
};

export default NotFound;