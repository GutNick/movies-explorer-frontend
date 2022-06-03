import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";

function SavedMovies(props) {
  return (
    <>
      <Header
        loggedIn={props.loggedIn}
      />
      <section className="saved-movies">
        <SearchForm
          searchMovies={props.searchMovies}
          isLoading={props.isLoading}
          findMovies={props.findMovies}
          isSavedMovies={true}
          allMovies={props.savedMovies}
          setIsLoading={props.setIsLoading}
          setSearchComplete={props.setSearchComplete}
          setFindSavedMovies={props.setFindSavedMovies}
          filterMoviesByDuration={props.filterMoviesByDuration}
        />
        <Preloader
          isLoading={props.isLoading}
        />
        <MoviesCardList
          isLoading={props.isLoading}
          findMovies={props.findSavedMovies}
          setFindSavedMovies={props.setFindSavedMovies}
          savedMovies={props.savedMovies}
          isSavedMovies={true}
          deleteMovie={props.deleteMovie}
        />
      </section>
      <Footer/>
    </>
  )
}

export default SavedMovies;