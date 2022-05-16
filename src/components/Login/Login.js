import React, {useState} from "react";
import SignHeader from "../SignHeader/SignHeader";
import SignForm from "../SignForm/SignForm";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
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
      >
        <label className="sign-form__label">
          <p className="sign-form__input-title">E-mail</p>
          <input className="sign-form__input sign-form__input_input_email" id="sign-form__email" name="userEmail" type="text"
                 required onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
          <span id="sign-form__email-error" className="sign-form__error"></span>
        </label>
        <label className="sign-form__label">
          <p className="sign-form__input-title">Пароль</p>
          <input className="sign-form__input sign-form__input_input_password" id="sign-form__password" name="userPassword" type="password"
                 required onChange={(e) => setPassword(e.target.value)} value={password || ''}/>
          <span id="sign-form__password-error" className="sign-form__error"></span>
        </label>
      </SignForm>
    </section>
  )
}

export default Login;