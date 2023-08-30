import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [servicio, setServicio] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchServicioDetail() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/servicios.json`);
        const data = await response.json();
        const selectedServicio = data.find(servicio => servicio.id === id);
        if (selectedServicio) {
          setServicio(selectedServicio);
        }
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }

    fetchServicioDetail();
  }, [id]);

  return (
    <div>
      <h2 className='my-3 text-center'>Detalle del Servicio</h2>
      <ItemDetail servicio={servicio} />
    </div>
  );
}

export default ItemDetailContainer;