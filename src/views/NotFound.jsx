import Container from "react-bootstrap/esm/Container";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function NotFound() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container className="contenedorError">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>¡Ocurrio un error!</Alert.Heading>
          <p>Ha ocurrido un error, por favor regrese al inicio.</p>
          <Button>
            {" "}
            <a href="/" id="botonError">
              Ir al inicio
            </a>
          </Button>
        </Alert>
      </Container>
    );
  }
}

export default NotFound;
