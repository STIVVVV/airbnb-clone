import React from "react"

const Card = (props) => {
    let badgeText
    if(props.item.openSpots === 0 )
    {
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online")
    {
        badgeText = "Online"
    }

    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {`/images/${props.item.coverImg}`} className="card--image" alt="card-header-i"/>
            <div className="card--stats">
                <img src = {"/images/Star.png"} className="card--star" alt="star Icon"/>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.stats.rating}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price">
                <span className="bold">From {props.item.price}</span> / person
            </p>
        </div>
    ) 
}

export default Card;