import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Details = ({hotels}) => {
   
        const params = useParams();
        const navigate = useNavigate();
        const hotelSelect = hotels.find((hotel) => params.id == hotel.id )

        console.log(hotelSelect);

        const wifiSelect = hotelSelect.wifi ? 'Cuenta con Wifi incluido' : 'No Cuenta con Wifi incluido';
        const airSelect = hotelSelect.airConditioned ? 'Cuenta con AC incluido' : 'No Cuenta con AC incluido';

  return (
    <div data-testid="hotelSelected">
        <button onClick={() => navigate('/')}>Volver al Home</button>
  
        <h2>{hotelSelect.name}</h2>
        <img src={hotelSelect.img} alt='Imagen no disponible'/>
        <h4>{hotelSelect.daily_price}</h4>
        <h4>{hotelSelect.stars} Estrellas</h4>
        <h4>{hotelSelect.city}</h4>
        <h5>{hotelSelect.description}</h5>
        <h4>{wifiSelect}</h4>
        <h4>{airSelect}</h4>
        <h4>{hotelSelect.phone}</h4>
        <h4>{hotelSelect.email}</h4>
      
    </div>
   
  )
}

export default Details