import FocusInput from './FocusInput'
import Timer from './Timer'

// function App() {
//   const inputElement = useRef(null)

//   const handleClick = () => {
//     inputElement.current.focus();
//     inputElement.current.value = 'Hello Nithya';
//   }

//   return (
//     <>
//       <h1>React UseRef</h1>
//       <input type="text" ref={inputElement} />
//       <button onClick={handleClick}>Focus Input</button>
//     </>
//   )
// }

function App() {
  return (
    <>
      <h1>React UseRef</h1>
      <FocusInput />
      <Timer />
    </>
  )
  
}

export default App
