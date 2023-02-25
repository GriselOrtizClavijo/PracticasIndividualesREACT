import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>      
             <table>
            <tr >
                <td className='titulo'>Actividad por {props.horas} horas</td>
                <td className='titulo'>Valor Total </td>
            </tr>
            <tr>
                <td>Inflables</td>
                <td>{props.inflables*4}</td>
            </tr>
            <tr>
                <td>Piscina de Pelotas</td>
                <td>{props.piscinaPelotas*4}</td>
            </tr>
            <tr>
                <td>Tobogán</td>
                <td>{props.tobogan*4}</td>
            </tr>
            <tr>
                <td>Carrusel</td>
                <td>{props.carrusel*4}</td>
            </tr>       
        </table>        
   
    </div> 
    )
    }


export default Card;