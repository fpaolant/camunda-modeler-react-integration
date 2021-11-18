// export a home page component
import React, { Component } from "react";
import pageStyle from "./pages.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className={pageStyle.page}>
        <div className={pageStyle.header}>
          <h1>Home</h1>
        </div>
        <div className={pageStyle.body}>
          <p>Welcome</p>
        </div>
      </div>
    );
  }
}
