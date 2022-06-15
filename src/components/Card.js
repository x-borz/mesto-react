import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" key={props.card._id}>
      <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <h2 className="element__title">{props.card.name}</h2>
      <button className="element__like-button" type="button"></button>
      <span className="element__like-counter">{props.card.likes.length}</span>
      <button className="element__drop-button" type="button"></button>
    </li>
  );
}

export default Card;
