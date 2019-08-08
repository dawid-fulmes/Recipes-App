import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./containers/MainPage/MainPage";
import RecipePage from "./containers/RecipePage/RecipePage";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={RecipePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
