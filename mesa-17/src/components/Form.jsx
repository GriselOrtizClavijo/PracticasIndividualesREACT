import React, { useState } from 'react'

const Form = ({handleClick}) => {
     const [datos, setDatos] = useState({
        nombre : '',
        apellido :'',
        email :'',
        pass: ''
     })
     const [error, setError] = useState('')
  
     const handleSubmit = ((e) => {
        e.preventDefault()  
        const regex = /^[a-zA-Z]+$/;
        
        if (!regex.test(datos.nombre) || !regex.test(datos.apellido)) {
          setError('Los datos son incorrectos, no incluir números')
          console.log('error en datos');
          return;
        }  
        
        console.log('datos correctos');
        setError("Los datos son correctos");
        
       
      })


  return (
    <div>
    <h3>Formulario de Inscripción</h3>
    <form onSubmit={handleSubmit} >
        <label >Ingrese su Nombre
        <input type="text" name="nombre" onChange = { (e) => setDatos({...datos, nombre: e.target.value})}/>
        </label>
        <label >Ingrese su Apellido
        <input type="text" name="apellido" onChange = { (e) => setDatos({...datos, apellido: e.target.value})}/>
        </label>
        <label >Ingrese su email
        <input role='email' name="email" type="text" onChange = { (e) => setDatos({...datos, email: e.target.value})}/>
        </label>
        <label >Ingrese su password
        <input  data-testid='pass' name="pass" type="password" onChange = { (e) => setDatos({...datos, pass: e.target.value})}/>
        </label>
        <button onClick={handleClick}>Enviar</button>
        <h3 value = {error}> {error} </h3>
    </form>
    </div>

  )
}

export default Form