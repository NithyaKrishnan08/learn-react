import React, { useState } from 'react';

function TodoList() {
    const [todoItems, setTodoItems] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            setTodoItems([...todoItems, newTodo.trim()]);
            setNewTodo('');
        }
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <h2>Todo List</h2>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todoItems.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;