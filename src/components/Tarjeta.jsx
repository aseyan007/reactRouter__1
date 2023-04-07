import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function Tarjeta({ url, titulo, descripcion }) {
  return (
    <Container>
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Img className="imagen" variant="top" src={url} />
        <Card.Body className="card">
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Tarjeta;
