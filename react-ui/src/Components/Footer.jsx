import React from "react";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
