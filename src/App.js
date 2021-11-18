import React from "react";
// import route stuff
import { Switch, Route } from "react-router";

// import Navigation component
import Navigation from "./components/Navigation/Navigation";
// import HomePage component
import HomePage from "./pages/HomePage";
// import ModelerPage component
import ModelerPage from "./pages/ModelerPage";
// import FrameworksPage component
import FrameworksPage from "./pages/FrameworksPage";
// import NoMatchPage component
import NoMatchPage from "./pages/NoMatchPage";

import "./App.css";

const App = () => (
  <div className="mainApp">
    {/* render a navigation component */}
    <Navigation />
    {/* render routing logic of react-router-dom */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/modeler">
        <ModelerPage />
      </Route>
      <Route path="/frameworks">
        <FrameworksPage />
      </Route>
      <Route>
        <NoMatchPage />
      </Route>
    </Switch>
  </div>
);

export default App;
