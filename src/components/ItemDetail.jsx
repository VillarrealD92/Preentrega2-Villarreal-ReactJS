import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({ servicio }) {
    const [cantidad, setCantidad] = useState(1);

    const incrementCantidad = () => {
        setCantidad(prevCantidad => prevCantidad + 1);
    };

    const decrementCantidad = () => {
        if (cantidad > 1) {
            setCantidad(prevCantidad => prevCantidad - 1);
        }
    };

    return (
        <div className="card ">
            <div className="image-container fotodetail">
                <img
                    src={`${process.env.PUBLIC_URL}${servicio.imagen}`}
                    className="card-img-top"
                    alt={`foto_${servicio.nombre}`}
                />
            </div>
            <div className="card-body text-center">
                <h3 className="card-title">{servicio.nombre}</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                    <div>
                        <p>Formato:</p>
                    </div>
                    <div>
                        <p className="format">{servicio.formato}</p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    <div>
                        <p>Precio:</p>
                    </div>
                    <div>
                        <p className="price">{servicio.precio}</p>
                    </div>
                </li>
            </ul>
            <div className='contacto text-center'>
                <h4 className='font-weight-bold'>Contacto</h4>
                <div className='tel'>
                    <p>Telefono:</p>
                    <p>{servicio.telefono}</p>
                </div>
                <div className='mail'>
                    <p>Email:</p>
                    <p>{servicio.email}</p>
                </div>
            </div>
            <div className="card-body text-center">
                <div className="mt-3">
                    <button onClick={decrementCantidad} className="btn btn-secondary">-</button>
                    <span className="mx-2">{cantidad}</span>
                    <button onClick={incrementCantidad} className="btn btn-secondary">+</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;