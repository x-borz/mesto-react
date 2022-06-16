import React from "react";

function ImagePopup(props) {
  const {card, onClose} = props;
  const handlePopupMouseDown = evt => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button'))
      onClose();
  }

  return (
    <section className={`popup popup_type_image ${card? 'popup_opened' : ''}`} onMouseDown={handlePopupMouseDown}>
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

export default ImagePopup;
