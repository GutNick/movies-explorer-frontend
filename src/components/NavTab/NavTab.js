import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__item"><a href="#about-project" className="navtab__link">О проекте</a></li>
      <li className="navtab__item"><a href="#techs" className="navtab__link">Технологии</a></li>
      <li className="navtab__item"><a href="#about-me" className="navtab__link">Студент</a></li>
    </ul>
  )
}

export default NavTab;