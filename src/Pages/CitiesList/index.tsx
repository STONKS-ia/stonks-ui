
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from 'primereact/button';
import useSWR from 'swr'

import success from "../../utils/success";
import error from "../../utils/error";
import apiUrl from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import listStyle from "./list.module.scss";

type CityProps = {
  cityId: number;
  name: string;
  imgUrl: string;
  originalPortalUrl: string;
};

const CitiesList: React.FC = () => {
  const [ cities, setCities ] = useState<CityProps[]>([]);
  const [ input, setInput ] = useState("");
  const [ page, setPage ] = useState(0);
  const [ search, setSearch ] = useState("");
  const { roles } = useAuth();
  const history = useHistory();
  const [ isLoggedIn , setIsLoggedIn ] = useState<boolean>(false);
  
  useEffect(() => {
    if(roles === "ROLE_ADMIN"){
        setIsLoggedIn(true);
    }else{
        setIsLoggedIn(false);
    }
  }, [roles])

  useEffect(() =>{
      async function getCities() {
      try {
        const res = await apiUrl.get(`/stonks/cities/paged?name=${search}&page=${page}`);
        const { data: { result : {content}}} = res;
        return setCities(cities.concat(content));
      } catch (err) {
        console.error(err);
        error("Problemas ao carregar municipios");
        return [null, err];
      }
    }
    getCities();
  }, [page, search]);

  const addMunicipio = () =>{
    history.push('/save/city')
  }
  const handleScroll = (e: any) =>{
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if(bottom){
      setPage(page+1);
    }
  }
  const handleClick = () =>{
    setSearch(input);
  }
  const city = cities.map((city, key) => {
          const { cityId, name, imgUrl } = city;
          const url = `/cities/${cityId}`
          return (
            <Link to={url} className={listStyle.city} key={key}>
                <img id={listStyle.imgUrl} src={imgUrl} alt={name} />
                <p id={listStyle.name}>{name}</p>
            </Link>
          )
  })
  
  return (
    <main className={listStyle.listContainer}>
      <ToastContainer />
      <div className={listStyle.search}>
        <input
          type="text"
          name="search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search city by name"
        />
        <div className={listStyle.icon} onClick={handleClick}>
          <svg id={listStyle.icon} viewBox="0 0 100 100">
            <circle id={listStyle.pie} cx="45" cy="45" r="20"></circle>
            <circle id={listStyle.circle} cx="45" cy="45" r="40"></circle>
            <path id={listStyle.line} d="M45,45 L100,100"></path>
            <path id={listStyle.line2} d="M45,45 L100,100"></path>
          </svg>
        </div>
      </div>
      {isLoggedIn &&
          <Button label="Novo Município" icon="pi pi-plus" id={listStyle.addMunicipio} className="p-button p-mr-2"  onClick={() => addMunicipio()} />}
      <div onScroll={(e) => handleScroll(e)} className={listStyle.result}>
       {city}
        </div>
    </main>
  );
};
export default CitiesList;
