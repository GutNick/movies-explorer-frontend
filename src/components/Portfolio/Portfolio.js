import React from "react";
import "./Portfolio.css";
import Arrow from "../../images/portfolio-arrow.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <p className="portfolio__title">Портфолио</p>
        <ul className="portfolio__list">
          <li className="portfolio__item"><a href="https://google.com/" className="portfolio__link"
                                             target="_blank" rel="noreferrer"><p className="portfolio__link-name">Статичный сайт</p><img
            src={Arrow} className="portfolio__arrow" alt="Стрелка"/></a></li>
          <li className="portfolio__item"><a href="https://google.com/" className="portfolio__link"
                                             target="_blank" rel="noreferrer"><p className="portfolio__link-name">Адаптивный сайт</p><img
            src={Arrow} className="portfolio__arrow" alt="Стрелка"/></a></li>
          <li className="portfolio__item"><a href="https://google.com/" className="portfolio__link"
                                             target="_blank" rel="noreferrer"><p className="portfolio__link-name">Одностраничное приложение</p><img
            src={Arrow} className="portfolio__arrow" alt="Стрелка"/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;