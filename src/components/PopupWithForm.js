function PopupWithForm(props) {
  console.log(props.children);
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_content_common">
        <button className="popup__close-button" type="button"></button>
        <h2 className={`popup__heading ${props.name === 'confirmation' && 'popup__heading_type_confirmation'}`}>{props.title}</h2>
        <form className="popup__form popup__form_type_profile" noValidate name={props.name}>
          {props.children}
          <button className="popup__submit-button" type="submit">{props.buttonName}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
