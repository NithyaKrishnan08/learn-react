import { useEffect, useState } from 'react';

export default function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
  }, [count]);

  return (
    <div>
      <h1>Counter Effect</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
} 