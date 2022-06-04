import React, {useEffect, useState} from "react";
import SignHeader from "../SignHeader/SignHeader";
import SignForm from "../SignForm/SignForm";
import InformationPopup from "../InformationPopup/InformationPopup";
import { isEmail } from 'validator';
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  useEffect(() => {
    if (email !== "" && password !== "") {
      if (errorPassword !=="" || errorEmail !=="") {
        setIsSubmitDisabled(true)
      } else {
        setIsSubmitDisabled(false)
      }
    } else {
      setIsSubmitDisabled(true)
    }
  }, [email, password])

  function validation(e) {
    if (e.target.name === "userEmail") {
      isEmail(e.target.value) ? setErrorEmail(e.target.validationMessage) : setErrorEmail('Введите валидный email');
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
      setErrorPassword(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <>
    <section className="login">
      <SignHeader
        title="Рады видеть!"
        />
      <SignForm
        buttonTitle="Войти"
        descriptionText="Ещё не зарегистрированы?"
        descriptionLink="/signup"
        descriptionLinkText="Регистрация"
        onSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
      >
        <label className="sign-form__label">
          <p className="sign-form__input-title">E-mail</p>
          <input className="sign-form__input sign-form__input_input_email" id="sign-form__email" name="userEmail" type="email"
                 required onChange={validation} autoComplete="on"/>
          <span id="sign-form__email-error" className="sign-form__error">{errorEmail}</span>
        </label>
        <label className="sign-form__label">
          <p className="sign-form__input-title">Пароль</p>
          <input className="sign-form__input sign-form__input_input_password" id="sign-form__password" name="userPassword" type="password"
                 required onChange={validation} autoComplete="on" minLength="8"/>
          <span id="sign-form__password-error" className="sign-form__error">{errorPassword}</span>
        </label>
      </SignForm>
    </section>
      <InformationPopup
        informationPopup={props.informationPopup}
        errorMessage={props.errorMessage}
        setInformationPopup={props.setInformationPopup}
        setErrorMessage={props.setErrorMessage}
      />
    </>
  )
}

export default Login;