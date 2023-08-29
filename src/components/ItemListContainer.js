import React from 'react';

function ItemListContainer({ greeting = "¡Bienvenido a MundoCan!"  }) {
  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      <p>¡Todo lo que necesita tu perro!</p>
    </div>
  );
}

export default ItemListContainer;