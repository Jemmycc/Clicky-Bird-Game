
import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
    <div
        className="card"
        role="img"
        aria-label="click item"
        value={props.id}
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}
    />
);

export default BirdCard;