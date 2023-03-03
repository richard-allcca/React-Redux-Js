import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./slices/counter";
import { pokemonSlice } from './slices/pokemon';

// RTK
import { todosSlice } from './sliceRtk/todosSlice';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    // NOTE - todosApi as todosSlice
    [todosSlice.reducerPath]: todosSlice.reducer,
  },
  // middleware solo para uso con RTK (no se debe importar el getDefaultMiddleware)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosSlice.middleware)
});
