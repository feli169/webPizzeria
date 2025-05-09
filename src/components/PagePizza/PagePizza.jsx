import { Link } from "react-router-dom"

const PagePizza = ({ name, price, ingredients, img, desc }) =>{
  return (
    <div>
      <div
      className="card text-center shadow-sm p-3 mb-4"
     
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h5 className="text-success">${price.toLocaleString()}</h5>
        <h6 className="mt-3">Ingredientes:</h6>
        <div className="d-flex flex-wrap justify-content-center gap-2 small text-break text-center">
          {ingredients.map((ingredient, id) => (
            <span key={id}>🍕 {ingredient}</span>
          ))}
        </div>
        <p>{desc}</p>
        
      </div>
    </div>
    </div>
  )
}
export default PagePizza