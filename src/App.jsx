import './App.css';

import Count from './components/Count';
import Pokemon from './components/Pokemon';
import TodoWithRtk from './components/TodoWithRtk';
import TodosWithRtk from './components/TodosWithRtk';

function App() {


  return (
    <div className="App">

      {/* Slice Común para manejo de estado */ }
      <Count />

      {/* Slice con Thunks para peticiones Async */ }
      <Pokemon />

      {/* RTK Query (peticiones) - Once Todo */ }
      <TodoWithRtk />

      {/* RTK Query (peticiones) - list of Todo */ }
      <TodosWithRtk />


    </div>
  );
}

export default App;
