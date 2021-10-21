// @ts-nocheck
import React, { useState, useEffect, useRef  } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
import { ScrollPanel } from 'primereact/scrollpanel';
import ContentLoader from "react-content-loader"
import { Button } from 'primereact/button';

import success from "../../utils/success";
import error from "../../utils/error";
import tribunal from '../../services/tribunal';

import styleTable from "./table.module.scss";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import replaceSpecialChars from '../../utils/replace';

function Despesas(props: any) {
    const {name, month, year } = props;
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();
    const dt = useRef(null);
    
  useEffect(() => {
    async function getTable() {
        setLoading(true);
        const muicipioExtenso = replaceSpecialChars(name);
        try {
            const res = await tribunal.get(`/despesas/${muicipioExtenso}/${year}/${month+1}`)
            const { data } = res;
            setTimeout(() => { success("Tabela carregada"); setLoading(false) }, 2000);
            setResult(data);
        } catch (err) {
            console.error(err);
            setTimeout(() => { error("Erro ao carregar tabela"); setLoading(false) }, 2000);
            return [null, err];
        }
    }
    getTable();
  }, [name, month, year]);
  
  const cols = [
        {align: 'justify', field: 'orgao', header: 'Órgao' },
        {align: 'center', field: 'mes', header: 'Mês' },
        {align: 'center', field: 'evento', header: 'Evento' },
        {align: 'center', field: 'nr_empenho', header: 'Número do Empenho' },
        {align: 'left', field: 'id_fornecedor', header: 'CPF / CNPJ' },
        {align: 'left', field: 'nm_fornecedor', header: 'Nome do Fornecedor' },
        {align: 'center', field: 'dt_emissao_despesa', header: 'Data do evento' },
        {align: 'center', field: 'vl_despesa', header: 'Valor' },
  ];

  const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
}
const exportPdf = () => {
    import('jspdf').then(jsPDF => {
        import('jspdf-autotable').then(() => {
            const doc = new jsPDF.default(0, 0);
            doc.autoTable(exportColumns, result);
            doc.save(`despesas_${name}_${month}/${year}.pdf`);
        })
    })
}

const exportExcel = () => {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(result);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAsExcelFile(excelBuffer, `despesas_${name}_${month}/${year}`);
    });
}

const saveAsExcelFile = (buffer: any, fileName: any) => {
    import('file-saver').then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

const header = (
    <div className="p-d-flex  export-buttons" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
        <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success " data-pr-tooltip="Export to XLS" />
        <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning " data-pr-tooltip="Export to PDF" />
    </div>
);

  return (
    <>
        {loading ?   
                <ContentLoader className={styleTable.custom}>
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="70%" />
                </ContentLoader> : 
        <ScrollPanel  className={styleTable.custom}>
            <Tooltip target=".export-buttons>button" position="bottom" />
            <DataTable   ref={dt} value={result}  header={header}  paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} className={styleTable.table}>
                {cols.map((col, index) => <Column style={{textAlign: col.align}} key={index} field={col.field} header={col.header} sortable />) }
            </DataTable>
        </ScrollPanel>}
    </>
  );
}
export default Despesas;
