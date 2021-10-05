import React from "react";
import "./table.scss";

function Table(cityId: any , name: string, imgUrl: string, originalPortalUrl: string, year: number, month: number, type: string) {
 function handleClick(){
  if(year === null || year === undefined){
    return year = (new Date()).getFullYear() - 1;
  }
  if(month === null || month === undefined){
    return month = (new Date()).getMonth();
  }
  if(type === null || type === undefined){
    return type = "Receitas";
  }
 console.log(cityId);
 console.log(name);
 console.log(imgUrl);
 console.log(originalPortalUrl);
 console.log(year);
 console.log(month);
 console.log(type);
 }
  return (
    <div className="table">
     <button type="button" className="btn" onClick={handleClick} />
    </div>
  );
}
export default Table;
