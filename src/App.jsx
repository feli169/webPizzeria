import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home"
import Formulario from "./components/Formulario/Formulario";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [pantallaActual, setPantallaActual] = useState("home");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav cambiarPantalla={setPantallaActual} />
      <main className="flex-grow-1">
      {pantallaActual === "home" && <Home />}
      {pantallaActual === "formulario" && <Formulario />}
      {pantallaActual === "cart" && <Cart />}
   </main>
      <Footer />
    </div>
  );
}

export default App;
