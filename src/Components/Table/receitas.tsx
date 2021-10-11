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
import replaceSpecialChars from '../../utils/replace';


function Receitas(props: any) {
  const {name, month, year } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();


  const getTable = useCallback( async ()=>{
    setLoading(true);
    const muicipioExtenso = replaceSpecialChars(name);
    try {
      const res = await tribunal.get(`/receitas/${muicipioExtenso}/${year}/${month+1}`)
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
            <DataTable value={result}  paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} loading={loading} className={styleTable.table}>
                <Column field="orgao" header="Órgao"></Column>
                <Column style={{textAlign: 'center'}} field="mes" header="Mês"></Column>
                <Column style={{textAlign: 'center'}} field="ds_fonte_recurso" header="Fonte de Recurso"></Column>
                <Column style={{textAlign: 'center'}} field="ds_cd_aplicacao_fixo" header="Código de Aplicação Fixo"></Column>
                <Column field="ds_alinea" header="Alínea"></Column>
                <Column field="ds_subalinea" header="Subalínea"></Column>
                <Column style={{textAlign: 'center'}} field="vl_arrecadacao" header="Arrecadação"></Column>
            </DataTable>
        </ScrollPanel>
  );
}
export default Receitas;
