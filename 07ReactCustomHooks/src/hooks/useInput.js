import { useState } from 'react';

function useInput(initialValue = "") {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleChange = (e) => setInputValue(e.target.value);

  return {
    inputValue, 
    onChange: handleChange
  };
}

export default useInput;
