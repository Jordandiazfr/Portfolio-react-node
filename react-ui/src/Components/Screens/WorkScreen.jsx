import React from "react";

export default function WorkScreen() {
  return (
    <>
      <div class="portfolio-item-individual">
        <p>
          Forest est une web application reactive et responsive. Un site de
          E-commerce basé sur AMAZON. Elle est construite entierement sur React
          et Node JS. avec une varieté des modules qui peuvent amerioler
          l'experience de l'usager, cette application m'a servi aussi pour
          apprende à fond la gestion des ETATS avec REDUX.
        </p>

        <p>
          Pour apprecier vraiment la fonctionalité de cette application, je
          sugere installer les React et Redux devTools sur chrome
        </p>
        <p>
          <a href=" https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es">
            <img
              class="img_item"
              src="/img/reactdev.jpg"
              alt="React dev tools"
            />
          </a>

          <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es">
            <img class="img_item" src="/img/redux.jpg" alt="REDUX dev tools" />
          </a>

          <img src="img/portfolio-details.jpg" alt="" />
        </p>
        <p>
          <button class="btn">
            {" "}
            <a href="https://forestshop.herokuapp.com/" class="btn__link">
              Go to the forest
            </a>{" "}
          </button>
        </p>
      </div>
    </>
  );
}
