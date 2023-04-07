import { Link } from "react-router-dom";

function BarraDeNavegacion() {
  return (
    <nav className="bg-pink menuNavegacion">
      <li>
        {" "}
        <Link to="/" className="elementoLista">
          Home
        </Link>
      </li>
      <li>
        <Link to="contacto" className="elementoLista">
          Contacto
        </Link>
      </li>
      <li>
        <Link to="galeria" className="elementoLista">
          Galeria
        </Link>
      </li>
    </nav>
  );
}

export default BarraDeNavegacion;
