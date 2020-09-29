import React from "react";

function PortfolioItem(props) {
  return (
    <a href={props.link} className="portfolio__item">
      <img src={props.src} alt={props.alt} className="portfolio__img"></img>
    </a>
  );
}

export default PortfolioItem;
