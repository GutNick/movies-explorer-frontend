import React from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../images/logo.svg";
import ProfileIcon from "../../images/ProfileIcon.svg"
import "./Header.css";

function Header(props) {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  function handleToggleBurger() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <header className="header">
      <Link to='/' className="header__logo-link"><img className="header__logo" src={Logo} alt="Логотип"/></Link>
      {props.loggedIn ?
        <>
          <nav className="header__nav">
            <NavLink to="/movies" className="header__link" activeClassName="header__link_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__link" activeClassName="header__link_active">Сохранённые
              фильмы</NavLink>
          </nav>
          <div className="header__buttons">
            <Link to='/profile' className="header__button header__button_type_account">Аккаунт
              <span className="header__icon">
            <img src={ProfileIcon} alt="Иконка профиля"/>
          </span>
            </Link>
          </div>
          <button className="header__button_type_burger" onClick={handleToggleBurger}></button>
          <div className={`header__burger ${isBurgerOpen ? "header__burger_open" : ""}`}>
            <div className="header__burger-container">
              <button className="header__button_type_burger-close" onClick={handleToggleBurger}></button>
              <nav className="header__nav-burger">
                <NavLink exact to="/" className="header__link-burger"
                         activeClassName="header__link-burger_active">Главная</NavLink>
                <NavLink to="/movies" className="header__link-burger"
                         activeClassName="header__link-burger_active">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="header__link-burger"
                         activeClassName="header__link-burger_active">Сохранённые
                  фильмы</NavLink>
                <Link to='/profile' className="header__button header__button_type_account">Аккаунт
                  <span className="header__icon">
        <img src={ProfileIcon} alt="Иконка профиля"/>
        </span>
                </Link>
              </nav>
            </div>
          </div>
        </> :
        <div className="header__buttons">
          <Link to='/signup' className="header__button header__button_type_register">Регистрация</Link>
          <Link to='/signin' className="header__button header__button_type_login">Войти</Link>
        </div>
      }
    </header>
  )
}

export default Header;