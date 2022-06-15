import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Name");
  const [userDescription, setUserDescription] = React.useState("Job");
  const [userAvatar, setUserAvatar] = React.useState("#");
  const [cards, setCards] = React.useState([]);
  let userId = "";

  React.useEffect(() => {
    api.getUserInfo()
      .then(({_id, name, about, avatar}) => {
        userId = _id;
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch(err => console.log(err));

    api.getInitialCards()
      .then(initCards => setCards(initCards))
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content page__section">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
          <button className="profile__avatar-update-button" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button className="profile__button profile__button_type_edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map(({_id, name, link, likes}) => (
            <Card cardId={_id} name={name} link={link} likesCount={likes.length}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
