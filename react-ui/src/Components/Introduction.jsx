import React from "react";

export default function Introduction() {
  return (
    <>
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
    </>
  );
}
