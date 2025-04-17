import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleComponent = () => {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <h1>{value ? 'True' : 'False'}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;