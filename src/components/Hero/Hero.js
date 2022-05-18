import React from 'react';
import groupPic from '../../images/Group 77.png';

const Hero = () => {
    return (
        <section className='hero'>
            <img className='hero--photo' src={groupPic} alt="group pictures"/>

            <h1 className='hero--header'>Online experiances</h1>
            <p className='hero--text'>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    ) 
}

export default Hero;