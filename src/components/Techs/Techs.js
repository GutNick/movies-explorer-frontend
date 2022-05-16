import React from "react";
import "./Techs.css";

function Techs() {
  return(
    <section id="techs" className="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__info-block">
          <p className="techs__info-title">7 технологий</p>
          <p className="techs__info-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__items">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;