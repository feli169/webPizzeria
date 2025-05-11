import pizzas from "../../Data";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(
    pizzas.map((pizza) => ({
      ...pizza,
      cantInicial: 1,
    }))
  );

  const handleAumento = (name) => {
    const actual = cart.map((pizza) =>
      pizza.name === name
        ? { ...pizza, cantInicial: pizza.cantInicial + 1 }
        : pizza
    );
    setCart(actual);
  };
  const handleDecremento = (name) => {
    const actual = cart
      .map((pizza) =>
        pizza.name === name
          ? { ...pizza, cantInicial: pizza.cantInicial - 1 }
          : pizza
      )
      .filter((pizza) => pizza.cantInicial > 0);
    setCart(actual);
  };

  const total = cart.reduce(
    (aumulador, pizza) => aumulador + pizza.price * pizza.cantInicial,
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
            key={pizza.name}
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
                ${pizza.price.toLocaleString()} x {pizza.cantInicial}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger me-2"
                onClick={() => handleDecremento(pizza.name)}
              >
                -
              </button>
              <span>{pizza.cantInicial}</span>
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
          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary mt-2">Pagar 💳</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
