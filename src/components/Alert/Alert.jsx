
const Alert = ({alerta, tipo = "error" }) => {
  const color =
    tipo === "exito"
      ? "bg-success text-white"
      : "bg-danger text-white";

  return (
    <div className= {(`alert mt-3 ${color}`)  } role="alert">
     {alerta}
    </div>
  )
}

export default Alert
