import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" buttonName="Сохранить">
          <input id="profile-name" className="popup__input popup__input_el_profile-name" type="text" placeholder="Имя" required minLength="2" maxLength="40" name="name"/>
          <span className="profile-name-error popup__error"></span>
          <input id="profile-job" className="popup__input popup__input_el_profile-job" type="text" placeholder="О себе" required minLength="2" maxLength="200" name="job"/>
          <span className="profile-job-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-place" title="Новое место" buttonName="Создать">
        <input id="place-name" className="popup__input popup__input_el_place-name" type="text" placeholder="Название" required minLength="2" maxLength="30" name="name"/>
        <span className="place-name-error popup__error"></span>
        <input id="image-link" className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
        <span className="image-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-avatar" title="Обновить аватар" buttonName="Сохранить">
        <input id="avatar-link" className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
        <span className="avatar-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirmation" title="Вы уверены?" buttonName="Да" />

      <ImagePopup />

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
