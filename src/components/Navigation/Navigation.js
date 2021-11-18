import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink activeClassName={styles.active} to="/modeler">
        Modeler
      </NavLink>
      <NavLink activeClassName={styles.active} to="/frameworks">
        Frameworks
      </NavLink>
    </nav>
  );
};

// export a navigation component (use react-router-dom)
export default Navigation;
