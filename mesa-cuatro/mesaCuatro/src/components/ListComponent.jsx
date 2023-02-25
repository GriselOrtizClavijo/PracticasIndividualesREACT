import Card from "./Card"

const ListComponent = (props) => {

    let valor = [
        {
            id : 1,
            horas: 4,
            inflables: 10,
            piscinaPelotas: 20,
            tobogan: 20,
            carrusel: 50,
        },
       
        {
            id : 2,
            horas: 8,
            inflables: 30,
            piscinaPelotas: 60,
            tobogan: 80,
            carrusel: 100,
        }  
    ]

        
  return (
    
    <div>
        <h1>LISTA DE ACTIVIDADES Y COSTO</h1>
    
        <h3>Actividades Infantiles valor por 4 y 8 horas</h3>
        
        {valor.map((valor) => {
            return (
                <div>
                 <Card
                  key={valor.id} 
                  horas ={valor.horas}
                  inflables ={valor.inflables} 
                  piscinaPelotas ={valor.piscinaPelotas} 
                  tobogan ={valor.tobogan} 
                  carrusel ={valor.carrusel}
                 /> 
                </div>   
                )
            })
        }
            
    </div>

  )
}

export default ListComponent