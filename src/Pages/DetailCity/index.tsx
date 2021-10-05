import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import api from '../../services/api';
import Select from 'react-select'
import Table  from '../../Components/Table'

import "./detail.scss";
import customTheme from "../../assets/theme";

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
  const [valueYear , setValueYear ] = useState();
  const [valueMonth , setValueMonth ] = useState();
  const [valueType , setValueType ] = useState();

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
  }, [])

  async function getCityById() {
    try{
      const res = await api.get(`/stonks/cities/${id}`);
      const {  data:{result} } = res;
      // success("Municipio carregado");
      return setCity(result);
    }catch(err){
      console.error(err);
      // error("Municipio nao carregado");
      return [null, err];
    }
  }
  useEffect(() =>{
    getCityById();
  }, [])
  const cityDiv = city.map( (div, key) =>{
    const {cityId, name, imgUrl, originalPortalUrl } = div;
    return(
     <section className="city-container" key={key}>
      <p className="title">{name}</p>
      <a href={originalPortalUrl} target="_blank" className="link">
          Portal de transparência
      </a>
      <div className="calendar"> 
          <Select theme={customTheme} classNamePrefix="react-select"  options={optionMonth}  onChange={(e: any) => setValueMonth(e.value)}  defaultValue={optionMonth[thisMonth]}  isSearchable={false} />
          <Select theme={customTheme} classNamePrefix="react-select" options={optionYear} onChange={(e: any) => setValueYear(e.value)} defaultValue={optionYear[0]}  isSearchable={false} />
      </div>
      <Select classNamePrefix="react-select" theme={customTheme} options={optionTypes}  onChange={(e: any) => setValueType(e.value)} defaultValue={optionTypes[0]}  className="typeSelect" isSearchable={false} />
      <Table cityId={cityId} name={name} imgUrl={imgUrl} originalPortalUrl={originalPortalUrl} year={valueYear} month={valueMonth} type={valueType}  />
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
