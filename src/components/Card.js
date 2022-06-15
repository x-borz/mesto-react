import React from "react";

function Card(props) {
  return (
    <li className="element" key={props.cardId}>
      <img className="element__img" src={props.link} alt={props.name}/>
      <h2 className="element__title">{props.name}</h2>
      <button className="element__like-button" type="button"></button>
      <span className="element__like-counter">{props.likesCount}</span>
      <button className="element__drop-button" type="button"></button>
    </li>
  );
}

export default Card;
