//  REVIEW - Para crear slice RTK usa el snippet "rtk"

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosSlice = createApi({
  reducerPath: 'todos',

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

// estos customHooks se crean con el nombre de las funciones: "use<nameFunction>Query"
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosSlice;
