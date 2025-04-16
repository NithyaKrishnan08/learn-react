import { useEffect } from 'react';

export default function BasicEffect() {

  useEffect(() => {
    console.log('call useEffect');
  }, []);

  return (
    <div>
      <h1>Basic Effect</h1>
    </div>
  );
}