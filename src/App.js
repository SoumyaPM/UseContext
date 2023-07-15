import React, { useState, useMemo } from "react";
import "./styles.css";

function App() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(100);

  const multiply = useMemo(() => {
    console.log("**** MULTIPLY ****");
    return countX * 2;
  }, []); // will call the multiply function if CountX or CountY is given as dependency
  return (
    <div className="App">
      <h3>
        {"CountX:"} {countX}
      </h3>
      <h3>
        {"CountY:"} {countY}
      </h3>
      <h3>
        {"Multiply:"} {multiply}
      </h3>
      <button onClick={() => setCountX(countX + 1)}>Increase</button>
      <button onClick={() => setCountY(countY - 1)}>Decrease</button>
    </div>
  );
}

export default App;
