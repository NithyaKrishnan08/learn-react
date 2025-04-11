function Greeting () {
    const name = 'John';
    const date = new Date();
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{date.toLocaleDateString()}</p>
      </div>
    );
  }
  
  export default Greeting;