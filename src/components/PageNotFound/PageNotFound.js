import React from "react";
import {useHistory} from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();
  return (
    <section className="page-not-found">
      <p className="page-not-found__title">404</p>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <p className="page-not-found__back-link" onClick={history.goBack}>Назад</p>
    </section>
  )
}

export default PageNotFound;