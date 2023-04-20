import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">Test 123</div>;
    </Router>
  );
}

export default App;
