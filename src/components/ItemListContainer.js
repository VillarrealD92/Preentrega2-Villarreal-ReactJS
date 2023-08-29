import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListContainer() {
  
  const [servicios,setServicios] = useState([])
  const { id } = useParams();

  useEffect(() => {
    async function fetchServicios() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/servicios.json`);
        const data = await response.json();
        const filteredServicios = data.filter(servicio => servicio.categoria === id);
        setServicios(filteredServicios);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }

    fetchServicios();
  }, [id]);

  return (
    <div className="row d-flex justify-content-center w-100">
      {servicios.map((servicio) => (
        <article key={servicio.id} className="col-sm-12 col-md-8 col-lg-3 my-3">
          <div className="card">
            <img src={servicio.imagen} className="card-img-top" alt={`foto_${servicio.nombre}`} />
            <div className="card-body text-center">
              <h3 className="card-title">{servicio.nombre}</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-around">
                <div>
                  <p>Formato:</p>
                </div>
                <div>
                  <p className="format">{servicio.formato}</p>
                </div>
              </li>
            </ul>
            <div className="card-body text-center">
              <button type="button" className="btn btn-info"> Info </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ItemListContainer;