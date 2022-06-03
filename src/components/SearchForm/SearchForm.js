import React, {useEffect} from "react";
import {useState} from "react";
import Scope from "../../images/scope-icon.svg";
import Submit from "../../images/submit-button.svg";
import "./SearchForm.css";

function SearchForm(props) {
  const [checked, setChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  function handleInputChange(e) {
    const input = e.target;
    setSearchValue(input.value);
    setError('');
  }

  useEffect(() => {
    if (localStorage.getItem('shortMovies')) {
      localStorage.getItem('shortMovies') === "true" ?
        setChecked(true) :
        setChecked(false);
    } else {
      localStorage.setItem('shortMovies', checked.toString());
    }
    if (localStorage.getItem('searchValue')) {
      if (!props.isSavedMovies) {
        setSearchValue(localStorage.getItem('searchValue'))
        props.searchMovies(props.allMovies, props.setFindMovies)
      } else {
        setSearchValue('')
      }
    }
  }, [])

  useEffect(() => {
    if (props.isSavedMovies) {
      props.filterMoviesByDuration(props.allMovies, props.setFindSavedMovies, searchValue);
    }
  }, [props.allMovies])

  useEffect(() => {
    localStorage.setItem('shortMovies', checked.toString());
  }, [checked])

  useEffect(() => {
    if (localStorage.getItem('searchValue')) {
      if (!props.isSavedMovies) {
        setSearchValue(localStorage.getItem('searchValue'))
        props.searchMovies(props.allMovies, props.setFindMovies)
      }
    }
    if (props.isSavedMovies) {
      props.filterMoviesByDuration(props.allMovies, props.setFindSavedMovies, searchValue);
    }
  }, [checked])

  function search(evt) {
    evt.preventDefault();
    if (searchValue === '') {
      props.isSavedMovies ?
        props.filterMoviesByDuration(props.allMovies, props.setFindSavedMovies, searchValue) :
      setError('Нужно ввести ключевое слово');
      return;
    }
    props.setIsLoading(true);
    props.setSearchComplete(false);
    if (props.isSavedMovies) {
      props.filterMoviesByDuration(props.allMovies, props.setFindSavedMovies, searchValue);
    } else {
      localStorage.setItem('searchValue', searchValue);
    }
  }

  return (
    <section className="search-form">
      <form action="" className="search-form__form" onSubmit={search}>
        <input type="text" className="search-form__input search-form__input_search" placeholder="Фильм"
               onChange={handleInputChange} value={searchValue || ''}/>
        <span className="search-form__error">{error}</span>
        <div className="search-form__short-movies">
          <input type="checkbox"
                 id="search-form__checkbox"
                 className="search-form__checkbox"
                 name="short-movies"
                 checked={checked}
                 onChange={() => setChecked(!checked)}/>
          <label htmlFor="search-form__checkbox" className="search-form__checkbox-label"></label>
          <p className="search-form__checkbox-description">Короткометражки</p>
        </div>
        <img src={Scope} alt="scope" className="search-form__scope"/>
        <button className="search-form__submit"><img src={Submit} alt="arrow" className="search-form__submit-icon"/>
        </button>
      </form>
    </section>
  )
}

export default SearchForm;