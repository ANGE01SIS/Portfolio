import { useEffect, useState, useRef } from "react";
import NavMinimized from "./NavMinimized";

export default function Nav() {
  const [isNavMinActive, setIsNavMinActive] = useState(false);
  const nav_minimized = useRef();

  useEffect(() => {
    // isNavMinActive = True = El nav minimizado va a estar visible
    // isNavMinActive = False = El nav minimizado NO va a estar visible

    if (nav_minimized.current) {
      if (isNavMinActive == true) {
        nav_minimized.current.classList.remove("nav_min_desactive");
        nav_minimized.current.classList.add("nav_min_active");
      } else if (isNavMinActive == false) {
        nav_minimized.current.classList.remove("nav_min_active");
        nav_minimized.current.classList.add("nav_min_desactive");
      }
    }
  }, [isNavMinActive]);

  return (
    <>
      <nav className="nav">
        <div className="cont_nav">
          <ul className="list_nav">
            <li className="element_nav inicio_nav">
              <a href="#inicio" className="element_nav_link hoverable">
                Inicio
              </a>
            </li>
            <li className="element_nav habilidades_nav">
              <a href="#tecnologias" className="element_nav_link hoverable">
                Tecnologías
              </a>
            </li>
            <li className="element_nav sobre_mi_nav">
              <a href="#sobremi" className="element_nav_link hoverable">
                Sobre Mí
              </a>
            </li>
            <li className="element_nav contactame_nav">
              <a href="#contactame" className="element_nav_link hoverable">
                Contactame
              </a>
            </li>
            <li
              className="nav_icon_minimized"
              onClick={() => setIsNavMinActive(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </nav>
      <NavMinimized
        desactivateFunc={() => setIsNavMinActive(false)}
        _ref={nav_minimized}
      />
    </>
  );
}
