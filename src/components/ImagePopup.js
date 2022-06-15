function ImagePopup(props) {
  return (
    <section className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className="popup__container popup__container_content_image">
        <button className="popup__close-button" type="button"></button>
        <figure className="popup__figure">
          <img className="popup__img" src={props.card? props.card.link : '#'} alt={props.card? props.card.name : ""}/>
          <figcaption className="popup__caption">{props.card? props.card.name : ""}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
