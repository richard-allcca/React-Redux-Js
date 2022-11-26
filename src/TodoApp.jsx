import React from 'react'
import { Rtk } from './components/Rtk'
import { Thunks } from './components/Thunks'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

const TodoApp = () => {



   return (
      <>
         <h1>Todos - RTK Query</h1>
         <hr />

         <Rtk />

         <hr />

         <Thunks />
      </>
   )
}

export default TodoApp