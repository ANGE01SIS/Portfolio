export default function Contactame() {
  function copy_text(txt) {
    //Copia un texto
    navigator.clipboard
      .writeText(txt)
      .catch((e) => alert(`Ha habido un error: ${e}`));
  }

  return (
    <section className="contactame_section" id="contactame">
      <h2 className="encabezado contactame_title">Contáctame</h2>
      <aside className="cont_contactame_email">
        <div className="cont_email_contactame cont_contactame">
          <span className="email_txt">andressamaniegosandoval@gmail.com</span>
          <img
            src="/imgs/email_logo.svg"
            alt="email-logo"
            className="email_logo_contactame"
          />
        </div>
        <div className="aux_div_contactame">
          <div
            className="cont_button_copy action_button hoverable"
            onClick={() => copy_text("andressamaniegosandoval@gmail.com")}
          >
            <img
              src="/elements/copy.svg"
              alt="copy-logo"
              className="hoverable"
            />
          </div>
          <div className="cont_button_send action_button hoverable">
            <a href="mailto:andressamaniegosandoval@gmail.com">
              <img
                src="/elements/send.svg"
                alt="send-logo"
                className="hoverable"
              />
            </a>
          </div>
        </div>
      </aside>
      <aside className="cont_contactame_whatsapp">
        <div className="cont_numero_contactame cont_contactame">
          <span className="nm_telefono">+34 621 08 54 78</span>
          <img
            src="/imgs/whatsapp_logo.svg"
            alt="whatsapp-logo"
            className="whatsapp_logo_contactame"
          />
        </div>
        <div className="aux_div_contactame">
          <div
            className="cont_button_copy action_button hoverable"
            onClick={() => copy_text("+34621085478")}
          >
            <img
              src="/elements/copy.svg"
              alt="copy-logo"
              className="hoverable"
            />
          </div>
          <div className="cont_button_send action_button hoverable">
            <a
              href="https://wa.me/1234567890?text=Hola%20Ángel,%20me%20interesa."
              target="_blank"
            >
              <img
                src="/elements/send.svg"
                alt="send-logo"
                className="hoverable"
              />
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}
