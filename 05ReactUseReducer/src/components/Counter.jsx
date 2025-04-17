import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer.js";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({type: 'increment'});
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'});
  } 

  const handleIncrementByAmount = () => {
    dispatch({type: 'incrementByAmount', payload: Number(inputValue)});
    setInputValue(0);
  } 

  const handleDecrementByAmount = () => {
    dispatch({type: 'decrementByAmount', payload: Number(inputValue)});
    setInputValue(0);
  } 

  const handleReset = () => {
    dispatch({type: 'reset'});
  } 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleIncrementByAmount}>Increment by amount</button>
        <button onClick={handleDecrementByAmount}>Decrement by amount</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;