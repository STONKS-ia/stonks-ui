import ReactDOM from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ScrollPanel } from 'primereact/scrollpanel';

import success from "../../utils/success";
import error from "../../utils/error";
import tribunal from '../../services/tribunal';

import styleTable from "./table.module.scss";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';


function Despesas(props: any) {
  const {name, month, year } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  
  const getTable = useCallback( async ()=>{

    setLoading(true);
    try {
      const res = await tribunal.get(`/despesas/${name}/${year}/${month+1}`)
      const { data } = res;
      setLoading(false);
      success("Tabela carregada");
      setResult(data);
    } catch (err) {
        setLoading(false);
      console.error(err);
      error("Erro ao carregar tabela");
      return [null, err];
    }
  }, [name, year, month])

  useEffect(() => {
   getTable()
  }, [month, year]);
  return (
      <ScrollPanel  className={styleTable.custom}>
            <DataTable value={result} paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} loading={loading} className={styleTable.table}>
                <Column field="orgao" header="Órgao"></Column>
                <Column style={{textAlign: 'center'}} field="mes" header="Mês"></Column>
                <Column style={{textAlign: 'center'}} field="evento" header="Evento"></Column>
                <Column style={{textAlign: 'center'}} field="nr_empenho" header="Número do Empenho"></Column>
                <Column field="id_fornecedor" header="CPF / CNPJ / Ident.Esp."></Column>
                <Column field="nm_fornecedor" header="Nome do Fornecedor"></Column>
                <Column style={{textAlign: 'center'}} field="dt_emissao_despesa" header="Data do evento"></Column>
                <Column style={{textAlign: 'center'}} field="vl_despesa" header="Valor"></Column>
            </DataTable>
        </ScrollPanel>
  );
}
export default Despesas;
