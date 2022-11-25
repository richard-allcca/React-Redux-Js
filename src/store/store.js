import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from './slices/pokemon';


export const store = configureStore({
   reducer: {
      // evita el export de reducer en el counterSlice ln/28
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer
   }
})

// TODO - probar el export default y evitar la notación del punto en counterSlice ln/7