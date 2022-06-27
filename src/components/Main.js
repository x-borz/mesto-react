import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main(props) {
  const {cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete} = props;
  const {name, about, avatar} = React.useContext(CurrentUserContext);

  return (
    <main className="content page__section">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={avatar} alt="Аватар"/>
          <button className="profile__avatar-update-button" type="button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{name}</h1>
            <button className="profile__button profile__button_type_edit" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{about}</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map(card => (
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
