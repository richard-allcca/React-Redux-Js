//  REVIEW - Para crear slice usa el snippet "slice"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// export default counterSlice.reducer // NOTE - esta exportación es la recomendada por la DOC pero en este caso la usamos en el store ln/3