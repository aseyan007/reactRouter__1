import Tarjeta from "../components/Tarjeta";
import Container from "react-bootstrap/esm/Container";

function Galeria() {
  return (
    <Container className="galeria">
      <section className="tarjetas">
        <Tarjeta
          url="https://www.clarin.com/img/2020/09/11/XxpFiUMHR_1256x620__1.jpg"
          titulo="Torta Sacher "
          descripcion="Es una torta austríaca. Consta de un bizcocho de chocolate, un relleno de dulce de damascos y un baño de chocolate."
        />
        <Tarjeta
          url="https://www.recetasnestle.cl/sites/default/files/styles/crop_recipe_card/public/srh_recipes/45f3ff5ef531b2ba3683680cb19d6463.jpg.webp?itok=QD4NASX5"
          titulo="Bavarois Receta Ideal"
          descripcion="El Bavarois es un postre que se sirve frío y  lleva gelatina, nata montada, crema inglesa y suele acompañarse de fruta tropical."
        />
        <Tarjeta
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M1n42xfjpelE8TJkpGI99WrgBv6_Xisx6A&usqp=CAU"
          titulo="Brazo de gitano"
          descripcion="El brazo de gitano es una de las elaboraciones más famosas y degustadas, se trata de un bizcocho relleno y espolvoreado."
        />
        <Tarjeta
          url="https://vivanda.vtexassets.com/arquivos/ids/255241/915991.jpg?v=637502998486070000"
          titulo="Pie de Manzana"
          descripcion="Es ese famoso pastel, relleno de trozos de manzana redondo que arriba lleva unas tiras enlazadas de masa."
        />
        <Tarjeta
          url="https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg"
          titulo="Donas"
          descripcion="Una dona, también llamada dónut​​​, rosquilla, rosquita, rosqueta, rosca o berlín, es una rosca de pan dulce que está frito en grasa de cerdo."
        />
        <Tarjeta
          url="https://mandolina.co/wp-content/uploads/2020/12/torta-de-pin%CC%83a.jpg"
          titulo="Torta de Piña"
          descripcion="Su exterior es crujiente y apelmazado, y en su interior una mermelada de piña, o bien rodajas deshidratadas de piña."
        />
      </section>
    </Container>
  );
}

export default Galeria;
