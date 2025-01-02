export default function NavMinimized({ desactivateFunc, _ref }) {
  function exit_nav_min() {
    desactivateFunc();
  }
  return (
    <nav>
      <div className="cont_nav_minimizado" ref={_ref}>
        <ul className="list_nav_minimizado">
          <li className="element_nav_minimizado" data-aos="fade-right">
            <a href="#inicio" onClick={exit_nav_min}>
              Inicio
            </a>
          </li>
          <li className="element_nav_minimizado" data-aos="fade-right">
            <a href="#tecnologias" onClick={exit_nav_min}>
              Tecnologías
            </a>
          </li>
          <li className="element_nav_minimizado" data-aos="fade-right">
            <a href="#sobremi" onClick={exit_nav_min}>
              Sobre Mí
            </a>
          </li>
          <li className="element_nav_minimizado" data-aos="fade-right">
            <a href="#contactame" onClick={exit_nav_min}>
              Contactame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
