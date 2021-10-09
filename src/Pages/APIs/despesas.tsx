import apisStyle from "./api.module.scss";

const Despesas = () => {
 return (
  <div id={apisStyle.content}>
          <h2>Despesas</h2>
          <p id={apisStyle.description}>
            Exibe informações sobre despesas detalhadas dos Municípios
            jurisdiconados ao TCESP com as informações descritas abaixo.
          </p>
          <div id={apisStyle.table}>
            <table>
              <tbody>
                <tr>
                  <td>Caminho: </td>
                  <td>
                    {
                      "https://transparencia.tce.sp.gov.br/api/{formato}/despesas/{municipio}/{exercício}/{mês}"
                    }
                  </td>
                </tr>
                <tr>
                  <td>Exemplo:</td>
                  <td>
                    <a
                      id="link-exemplo"
                      href="https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1"
                    >
                      https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1
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
                <tr>
                  <td>Município:</td>
                  <td>
                    {
                      "https://transparencia.tce.sp.gov.br/api/{formato}/municipios"
                    }
                  </td>
                </tr>
                <tr>
                  <td>Exercício:</td>
                  <td>2014-2019</td>
                </tr>
                <tr>
                  <td>Mês:</td>
                  <td>1-12</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
 )
};

export default Despesas;
