import React from "react";
import {Link} from "react-router-dom";
import "./SignForm.css";

function SignForm(props) {

  return (
    <div className="sign-form">
        <form className="sign-form__form" onSubmit={props.onSubmit}>
          {props.children}
          <button className="sign-form__button" type="submit">{props.buttonTitle}</button>
        </form>
        <p className="sign-form__description">{props.descriptionText}<Link to={props.descriptionLink} className="sign-form__link">{props.descriptionLinkText}</Link></p>
    </div>
  )
}

export default SignForm;