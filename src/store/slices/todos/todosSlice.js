// NOTE - RTK es similar a fetch o axios.
// ayuda a cachear la data de las peticiones por un minuto
// Para crear slice RTK usa el snippet "rtk"

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosSlice = createApi({
  reducerPath: 'todos', // Nombre del "reducer"

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jsonplaceholder.typicode.com'
  }),

  // Endpoist = Funciones para peticiones de la información
  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => '/todos',// esto se concatena a baseUrl
      providesTags: ["Todos"]
    }),
    getTodoById: builder.query({
      query: (id) => `/todos/${id}`, // esto se concatena a baseUrl
      invalidatesTags: ["Todos"]
    })
  })
});

// NOTE - Se crean customHooks con el nombre de las funciones en los endpoints: "use<nameFunction>Query"
// En estos se obtiene la info necesaria de la patición como: Erros, Carga, isLoading etc...
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosSlice;
