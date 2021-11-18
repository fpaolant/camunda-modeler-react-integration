import React, { useState } from "react";
import styles from "./FrameworkItem.module.css";

const FrameworkItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <li className={styles.animated}>
      <div className={styles.item}>
        <div>
          <h2>{title}</h2>
          <div className={styles.item__description}>{props.description}</div>
        </div>
      </div>
    </li>
  );
};

export default FrameworkItem;
