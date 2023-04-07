import Carousel from "react-bootstrap/Carousel";

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://cakedecorist.com/wp-content/uploads/2022/01/60th-Anniversary-Cakes.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://i0.wp.com/robbreport.mx/wp-content/uploads/2019/04/portadabodas.jpg?fit=1024%2C683&ssl=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://www.entrenovias.com/wp-content/uploads/2016/11/pasteles-de-boda-842x474.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
