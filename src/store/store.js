import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";


export const store = configureStore({
   reducer: {
      counter: counterSlice.reducer // este punto reducer es para evitar la export default de reducer en el counteSlice ln/27
   }
})

// TODO - probar el export default y evitar la notación del punto en counterSlice ln/7