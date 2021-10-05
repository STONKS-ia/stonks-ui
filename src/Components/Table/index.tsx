import React from "react";
import styleTable from "./table.module.scss";

function Table(filter: any) {
  const { cityId, name, imgUrl, originalPortalUrl, month, year, type } = filter;
  console.log(year)
  return (
    <div className={styleTable.table}>
    </div>
  );
}
export default Table;
