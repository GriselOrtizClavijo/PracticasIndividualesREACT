import React, { useState } from 'react'

const Productos = (props) => {
    const [product, setProduct] = useState(
        
        product = [
            leche = {id:1, name : 'leche', price: 3000, amount: props.amount},
            pasta = {id:1, name : 'leche', price: 2000,amount: props.amount},
            arroz = {id:1, name : 'leche', price: 1500, amount: props.amount},
            lentejas = {id:1, name : 'leche', price: 2500, amount: props.amount},
            frijoles = {id:1, name : 'leche', price: 2500, amount: props.amount},
            harina = {id:1, name : 'leche', price: 3000, amount: props.amount},
            panalHuevos = {id:1, name : 'leche', price: 8000, amount: props.amount}
            ]   
        )}

    const shoppingCart = {
        name : '',
        price: '',
        amount: ''

    }


    const changeAmount = () => {
      if (product.amount > 0) {
          setProduct(... Productos, {amount : props.amount} );
      }
    }

    const addCart = () => {
      if (shoppingCart != product) {
        setProduct(... shoppingCart,  )
      }
    }
   

  return (
    <div>Productos</div>
  )


export default Productos