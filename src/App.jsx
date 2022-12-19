import React from "react";
import "./App.css";
import Routers from "./Router/routers";

export const Context = React.createContext();

function App() {
  return (
    <div className="App min-h-screen" id="light">
      <Routers />
    </div>
  );
}

export default App;
