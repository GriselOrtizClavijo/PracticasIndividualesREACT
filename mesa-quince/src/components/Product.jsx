import React, {useState} from 'react'
import './styles.css'

const Product = ({product, setProducts}) => {
    const [id, setId] = useState([{}])

    const handleChange = ((e)=>{
       const id = e.target.value;
       const value = e.target.value;
       setProducts(prevProduct => ({...prevProduct, [id]: value}))
    })

  return (

    <form  className='card'>

        <div>
            <label>id</label>
            <input type="number" value={product.id} onChange={handleChange} />
        </div>
        <div>
            <label>Nombre</label>
            <input type="text" value={product.title} onChange={handleChange}/>
        </div>
        <div>
            <label>Descripción</label>
            <textarea type="text" value={product.description} onChange={handleChange} />
        </div>
        <div>
            <label>Precio</label>
            <input type="number" value={product.price} onChange={handleChange} />
        </div>
        <div>
            <label>Stock</label>
            <input type="number" value={product.stock} onChange={handleChange}/>
        </div>
        <div>
            <label>Categoría</label>
            <input type="text" value={product.category} onChange={handleChange} />
        </div>
      
        {<img className='img' src={product.image}/> }
    
    </form>


    // <div  className='card'>
    //     <h2>{product.title}</h2>
    //     <img className='img' src={product.image}/>
    //     <p>{product.price} pesos</p>        
    // </div>
  )
}

export default Product