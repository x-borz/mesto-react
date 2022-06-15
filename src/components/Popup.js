import React from "react";

class Popup extends React.Component {
  handlePopupMouseDown = evt => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button'))
      this.props.onClose();
  }

  handleEscClose = evt => {
    if (evt.key === 'Escape') {
      this.props.onClose();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscClose);
  }
}

export default Popup;
