import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

function Movies() {

  return (
    <>
      <Header/>
      <section className="movies">
        <SearchForm/>
        <Preloader/>
        <MoviesCardList/>
      </section>
      <Footer/>
    </>
  )
}

export default Movies;