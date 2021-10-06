import apisStyle from "./api.module.scss";

const Municipios = () => {
  return (
      <div id={apisStyle.content}>
        <h2>Municípios</h2>
        <p id={apisStyle.description}>
          Exibe a lista de Municípios jurisdicionados ao TCESP
        </p>
        <div id={apisStyle.table}>
          <table>
            <tbody>
              <tr>
                <td>Caminho XML: </td>
                <td>
                  <a
                    className={apisStyle.linkExemplo}
                    href="https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1"
                  >
                    https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1
                  </a>
                </td>
              </tr>
              <tr>
                <td>Caminho JSON: </td>
                <td>
                  <a
                    className={apisStyle.linkExemplo}
                    href="https://transparencia.tce.sp.gov.br/api/json/municipios"
                  >
                    https://transparencia.tce.sp.gov.br/api/json/municipios
                  </a>
                </td>
              </tr>
              <tr>
                <td>Método:</td>
                <td>GET</td>
              </tr>
              <tr>
                <td>Formato:</td>
                <td>json e xml</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Municipios;
