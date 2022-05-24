import React from "react"

const Card = (props) => {
    return (
        <div className='card'>
            <img src = {`/images/${props.img}`} className="card--image" alt="image"/>
            <div className="card--stats">
                <img src = {"/images/Star.png"} className="card--star" alt="star Icon"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount}* </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    ) 
}

export default Card;