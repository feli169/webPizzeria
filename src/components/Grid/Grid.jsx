import "./Grid.css"
import "../CardPizza/CardPizza"
import CardPizza from "../CardPizza/CardPizza"
import { useEffect, useState } from "react"

const Grid = () => {

const [pizza, setPizza] = useState ([]) 

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
console.log(pizza)

  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
      {pizza.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </div>

    </div>
  )
}

export default Grid
