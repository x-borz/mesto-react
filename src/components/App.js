import Header from './Header';
import Main from './Main';
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <section className="popup popup_type_profile">
        <div className="popup__container popup__container_content_common">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_profile" noValidate name="profile">
            <input id="profile-name" className="popup__input popup__input_el_profile-name" type="text" placeholder="Имя"
                   required minLength="2" maxLength="40" name="name"/>
            <span className="profile-name-error popup__error"></span>
            <input id="profile-job" className="popup__input popup__input_el_profile-job" type="text"
                   placeholder="О себе" required minLength="2" maxLength="200" name="job"/>
            <span className="profile-job-error popup__error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_new-place">
        <div className="popup__container popup__container_content_common">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__heading">Новое место</h2>
          <form className="popup__form popup__form_type_new-place" noValidate name="new-place">
            <input id="place-name" className="popup__input popup__input_el_place-name" type="text"
                   placeholder="Название" required minLength="2" maxLength="30" name="name"/>
            <span className="place-name-error popup__error"></span>
            <input id="image-link" className="popup__input popup__input_el_image-link" type="url"
                   placeholder="Ссылка на картинку" required name="link"/>
            <span className="image-link-error popup__error"></span>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_confirmation">
        <div className="popup__container popup__container_content_common">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__heading popup__heading_type_confirmation">Вы уверены?</h2>
          <button className="popup__submit-button" type="button">Да</button>
        </div>
      </section>

      <section className="popup popup_type_new-avatar">
        <div className="popup__container popup__container_content_common">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__heading">Обновить аватар</h2>
          <form className="popup__form popup__form_type_new-avatar" noValidate name="new-avatar">
            <input id="avatar-link" className="popup__input popup__input_el_image-link" type="url"
                   placeholder="Ссылка на картинку" required name="link"/>
            <span className="avatar-link-error popup__error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_image">
        <div className="popup__container popup__container_content_image">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__img" src="src/components/App#" alt="Заполнить"/>
            <figcaption className="popup__caption">Заполнить</figcaption>
          </figure>
        </div>
      </section>

      <template className="card-template">
        <li className="element" id="">
          <img className="element__img" src="src/components/App#" alt="Заполнить"/>
          <h2 className="element__title">Заполнить</h2>
          <button className="element__like-button" type="button"></button>
          <span className="element__like-counter">0</span>
          <button className="element__drop-button" type="button"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
