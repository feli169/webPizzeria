import "./Grid.css"
import "../CardPizza/CardPizza"
import CardPizza from "../CardPizza/CardPizza"
import pizzas from '../../Data'

const Grid = () => {
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
      {pizzas.map((pizza, index) => (
        <CardPizza
          key={index}
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
