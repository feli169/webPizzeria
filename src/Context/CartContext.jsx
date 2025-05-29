import { createContext, useState  } from "react";

export const CartContext = createContext();//ceramos el contexto

const CartProvider = ({ children }) => {//  que va a ahcer el contexto
  const [cart, setCart] = useState([]);//declaramos  estados

  const addToCart = (pizza) => { //agregar al carro
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === pizza.id);
      if (existing) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p // si existe la suma al total
        );
      } else {
        return [...prevCart, { ...pizza, cantidad: 1 }]; //si no existe la agrega
      }
    });
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.cantidad, 0); // calculamos el total
  const itemCount = cart.reduce((acc, pizza) => acc + pizza.cantidad, 0); // contamos las pizzas

const [token, setToken] = useState(true);



  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, total, itemCount, token, setToken, }}>
      {children}
    </CartContext.Provider> //definimos el proveedor
  );
};

export default CartProvider;
