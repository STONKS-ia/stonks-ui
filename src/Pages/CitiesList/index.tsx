
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from 'primereact/button';

import error from "../../utils/error";
import apiUrl from "../../services/api";
import ContentLoader from "react-content-loader"
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
  const [ loading, setLoading ] = useState(false);
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
          setLoading(true);
      try {
        const res = await apiUrl.get(`/stonks/cities`);
        const { data: { result }} = res;
        setTimeout(() => { setLoading(false) }, 2000)
        return setCities(result);
      } catch (err) {
        console.error(err);
        setTimeout(() => { error("Problemas ao carregar municipios"); setLoading(false) }, 2000)
        return [null, err];
      }
    }
    getCities();
  }, []);

  const addMunicipio = () =>{
    history.push('/save/city')
  }
  const city = cities.filter(city => city.name.toLowerCase().includes(input.toLowerCase())).map((city, key) => {
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
        <div className={listStyle.icon}>
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
      <div className={listStyle.result}>
       {!loading ? city :  
          <ContentLoader className={listStyle.load}>
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%"  />
          </ContentLoader> }
        </div> 
    </main>
  );
};
export default CitiesList;
