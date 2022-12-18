import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/others/NavBar";

export const Context = React.createContext();

function App() {
  return (
    <div className="App min-h-screen" id="light">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
