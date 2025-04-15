// We setup useEffect hook to run some code WHEN
//  👉 Component renders for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

import { useState, useEffect } from 'react' 
import BasicEffect from './components/BasicEffect'; 
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       if (data && data.length > 0) setData(data);
//     }
//     getData();
//   }, [])

//   return (
//     <>
//       <div>
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.body}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <CounterEffect />
      <FetchDataEffect />
    </>
  )
}

export default App
