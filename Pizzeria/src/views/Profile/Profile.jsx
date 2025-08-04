import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate} from "react-router-dom";

const Profile = () => {
    
const { userData, logout} =useContext(CartContext);

   const navigate = useNavigate();

const handleLog_out = (e) => {
    logout()
    navigate ("/")
};

  return (
    <div className='container my-5  text-center vh-100'>
      <form>
        {userData?(
          <>
          <span className='d-block py-4'>Hola {userData.email}</span>
        <button onClick={handleLog_out} type="button" className="btnNav btn btn-secondary me-2">
            🍕 Cerrar sesión
          </button>
          </>
        ):(
         <span>Por Favor inica sesión Correctamente</span>
        )}
        
      </form>
    </div>
  )
}

export default Profile
