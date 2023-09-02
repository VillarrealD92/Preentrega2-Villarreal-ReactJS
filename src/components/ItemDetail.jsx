import '../App.css';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function ItemDetail({ servicio }) {

    return (
        <div className="d-flex justify-content-center adjust-item-center my-5">
            <div className="card mb-3 custom-card">
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={`${process.env.PUBLIC_URL}${servicio.imagen}`} className="card-img-top fotodetail" alt={`foto_${servicio.nombre}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-center">{servicio.nombre}</h3>
                            <div className="text-center align-content-center">
                                <div>
                                    <p className="format">Formato: {servicio.formato}</p>
                                    <p className="price bg-warning">Precio: {servicio.precio}Ars</p>
                                </div>
                                <div>
                                    <h5>Contacto:</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="fa fa-paw fa-lg">
                                                Telefono: {servicio.telefono} 
                                            </i>
                                        </li>
                                        <li>
                                            <i className="fa fa-paw fa-lg">
                                                Email: {servicio.email}
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                              <ItemCount />  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;