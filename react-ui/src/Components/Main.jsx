import React from "react";

import PortfolioItem from "./PortfolioItem";

export default function main() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="../img/devjordan.png" alt="" />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Mes services
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Un peu sur moi
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Mon travail
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/*-- Introduction -*/}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, i am <strong>Jordan Diaz</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Développeur d’applications
        </p>
        <img src="img/jordan.JPG" alt="Jordan Diaz" className="intro__img" />
      </section>
      {/*-- My services-*/}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
          Je sais faire
        </h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              Je construis mon code en base à un design en spécifique. Les
              modules peuvent être créés selon le Mock-up, et après j'ajoute du
              comportement, avec Javascript, en utilisant React (Hooks - Redux),
              prochainement Angular.
            </p>
          </div>
          {/*-- / service -*/}
          <div className="service">
            <h3>E-Commerce</h3>
            <p>
              Les sites E-commerce, sont les plus complets car ils sont
              constitués de presque toutes les éléments du développement. Les
              API, Fetch Data, Base de données, contrôle des états (States),
              user interface, responsive destin, product Mapping, et même une
              plateforme de paiement connecté à une API servi pour un tiers.
            </p>
          </div>
          {/*-- / service -*/}
          <div className="service">
            <h3>Back-End</h3>
            <p>
              Programmer des API en Node ou Spring qui prendront les données
              d'une collection en MongoDB Atlas, AWS, etc. Aucune difficulté
              pour basculer du front-end à backend. Java, JavaScript/Node.
              Bientot Python et Php.
            </p>
          </div>
          {/*-- / service -*/}
        </div>
        {/*-- / services -*/}
        <a href="#work" className="btn">
          {" "}
          My work{" "}
        </a>
      </section>
      {/*-- About me -*/}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Qui je suis?</h2>
        <p className="section__subtitle section__subtitle--about">
          Ingénieur industriel et devéloppeur sur Paris
        </p>

        <div className="about-me__body">
          <p>
            Je suis originaire du Venezuela où j'ai vécu jusqu'à avril 2017.
            Entre 2010 - 2016 j'ai réussi à avoir un diplôme d'ingénieur
            industriel, qui m'a mis a l'épreuve, car l'industrie ce n'était pas
            ma passion. Ma passion pour l'informatique commence à 13 ans avec
            mon premier document html, un site web crée sur note pad.
          </p>

          <p>
            {" "}
            Malheurement, je ne comptais avec les moyens pour étudier
            l'informatique, donc l'industriel étais à mon avis le choix plus
            proche de l'informatique et accessible a moi car j'avais une bourse
            pour cet parcours en spécifique.
          </p>

          <p>
            Pendant et après d'avoir eu mon diplôme d'ingenieur j'ai travaillé
            dans deux entreprises, la premiere, une fabrique de bougies, qui
            gerais le stock et ses inventaires de façon manuel, et apres
            transcrits sur une fiche excel a la fin du mois, et une deuxieme, un
            distributeur des pieces mechaniques, qui gerait son stock de la meme
            façon.{" "}
          </p>

          <p>
            <a href="/about">
              <button className="btn">En savoir plus!</button>
            </a>
          </p>
        </div>

        <img
          src="img/dev_jordan2.JPG"
          alt="Jordan touching his big head"
          className="about-me__img"
        />
      </section>
      {/*-- My work-*/}
      <section className="my-work" id="work">
        <h2 className="section__title">Mon travail</h2>
        <p className="section__subtitle">A selection in my range of work</p>

        <div className="portfolio">
          <PortfolioItem src="img/forest.png" link="/work/forest" />

          <PortfolioItem src="img/portfolio-01.jpg" link="/singup" />

          <PortfolioItem src="img/portfolio-02.jpg" link="#" />

          <PortfolioItem src="img/portfolio-03.jpg" link="#" />

          <PortfolioItem src="img/portfolio-04.jpg" link="#" />
        </div>
      </section>
      {/*--footer-*/}
      <footer className="footer">
        <a href="mailto:jordandiaz1993@gmail.com" className="footer__link">
          jordandiaz1993@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.instagram.com/jor.dart"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="http://dribbble.com">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://twitter.com/lejorden"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <p>Coyright 2020 Jordan Diaz</p>
      </footer>
      {/*--footer-*/}
      <script src="js/index.js"></script>
    </>
  );
}
