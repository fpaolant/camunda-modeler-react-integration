import React from "react";
import styles from "./FrameworksFilter.module.css";

const FrameworksFilter = (props) => {
  const valueChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__control}>
        <input
          type="text"
          value={props.value}
          onChange={valueChangeHandler}
          placeholder="Search for.."
        />
      </div>
    </div>
  );
};

export default FrameworksFilter;
