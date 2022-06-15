import Popup from "./Popup";

class ImagePopup extends Popup {
  render() {
    return (
      <section className={`popup popup_type_image ${this.props.card? 'popup_opened' : ''}`} onMouseDown={this.handlePopupMouseDown}>
        <div className="popup__container popup__container_content_image">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__img" src={this.props.card && this.props.card.link} alt={this.props.card && this.props.card.name}/>
            <figcaption className="popup__caption">{this.props.card && this.props.card.name}</figcaption>
          </figure>
        </div>
      </section>
    );
  }
}

export default ImagePopup;
