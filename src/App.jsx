import Nav from "./sections/Nav";
import Habilidades from "./sections/Tecnologias";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Contactame from "./sections/Contactame";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos predeterminados de AOS
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      easing: "ease", // Efecto de suavizado
    });
  }, []);
  return (
    <>
      <Nav />
      <Inicio />
      <main className="main">
        <Habilidades />
        <SobreMi />
        <Contactame />
      </main>
    </>
  );
}
