import logo from "./logo.svg";
import "./App.css";
import Presentacion from "./components/Presentacion";
import Cuerpo from "./components/Cuerpo";

function App() {
  return (
    <div>
      <h1>Esta es la primera app con react </h1>
      <p>Esta aplicacion nos servirá para entender como funciona react</p>
      <Presentacion />
      <Cuerpo />
    </div>
  );
}

export default App;
