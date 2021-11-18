import React, { useState } from "react";
import FrameworksList from "./FrameworksList";
import FrameworksFilter from "./FrameworksFilter";

const Frameworks = (props) => {
  const [filteredString, setFilteredString] = useState("");

  const filterChangeHandler = (typedString) => {
    setFilteredString(typedString);
  };

  const filteredFrameworks = props.items.filter((framework) => {
    if (filteredString.length === 0) return true;
    return (
      framework.title
        .toUpperCase()
        .includes(filteredString.trim().toUpperCase()) ||
      framework.description
        .toUpperCase()
        .includes(filteredString.trim().toUpperCase())
    );
  });

  return (
    <div>
      <FrameworksFilter
        value={filteredString}
        onChangeFilter={filterChangeHandler}
      />
      <FrameworksList items={filteredFrameworks} />
    </div>
  );
};

export default Frameworks;
