import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

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
  const dt = useRef(null);
  
  const getTable = useCallback( async ()=>{
    const nameExtenso = replaceSpecialChars(name);
    setLoading(true);
    try {
      const res = await tribunal.get(`/receitas/${nameExtenso}/${year}/${month+1}`)
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

//   const exportCSV = (selectionOnly: any) => {
//     dt.current.exportCSV({ selectionOnly });
// }

// const exportPdf = () => {
//     import('jspdf').then(jsPDF => {
//         import('jspdf-autotable').then(() => {
//             const doc = new jsPDF.default(0, 0);
//             doc.autoTable(exportColumns, result);
//             doc.save('products.pdf');
//         })
//     })
// }

// const exportExcel = () => {
//     import('xlsx').then(xlsx => {
//         const worksheet = xlsx.utils.json_to_sheet(result);
//         const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//         const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//         saveAsExcelFile(excelBuffer, 'products');
//     });
// }

// const saveAsExcelFile = (buffer: any, fileName: any) => {
//     import('file-saver').then(FileSaver => {
//         let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//         let EXCEL_EXTENSION = '.xlsx';
//         const data = new Blob([buffer], {
//             type: EXCEL_TYPE
//         });
//         FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
//     });
// }

// const header = (
//     <div className="p-d-flex p-ai-center export-buttons">
//         <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
//         <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
//         <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
//         <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
//     </div>
// );

  useEffect(() => {
   getTable()
  }, [month, year]);
  return (
      <ScrollPanel  className={styleTable.custom}>
            <DataTable value={result}  paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} loading={loading} className={styleTable.table} >
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
