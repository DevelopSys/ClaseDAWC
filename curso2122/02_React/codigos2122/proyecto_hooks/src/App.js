import './App.css';
import ComponenteEventos from './components/ComponenteEventos';
import ComponenteState from './components/ComponenteState';
import ComponenteProps  from './components/ComponenteProps';
import ComponentePropType from './components/ComponentePropType'

function App() {
  return (
    <div className="App">
      <h1>Aplicacion inicial de REACT</h1>

      <div className='row'>
        <div className='col'><ComponenteEventos/></div>
        <div className='col'><ComponenteState/></div>
      </div>
      <div className='row'>
        <div className='col'><ComponenteProps/></div>
        <div className='col'><ComponentePropType/></div>
      </div>
      
    </div>
  );
}

export default App;
