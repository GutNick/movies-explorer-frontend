import {BEATFILM_URL} from "./constants";

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json()
    }
    return res.json()
      .then((err) => {
        const error = new Error(err.message);
        error.status = res.status;
        throw error;
      })
  }

  getAllMovies() {
    return fetch(this._url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(this._handleRes)
  }
}

const beatApi = new MoviesApi(BEATFILM_URL);

export default beatApi;