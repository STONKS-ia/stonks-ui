import React, {  useRef } from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import '../../assets/form.scss'
import Input  from "../../components/Input"
import loginStyle from "./login.module.scss";
import { useAuth } from "../../hooks/auth";
import error from "../../utils/error";
import success from "../../utils/success";

interface SignInFormData {
  login: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const history: any = useHistory();
  const { singIn } = useAuth();

  const handleFormSubmit  = async (data: SignInFormData) => {
     try {
       formRef.current?.setErrors({});
        await singIn({
          login: data.login,
          password: data.password,
        });
        success('Logado com sucesso')
        history.push('/cities');
     } catch (err: any) {
        console.log(err)
        error(`Erro ao logar`);
       }
     };

  return (
    <>  
      <ToastContainer />
      <Form ref={formRef} className="form" onSubmit={handleFormSubmit } id={loginStyle.divLogin}>
        <h3>LOGIN</h3>
        <Input name="login" type="text" className="inputField" id={loginStyle.txtUser} placeholder="Usuário"/>
        <Input name="password" type="password"className="inputField" id={loginStyle.txtPass} placeholder="Senha"/>
        <button type="submit"  className="btnEntrar"> Entrar </button>
      </Form>
    </>
  );
}
export default Login;
