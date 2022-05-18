import React from 'react';
import airbnbLogo from '../../images/airbnb 1.png';

const Navbar = () => {
    return (
        <nav>
            <img className='.nav--logo' src={airbnbLogo} alt="airbnb logo"/>
        </nav>
    ) 
}

export default Navbar;