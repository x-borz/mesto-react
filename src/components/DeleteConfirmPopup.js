import PopupWithForm from "./PopupWithForm";
import React from "react";

function DeleteConfirmPopup(props) {
  const {isOpen, isBusy, onClose, onDeletePlace} = props;
  const handleSubmit = evt => {
    evt.preventDefault();
    onDeletePlace();
  };

  return (
    <PopupWithForm name="confirmation" title="Вы уверены?" buttonName="Да" isOpen={isOpen} isBusy={isBusy} onClose={onClose} onSubmit={handleSubmit}/>
  );
}

export default DeleteConfirmPopup;
