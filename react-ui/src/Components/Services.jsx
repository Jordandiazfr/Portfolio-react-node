import React from "react";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
          Je sais faire
        </h2>
        <hr className="hr_after"></hr>
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
        <p>
          <a href="/Work">
            <button className="btn">En savoir plus!</button>
          </a>
        </p>
      </section>
    </>
  );
}
