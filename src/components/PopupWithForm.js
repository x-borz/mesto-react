function PopupWithForm({name, title, isOpen, isLoading, buttonName, onClose, onSubmit, children}) {
  const handlePopupMouseDown = evt => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button'))
      onClose();
  }

  return (
    <section className={`popup popup_type_${name} ${isOpen? 'popup_opened' : ''}`} onMouseDown={handlePopupMouseDown}>
      <div className="popup__container popup__container_content_common">
        <button className="popup__close-button" type="button"></button>
        <h2 className={`popup__heading ${name === 'confirmation'? 'popup__heading_type_confirmation' : ''}`}>{title}</h2>
        <form className="popup__form popup__form_type_profile" name={name} onSubmit={onSubmit} noValidate>
          {children}
          <button className="popup__submit-button" type="submit">{isLoading? 'Сохранение...' : buttonName}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
