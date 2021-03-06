import React, { Fragment, useEffect, useState, VFC } from "react";

const App: VFC = () => {
  const [count, setCount] = useState(0);
  const handleKeyDownEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEnter);
    return () => {
      document.removeEventListener("keydown", handleKeyDownEnter);
    };
  }, [count]);

  return <Fragment>Count : {count}</Fragment>;
};

export default App;
