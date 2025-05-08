const PagePizza = ({name, price, ingredients, img, desc, verMas}) =>{
  return (
    <div>
      <div
      className="card text-center shadow-sm p-3 mb-4"
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h5 className="text-success">${price.toLocaleString()}</h5>
        <h6 className="mt-3">Ingredientes:</h6>
        <div className="d-flex flex-wrap justify-content-center gap-2 small text-break text-center">
          {ingredients.map((ingredient, index) => (
            <span key={index}>🍕 {ingredient}</span>
          ))}
        </div>
        <p>{desc}</p>
        <div className="buton d-flex flex-row justify-content-between align-items-center">
          <button className="btn btn-secondary mt-3" onClick={() => verMas("ver")}>Ver más👀</button>
          <button className="btn btn-dark mt-3">Añadir🛒</button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default PagePizza