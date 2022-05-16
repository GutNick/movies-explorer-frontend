import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
    <Header/>
    <section className="profile">
      <h1 className="profile__title">
        Привет, Виталий!
      </h1>
      <form action="" className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__input-label">
          <p className="profile__input-title">Имя</p>
          <input type="text" className="profile__input" name="name" value={name || 'Виталий'} required onChange={(e) => setName(e.target.value)}/>
        </label>
        <div className="profile__input-separator"></div>
        <label className="profile__input-label">
          <p className="profile__input-title">E-mail</p>
          <input type="email" className="profile__input" name="email" value={email || 'pochta@yandex.ru'} required onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" className="profile__form-submit" value="Редактировать" />
      </form>
      <Link to="/signin" className="profile__exit-link">Выйти из аккаунта</Link>
    </section>
    </>
  )
}

export default Profile;