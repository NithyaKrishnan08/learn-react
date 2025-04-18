import { useState } from 'react'
import UniqueId from './components/UniqueId'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React useId</h1>
      <UniqueId />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <UniqueId />
    </>
  )
}

export default App
