import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filter/" element={<Search />}></Route>
        <Route path="/filter/:cat" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
