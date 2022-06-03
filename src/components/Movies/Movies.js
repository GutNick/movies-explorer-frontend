import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import InformationPopup from "../InformationPopup/InformationPopup";
import "./Movies.css";

function Movies(props) {

  return (
    <>
      <Header
        loggedIn={props.loggedIn}
      />
      <section className="movies">
        <SearchForm
          searchMovies={props.searchMovies}
          setIsLoading={props.setIsLoading}
          setSearchComplete={props.setSearchComplete}
          allMovies={props.allMovies}
          isSavedMovies={false}
          setFindMovies={props.setFindMovies}
        />
        <Preloader
          isLoading={props.isLoading}
        />
        <MoviesCardList
          isLoading={props.isLoading}
          findMovies={props.findMovies}
          handleSaveMovie={props.handleSaveMovie}
          isSavedMovies={false}
          savedMovies={props.savedMovies}
          deleteMovie={props.deleteMovie}
        />
      </section>
      <Footer/>
      <InformationPopup
        informationPopup={props.informationPopup}
        errorMessage={props.errorMessage}
        setInformationPopup={props.setInformationPopup}
        setErrorMessage={props.setErrorMessage}
      />
    </>
  )
}

export default Movies;