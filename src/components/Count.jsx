import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/slices/counter';

import reactLogo from '../assets/react.svg';

const Count = () => {

  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
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
          count + 1 is { counter }
        </button>
        <button onClick={ () => dispatch(incrementByAmount(5)) }>
          count + 5 is { counter }
        </button>
        <button onClick={ () => dispatch(decrement()) }>
          count - 1 is { counter }
        </button>
      </div>
    </>
  );
};

export default Count;