import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'api',

   baseQuery: fetchBaseQuery({
      baseUrl: 'http://jsonplaceholder.typicode.com'
   }),

   endpoints: (builder) => ({

      getTodos: builder.query({
         query: () => '/todos',
         providesTags: [ "Todos" ]
      }),
      getTodoById: builder.query({
         query: (id) => `/todos/${id}`,
         invalidatesTags: [ "Todos" ]
      })
   })
})

export const { useGetTodosQuery, useGetTodoByIdQuery } = apiSlice;
