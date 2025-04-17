import Counter from './components/Counter';

// const initialState = {
//   count: 0
// }

// const reducer = (state, action) => {
//   switch(action.type) { 
//     case 'increment':
//       return {...state, count: state.count + 1};
//     case 'decrement':
//       return {...state, count: state.count - 1};
//     case 'reset':
//       return {...state, count: 0};
//     default:
//       return state;
//   } 
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>React useReducer</h1>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
//       <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
//       <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
//     </>
//   )
// }

function App() {
  return (
    <div>
      <h1>React useReducer</h1>
      <Counter />
    </div>
  )
}

export default App
