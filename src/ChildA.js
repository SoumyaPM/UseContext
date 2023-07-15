import React from "react";
import ChildB from "./ChildB";

function ChildA() {
  return (
    <div>
      <h3>{"Hello ChildA"}</h3>
      <ChildB />
    </div>
  );
}

export default ChildA;
