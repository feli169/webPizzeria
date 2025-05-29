import "./Grid.css"
import CardPizza from "../CardPizza/CardPizza"
import { useEffect, useState } from "react"

const Grid = () => {

const [pizza, setPizza] = useState ([ ]) 

useEffect ( () =>{
    const traerData = async ()  =>{
        try {
            const data = await fetch ("http://localhost:5000/api/pizzas")
            const restdata =await data.json ();
            setPizza (restdata)
            
        } catch (error) {
            alert("Ocurrio un error")
        }
         }
      traerData()      
    }, [ ]
)

  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
      {pizza.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} 
        
        />
      ))}
    </div>

    </div>
  )
}

export default Grid
