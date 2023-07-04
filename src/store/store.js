import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./slices/counter";

import { pokemonSlice } from './slices/pokemon';

import { todosSlice } from './slices/todos/todosSlice';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    // RTK Declara el nombre del reducer y sus reducer (funciones)
    [todosSlice.reducerPath]: todosSlice.reducer,
  },
  // middleware solo para uso con RTK
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosSlice.middleware)
});
