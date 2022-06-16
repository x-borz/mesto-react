import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="profile-name" className="popup__input popup__input_el_profile-name" type="text" placeholder="Имя" required minLength="2" maxLength="40" name="name"/>
        <span className="profile-name-error popup__error"></span>
        <input id="profile-job" className="popup__input popup__input_el_profile-job" type="text" placeholder="О себе" required minLength="2" maxLength="200" name="job"/>
        <span className="profile-job-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-place" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="place-name" className="popup__input popup__input_el_place-name" type="text" placeholder="Название" required minLength="2" maxLength="30" name="name"/>
        <span className="place-name-error popup__error"></span>
        <input id="image-link" className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
        <span className="image-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="avatar-link" className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
        <span className="avatar-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirmation" title="Вы уверены?" buttonName="Да" onClose={closeAllPopups} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
