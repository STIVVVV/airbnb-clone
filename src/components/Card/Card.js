import React from "react"

const Card = (props) => {

    let badgeText
    if(props.openSpots === 0 )
    {
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online")
    {
        badgeText = "Online"
    }

    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {`/images/${props.img}`} className="card--image" alt="card-header-i"/>
            <div className="card--stats">
                <img src = {"/images/Star.png"} className="card--star" alt="star Icon"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From {props.price}</span> / person</p>
        </div>
    ) 
}

export default Card;