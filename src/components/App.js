import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import React from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
import FormValidator from "../utils/FormValidator";
import {validParams} from "../utils/utils";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cardForDelete, setCardForDelete] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isBusy, setBusy] = React.useState(false);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardDeleteClick = card => setCardForDelete(card);
  const handleCardClick = card => setSelectedCard(card);
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setCardForDelete(null)
  }
  const handleUpdateUser = body => {
    setBusy(true);
    api.updateUserInfo(body)
      .then(user => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setBusy(false));
  }
  const handleUpdateAvatar = link => {
    setBusy(true);
    api.updateAvatar(link)
      .then(user => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setBusy(false));
  }
  const handleCardLike = card => {
    const isCardLiked = card.likes.some(item => currentUser._id === item._id);
    api.setLikeStatus(card._id, !isCardLiked)
      .then(newCard => {
        const newCards = cards.map(c => {
          return c._id === card._id? newCard : c
        })
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }
  const handleCardDelete = () => {
    setBusy(true);
    api.dropCard(cardForDelete._id)
      .then(() => {
        setCards(cards.filter(c => cardForDelete._id !== c._id));
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setBusy(false));
  }
  const handleAddPlace = body => {
    setBusy(true);
    api.addCard(body)
      .then(card => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setBusy(false));
  }

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard || cardForDelete;

  React.useEffect(() => {
    const handleEscClose = evt => {
      if (evt.key === 'Escape') closeAllPopups();
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(initCards => setCards(initCards))
      .catch(err => console.log(err));
  }, []);

  const validators = {};
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(formElement => {
      const validator = new FormValidator(validParams, formElement);
      const formName = formElement.getAttribute('name');
      validators[formName] = validator;
      validator.enableValidation();
    });
  }

  enableValidation();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDeleteClick={handleCardDeleteClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isBusy={isBusy}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          validator={validators['profile']}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isBusy={isBusy}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          validator={validators['new-avatar']}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isBusy={isBusy}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          validator={validators['new-place']}
        />
        <DeleteConfirmPopup
          isOpen={!!cardForDelete}
          isBusy={isBusy}
          onClose={closeAllPopups}
          onDeletePlace={handleCardDelete}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
