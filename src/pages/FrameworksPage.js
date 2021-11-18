import React, { Component } from "react";
import Frameworks from "../components/Frameworks/Frameworks";
import items from "./items";

import pageStyle from "./pages.module.css";

export default class FrameworksPage extends Component {
  render() {
    return (
      <div className={pageStyle.page}>
        <div className={pageStyle.header}>
          <h1>Frameworks</h1>
        </div>
        <div className={pageStyle.body}>
          <Frameworks items={items} />
        </div>
      </div>
    );
  }
}
