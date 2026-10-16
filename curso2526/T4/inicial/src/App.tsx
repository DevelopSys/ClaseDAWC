import "./App.css";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container m-4">
      <h1>Pagina REACT</h1>
      {/* llamo al componente */}
      <Home />
      <Form />
    </div>
  );
}

export default App;
