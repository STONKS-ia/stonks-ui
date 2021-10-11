import React, { useRef, useState} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Select from 'react-select';

import Input  from "../../components/Input"
import newUserStyle from "./newUser.module.scss";
import '../../assets/form.scss'
import customTheme from "../../assets/theme";
import customStyles from "../../assets/style";

type OptionProps = {
  value: any,
  label: any
}

const AddUser = () => {
  const [valueUser , setUserType ] = useState("receitas");
  const formRef = useRef<FormHandles>(null);
  let optionUsers: OptionProps[] = [
    {value: "user", label:"Usuário comum"},
    {value: "admin", label:"Administrador"},
  ]

  const handleFormSubmit = () =>{

  }
  return (
    <>
      <Form ref={formRef} onSubmit={handleFormSubmit} className="form" id={newUserStyle.divNewUser}>
        <h3>Novo Usuário</h3>
        <Input name="username" type="text" className="inputField" id={newUserStyle.txtUser} />
        <Input name="email" type="text" className="inputField" id={newUserStyle.txtEmail} />
        <Input name="password" type="password" className="inputField" id={newUserStyle.txtPass} />
        <Input name="phone" type="text" className="inputField" id={newUserStyle.txtPhone} />
        <Input name="cityUser" type="text" className="inputField" id={newUserStyle.txtLocation} />
        <Select name="roleUser" id={newUserStyle.select} theme={customTheme} styles={customStyles} options={optionUsers} onChange={(e: any) => setUserType(e.value)} defaultValue={optionUsers[0]}  isSearchable={false}/>
        <button type="submit" className="btnEntrar" id="btnCadastrar">Cadastrar</button>
      </Form>
    </>
  );
};
export default AddUser;