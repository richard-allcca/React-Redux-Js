import './App.css';

import Count from './components/Count';
import Pokemon from './components/Pokemon';
import TodosRtk from './components/TodosRtk';
import TodoRtk from './components/TodoRtk';

function App() {


  return (
    <div className="App">

      {/* Slice Común para manejo de estado */ }
      <Count />

      {/* Slice con Thunks para peticiones Async */ }
      <Pokemon />

      {/* RTK Query (peticiones) - Once Todo */ }
      <TodoRtk />

      {/* RTK Query (peticiones) - list of Todo */ }
      <TodosRtk />


    </div>
  );
}

export default App;
