import React from "react";

function PopupWithForm(props) {
  const {name, title, isOpen, buttonName, onClose, children} = props;
  const handlePopupMouseDown = evt => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button'))
      onClose();
  }

  React.useEffect(() => {
    const handleEscClose = evt => {
      if (evt.key === 'Escape') onClose();
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen]);

  return (
    <section className={`popup popup_type_${name} ${isOpen? 'popup_opened' : ''}`} onMouseDown={handlePopupMouseDown}>
      <div className="popup__container popup__container_content_common">
        <button className="popup__close-button" type="button"></button>
        <h2 className={`popup__heading ${name === 'confirmation'? 'popup__heading_type_confirmation' : ''}`}>{title}</h2>
        <form className="popup__form popup__form_type_profile" noValidate name={name}>
          {children}
          <button className="popup__submit-button" type="submit">{buttonName}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
