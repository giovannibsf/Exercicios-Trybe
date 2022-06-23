import logo from './logo.svg';
import './App.css';
import Pokedex from './Components/Pokedex';
import Botao from './Components/Botao'

function App() {
  return (
    <div>
      <h1 id='titulo'>POKEDEX</h1>
      <Botao />
      <Pokedex />
    </div>
  );
}

export default App;
