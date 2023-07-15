import React, { useContext } from "react";
import { data } from "./App";

function ChildB() {
  const myName = useContext(data);
  return (
    <h3>
      {"Hello ChildB"} {myName}
    </h3>
  );
}

export default ChildB;
