import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/NavBar/Nav";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import Pizza from "./views/Pizza/Pizza";
import Footer from "./components/Footer/Footer";
import NotFound404 from "./views/404/404";
import Profile from "./views/Profile/Profile";


function App() {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
        <Footer />
  
    </div>
  );
}

export default App;
