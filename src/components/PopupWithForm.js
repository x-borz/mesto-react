import Popup from "./Popup";

class PopupWithForm extends Popup {
  render() {
    const {name, title, isOpen, buttonName, children} = this.props;
    return (
      <section className={`popup popup_type_${name} ${isOpen? 'popup_opened' : ''}`} onMouseDown={this.handlePopupMouseDown}>
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
}

export default PopupWithForm;
