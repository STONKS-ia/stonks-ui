import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import success from "../../utils/success";
import error from "../../utils/error";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import listStyle from "./list.module.scss";

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
    try {
      const res = await api.get("/stonks/cities");
      const {
        data: { result },
      } = res;
      success("Municipio carregado");
      return setCities(result);
    } catch (err) {
      console.error(err);
      error("Municipio nao carregado");
      return [null, err];
    }
  }
  const city = cities.filter(city => city.name.toLowerCase().includes(input.toLowerCase())).map((city, key) => {
          const { cityId, name, imgUrl } = city;
          const url = `city/${cityId}`
          return (
            <Link to={url} className={listStyle.city} key={key}>
                <img id={listStyle.imgUrl} src={imgUrl} alt={name} />
                <p id={listStyle.name}>{name}</p>
            </Link>
          )
  })
  useEffect(() =>{
    getCities();
  }, []);
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
      <div className={listStyle.result}>{city}</div>
    </main>
  );
};
export default List;
