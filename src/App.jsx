import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraDeNavegacion from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Galeria from "./views/Galeria";
import NotFound from "./views/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <BarraDeNavegacion />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
