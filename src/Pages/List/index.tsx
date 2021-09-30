import React, { useEffect, useState } from "react";
import axios from 'axios';
import searchIcon from "../../assets/img/search.svg";
import "./list.scss";
import { Link } from "react-router-dom";

const List = () => {
  const url = `http://localhost:8080`
  const [cities, setCities] = useState([]);
  function getCities() {
    try{
      axios.get(`${url}/stonks/cities`).then(res=> {
        const { data } = res;
        const {message, status, result} = data;
        console.log(status + ' - ' + message);
        return setCities(result);
      })
    }catch(err){
      console.error(err);
      return [null, err];
    }
    }
  
  useEffect(() =>{
    getCities();
  }, [])
  const city = cities.map((city, key) => {
          const { cityId, name, imgUrl, originalPortalUrl } = city;
          const url = `city/${cityId}`
          return (
            <Link to={url} className="city" key={key}>
                <img src={imgUrl} alt={name} />
                <p>{name}</p>
            </Link>
          )
  })
  return (
    <>
      <div className="searchBar">
        <div className="search">
          <div className="icon"></div>
          <input type="text" name="search" className="input" placeholder="Search city by name"/>
        </div>
      </div>
      <div className="city-container">
        { city }
      </div>
    </>
  );
};
export default List;
