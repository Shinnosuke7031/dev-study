import React, { Fragment, useState, VFC } from "react";
import { useKey } from "rooks";

const App: VFC = () => {
  const [count, setCount] = useState(0);
  const handleKewDownEnter = () => setCount(count + 1);
  useKey(["Enter"], handleKewDownEnter);

  return <Fragment>Count : {count}</Fragment>;
};

export default App;
