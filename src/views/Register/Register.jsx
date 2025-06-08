import { useState } from "react";
import "./Register.css";
import Alert from "../../components/Alert/Alert"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const Formulario = () => {
const {handleRegister, error, errorPass, largo, exito, nombre, setNombre, userEmail, setUserEmail, contraseña, setContraseña, confirmacion, setConfirmacion } =useContext(CartContext);
  


  return (
    <div className="container text-center bg-white p-4 my-5 vh-100">

      <form onSubmit={handleRegister}>
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
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
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
      {largo && <Alert alerta ='Por favor ingresa una contraseña más larga'/>}
    </div>
  );
  
};

export default Formulario;
