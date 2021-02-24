import logo from "./logo.svg";
import "./App.css";
import { Personajes } from "./components/Personajes";
import { PersonajesEffect } from "./components/PersonajesEffect";

function App() {
  return (
    <div className="App">
      <PersonajesEffect />
    </div>
  );
}

export default App;
