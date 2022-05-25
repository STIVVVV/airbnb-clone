import React from 'react';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';
import data from './data.js';

export default function App()
{
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })


    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <section className='cards-list'>
                {cards}
            </section>
        </div>
    )
}