import { useEffect, useState } from "react"
import PagePizza from "../../components/PagePizza/PagePizza";
const Pizza = () => {

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

  return (
      <div>
        <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
    
          <PagePizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc = {pizza.dsec}
          />
        
      </div>
  
      </div>
    )
  }
  
  export default Pizza
  
  