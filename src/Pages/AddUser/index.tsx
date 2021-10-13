import React, { useRef, useState, useEffect} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import  { AxiosError } from 'axios';
import Select from 'react-select';

import Input  from "../../components/Input"
import newUserStyle from "./newUser.module.scss";
import '../../assets/form.scss'
import { useAuth } from "../../hooks/auth";
import customTheme from "../../assets/theme";
import customStyles from "../../assets/style";
import apiUrl from "../../services/api";
import success from "../../utils/success";
import error from "../../utils/error";

type CityProps = {
  cityId: number;
  name: string;
  imgUrl: string;
  originalPortalUrl: string;
};
interface CreateUserForm {
    email: string,
    username: string,
    phone: string,
    login: string,
    password: string,
    city: {
        cityId: number
    }
}

type OptionProps = {
  value: any,
  label: any
}

const AddUser = () => {
  const [ cities, setCities ] = useState<CityProps[]>([]);
  const [ valueUser , setUserType ] = useState("receitas");
  const [ valueCity , setUserCity ] = useState();
  const { token, signOut } = useAuth();
  const history: any = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [optionCities, setOptionCities] = useState<OptionProps[]>([]);
  let optionUsers: OptionProps[] = [
    {value: "ROLE_USER", label:"Usuário comum"},
    {value: "ROLE_ADMIN", label:"Administrador"},
  ]

  const header = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }

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

  const handleFormSubmit = async (data: CreateUserForm) =>{
    try {
        formRef.current?.setErrors({});
        apiUrl.post(`/stonks/users/save?roles=${valueUser}`, {
            email: data.email,
            fullName: data.username,
            phone: data.phone,
            login: data.username,
            password: data.password,
            city: { cityId: valueCity},
        },header)

          success('Usuario criado com sucesso')
          history.push('/users');
      } catch (err: Error | AxiosError | any) {
            if(err.response){
              if (err.response.status === 403) {
                  await signOut();
                  error('Token has expired, please logon again');
                  history.push('/login');
              } else if (err.request) {
                  console.log(err.request);
                  error(`Error ${err.request}`);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  error(`Error ${err.message}`);
              };
        }
    }
  }
  return (
    <>
      <ToastContainer />
      <Form ref={formRef} onSubmit={handleFormSubmit} className="form" id={newUserStyle.divNewUser}>
        <h3>Novo Usuario</h3>
        <Input name="username" type="text" className="inputField" id={newUserStyle.txtUser} placeholder="Usuário"/>
        <Input name="email" type="text" className="inputField" id={newUserStyle.txtEmail} placeholder="Email"/>
        <Input name="password" type="password" className="inputField" id={newUserStyle.txtPass} placeholder="Senha"/>
        <Input name="phone" type="text" className="inputField" id={newUserStyle.txtPhone} placeholder="Telefone"/>
        <Select name="cityUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} options={optionCities} onChange={(e: any) => setUserCity(e.value)} placeholder="Selecione uma cidade"  isSearchable/>
        <Select name="roleUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} options={optionUsers} onChange={(e: any) => setUserType(e.value)} defaultValue={optionUsers[0]}  isSearchable={false}/>
        <button type="submit" className="btnEntrar" id="btnCadastrar">Cadastrar</button>
      </Form>
    </>
  );
};
export default AddUser;