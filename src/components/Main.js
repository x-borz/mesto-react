import React from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main(props) {
  const {onEditAvatar, onEditProfile, onAddPlace, onCardClick} = props;
  const [cards, setCards] = React.useState([]);
  const {_id: userId, name, about, avatar} = React.useContext(CurrentUserContext);

  const handleCardLike = card => {
    const isCardLiked = card.likes.some(item => userId === item._id);
    api.setLikeStatus(card._id, !isCardLiked)
      .then(newCard => {
        const newCards = cards.map(c => {
          return c._id === card._id? newCard : c
        })
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  const handleCardDelete = card => {
    api.dropCard(card._id)
      .then(() => {
        setCards(cards.filter(c => card._id !== c._id));
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then(initCards => setCards(initCards))
      .catch(err => console.log(err));
  }, []);

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
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
