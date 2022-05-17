import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info-blocks">
          <div className="about-project__info-block">
            <p className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about-project__info-description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info-block">
            <p className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about-project__info-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
          <div className="about-project__weeks">
            <div className="about-project__week about-project__week_type_backend">
              <p className="about-project__week-text">1 неделя</p>
            </div>
            <div className="about-project__week about-project__week_type_frontend">
              <p className="about-project__week-text">4 недели</p>
            </div>
            <p className="about-project__week-text">Back-end</p>
            <p className="about-project__week-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;