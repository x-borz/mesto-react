import Popup from "./Popup";

class PopupWithForm extends Popup {
  render() {
    return (
      <section className={`popup popup_type_${this.props.name} ${this.props.isOpen? 'popup_opened' : ''}`} onMouseDown={this.handlePopupMouseDown}>
        <div className="popup__container popup__container_content_common">
          <button className="popup__close-button" type="button"></button>
          <h2 className={`popup__heading ${this.props.name === 'confirmation' && 'popup__heading_type_confirmation'}`}>{this.props.title}</h2>
          <form className="popup__form popup__form_type_profile" noValidate name={this.props.name}>
            {this.props.children}
            <button className="popup__submit-button" type="submit">{this.props.buttonName}</button>
          </form>
        </div>
      </section>
    );
  }
}

export default PopupWithForm;
