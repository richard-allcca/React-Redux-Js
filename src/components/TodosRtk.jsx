

import { useGetTodoByIdQuery, useGetTodosQuery } from '../store/sliceRtk/todosSlice';

const TodosRtk = () => {

  const { data } = useGetTodosQuery();


  return (
    <>
      <hr />
      <h1>Lista de To Do</h1>
      <hr />

      <ul>
        {
          !data ? 'Loading...' : data.map((el) => (
            <li key={ el.id } >
              { el.title }
            </li>
          ))
        }
      </ul>

    </>
  );
};

export default TodosRtk;