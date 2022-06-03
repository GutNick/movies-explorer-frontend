import {BASE_URL} from "./constants";

class MainApi {
  constructor(url) {
    this._url = url;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json()
    }
    return res.text().then(text => {throw new Error(text)})
  }

  _isValidUrl(value){
    const matchPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    return matchPattern.test(value);
  }

  register(email, password, name) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(this._handleRes)
  };

  login (email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => this._handleRes(res))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  };

  getUser() {
    const token  = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(this._handleRes)
  };

  updateUser (name, email) {
    const token  = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    })
      .then(this._handleRes)
  };

  getSavedMovies() {
    const token  = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(this._handleRes)
  };

  saveMovie(movie) {
    const token  = localStorage.getItem("jwt");
    let trailerLink;
    this._isValidUrl(movie.trailerLink) ? trailerLink = movie.trailerLink : trailerLink = 'https://youtu.be/404';
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country || 'Нет данных',
        director: movie.director || 'Нет данных',
        duration: movie.duration || -1,
        year: movie.year || -1,
        description: movie.description || 'Нет данных',
        image: `https://api.nomoreparties.co${movie.image.url}` || 'https://st2.depositphotos.com/1560768/6162/i/950/depositphotos_61621057-stock-photo-no-image-available.jpg',
        trailerLink: trailerLink,
        nameRU: movie.nameRU || 'Нет данных',
        nameEN: movie.nameEN || 'Нет данных',
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` || 'https://st2.depositphotos.com/1560768/6162/i/950/depositphotos_61621057-stock-photo-no-image-available.jpg',
        movieId: movie.id || -1,
      }),
    })
      .then(this._handleRes)
  };

  removeMovie(id) {
    const token  = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(this._handleRes)
  };
}

const mainApi = new MainApi(BASE_URL);

export default mainApi;