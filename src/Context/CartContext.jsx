import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CartContext = createContext(); //ceramos el contexto

const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  //  que va a ahcer el contexto
  const [cart, setCart] = useState([]); //declaramos  estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });
  const [userDataOut, setUserDataOut] = useState(JSON.parse(localStorage.getItem("restData")));
  
  const addToCart = (pizza) => {
    //agregar al carro
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === pizza.id);
      if (existing) {
        return prevCart.map(
          (p) => (p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p) // si existe la suma al total
        );
      } else {
        return [...prevCart, { ...pizza, cantidad: 1 }]; //si no existe la agrega
      }
    });
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.cantidad,
    0
  ); // calculamos el total
  const itemCount = cart.reduce((acc, pizza) => acc + pizza.cantidad, 0); // contamos las pizzas

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setAlerta({ mensaje: "Completa todos los campos", tipo: "error" });
    }
    try {
      const data = { email, password };
      const url = "http://localhost:5000/api/auth/login";
      const resData = (await axios.post(url, data)).data;

      localStorage.setItem("restData", JSON.stringify(resData));
      setAlerta({ mensaje: "¡Inicio de sesion, exitoso!", tipo: "exito" });
      setTimeout(function(){
        navigate("/");
      }, 1000); 
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
     setAlerta({ mensaje: "Datos incorrectos", tipo: "error" });
    }

  };

  const userData = JSON.parse(localStorage.getItem("restData"));

  const logout = () => {
  localStorage.removeItem("restData");
  setUserDataOut(null);
};


const handlePay = async () => {
  try {
    const token = userData?.token;

    const shortCart = cart.map(pizza => ({
      id: pizza.id,
      cantidad: pizza.cantidad,
    }));

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = "http://localhost:5000/api/checkouts";
    const data = { cart: shortCart };

    const response = await axios.post(url, data, config);

    console.log("Pago exitoso:", response.data);
    navigate("/")
    setCart([]);
    alert("¡Compra realizada con éxito!");
  } catch (error) {
    console.error("Error al enviar el carrito:", error);
  }
};


 const [error, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [largo, setLargo] = useState(false);
  const [exito, setExito] = useState(false);
  const [nombre, setNombre] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

const handleRegister = async (e) => {
    e.preventDefault();

    const camposVacios = nombre === "" || userEmail === "" || contraseña === "" ||confirmacion === "";
    const contracenaCorta = contraseña.length < 6;
    const contracenasDistintas = contraseña !== confirmacion;

    setError (camposVacios);
    setErrorPass (contracenasDistintas);
    setLargo(contracenaCorta);

    if (camposVacios || contracenasDistintas || contracenaCorta)  {
     setExito(false);
      return;
    }

    try {
      const data = { email: userEmail, password: contraseña };
      const url = "http://localhost:5000/api/auth/register"; 
      const response = await axios.post(url, data);
       navigate ("/login")

      setError(false);
    setErrorPass(false);
    setLargo (false)
    setNombre("");
    setUserEmail("");
    setContraseña("");
    setConfirmacion("");
    setExito(true);

    } catch (error) {
      console.error("Error en el registro:", error);
    }
    
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        total,
        itemCount,
        handleLogin,
        setEmail,
        setPassword,
        userData,
        alerta,
        setAlerta,
        logout,
        userDataOut,
        handlePay,
        handleRegister, 
        error,
        errorPass,
        largo,
        exito, 
        nombre, 
        setNombre, 
        userEmail, 
        setUserEmail, 
        contraseña, 
        setContraseña,
         confirmacion, 
         setConfirmacion
      }}
    >
      {children}
    </CartContext.Provider> //definimos el proveedor
  );
};

export default CartProvider;
