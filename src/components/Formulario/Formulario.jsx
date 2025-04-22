import { useState } from "react";
import "./Formulario.css";
import Alert from "../Alert/Alert"

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [error, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [largo, setLargo] = useState('');
  const [exito, setExito] = useState(false);

  const validarIngreso = (e) => {
    e.preventDefault();

    let camposVacios = nombre === "" || email === "" || contraseña === "" ||confirmacion === "";
    let contracenaCorta = contraseña.length < 6;
    let contracenasDistintas = contraseña !== confirmacion;

    setError (camposVacios);
    setErrorPass (contracenasDistintas);
    setLargo(contracenaCorta);

    if (camposVacios || contracenasDistintas || contracenaCorta)  {
     setExito(false);
      return;
    }
   
    setError(false);
    setErrorPass(false);
    setNombre("");
    setEmail("");
    setContraseña("");
    setConfirmacion("");
    setExito(true);
  };

  return (
    <div className="container text-center bg-white p-4 mt-3">

      <form onSubmit={validarIngreso}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            className=" form-control"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

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
            style={errorPass ? { border: '2px solid red' } : {}}
            className="form-control  "
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            placeholder="Confirmar Contraseña"
            type="password"
            style={errorPass ? { border: '2px solid red' } : {}}
            className="form-control"
            onChange={(e) => setConfirmacion(e.target.value)}
            value={confirmacion}
          />
        </div>

        <button className="btn btn-dark  px-3 mt-2" type="submit">
          Registrarse
        </button>
      </form>
      {error && <Alert  alerta ='Completa todos los campos !'/>}
      {errorPass && <Alert  alerta ='Las contraseñas no coinciden'/>}
      {exito && <Alert alerta="¡Registro exitoso!" tipo="exito" />}
      {largo && <Alert alerta ='Por favor ingresa una contraceña más larga'/>}
    </div>
  );
  
};

export default Formulario;
