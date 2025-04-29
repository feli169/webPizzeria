import "./Nav.css";

const Nav = ({ cambiarPantalla }) => {
  const total = 25000;
  const token = false; // Suponemos que no está logueado por ahora

  return (
    <div>
      <div className="d-flex align-items-center gap-2 bg-dark px-4 py-2">
        <h1 className="text-light me-3">Pizzería Mama Mia</h1>

        {/* Botón Home */}
        <button
          type="button"
          className="btnNav btn btn-secondary me-2"
          onClick={() => cambiarPantalla("home")}
        >
          🍕 Home
        </button>

        {/* Login/Register o Profile/Logout */}
        {token ? (
          <>
            <button
              type="button"
              className="btnNav btn btn-secondary me-2"
              onClick={() => cambiarPantalla("profile")} // opcional si haces pantalla de profile
<div className=""></div>                                                                                                                                                                                                  >
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
          onClick={() => cambiarPantalla("login")} // opcional si haces login
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

      {/* Botón del carrito */}
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
