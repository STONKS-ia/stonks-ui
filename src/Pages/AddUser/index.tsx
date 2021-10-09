import React, { useRef} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Input  from "../../components/Input"
import newUserStyle from "./newUser.module.scss";
import '../../assets/form.scss'

const AddUser = () => {
  const formRef = useRef<FormHandles>(null);

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
        <button type="submit" className="btnEntrar" id="btnCadastrar">Cadastrar</button>
      </Form>
    </>
  );
};
export default AddUser;