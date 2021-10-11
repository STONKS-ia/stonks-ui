import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import api from '../../services/api';
import Select from 'react-select';
import Despesas  from '../../components/Table/despesas';
import Receitas  from '../../components/Table/receitas';

import detailStyle from "./detail.module.scss";
import customTheme from "../../assets/theme";
import customStyles from "../../assets/style";

const date = new Date()
const thisYear = date.getFullYear() - 1;
const thisMonth = date.getMonth() ;

type CityProps = {
    cityId: number,
    name: string,
    imgUrl: string,
    originalPortalUrl: string
}

type OptionProps = {
  value: any,
  label: any
}

const Detail = () => {
  const { id } = useParams<{id?: any}>();
  const [city, setCity] = useState<CityProps[]>([]);
  const [optionYear, setOptionYear] = useState<OptionProps[]>([]);
  let optionTypes: OptionProps[] = [
    {value: "receitas", label:"Receitas"},
    {value: "despesas", label:"Despesas"},
  ]
  let optionMonth: OptionProps[] = [
    {value: 0, label:"January"},
    {value: 1, label:"February"},
    {value: 2, label:"March"},
    {value: 3, label:"April"},
    {value: 4, label:"May"},
    {value: 5, label:"June"},
    {value: 6, label:"July"},
    {value: 7, label:"August"},
    {value: 8, label:"September"},
    {value: 9, label:"October"},
    {value: 10, label:"November"},
    {value: 11, label:"December"},
  ]
    function createYearOption() {
      let resultArray: OptionProps[] = [];
      for (let i = 0; i <= 20; i++) {
          let year = thisYear - i;
          let result = {value: year, label: year}
          resultArray.push(result);
      }
      setOptionYear(resultArray);
    }
    useEffect(() =>{
      createYearOption();
      console.log()
    }, [])

  const [valueYear , setValueYear ] = useState(thisYear);
  const [valueMonth , setValueMonth ] = useState(thisMonth);
  const [valueType , setValueType ] = useState("receitas");
  async function getCityById() {
    try{
      const res = await api.get(`/stonks/cities/${id}`);
      const {  data:{result} } = res;
      return setCity(result);
    }catch(err){
      console.error(err);
      return [null, err];
    }
  }
  useEffect(() =>{
    getCityById();
  })
  
  const cityDiv = city.map( (cityDetails, key) =>{
    const {name, originalPortalUrl } = cityDetails;
    return(
     <section className={detailStyle.cityContainer} key={key}>
      <p className={detailStyle.title}>{name}</p>
      <a href={originalPortalUrl} rel="noreferrer" target="_blank" className={detailStyle.link}>
          Portal de transparência
      </a>
      <div className={detailStyle.calendar}> 
          <Select theme={customTheme} styles={customStyles} options={optionMonth}  onChange={(e: any) => setValueMonth(e.value)}  defaultValue={optionMonth[thisMonth]}  isSearchable={false} />
          <Select theme={customTheme} styles={customStyles}  options={optionYear} onChange={(e: any) => setValueYear(e.value)} defaultValue={optionYear[0]}  isSearchable={false} />
      </div>
      <Select styles={customStyles} theme={customTheme} options={optionTypes}  onChange={(e: any) => setValueType(e.value)} defaultValue={optionTypes[0]}  className={detailStyle.typeSelect} isSearchable={false} />
      {valueType === "receitas" ? <Receitas year={valueYear} month={valueMonth} name={name}/> : <Despesas year={valueYear} month={valueMonth} name={name}/>}
      </section>
    )
  })
  return (
    <>
    <ToastContainer />
       {cityDiv}
    </>
  );
};
export default Detail;
