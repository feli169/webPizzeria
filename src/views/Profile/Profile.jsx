import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Profile = () => {

    const {token, setToken} =useContext(CartContext);
const log_out = () => {
  setToken(false);
};

  return (
    <div className='container my-5  text-center vh-100'>
      <form>
        <span className='d-block py-4'>mail@ejemplo.com</span>
        <button onClick={log_out} type="button" className="btnNav btn btn-secondary me-2">
            🍕 Cerrar sesión
          </button>
      </form>
    </div>
  )
}

export default Profile
