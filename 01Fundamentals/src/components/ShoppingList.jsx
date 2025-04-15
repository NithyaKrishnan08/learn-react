import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === '') return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: itemQuantity
    };

    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(1);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item-name">Item:</label>
          <input
            type="text"
            id="item-name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="item-quantity">Quantity:</label>
          <input
            type="number"
            id="item-quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        
        <button type="submit">Add Item</button>
      </form>

      {items.length === 0 ? (
        <p>Your shopping list is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity}
              <button onClick={() => handleDelete(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;