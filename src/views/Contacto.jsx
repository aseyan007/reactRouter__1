import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Alert from "../components/Alert";

function Contacto() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [verificacion, setverificacion] = useState("");

  const valorDeLaContraseña = "123456";
  const valorDelEmail = "happy@cake.com";

  const correcto = {
    mensaje: "Los datos ingresados son correctos",
    border: "solid 2px blue",
    color: "blue",
    backgroundColor: "rgb(155, 209, 250)",
  };

  const incorrecto = {
    mensaje: "Los datos ingresados son incorrectos",
    border: "solid 2px red",
    color: "red",
    backgroundColor: "rgb(244, 206, 206)",
  };

  const verificarDatos = (e) => {
    e.preventDefault();
    const datosIngresados =
      correo === valorDelEmail && contraseña === valorDeLaContraseña;
    setverificacion(datosIngresados ? correcto : incorrecto);
    setCorreo("");
    setContraseña("");
  };

  return (
    <Container className="formulario">
      <Form onSubmit={verificarDatos}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de email</Form.Label>
          <Form.Control
            value={correo}
            type="email"
            placeholder="Ingrese email"
            onChange={(e) => setCorreo(e.target.value.trim())}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            value={contraseña}
            type="password"
            placeholder="Ingrese contraseña"
            onChange={(e) => setContraseña(e.target.value.trim())}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={!correo || !contraseña}
        >
          Enviar
        </Button>
      </Form>

      <Alert verificacion={verificacion} />
    </Container>
  );
}

export default Contacto;
