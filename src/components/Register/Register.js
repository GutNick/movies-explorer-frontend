import React, {useEffect, useState} from "react";
import SignHeader from "../SignHeader/SignHeader";
import SignForm from "../SignForm/SignForm";
import "./Register.css";
import InformationPopup from "../InformationPopup/InformationPopup";
import { isEmail } from 'validator';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  useEffect(() => {
    if (name !== "" && email !== "" && password !== "") {
      if (errorPassword !=="" || errorEmail !=="" || errorName !=="") {
        setIsSubmitDisabled(true)
      } else {
        setIsSubmitDisabled(false)
      }
    } else {
      setIsSubmitDisabled(true)
    }
  }, [name, email, password])

  function validation(e) {
    if (e.target.name === "userEmail") {
      isEmail(e.target.value) ? setErrorEmail(e.target.validationMessage) : setErrorEmail('Введите валидный email');
      setEmail(e.target.value);
    } else if (e.target.name === "userName") {
      e.target.validity.patternMismatch ? setErrorName('Можно использовать только латиницу, кириллицу, пробел или дефис.') : setErrorName(e.target.validationMessage);
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
      setErrorPassword(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password, name);
  }

  return (
    <>
      <section className="register">
        <SignHeader
          title="Добро пожаловать!"
        />
        <SignForm
          buttonTitle="Зарегистрироваться"
          descriptionText="Уже зарегистрированы?"
          descriptionLink="/signin"
          descriptionLinkText="Войти"
          onSubmit={handleSubmit}
          isSubmitDisabled={isSubmitDisabled}
        >
          <label className="sign-form__label">
            <p className="sign-form__input-title">Имя</p>
            <input className="sign-form__input sign-form__input_input_namel" id="sign-form__name" name="userName"
                   type="text"
                   required onChange={validation} autoComplete="off" pattern="[A-Za-zА-Яа-яЁё\s]+" minLength="2"
                   maxLength="30"/>
            <span id="sign-form__email-error" className="sign-form__error">{errorName}</span>
          </label>
          <label className="sign-form__label">
            <p className="sign-form__input-title">E-mail</p>
            <input className="sign-form__input sign-form__input_input_email" id="sign-form__email" name="userEmail"
                   type="email"
                   required onChange={validation} value={email || ''} autoComplete="off"/>
            <span id="sign-form__email-error" className="sign-form__error">{errorEmail}</span>
          </label>
          <label className="sign-form__label">
            <p className="sign-form__input-title">Пароль</p>
            <input className="sign-form__input sign-form__input_input_password" id="sign-form__password"
                   name="userPassword" type="password"
                   required onChange={validation} value={password || ''} autoComplete="off" minLength="8"/>
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

export default Register;