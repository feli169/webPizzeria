import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; 

const Cart = () => {
  const { cart, setCart,userData, handlePay} = useContext(CartContext); 


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

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.cantidad,
    0
  );

  return (
    <div className="container my-5 py-4 text-center">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="vh=100 ">Tu carrito está vacío.</p>
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
     
      {!userData  ?(
      <h5>Inicia sesión para realizar compras</h5>
      ) : cart.length === 0 ? (
        <h5>Nada por aquí</h5>
    ):(<div className="mt-4 text-end">
                <h4>Total: ${total.toLocaleString()}</h4>
     <button className="btn btn-primary mb-5 " onClick={handlePay}>Pagar 💳</button>  

        </div>
    )}
    </div>
  );
};

export default Cart;
