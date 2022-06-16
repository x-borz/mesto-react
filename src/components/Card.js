import React from "react";

function Card(props) {
  const {card, onCardClick} = props;
  const handleClick = () => onCardClick(card);

  return (
    <li className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick}/>
      <h2 className="element__title">{card.name}</h2>
      <button className="element__like-button" type="button"></button>
      <span className="element__like-counter">{card.likes.length}</span>
      <button className="element__drop-button" type="button"></button>
    </li>
  );
}

export default Card;
