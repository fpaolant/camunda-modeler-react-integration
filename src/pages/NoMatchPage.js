// export a home page component
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import pageStyle from "./pages.module.css";

export default class NoMatchPage extends Component {
  render() {
    return (
      <div className={pageStyle.page}>
        <div className={pageStyle.header}>
          <h1>Nothing to see here!</h1>
        </div>
        <div className={pageStyle.body}>
          <NavLink to="/">Go to home</NavLink>
        </div>
      </div>
    );
  }
}
