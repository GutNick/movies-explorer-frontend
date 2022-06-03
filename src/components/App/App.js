import React, {useState, useEffect, useCallback} from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import beatApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import "./App.css";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [allMovies, setAllMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [findMovies, setFindMovies] = useState([]);
  const [findSavedMovies, setFindSavedMovies] = useState([]);
  const [searchComplete, setSearchComplete] = useState(true);
  const [informationPopup, setInformationPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      handleGetUser();
      handleGetSavedMovies();
    }
    if (localStorage.getItem('allMovies') !== null) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    }
  }, []);

  useEffect(() => {
    if (!searchComplete) {
      handleGetAllMovies();
    }
  }, [searchComplete])

  useEffect(() => {
    if (allMovies.length > 0 && localStorage.getItem('searchValue')) {
      filterMovies(allMovies, setFindMovies);
      setIsLoading(false);
    }
  }, [allMovies])

  function handleGetAllMovies() {
    if (localStorage.getItem('allMovies') !== null) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    } else {
      beatApi.getAllMovies()
        .then((movies) => {
          setAllMovies(movies);
          return movies;
        })
        .then((movies) => {
          const allMovies = JSON.stringify(movies);
          localStorage.setItem('allMovies', allMovies);
        })
        .catch((err) => {
          console.log(err);
          setInformationPopup(true);
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          setIsLoading(false);
        })
    }
  }
  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res.data]);
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        console.log(errMessage)
        setInformationPopup(true);
        setErrorMessage(errMessage.message);
        setIsLoading(false);
      })
  }

  function handleDeleteMovie(id) {
    mainApi.removeMovie(id)
      .then(() => {
        handleGetSavedMovies();
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        console.log(errMessage)
        setInformationPopup(true);
        setErrorMessage(errMessage.message);
        setIsLoading(false);
      })
  }

  function filterMovies(movies, setState) {
    setSearchComplete(false);
    const searchValue = localStorage.getItem('searchValue').toLowerCase();
    const shortMovies = localStorage.getItem('shortMovies');
    shortMovies === "true" ?
      setState(movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue) && movie.duration <= 40;
      })) :
      setState(movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue) && movie.duration > 40;
      }));
    setSearchComplete(true);
  }

  function filterMoviesByDuration(movies, setState, searchValue) {
    setSearchComplete(false);
    const shortMovies = localStorage.getItem('shortMovies');
    shortMovies === "true" ?
      setState(movies.filter((movie) => {
        return searchValue !== '' ? movie.nameRU.toLowerCase().includes(searchValue) && movie.duration <= 40 : movie.duration <= 40;
      })) :
      setState(movies.filter((movie) => {
        return searchValue !== '' ? movie.nameRU.toLowerCase().includes(searchValue) && movie.duration > 40 : movie.duration > 40;
      }));
    setIsLoading(false)
    setSearchComplete(true);
  }

  function handleGetSavedMovies() {
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        setInformationPopup(true);
        setErrorMessage(errMessage.message);
        setIsLoading(false);
      })
  }

  function handleLoginUser(email, password) {
    mainApi.login(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .then(() => {
        handleGetUser();
      })
      .then(() => {
        handleGetSavedMovies();
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        if (errMessage.statusCode === 400) {
          setErrorMessage(errMessage.validation.body.message);
        } else {
          setErrorMessage(errMessage.message);
        }
        setInformationPopup(true);
        setIsLoading(false);
      })
  }

  function handleRegisterUser(email, password, name) {
    mainApi.register(email, password, name)
      .then(() => {
        handleLoginUser(email, password)
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        if (errMessage.statusCode === 400) {
          setErrorMessage(errMessage.validation.body.message);
        } else {
          setErrorMessage(errMessage.message);
        }
        setInformationPopup(true);
        setIsLoading(false);
      })
  }

  function handleGetUser() {
    mainApi.getUser()
      .then((res) => {
        const {name, email} = res.data;
        setCurrentUser({name, email});
        setLoggedIn(true);
        (location.pathname === '/signup' || location.pathname === '/signin') ? history.push('/movies') : history.push(location.pathname);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('searchValue');
    setLoggedIn(false);
    setCurrentUser({});
    setAllMovies([]);
    setSavedMovies([]);
    setFindMovies([]);
  }

  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then((res) => {
        setCurrentUser(res);
        setInformationPopup(true);
        setErrorMessage('Данные были успешно изменены');
        setIsLoading(false);
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.message)
        setInformationPopup(true);
        setErrorMessage(errMessage.message);
        setIsLoading(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            searchMovies={filterMovies}
            component={Movies}
            allMovies={allMovies}
            isLoading={isLoading}
            findMovies={findMovies}
            handleSaveMovie={handleSaveMovie}
            savedMovies={savedMovies}
            deleteMovie={handleDeleteMovie}
            setIsLoading={setIsLoading}
            setSearchComplete={setSearchComplete}
            setFindMovies={setFindMovies}
            informationPopup={informationPopup}
            errorMessage={errorMessage}
            setInformationPopup={setInformationPopup}
            setErrorMessage={setErrorMessage}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            searchMovies={filterMovies}
            savedMovies={savedMovies}
            findSavedMovies={findSavedMovies}
            setFindSavedMovies={setFindSavedMovies}
            findMovies={findMovies}
            deleteMovie={handleDeleteMovie}
            setIsLoading={setIsLoading}
            setSearchComplete={setSearchComplete}
            isLoading={isLoading}
            filterMoviesByDuration={filterMoviesByDuration}
          />
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            logOut={handleLogOut}
            handleUpdateUser={handleUpdateUser}
            informationPopup={informationPopup}
            errorMessage={errorMessage}
            setInformationPopup={setInformationPopup}
            setErrorMessage={setErrorMessage}
          />
          <Route path="/signin">
            <Login
              onLogin={handleLoginUser}
              informationPopup={informationPopup}
              errorMessage={errorMessage}
              setInformationPopup={setInformationPopup}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegisterUser}
              informationPopup={informationPopup}
              errorMessage={errorMessage}
              setInformationPopup={setInformationPopup}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
