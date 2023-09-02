import '../App.css';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({ servicio }) {

    return (
        <div className="card">
            <div className="image-container fotodetail d-flex align-items-center justify-content-center">
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
            <div className="card-body text-center justify-content-center">
                <ItemCount />
            </div>
        </div>
    );
}

export default ItemDetail;