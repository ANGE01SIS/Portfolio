import { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function Inicio() {
  const que_hago_txt = useRef();
  useEffect(() => {
    if (!que_hago_txt.current) return;
    const options = {
      strings: [
        "Fullstack software developer",
        "Un aficionado a la tecnología",
      ],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      cursorChar: "",
      loop: true,
    };
    const typed = new Typed(que_hago_txt.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <header className="header" id="inicio">
      <a href="#contactame">
        <img
          src="/public/imgs/whatsapp_logo.svg"
          alt="whatsapp-logo"
          className="icon-name icon-whatsapp-name hoverable"
        />
      </a>
      <a href="#contactame">
        <img
          src="/public/imgs/email_logo.svg"
          alt="email-logo"
          className="icon-name icon-email-name hoverable"
        />
      </a>
      <h1 className="inicial_txt">
        Hola :) soy
        <strong className="name">Ángel</strong>
      </h1>

      <p className="que_hago_txt hoverable" ref={que_hago_txt}></p>
      <a href="#tecnologias">
        <img
          src="/public/elements/flecha.svg"
          alt="flecha"
          className="flecha hoverable"
        />
      </a>
    </header>
  );
}
