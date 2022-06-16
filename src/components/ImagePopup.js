import Popup from "./Popup";

class ImagePopup extends Popup {
  render() {
    const {card} = this.props;
    return (
      <section className={`popup popup_type_image ${card? 'popup_opened' : ''}`} onMouseDown={this.handlePopupMouseDown}>
        <div className="popup__container popup__container_content_image">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__img" src={card? card.link : '#'} alt={card? card.name : ''}/>
            <figcaption className="popup__caption">{card? card.name : ''}</figcaption>
          </figure>
        </div>
      </section>
    );
  }
}

export default ImagePopup;
