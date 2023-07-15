import React, { memo } from "react";

function ChildA(value, fun) {
  console.log("inside ChildA", value.value);
  return <div>{`Hello inside ChildA ${value.value} ${fun}`}</div>;
}

export default memo(ChildA);
