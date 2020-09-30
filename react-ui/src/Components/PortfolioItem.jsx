import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem(props) {
  return (
    <Link to={props.link} className="portfolio__item">
      <img src={props.src} className="portfolio__img"></img>
    </Link>
  );
}

export default PortfolioItem;
