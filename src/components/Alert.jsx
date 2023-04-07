import React from "react";

const Alert = (props) => {
  const { mensaje, border, color, backgroundColor } = props.verificacion;
  return <h1 className="alerta" style={{ border, color, backgroundColor }}>{mensaje}</h1>;
};

export default Alert;
