import { useState } from "react";
import { useGetTodoByIdQuery } from "../store/slices/todos/todosSlice";

// NOTE - Obtener un TODO por id

const TodoRtk = () => {
  const [idTodo, setIdTodo] = useState(1);

  // Consolea resp para que veas todo lo que trae de la petición
  const resp = useGetTodoByIdQuery(idTodo);
  const {data, isLoading} = resp;

  function onNextTodo() {
    setIdTodo(idTodo + 1);
  }

  function onPrevTodo() {
    if (idTodo === 1) return;
    setIdTodo(idTodo - 1);
  }

  return (
    <>
      <hr />
      <h1>To Do por Id</h1>
      <hr />

      <ul>
        {
          !data ? 'Loading...' : <li key={ data.id }>{ data.id } - { data.title } </li>
        }
      </ul>

      <button onClick={ onPrevTodo } >Prev Todo</button>
      <button onClick={ onNextTodo } >Next Todo</button>
    </>
  );
};

export default TodoRtk;