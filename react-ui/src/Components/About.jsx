import React from "react";

export default function About() {
  return (
    <>
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
    </>
  );
}
