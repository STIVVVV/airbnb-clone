import React from "react"
import cardImage from '../../images/image 12.png';
import starIcon from '../../images/Star 1.png';

const Card = (props) => {
    return (
        <div className='card'>
            <img src = {cardImage} className="card--image" alt="swimmer"/>
            <div className="card--stats">
                <img src = {starIcon} className="card--star" alt="star Icon"/>
                <span>5.0 </span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            
        </div>
    ) 
}

export default Card;