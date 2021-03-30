import React from "react";

export default function Header() {
  function menuHandler() {
    document.body.classList.toggle("nav-open");
  }

  function linkHandler() {
    document.body.classList.remove("nav-open");
  }
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="../img/devjordan.png" alt="" />
        </a>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        id="toggle"
        onClick={menuHandler}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/#home" className="nav__link" onClick={linkHandler}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/#services" className="nav__link" onClick={linkHandler}>
              Mes services
            </a>
          </li>
          <li className="nav__item">
            <a href="/#about" className="nav__link" onClick={linkHandler}>
              Un peu plus sur moi
            </a>
          </li>
          <li className="nav__item">
            <a href="/#work" className="nav__link" onClick={linkHandler}>
              Mes projets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
