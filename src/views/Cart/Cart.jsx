import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // importacion
const Cart = () => {
  const { cart, setCart } = useContext(CartContext); // llamada

  const handleAumento = (name) => {
    const updatedCart = cart.map((pizza) =>
      pizza.name === name
        ? { ...pizza, cantidad: pizza.cantidad + 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  const handleDecremento = (name) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.name === name
          ? { ...pizza, cantidad: pizza.cantidad - 1 }
          : pizza
      )
      .filter((pizza) => pizza.cantidad > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce( //utilizacion
    (acc, pizza) => acc + pizza.price * pizza.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="card mb-3 d-flex flex-row align-items-center p-2"
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
              className="me-3"
            />
            <div className="flex-grow-1">
              <h5>{pizza.name}</h5>
              <p>
                ${pizza.price.toLocaleString()} x {pizza.cantidad}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger me-2"
                onClick={() => handleDecremento(pizza.name)}
              >
                -
              </button>
              <span>{pizza.cantidad}</span>
              <button
                className="btn btn-success ms-2"
                onClick={() => handleAumento(pizza.name)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="mt-4 text-end">
          <h4>Total: ${total.toLocaleString()}</h4> // utilizacion
          <button className="btn btn-primary mt-2">Pagar 💳</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
