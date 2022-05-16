import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return(
    <section className="movies-card-list">
      <div className="movies-card-list__content">
        <ul className="movies-card-list__items">
          <MoviesCard/>
        </ul>
      </div>
      <div className="movies-card-list__more">
        <button className="movies-card-list__more-button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;