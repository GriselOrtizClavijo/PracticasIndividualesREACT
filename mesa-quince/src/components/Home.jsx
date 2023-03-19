import React, {useState, useEffect } from 'react'
import Product from './Product'
import './styles.css'


const Home = () => {
    const [products, setProducts] = useState([{}])
    const [alert, setAlert] = useState('')

    const url= "/api/products"

    useEffect(()=>{
        fetch(url)
            .then(response =>response.json())
            .then(data => setProducts(data.products))
            console.log('Se montó el componente')
    }, [])

    console.log(products);

    const cancelOrder = () => {
        setProducts()
        setAlert('El producto se ha eliminado')
    }


  return (
    <div className='container'>
        <h1>Productos</h1>
       {products.map((product) => (
            <div key={product.id}>
                <Product product={product}/>
                   <button onClick={cancelOrder}>Eliminar Producto</button>
            </div>
        ))}
        
    </div>
  )
}

export default Home