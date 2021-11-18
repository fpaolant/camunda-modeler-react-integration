import React from "react";

import FrameworkItem from "./FrameworkItem";
import styles from "./FrameworksList.module.css";

const FrameworksList = (props) => {
  if (props.items.length === 0) {
    return <h3 className={styles.list__fallback}>Nothing to show :(</h3>;
  }

  return (
    <ul className={styles.list}>
      {props.items.map((framework) => (
        <FrameworkItem
          key={Math.random()}
          title={framework.title}
          description={framework.description}
        />
      ))}
    </ul>
  );
};

export default FrameworksList;
