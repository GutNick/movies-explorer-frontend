import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <Header/>
      <section className="saved-movies">
        <SearchForm/>
        <Preloader/>
        <MoviesCardList/>
      </section>
      <Footer/>
    </>
  )
}

export default SavedMovies;