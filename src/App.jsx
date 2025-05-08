import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./views/NavBar/Nav";
import Home from "./views/Home/Home";
import Formulario from "./views/Formulario/Formulario";
import Cart from "./views/Cart/Cart";
import Pizza from "./views/Pizza/Pizza";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/login" element={<Formulario />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
