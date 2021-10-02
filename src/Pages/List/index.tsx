import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import success from '../../utils/success'
import error from '../../utils/error'
import api from '../../services/api';

import "./list.scss";
import 'react-toastify/dist/ReactToastify.css';

type CityProps = {
    cityId: number,
    name: string,
    imgUrl: string,
    originalPortalUrl: string
}
const List = () => {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [input, setInput] = useState("");
  async function getCities() {
    try{
        const res = await axios.get(`${api}/stonks/cities`)
        await success()
        const { data } = res;
        return setCities(data.result);
    }catch(err){
      console.error(err);
      await error();
      return [null, err];
    }
  }
  const city = cities.filter(city => city.name.toLowerCase().includes(input.toLowerCase())).map((city, key) => {
          const { cityId, name, imgUrl, originalPortalUrl } = city;
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
  }, [])
  return (
    <>
      <div className="searchBar">
        <div className="search">
          <div className="icon">
            <svg id="icon" viewBox="0 0 100 100">
              <circle id="pie" cx="45" cy="45" r="20"></circle>
              <circle id="circle" cx="45" cy="45" r="40"></circle>
              <path id="line" d="M45,45 L100,100"></path>
              <path id="line2" d="M45,45 L100,100"></path>
            </svg>
          </div>
          <input type="text" name="search" className="input" onChange={e => setInput(e.target.value)} value={input} placeholder="Search city by name"/>
        </div>
      </div>
      <div className="city-container">
        { city }
      </div>
    </>
  );
};
export default List;
