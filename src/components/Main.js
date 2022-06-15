function Main(props) {
  return (
    <main className="content page__section">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="src/components/App#" alt="Аватар"/>
          <button className="profile__avatar-update-button" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Имя</h1>
          <p className="profile__job">О себе</p>
          <button className="profile__button profile__button_type_edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
        </ul>
      </section>
    </main>
  );
}

export default Main;
