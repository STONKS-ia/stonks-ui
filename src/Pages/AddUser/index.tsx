import React, { useRef, useState, useEffect} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { ToastContainer } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
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
  const { id } = useParams<{id?: any}>();
  const [ cities, setCities ] = useState<CityProps[]>([]);
  const { token, signOut } = useAuth();
  const history: any = useHistory();
  const [cityUser, setCityUser] = useState<string>();
  const [roleUser, setRoleUser] = useState<string>();
  const [optionCities, setOptionCities] = useState<OptionProps[]>([]);
  const [ valueUser , setUserType ] = useState<OptionProps>();
  const [ valueCity , setUserCity ] = useState<OptionProps>();
  const formRef = useRef<FormHandles>(null);

  let optionUsers: OptionProps[] = [
    {value: "ROLE_USER", label:"Usuário comum"},
    {value: "ROLE_ADMIN", label:"Administrador"},
  ]

  const header = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
 
  useEffect(() => { 
    async function getCities(){ 
      try {
        const res = await apiUrl.get("/stonks/cities");
        const { data: { result } } = res;
        setCities(result);
      } catch (err) {
        console.error(err);
        return [null, err];
      }
    }  
    getCities();
  }, [])
   useEffect(() =>{
      function createCityOption() {
      let resultArray: OptionProps[] = [];
      cities.forEach(city =>{ 
          const { cityId, name } = city;
          let result = {value: cityId, label: name}
          resultArray.push(result);
      })
      setOptionCities(resultArray);
    }
      createCityOption();
    }, [cities])

  useEffect(() => {
    async function getUserById(){
      try{
        await apiUrl.get(`/stonks/users/${id}`, header).then(response => {
          const { email, fullName, phone, roles, userId, city } = response.data.result[0];
          formRef.current?.setData({ 
            email: email,
            username: fullName,
            phone: phone,
           })
          if(roles === "ROLE_ADMIN"){
            setRoleUser("Administrador");
          }else{
            setRoleUser("Usuario comum");
          }

          if(city){
            setCityUser(city.name);
          }else{
            setCityUser("Nenhuma cidade vinculada");
          }
        });
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
            };
    };
    if(id){
      getUserById()
    }
  }, [id])
  
 
  const handleFormSubmit = async (data: CreateUserForm) =>{
    try {
        formRef.current?.setErrors({});
        if(id){
          apiUrl.put(`/stonks/users/save?id=${id}`, {
              id: id,
              email: data.email,
              fullName: data.username,
              phone: data.phone,
              login: data.username,
          },header)
        }else{
          apiUrl.post(`/stonks/users/save?roles=${valueUser}`, {
              email: data.email,
              fullName: data.username,
              phone: data.phone,
              login: data.username,
              password: data.password,
              city: { cityId: valueCity},
          },header)
        }

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
        <h3>{id ? `Editar` : `Novo`} Usuario</h3>
        <Input name="username" type="text" className="inputField" id={newUserStyle.txtUser} placeholder="Usuário"/>
        <Input name="email" type="text" className="inputField" id={newUserStyle.txtEmail} placeholder="Email"/>
        {!id ? <Input name="password" type="password" className="inputField" id={newUserStyle.txtPass} placeholder="Senha"/> : <></>}
        <Input name="phone" type="text" className="inputField" id={newUserStyle.txtPhone} placeholder="Telefone"/>
        {!id ? <Select name="cityUser" id={newUserStyle.select}  options={optionCities} onChange={(e: any) => setUserCity(e.value)} placeholder="Selecione uma cidade" isSearchable/> : <p className="inputField" >{cityUser}</p>}
        {!id ? <Select  name="roleUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} options={optionUsers} placeholder="Selecione tipo de usuario" onChange={(e: any) => setUserType(e.value)} isSearchable={false}/> : <p className="inputField">{roleUser}</p>}
        
        <button type="submit" className="btnEntrar" id="btnCadastrar">{id ? `Salvar` : `Cadastrar`}</button>
      </Form>
    </>
  );
};
export default AddUser;