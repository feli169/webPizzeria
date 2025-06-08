
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Alert from "../../components/Alert/Alert";
import "./Login.css";


const Login = () => {
  const { handleLogin, setEmail, setPassword, alerta } = useContext(CartContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Form className="container  mt-5 pt-5 w-25" onSubmit={handleLogin}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={handleEmail}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ejemplo@mail.com" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={handlePass}
        >
          <Form.Label>Contraceña</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <div className="text-center">
          <Button className="w-50" variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </div>
      </Form>
       {alerta.mensaje && <Alert alerta={alerta.mensaje} tipo={alerta.tipo} />}
    </div>
  );
};

export default Login;
