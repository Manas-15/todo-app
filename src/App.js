import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
