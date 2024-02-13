import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <h1>Home Page </h1>
      <About skill="javascript" />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
