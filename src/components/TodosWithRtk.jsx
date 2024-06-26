import { useGetTodosQuery } from '../store/slices/todos/todosSlice';

// NOTE - Componente para obtener lista de TODOS

const TodosWithRtk = () => {

  // Consolea resp para que veas todo lo que trae de la petición
  const resp = useGetTodosQuery();
  const { data, isLoading } = resp;


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

export default TodosWithRtk;