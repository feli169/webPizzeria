import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <div className="d-flex align-items-center gap-2 bg-dark px-4 py-2">
        <h1 className="text-light me-3">Pizzería Mama Mia</h1>

        <Link to="/">
          <button type="button" className="btnNav btn btn-secondary me-2">
            🍕 Home
          </button>
        </Link>

        {token ? (
          <>
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔓 Profile
            </button>
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

            <button type="button" className="btnNav btn btn-secondary me-2">
              🔐 Register
            </button>
          </>
        )}
        <Link to="/cart">
          <button type="button" className="btnNav btn btn-secondary ms-auto">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
