import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment, incrementByAmount } from './store/slices/counter';

import reactLogo from './assets/react.svg'
import './App.css'

function App() {

   // const [ count, setCount ] = useState(0) // modo origin
   // const {count} = useSelector((state) => state.counter);// modo fer

   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();

   return (
      <div className="App">
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
               <img src={ reactLogo } className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={ () => dispatch(increment()) }>
               count + 1 is { count }
            </button>
            <button onClick={ () => dispatch(incrementByAmount(5)) }>
               count + 5 is { count }
            </button>
            <button onClick={ () => dispatch(decrement()) }>
               count - 5 is { count }
            </button>
         </div>
      </div>
   )
}

export default App
