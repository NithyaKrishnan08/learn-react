import React from 'react';
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import ShoppingList from "./components/ShoppingList";
function App() {
  return (
    <div>
      <h1>React useState Examples</h1>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;