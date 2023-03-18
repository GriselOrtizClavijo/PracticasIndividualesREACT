import React, { useEffect, useState } from 'react'
import Pizza from './Pizza';


const pizzas = [
    {
        id: 1 ,
        name: 'napolitana'
    },
    {
        id: 2 ,
        name: 'Peperonni'
    },
    {
        id: 3 ,
        name: 'Cuatro quesos'
    },
    {
        id: 4 ,
        name: 'Pollo con champiñones'
    },
    {
        id: 5 ,
        name: 'Margarita'
    },
]


const Home = () => {
    const [pedidos, setPedidos] = useState([]);
    const [showAlert, setShowAlert] = useState('')

    const mostrarPedido = (() => {
        
            setTimeout(() => {
                console.log("Se actualizó el componente")
                setPedidos(pizzas)
            }, 2000);
        })
    
    useEffect(() => {
        console.log('Se montó el componente')
        mostrarPedido()
    }, [])

   const handleChange = (() => {
        setShowAlert('El pedido fue cancelado')
        console.log('se desmontó el componente');
   })

   const handleAdd = (() => {
        console.log('Se agrego pizza');
   })
 

  return (
    <div >
        <h2>Su pedido</h2>    
        {pedidos.map(pedido => (
            <div key={pedido.id}>
            <Pizza pedido={pedido}/> 
            <button onClick={handleAdd}>Agregar a pedido</button>    
            </div>   
        ))}
            <button onClick={handleChange}>Cancelar Pedido</button>
            <h3>{showAlert}</h3> 
    </div>
  )
}

export default Home