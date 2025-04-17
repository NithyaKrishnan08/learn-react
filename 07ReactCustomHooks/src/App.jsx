import { useFetch } from './useFetch';
import ToggleComponent from './components/ToggleComponent';
import FormComponent from './components/FormComponent';
import FetchComponent from './components/FetchComponent';

// function App() {
//   const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');
  
//   return (
//     <>
//       <h1>React Custom Hooks</h1>
//       {data && data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </>
//   )
// }

function App() {
  return (
    <>
      <h1>React Custom Hooks</h1>
      <ToggleComponent />
      <FormComponent />
      <FetchComponent />
    </>
  )
}

export default App
