import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const {isOpen, closeAllPopups, onUpdateAvatar} = props;
  const input = React.createRef();
  const handleSubmit = evt => {
    evt.preventDefault();
    onUpdateAvatar(input.current.value);
  }

  return (
    <PopupWithForm name="new-avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isOpen} onClose={closeAllPopups} onSubmit={handleSubmit}>
      <input id="avatar-link" ref={input} className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
      <span className="avatar-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
