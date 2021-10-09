import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';

import success from "../../utils/success";
import error from "../../utils/error";
import tribunal from '../../services/tribunal';

import styleTable from "./table.module.scss";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

function Receitas(props: any) {
  const {name, month, year, type } = props;
  const [user, setUser] = useState();
  const [result, setResult] = useState();
  let loading: boolean = false;

  const getTable = useCallback( async ()=>{
    try {
      loading = true;
      const res = await tribunal.get(`/receitas/${name}/${year}/${month+1}`)
      const { data } = res;
      success("Tabela carregada");
      loading = false;
      setResult(data);
    } catch (err) {
      console.error(err);
      error("Erro ao carregar tabela");
      return [null, err];
    }
  }, [name, year, month])

  useEffect(() => {
   getTable()
  }, []);
  return (
    <div className={styleTable.table}>
      <div className="card">
            <DataTable value={result}>
                <Column field="orgao" header="Órgao"></Column>
                <Column field="mes" header="Mês"></Column>
                <Column field="ds_fonte_recurso" header="Evento"></Column>
                <Column field="ds_cd_aplicacao_fixo" header="Número do Empenho"></Column>
                <Column field="ds_alinea" header="CPF / CNPJ / Ident.Esp."></Column>
                <Column field="ds_subalinea" header="Nome do Fornecedor"></Column>
                <Column field="vl_arrecadacao" header="Data do evento"></Column>
            </DataTable>
      </div>
    </div>
  );
}


export default Receitas;
