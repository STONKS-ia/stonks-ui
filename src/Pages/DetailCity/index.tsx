import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import success from '../../utils/success'
import error from '../../utils/error'
import api from '../../services/api';

import "./detail.scss";

type CityProps = {
    cityId: number,
    name: string,
    imgUrl: string,
    originalPortalUrl: string
}
const Detail = () => {
  const { cityId } = useParams<{cityId?: any}>();
  const [city, setCity] = useState<CityProps[]>([]);

  async function getCityById() {
    try{
      const res = await axios.get(`${api}/stonks/cities/${cityId}`);
      const { data:{result} } = res;
      success("Municipio carregado");
      return setCity(result);
    }catch(err){
      console.error(err);
      error("Municipio nao carregado");
      return [null, err];
    }
  }
  useEffect(() =>{
   getCityById();
  }, [])
  return (
    <>
    <ToastContainer />
    </>
  );
};
export default Detail;
