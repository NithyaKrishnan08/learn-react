import { useEffect, useState } from 'react';

export default function FetchDataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <div>
      <h1>Fetch Data Effect</h1>
      {data.filter(post => post.id === 1).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
