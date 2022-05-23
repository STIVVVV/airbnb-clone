import React from "react"
import starIcon from '../../images/Star 1.png';

const Card = (props) => {
    return (
        <div className='card'>
            <img src = {props.img} className="card--image" alt="swimmer"/>
            <div className="card--stats">
                <img src = {starIcon} className="card--star" alt="star Icon"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount}* </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    ) 
}

export default Card;