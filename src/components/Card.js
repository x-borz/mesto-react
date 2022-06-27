import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const {card, onCardClick} = props;
  const handleClick = () => onCardClick(card);

  const currentUser = React.useContext(CurrentUserContext);
  const isDroppable = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(like => currentUser._id === like._id);

  return (
    <li className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick}/>
      <h2 className="element__title">{card.name}</h2>
      <button className={`element__like-button ${isLiked? 'element__like-button_active' : ''}`} type="button"></button>
      <span className="element__like-counter">{card.likes.length}</span>
      <button className={`element__drop-button ${isDroppable? '' : 'element__drop-button_hidden'}`} type="button"></button>
    </li>
  );
}

export default Card;
