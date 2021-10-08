import styleTable from "./table.module.scss";

function Table(props: any) {
  const { cityId, name, imgUrl, originalPortalUrl, month, year, type } = props;
  console.log(year)
  return (
    <div className={styleTable.table}>
      <p>OI CHAVAO</p>
    </div>
  );
}
export default Table;
