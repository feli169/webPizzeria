import "./Nav.css";

const Nav = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <div className="d-flex align-items-center gap-2 bg-dark px-4 py-2">
        <h8 className="text-light me-3">Pizeria Mama Mia</h8>
        <button type="button" className="btnNav btn btn-secondary me-2 ">
          🍕Home
        </button>
        {token ? (
          <>
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔓Profile
            </button>
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔒Logout
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔐Login
            </button>
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔐Register
            </button>
          </>
        )}
        <button type="button" className="btnNav btn btn-secondary ms-auto">
          🛒Total: ${total.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default Nav;
