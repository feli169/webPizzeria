import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; //Importacion

import "./Nav.css";

const Nav = () => {
    const token = true;

  const { total, itemCount } = useContext(CartContext); //llamada

  return (
  
      <div className="d-flex align-items-center gap-2 bg-dark px-4 py-auto  top-0 vw-100">
        <h1 className="text-light me-3">Pizzería Mama Mia</h1>

        <Link to="/">
          <button type="button" className="btnNav btn btn-secondary me-2">
            🍕 Home
          </button>
        </Link>

        {token ? (
          <>
          <Link
          to="/profile">
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔓 Profile
            </button>
          </Link>

            <button type="button" className="btnNav btn btn-secondary me-2">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
      <Link to="/login">
              <button type="button" className="btnNav btn btn-secondary me-2">
                🔐 Login
              </button>
           </Link>
      <Link to="/register">
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔐 Register
            </button>
            </Link>
          </>
        )}
        <Link to="/cart">
          <button type="button" className="btnNav btn btn-secondary ms-auto">
            🛒 Cant: {itemCount}  Total: ${total.toLocaleString()} //Uso
          </button>
        </Link>
      </div>
 
  );
};

export default Nav;
