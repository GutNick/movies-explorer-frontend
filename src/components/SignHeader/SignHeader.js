import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";
import "./SignHeader.css";

function SignHeader(props) {
  return (
    <div className="sign-header__header">
      <Link to='/' className="sign-header__logo-link"><img className="sign-header__logo" src={Logo} alt="Логотип"/></Link>
      <h1 className="sign-header__title">{props.title}</h1>
    </div>
  )
}

export default SignHeader;