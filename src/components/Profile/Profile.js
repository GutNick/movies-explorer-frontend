import React, {useEffect} from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import InformationPopup from "../InformationPopup/InformationPopup";
import "./Profile.css";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(true);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
      props.handleUpdateUser(name, email);
      setIsUpdateDisabled(true);
  }

  function validation(e) {
    if (e.target.name === "name") {
      e.target.validity.patternMismatch ? setErrorName('Можно использовать только латиницу, кириллицу, пробел или дефис.') : setErrorName(e.target.validationMessage);
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
      setErrorEmail(e.target.validationMessage);
    }
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsUpdateDisabled(true);
    }  else if (errorName !== "" || errorEmail !== "") {
      setIsUpdateDisabled(true);
    } else {
      setIsUpdateDisabled(false);
    }
  }, [name, email])

  return (
    <>
    <Header
      loggedIn={props.loggedIn}
    />
    <section className="profile">
      <h1 className="profile__title">
        {`Привет, ${currentUser.name}!`}
      </h1>
      <form action="" className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__input-label">
          <p className="profile__input-title">Имя</p>
          <input type="text" className="profile__input" name="name" value={name} required onChange={validation} pattern="[A-Za-zА-Яа-яЁё\s]+" minLength="2" maxLength="30"/>
          <span className="profile__form-error">{errorName}</span>
        </label>
        <div className="profile__input-separator"></div>
        <label className="profile__input-label">
          <p className="profile__input-title">E-mail</p>
          <input type="email" className="profile__input" name="email" value={email} required onChange={validation}/>
          <span className="profile__form-error">{errorEmail}</span>
        </label>
        <input type="submit" className="profile__form-submit" value="Редактировать" disabled={isUpdateDisabled}/>
      </form>
      <Link to="/" className="profile__exit-link" onClick={props.logOut}>Выйти из аккаунта</Link>
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

export default Profile;