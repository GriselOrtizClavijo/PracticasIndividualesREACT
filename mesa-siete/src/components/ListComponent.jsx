import React, { useState } from 'react'
import Productos from "./Productos";

const ListComponent = () => {
  
  const [valueInputText, setValueInputText] = useState(0);
  const [valueInputNumber, setValueInputNumber] = useState(0);
  const [valueInputPrice, setValueInputPrice] = useState(0);
  const [products, setProducts] = useState([]);
 
    const validateInputs = () => {
    return valueInputText.trim() !== '' && valueInputNumber > 0 && valueInputPrice > 0;
    }   
  
    const addInputNumber = (e) => {
       setValueInputNumber(Number(e.target.value))
    }

    const addInputPrice = (e) => {
      setValueInputPrice(Number(e.target.value))
   }

    const addInputText = (e) => {
      setValueInputText(e.target.value)
    }

    const AddProduct = ( ) => {
      if(validateInputs()) {
      
      const newProduct =
        { name: valueInputText, 
          price: Number(valueInputPrice), 
          amount: Number(valueInputNumber)
        }
        
        setProducts(prevState => [...prevState, newProduct]);
        setValueInputText('');
        setValueInputNumber(0);
        setValueInputPrice(0);
    }
  }

  return (
   
    <>
    <h1>Inventario</h1>
    <table>
      <tr >
        <td>Nombre</td>
        <td>Precio </td>
        <td>Cantidad </td>
        <td>Valor Total </td>
      </tr>

    {products.map((newProduct, index)=>
    <Productos key ={index} producto = {newProduct}/>
    )}
  
    </table>
    
    <label>Ingrese el nombre del producto</label>
    <input type='text' value={valueInputText} onChange={addInputText}/>
    <label>Ingrese la cantidad</label>
    <input type='number' value={valueInputNumber} onChange={addInputNumber}/>
    <label>Ingrese el precio</label>
    <input type='number' value={valueInputPrice} onChange={addInputPrice}/>

    <button onClick={AddProduct}>Agregar producto</button>
    </>
  )
}

export default ListComponent