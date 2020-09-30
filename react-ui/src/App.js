import React from "react";
import "./App.css";
import WorkScreen from "./Components/Screens/WorkScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Menu */}
        <Header />

        {/*-- Introduction -*/}
        <Introduction />

        {/*Routes */}
        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/work/">
            <WorkScreen />
          </Route>
        </Switch>

        {/*end */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
