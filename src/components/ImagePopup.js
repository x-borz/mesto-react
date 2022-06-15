function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <div className="popup__container popup__container_content_image">
        <button className="popup__close-button" type="button"></button>
        <figure className="popup__figure">
          <img className="popup__img" src="src/components/App#" alt="Заполнить"/>
          <figcaption className="popup__caption">Заполнить</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
