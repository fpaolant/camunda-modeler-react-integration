import React, { Component } from "react";
import Modeler from "../components/Modeler/Modeler";
import pageStyle from "./pages.module.css";

// export a modeler page component
// use the Modeler to instantiate a modeler instance
export default class ModelerPage extends Component {
  render() {
    return (
      <div className={pageStyle.page}>
        <div className={pageStyle.header}>
          <h1>Modeler</h1>
        </div>
        <div className={pageStyle.body}>
          <Modeler />
        </div>
      </div>
    );
  }
}
