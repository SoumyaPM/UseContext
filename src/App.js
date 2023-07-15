import "./styles.css";
import ChildA from "./ChildA";
import { createContext } from "react";

const data = createContext();

function App() {
  const name = "Soumya Mohanty";
  //context, Provider, useContent;
  return (
    <div className="App">
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
}

export default App;
export { data };
