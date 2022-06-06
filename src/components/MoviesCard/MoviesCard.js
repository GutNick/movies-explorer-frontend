import React, {useEffect, useState} from "react";
import SavedIcon from "../../images/saved-icon.svg";
import DeleteButton from "../../images/delete-icon.svg";
import "./MoviesCard.css";

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [movieId, setMovieId] = useState();

  useEffect(() => {
    setSavedMovieId();
  }, [props.savedMovies])

  const handleDelete = (e) => {
    e.preventDefault();
    if (props.savedList === false) {
      props.deleteMovie(movieId);
      setIsSaved(false);
    } else {
      props.deleteMovie(props.movie._id);
    }
  };

  function timeConvert(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    return `${hours}ч ${minutes}м`
  }

  function saveMovie(e) {
    e.preventDefault();
    props.handleSaveMovie(props.movie);
  }

  function setSavedMovieId() {
    if (props.savedList === false) {
      props.savedMovies.some((item) => {
        if (item.movieId === props.movie.id) {
          setMovieId(item._id);
          setIsSaved(true);
        }
      });
    }
  }

  function isValidUrl(value){
    const matchPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    return matchPattern.test(value);
  }

  return (
      <li className="movies-card">
        <a href={isValidUrl(props.movie.trailerLink) ? props.movie.trailerLink : 'https://youtu.be/404'} className="movies-card__link" target="_blank" rel="noreferrer">
          <img src={props.savedList ? props.movie.image || 'https://st2.depositphotos.com/1560768/6162/i/950/depositphotos_61621057-stock-photo-no-image-available.jpg' : `https://api.nomoreparties.co${props.movie.image.url}` || 'https://st2.depositphotos.com/1560768/6162/i/950/depositphotos_61621057-stock-photo-no-image-available.jpg'} alt="постер к фильму" className="movies-card__thumbnail"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__name">{props.movie.nameRU || 'Нет данных'}</p>
          <p className="movies-card__duration">{timeConvert(props.movie.duration) || -1}</p>
        </div>
        {isSaved ? <img src={SavedIcon} alt="иконка сохраненного фильма" className="movies-card__saved-icon" onClick={handleDelete}/> : <button className="movies-card__save-button" onClick={saveMovie}>Сохранить</button>}
        <button className="movies-card__delete-button" onClick={handleDelete}><img src={DeleteButton} alt="кнопка удаления фильма"/></button>
      </li>
  )
}

export default MoviesCard;