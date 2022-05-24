import React from 'react';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';
import data from './data.js';
// import cardImage from './images/image 12.png';

export default function App()
{
    const cards = data.map(item => {
        return (
            <Card
                img = {item.coverImg}
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                location = {item.location}
                title = {item.title}
                price = {item.price}
            />
        )
    })


    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            {cards}
        </div>
    )
}