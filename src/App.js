import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Counter {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>


      
      {isLogged ? <h3>information </h3> : ''}
      
    </div>
  );
}

export default App;
