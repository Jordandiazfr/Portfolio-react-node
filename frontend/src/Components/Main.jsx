import React from "react";
import About from "./About";
import PortfolioItem from "./PortfolioItem";
import Services from "./Services";
import { Router } from "react-router-dom";
export default function Main() {
  return (
    <>
      {/*-- My services-*/}
      <Services></Services>

      {/*-- About me -*/}
      <About></About>

      {/*-- My work-*/}
      <section className="my-work" id="work">
        <h2 className="section__title">Mon travail</h2>
        <p className="section__subtitle">A selection in my range of work</p>

        <div className="portfolio">
          <PortfolioItem src="img/forest.png" link="/work" />

          <PortfolioItem src="img/portfolio-01.jpg" link="/singup" />

          <PortfolioItem src="img/portfolio-02.jpg" link="#" />

          <PortfolioItem src="img/portfolio-03.jpg" link="#" />

          <PortfolioItem src="img/portfolio-04.jpg" link="#" />
        </div>
      </section>
    </>
  );
}
