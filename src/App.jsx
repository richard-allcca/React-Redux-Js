import './App.css';

import Count from './components/Count';
import Pokemon from './components/Pokemon';
import TodosRtk from './components/TodosRtk';
import TodoRtk from './components/TodoRtk';

function App() {


  return (
    <div className="App">

      {/* Slice para manejo de estado comun */ }
      <Count />

      {/* Slice con Thunks para peticiones Async */ }
      <Pokemon />

      {/* RTK Query - Once Todo */ }
      <TodoRtk />

      {/* RTK Query - list of Todo */ }
      <TodosRtk />


    </div>
  );
}

export default App;
