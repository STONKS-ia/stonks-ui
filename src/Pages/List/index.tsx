import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import success from '../../utils/success';
import error from '../../utils/error';
import "./list.scss";
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

type CityProps = {
  cityId: number;
  name: string;
  imgUrl: string;
  originalPortalUrl: string;
};
const List = () => {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [input, setInput] = useState("");

  async function getCities() {
    try{
      const res = await api.get("/stonks/cities");
      const { data:{result}  } = res;
      success("Municipio carregado");
      return setCities(result);
    }catch(err){
      console.error(err);
      error("Municipio nao carregado");
      return [null, err];
    }
  }
  const city = cities.filter(city => city.name.toLowerCase().includes(input.toLowerCase())).map((city, key) => {
          const { cityId, name, imgUrl } = city;
          const url = `city/${cityId}`
          return (
            <Link to={url} className="city" key={key}>
                <img src={imgUrl} alt={name} />
                <p>{name}</p>
            </Link>
          )
  })
  useEffect(() =>{
    getCities();
  }, []);
  return (
    <main className="list-container">
    <ToastContainer />
        <div className="search">
        <input type="text" name="search" onChange={e => setInput(e.target.value)} value={input} placeholder="Search city by name"/>
        <div className="icon">
          <svg id="icon" viewBox="0 0 100 100">
            <circle id="pie" cx="45" cy="45" r="20"></circle>
            <circle id="circle" cx="45" cy="45" r="40"></circle>
            <path id="line" d="M45,45 L100,100"></path>
            <path id="line2" d="M45,45 L100,100"></path>
          </svg>
        </div>
      </div>
      <div className="result">
        { city }
      </div>
    </main>
  );
};
export default List;
