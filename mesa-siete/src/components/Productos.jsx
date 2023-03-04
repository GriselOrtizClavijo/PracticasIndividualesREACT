import React from 'react'

const Productos = ({producto}) => {

  return (
   
    <tr>  
        <td>{producto.name}</td>
        <td>{producto.price}</td>
        <td>{producto.amount}</td>
        <td>{producto.price * producto.amount}</td>
    </tr>
    
    )
    
}

export default Productos