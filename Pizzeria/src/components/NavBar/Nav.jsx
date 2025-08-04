import { Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; 


import "./Nav.css";

const Nav = () => {
   const navigate = useNavigate();
  const { total, itemCount, userData, logout} = useContext(CartContext); 


 const handleLog_out = () => {
  logout();
  navigate ("/")
};


  return (
  
      <div className="nav d-flex align-items-center gap-2 bg-dark px-4 py-auto  top-0 vw-100">
        <Link to="/" className="text-decoration-none"><h1 className="text-light me-3">Pizzería Mama Mia</h1></Link>

<Link to="/">
          <button type="button" className="btnNav btn btn-secondary me-2">
            🍕 Home
          </button>
        </Link>
        
               {userData ? (
          <>
          <Link
          to="/profile">
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔓 Profile
            </button>
          </Link>
            <button onClick={handleLog_out} type="button" className="btnNav btn btn-secondary me-2">
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
            🛒 Cant: {itemCount}  Total: ${total.toLocaleString()} 
          </button>
        </Link>
      </div>
 
  );
};

export default Nav;
