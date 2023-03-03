import { useState } from "react";
import { useGetTodoByIdQuery } from "../store/sliceRtk/todosSlice";


const TodoRtk = () => {
  const [idTodo, setIdTodo] = useState(1);

  const { data } = useGetTodoByIdQuery(idTodo);

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