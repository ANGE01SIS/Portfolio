export default function SobreMi() {
  return (
    <section className="sobre_mi_section" id="sobremi">
      <h2 className="encabezado sobre_mi_title">Sobre Mí</h2>
      <aside className="contotal_data_sobre_mi">
        <div className="cont_sobre_mi_sobre_mi hoverable" data-aos="fade-right">
          <div className="div_aux_icon_name_sobre_mi div_aux_icon_name_sobre_mi_seccion hoverable">
            <img
              src="/elements/user.svg"
              alt="sobre-mi-icon"
              className="hoverable"
            />
            <h4 className="subtitulo quien_soy_subtitulo hoverable">
              ¿Quién soy?
            </h4>
          </div>
          <p className="texto_sobre_mi descripcion_sobre_mi hoverable">
            Desarrollador fullstack apasionado por la tecnología, enfocado en
            crear soluciones innovadoras y funcionales. Comprometido con la
            excelencia, el aprendizaje continuo y el desarrollo de aplicaciones
            visionarias que anticipen el futuro.
          </p>
        </div>
        <div className="div_aux_sobre_mi">
          <div className="div_aux_sobre_mi_sobreaux">
            <div
              className="cont_fullstack_sobre_mi cont_sobre_mi_data hoverable"
              data-aos="fade-down"
            >
              <div className="div_aux_icon_name_fullstack div_aux_icon_name_sobre_mi_seccion hoverable">
                <img
                  src="/elements/star.svg"
                  alt="fullstack-icon"
                  className="hoverable"
                />
                <h4 className="subtitulo fullstack_subtitulo hoverable">
                  Fullstack
                </h4>
              </div>
              <p className="texto_sobre_mi descripcion_fullstack hoverable">
                Construcción de aplicaciones web completas, el diseño de
                interfaces atractivas y la implementación de sistemas robustos.
              </p>
            </div>
            <div
              className="cont_apis_sobre_mi cont_sobre_mi_data hoverable"
              data-aos="fade-down"
            >
              <div className="div_aux_icon_name_apis div_aux_icon_name_sobre_mi_seccion hoverable">
                <img
                  src="/elements/llave_inglesa.svg"
                  alt="apis-icon"
                  className="hoverable"
                />
                <h4 className="subtitulo apis_subtitulo hoverable">APIs</h4>
              </div>
              <p className="texto_sobre_mi apis_descripcion hoverable">
                Integración y desarrollo de servicios backend escalables con
                Django REST Framework.
              </p>
            </div>
          </div>
          <div
            className="cont_manejo_creacion_de_bd_sobre_mi cont_sobre_mi_data hoverable"
            data-aos="fade-up"
          >
            <div className="div_aux_icon_name_bd div_aux_icon_name_sobre_mi_seccion hoverable">
              <img
                src="/elements/engranajes.svg"
                alt="manejo-bd-icon"
                className="hoverable"
              />
              <h4 className="subtitulo manejo_creacion_de_bd hoverable">
                Manejo y creacion de BD
              </h4>
            </div>
            <p className="texto_sobre_mi manejo_creacion_de_bd hoverable">
              Diseño, creación y gestión de bases de datos eficientes y de
              calidad, aplicando buenas prácticas para optimizar el rendimiento,
              garantizar la integridad de los datos y mantener un control de
              acceso adecuado para asegurar la seguridad y fiabilidad de la
              información.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
