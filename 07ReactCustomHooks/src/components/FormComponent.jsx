import useInput from '../hooks/useInput';

const FormComponent = () => {
  const name = useInput('');
  const email = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    alert(`Name: ${name.inputValue}, Email: ${email.inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" 
          onChange={name.onChange} 
          value={name.inputValue} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" 
          onChange={email.onChange} 
          value={email.inputValue} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
