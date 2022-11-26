import { useGetTodoByIdQuery } from "../store/apis/todosApi"
import { useState } from 'react';



export const Rtk = () => {

   const [ todo, setTodo ] = useState(1)

   // RTK
   const { data } = useGetTodoByIdQuery(todo)

   const onNextTodo = () => {
      setTodo(todo + 1)
   }

   const onPrevTodo = () => {
      if (todo === 1) return;
      setTodo(todo - 1)
   }

   return (
      <>
         <div>Rtk</div>

         <pre>{ JSON.stringify(data) }</pre>

         <button onClick={ onNextTodo } >
            Next Todo
         </button>

         <button onClick={ onPrevTodo } >
            Prev Todo
         </button>

      </>
   )
}
