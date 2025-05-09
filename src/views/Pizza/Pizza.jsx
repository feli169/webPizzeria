import { useEffect, useState } from "react"
import PagePizza from "../../components/PagePizza/PagePizza";
const Pizza = () => {

  const [pizza, setPizza] = useState (null) 

  
  useEffect ( () =>{
      const traerData = async ()  =>{
          try {
              const data = await fetch ("http://localhost:5000/api/pizzas")
              const restdata =await data.json ();
              const foundPizza = restdata.find(p => p.id === 'p001');
              setPizza(foundPizza);
              
          } catch (error) {
              alert("Ocurrio un error")
          }
           }
        traerData()      
      }, [ ]
  );

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
      <div>
        <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
        <PagePizza
      key={pizza.id}
      name={pizza.name}
      price={pizza.price}
      ingredients={pizza.ingredients}
      img={pizza.img}
      desc={pizza.desc}
    />
        
      </div>
  
      </div>
    )
  }
  
  export default Pizza
  
  