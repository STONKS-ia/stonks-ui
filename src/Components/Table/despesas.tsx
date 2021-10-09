import ReactDOM from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';

import success from "../../utils/success";
import error from "../../utils/error";
import tribunal from '../../services/tribunal';

import styleTable from "./table.module.scss";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.css';


function Despesas(props: any) {
  const {name, month, year, type } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [first1, setFirst1] = useState(0);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');
  const [rows1, setRows1] = useState(10);

  
  
  const getTable = useCallback( async ()=>{
    try {
      const res = await tribunal.get(`/despesas/${name}/${year}/${month+1}`)
      const { data } = res;
      success("Tabela carregada");
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
            <DataTable value={result} >
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
export default Despesas;
