import React from "react";
import "./InformationPopup.css"

function InformationPopup(props) {
  function closePopup () {
    props.setInformationPopup(false);
    props.setErrorMessage('');
  }
  return (
    <div className={`information-popup ${props.informationPopup ? '' : 'information-popup_hidden'}`}>
      <div className="information-popup__content">
        <p className="information-popup__message">{props.errorMessage}</p>
        <button className="information-popup__confirm-button" onClick={closePopup}>Закрыть</button>
      </div>
    </div>
  )
}

export default InformationPopup;