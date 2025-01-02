import Card from "../components/Card.jsx";
export default function Habilidades() {
  return (
    <section className="habilidades_section" id="tecnologias">
      <h2 className="encabezado tecnologias_que_uso_title">Tecnologías</h2>
      <div className="cont_info_habilidades">
        <div className="cont_info_tecnologias">
          <aside
            className="frontend_cont cont_tecnologias"
            data-aos="fade-right"
          >
            <ul className="list_frontend list_tecnologia">
              <Card className="element_tecnologias html hoverable">
                <img
                  src="/public/imgs/html_logo.svg"
                  alt="html-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias css hoverable">
                <img
                  src="/public/imgs/css_logo.svg"
                  alt="css-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias js hoverable">
                <img
                  src="/public/imgs/js_logo.svg"
                  alt="js-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias react hoverable">
                <img
                  src="/public/imgs/react_logo.svg"
                  alt="react-logo"
                  className="tecnologia"
                />
              </Card>
            </ul>
          </aside>
          <hr
            className="line_separator_tecnologias line_separator"
            data-aos="custom"
          />
          <aside
            className="backend_cont cont_tecnologias"
            data-aos="fade-right"
          >
            <ul className="list_backend list_tecnologia">
              <Card className="element_tecnologias bd hoverable">
                <img
                  src="/public/imgs/bd_logo.svg"
                  alt="bd-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias python hoverable">
                <img
                  src="/public/imgs/python_logo.svg"
                  alt="python-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias django hoverable">
                <img
                  src="/public/imgs/django_logo.svg"
                  alt="django-logo"
                  className="tecnologia"
                />
              </Card>
            </ul>
          </aside>
          <hr
            className="line_separator_tecnologias line_separator"
            data-aos="custom"
          />
          <aside
            className="gestion_cont cont_tecnologias"
            data-aos="fade-right"
          >
            <ul className="list_gestion list_tecnologia">
              <Card className="element_tecnologias git hoverable">
                <img
                  src="/public/imgs/git_logo.svg"
                  alt="git-logo"
                  className="tecnologia"
                />
              </Card>
              <Card className="element_tecnologias github hoverable">
                <img
                  src="/public/imgs/gith_logo.svg"
                  alt="github-logo"
                  className="tecnologia"
                />
              </Card>
            </ul>
          </aside>
        </div>
        <div className="cont_info_desc_habilidades" data-aos="fade-down">
          <aside className="desc_cont_habilidades cont_tecnologias">
            <hr
              className="line_desc_habilidades line_separator"
              data-aos="custom"
            />
            <p className="desc_habilidades">
              Este es el conjunto de tecnologías que manejo, y sé usarlas para
              poder crear webs tanto solidas como eficientes.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
