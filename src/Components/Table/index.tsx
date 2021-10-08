import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState, useEffect } from 'react';
import tribunal from '../../services/tribunal';
import ReactDOM from 'react-dom';
import styleTable from "./table.module.scss";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Table(props: any) {
  const { cityId, name, imgUrl, originalPortalUrl, month, year, type } = props;
  
  const [user, setUser] = useState();

  useEffect(() => {
    tribunal
      .get(`/${type}/${name}/${year}/${month}`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div className={styleTable.table}>
      <div className="card">
                    <DataTable value={user}>
                        <Column field="orgao" header="Órgao"></Column>
                        <Column field="mes" header="Mês"></Column>
                        <Column field="evento" header="Evento"></Column>
                        <Column field="nr_empenho" header="Número do Empenho"></Column>
                        <Column field="id_fornecedor" header="CPF / CNPJ / Ident.Esp."></Column>
                        <Column field="nm_fornecedor" header="Nome do Fornecedor"></Column>
                        <Column field="dt_emissao_despesa" header="Data do evento"></Column>
                        <Column field="vl_despesa" header="Valor"></Column>
                    </DataTable>
                </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Table />, rootElement);
export default Table;
