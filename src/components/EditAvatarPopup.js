import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const {isOpen, isBusy, onClose, onUpdateAvatar, validator} = props;
  const input = React.createRef();
  const handleSubmit = evt => {
    evt.preventDefault();
    onUpdateAvatar(input.current.value);
  }

  React.useEffect(() => {
    if (isOpen) {
      input.current.value = "";
      validator.resetValidation();
    }
  }, [isOpen]);

  return (
    <PopupWithForm name="new-avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isOpen} isBusy={isBusy} onClose={onClose} onSubmit={handleSubmit}>
      <input id="avatar-link" ref={input} className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link"/>
      <span className="avatar-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
