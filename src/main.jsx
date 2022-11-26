import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { store } from './store'
import { apiSlice } from './store/apis/todosApi'

import App from './App'
import AppPokemon from './AppPokemon'
import TodoApp from './TodoApp'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={ store } >

         {/* <App /> */ }

         {/* <AppPokemon /> */ }

         <ApiProvider api={ apiSlice }>
            <TodoApp />
         </ApiProvider>

      </Provider>
   </React.StrictMode>
)
