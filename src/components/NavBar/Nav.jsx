import "./Nav.css";

const Nav = ({ cambiarPantalla }) => {
  const total = 25000;
  const token = false; 

  return (
    <div>
      <div className="d-flex align-items-center gap-2 bg-dark px-4 py-2">
        <h1 className="text-light me-3">Pizzería Mama Mia</h1>

        <button
          type="button"
          className="btnNav btn btn-secondary me-2"
          onClick={() => cambiarPantalla("home")}
        >
          🍕 Home
        </button>

        {token ? (
          <>
            <button
              type="button"
              className="btnNav btn btn-secondary me-2"
              onClick={() => cambiarPantalla("profile")} >

            🔓 Profile
          </button>
        <button type="button" className="btnNav btn btn-secondary me-2">
          🔒 Logout
        </button>
      </>
      ) : (
      <>
        <button
          type="button"
          className="btnNav btn btn-secondary me-2"
          onClick={() => cambiarPantalla("login")} 
        >
          🔐 Login
        </button>
        <button
          type="button"
          className="btnNav btn btn-secondary me-2"
          onClick={() => cambiarPantalla("formulario")}
        >
          🔐 Register
        </button>
      </>
)}     
      <button
        type="button"
        className="btnNav btn btn-secondary ms-auto"
        onClick={() => cambiarPantalla("cart")}
      >
        🛒 Total: ${total.toLocaleString()}
      </button>
    </div>
  </div >
  );
 };

export default Nav;
