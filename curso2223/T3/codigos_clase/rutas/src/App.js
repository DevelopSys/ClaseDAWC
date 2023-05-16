import logo from "./logo.svg";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      {/* Componente */}
      <Nav />
      <Routes>
        {/* Gestion de rutas */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
