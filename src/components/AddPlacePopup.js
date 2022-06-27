import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const {isOpen, onClose, onAddPlace} = props;
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const handleChange = evt => {
    const setter = evt.target.id === 'place-name'? setName : setLink;
    setter(evt.target.value);
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm name="new-place" title="Новое место" buttonName="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input id="place-name" className="popup__input popup__input_el_place-name" type="text" placeholder="Название" required minLength="2" maxLength="30" name="name" value={name} onChange={handleChange}/>
      <span className="place-name-error popup__error"></span>
      <input id="image-link" className="popup__input popup__input_el_image-link" type="url" placeholder="Ссылка на картинку" required name="link" value={link} onChange={handleChange}/>
      <span className="image-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
