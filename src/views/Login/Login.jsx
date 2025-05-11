import { useState } from "react";
import "./Login.css";
import Alert from "../../components/Alert/Alert"

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [contracenaIncorrecta, setContracenaIncorrecta] = useState('');
  const [exito, setExito] = useState(false);

  const validarIngreso = (e) => {
    e.preventDefault();

    let camposVacios =  email === "" || contraseña === "" ;
    let contracenaIncorrecta = contraseña !== "123456";
    let userNotFoun = email !== "mail@ejemplol.com";

    setError (camposVacios);
    setUserNotFound (userNotFoun);
    setContracenaIncorrecta(contracenaIncorrecta);

    if (camposVacios || userNotFoun || contracenaIncorrecta)  {
     setExito(false);
      return;
    }
   
    setError(false);
    setUserNotFound(false);
    setEmail("");
    setContraseña("");
    setExito(true);
  };

  return (
    <div className="container text-center bg-white p-4 mt-3 vh-100">

      <form onSubmit={validarIngreso}>
      
        <div className="form-group">
          <label>Email</label>
          <input
            placeholder="tuemail@ejemplo.com"
            type="email"
            className=" form-control "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group ">
          <label>Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            style={contracenaIncorrecta ? { border: '2px solid red' } : {}}
            className="form-control  "
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        
        <button className="btn btn-dark  px-3 mt-2" type="submit">
            Login
        </button>
      </form>
      {error && <Alert  alerta ='Completa todos los campos !'/>}
      {userNotFound && <Alert  alerta ='Usuario no encontrado.'/>}
      {exito && <Alert alerta="¡Acseso exitoso!" tipo="exito" />}
      {contracenaIncorrecta && <Alert alerta ='Contraseña incorrecta.'/>}
    </div>
  );
  
};

export default Formulario;