import React from "react";
import Photo from "../../images/portfolio-photo.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <article className="about-me__content">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-block">
          <div className="about-me__story">
            <p className="about-me__info-title">Виталий</p>
            <p className="about-me__info-subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__info-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
              работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.</p>
            <ul className="about-me__social-list">
              <li className="about-me__social-item"><a href="https://facebook.com/" className="about-me__social-link"
                                                       target="_blank" rel="noreferrer">Facebook</a></li>
              <li className="about-me__social-item"><a href="https://github.com/" className="about-me__social-link"
                                                       target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>
          <img src={Photo} alt="Фото" className="about-me__image"/>
        </div>
      </article>
    </section>
  )
}

export default AboutMe;