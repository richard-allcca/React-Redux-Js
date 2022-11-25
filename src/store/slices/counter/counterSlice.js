import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   value: 10
}

export const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state) => {
         state.value += 1
      },
      decrement: (state) => {
         state.value -= 1
      },
      incrementByAmount: (state, action) => {
         state.value += action.payload
      }
   }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// REVIEW - esta exportación es la recomendada por la doc pero en el store la llamamos en la ln/7 por eso esta comentada aquí

// export default counterSlice.reducer
