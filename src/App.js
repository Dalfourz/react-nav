import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Registered from "./components/Registered";

function App() {
  return (
    <Router>
      <Nav />
      <Registered />
    </Router>
  );
}

export default App;
