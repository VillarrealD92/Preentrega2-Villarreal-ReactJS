import React, { useState } from 'react';

function ItemCount() {
    // Estado para almacenar la cantidad seleccionada
    const [cantidad, setCantidad] = useState(1);

    // Función para aumentar la cantidad
    const incrementCantidad = () => {
        setCantidad(cantidad + 1);
    };

    // Función para reducir la cantidad
    const decrementCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="mt-3">
            <button onClick={decrementCantidad} className="btn btn-secondary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={incrementCantidad} className="btn btn-primary">+</button>
        </div>
    );
}

export default ItemCount;