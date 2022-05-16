import React from "react";
import First from "../../images/thumbnails/1.png";
import Second from "../../images/thumbnails/2.png";
import Third from "../../images/thumbnails/3.png";
import Forth from "../../images/thumbnails/4.png";
import Fifth from "../../images/thumbnails/5.png";
import Sixth from "../../images/thumbnails/6.png";
import Seventh from "../../images/thumbnails/7.png";
import Eights from "../../images/thumbnails/8.png";
import Nines from "../../images/thumbnails/9.png";
import SavedIcon from "../../images/saved-icon.svg";
import DeleteButton from "../../images/delete-icon.svg";
import "./MoviesCard.css";

function MoviesCard() {
  const handleToggle = (e) => {
    e.preventDefault();
    e.target.closest('.movies-card').classList.toggle("movies-card_saved");
  };
  const handleDelete = (e) => {
    e.preventDefault();
    e.target.closest('.movies-card').remove();
  };
  return (
    <>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={First} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">33 слова о дизайне</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Second} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Киноальманах «100 лет дизайна»</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Third} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">В погоне за Бенкси</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Forth} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Баския: Взрыв реальности</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Fifth} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Бег это свобода</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Sixth} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Книготорговцы</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Seventh} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Когда я думаю о Германии ночью</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Eights} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Gimme Danger: История Игги и The Stooges</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
      <li className="movies-card">
        <a href="https://youtube.com" className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={Nines} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">Дженис: Маленькая девочка грустит</p>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <button className="movies-card__save-button" onClick={handleToggle}>Сохранить</button>
        <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon"/>
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
    </>
  )
}

export default MoviesCard;