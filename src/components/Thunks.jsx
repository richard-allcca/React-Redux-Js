import { useGetTodosQuery } from "../store/apis/todosApi"



export const Thunks = () => {

   // Thunks
   const { data, isError, isLoading, error } = useGetTodosQuery()

   return (
      <>
         <h4>List Todos width Thunks</h4>

         <ul>
            {
               !data ? 'Loading...' : data.map((todo) => (
                  <li key={ todo.id } >
                     <strong>{ todo.completed ? 'DONE' : 'PENDING' }</strong>
                     { todo.title }
                  </li>
               ))
            }
         </ul>
      </>
   )
}
