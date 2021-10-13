import React, { useRef, useState} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Select from 'react-select';

import Input  from "../../components/Input"
import newUserStyle from "./newUser.module.scss";
import '../../assets/form.scss'
import customTheme from "../../assets/theme";
import customStyles from "../../assets/style";
import apiUrl from "../../services/api";
import { useEffect } from "react";

type CityProps = {
  cityId: number;
  name: string;
  imgUrl: string;
  originalPortalUrl: string;
};

type OptionProps = {
  value: any,
  label: any
}

const EditUser = () => {
  const [ cities, setCities ] = useState<CityProps[]>([]);
  const [valueUser , setUserType ] = useState("receitas");
  const [ input, setInput ] = useState("");
  const formRef = useRef<FormHandles>(null);
  
  const [optionCities, setOptionCities] = useState<OptionProps[]>([]);
  let optionUsers: OptionProps[] = [
    {value: "ROLE_USER", label:"Usuário comum"},
    {value: "ROLE_ADMIN", label:"Administrador"},
  ]

  const getCities = async () =>{ 
     try {
      const res = await apiUrl.get("/stonks/cities");
      const { data: { result } } = res;
      setCities(result);
    } catch (err) {
      console.error(err);
      return [null, err];
    }
  }  
  useEffect(() => {
    getCities();
  }, [])

  function createCityOption() {
    let resultArray: OptionProps[] = [];
    cities.forEach(city =>{ 
        const { cityId, name } = city;
        let result = {value: cityId, label: name}
        resultArray.push(result);
    })
    setOptionCities(resultArray);
  }
  useEffect(() =>{
    createCityOption();
  }, [cities])
  const handleFormSubmit = () =>{}
  
  return (
    <>
      <Form ref={formRef} onSubmit={handleFormSubmit} className="form" id={newUserStyle.divNewUser}>
        <h3>Editar Usuário</h3>
        <Input name="username" type="text" className="inputField" id={newUserStyle.txtUser} placeholder="Usuário"/>
        <Input name="email" type="text" className="inputField" id={newUserStyle.txtEmail} placeholder="Email"/>
        <Input name="password" type="password" className="inputField" id={newUserStyle.txtPass} placeholder="Senha"/>
        <Input name="phone" type="text" className="inputField" id={newUserStyle.txtPhone} placeholder="Telefone"/>
        <Input name="cityUser" type="text" className="inputField" id={newUserStyle.txtLocation} placeholder="Endereço"/>
        <Select name="roleUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} onChange={(e: any) => setUserType(e.value)} defaultValue={optionUsers[0]}  isSearchable={false}/>
        <Select name="roleUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} options={optionUsers} onChange={(e: any) => setUserType(e.value)} defaultValue={optionUsers[0]}  isSearchable={false}/>
        <button type="submit" className="btnEntrar" id="btnCadastrar">Cadastrar</button>
      </Form>
    </>
  );
};
export default EditUser;