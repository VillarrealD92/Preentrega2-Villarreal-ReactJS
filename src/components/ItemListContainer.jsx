import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
  const [servicios, setServicios] = useState([]);
  const params = useParams();
  const categoriaId = params.id;

  useEffect(() => {
    async function fetchServicios() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/servicios.json`);
        const data = await response.json();
        const filteredServicios = categoriaId
          ? data.filter(servicio => servicio.categoria === categoriaId)
          : data;
        setServicios(filteredServicios);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }

    fetchServicios();
  }, [categoriaId]);

  // 3 cards por row
  const serviciosRows = [];
  for (let i = 0; i < servicios.length; i += 3) {
    serviciosRows.push(servicios.slice(i, i + 3));
  }

  return (
    <div>
      {categoriaId && <h2 className='text-center'>{categoriaId.toUpperCase()}</h2>}
      {serviciosRows.map((row, index) => (
        <div key={index} className="row justify-content-center">
          {row.map((servicio) => (
            <article key={servicio.id} className="col-sm-12 col-md-8 col-lg-3 my-2">
              <div className="card">
                <img src={`${process.env.PUBLIC_URL}${servicio.imagen}`} className="card-img-top" alt={`foto_${servicio.nombre}`} />
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
                  <button type="button" className="btn btn-info"> <Link to={`/servicio/${servicio.id}`} className='text-light'> Info </Link> </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;