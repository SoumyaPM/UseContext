import React, { useState, useCallback } from "react";
import ChildA from "./ChildA";
import "./styles.css";

function App() {
  const [countX, setCountX] = useState(0);
  const val = "sending props";

  const newFunction = useCallback(() => {
    return "new function";
  }, []);

  return (
    <div className="App">
      <h3>
        {"CountX:"} {countX}
      </h3>
      <ChildA value={val} newfn={newFunction} />
      <button className="btn btn-primary" onClick={() => setCountX(countX + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
