import React from 'react';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';

import cardImage from './images/image 12.png';

export default function App()
{
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card
                img = {cardImage}
                rating = "5.0"
                reviewCount = "(6)"
                county = "USA"
                title = "Life Lessons with Katies Zaferes"
                price = {136}
            />
        </div>
    )
}