import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  MOVIES_TO_FIRST_RENDER_12,
  MOVIES_TO_FIRST_RENDER_8,
  MOVIES_TO_FIRST_RENDER_5,
  MOVIES_TO_NEXT_RENDER_3,
  MOVIES_TO_NEXT_RENDER_2
} from "../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const [renderLimit, setRenderLimit] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    rateLimit();
  }, []);

  function rateLimit() {
    if (windowWidth >= 1024) {
      setRenderLimit(MOVIES_TO_FIRST_RENDER_12);
    } else if (windowWidth >= 650 && windowWidth < 1024) {
      setRenderLimit(MOVIES_TO_FIRST_RENDER_8);
    } else if (windowWidth < 650) {
      setRenderLimit(MOVIES_TO_FIRST_RENDER_5);
    }
  }

  function resize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    setTimeout(rateLimit, 1000);
  }, [windowWidth])

  window.addEventListener('resize', resize);

  function addRenderLimit() {
    if (windowWidth >= 1024) {
      setRenderLimit(MOVIES_TO_NEXT_RENDER_3 + renderLimit);
    } else {
      setRenderLimit(MOVIES_TO_NEXT_RENDER_2 + renderLimit);
    }
  }

  return(
    <section className={`movies-card-list ${(props.isLoading || (props.searchComplete === false)) ? "movies-card-list_hidden" : ""}`}>
      <div className="movies-card-list__content">
        <ul className="movies-card-list__items">
          { localStorage.getItem('searchValue') === null || props.findMovies.length > 0 ?
            !props.isSavedMovies ? props.findMovies.slice(0, renderLimit).map((movie) => {
              return <MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                handleSaveMovie={props.handleSaveMovie}
                savedList={props.isSavedMovies}
                deleteMovie={props.deleteMovie}
                savedMovies={props.savedMovies}
              />
            }) : props.findMovies.length > 0 ?
              props.findMovies.map((movie) => {
                return <MoviesCard
                  key={movie.id || movie.movieId}
                  movie={movie}
                  handleSaveMovie={props.handleSaveMovie}
                  savedList={props.isSavedMovies}
                  deleteMovie={props.deleteMovie}
                  savedMovies={props.savedMovies}
                />
              }) :
            <p className="movies-card-list__information">Ничего не найдено</p> :
            <p className="movies-card-list__information">Ничего не найдено</p>
          }
        </ul>
      </div>
      {
        renderLimit < props.findMovies.length && !props.isSavedMovies ?
          <div className="movies-card-list__more">
            <button className="movies-card-list__more-button" onClick={addRenderLimit}>Ещё</button>
          </div> :
          ''
      }
    </section>
  )
}

export default MoviesCardList;