import React, {  useRef } from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationErrors from "../../utils/getValidationErrors";

import '../../assets/form.scss'
import Input  from "../../components/Input"
import loginStyle from "./login.module.scss";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";
import error from "../../utils/error";
import success from "../../utils/success";
import { ToastContainer } from "react-toastify";

interface SignInFormData {
  login: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const history: any = useHistory();
  const { singIn } = useAuth();

  const handleFormSubmit  = async (data: SignInFormData, ) => {
     try {
       formRef.current?.setErrors({});
        await singIn({
          login: data.login,
          password: data.password,
        });
        success('Logado com sucesso')
        history.push('/');
     } catch (err: any) {
        console.log(err)
        error(`Erro ao logar`);
       }
     };

  return (
    <>  
      <Form ref={formRef} className="form" onSubmit={handleFormSubmit } id={loginStyle.divLogin}>
        <h3>LOGIN</h3>
        <Input name="login" type="text" className="inputField" id={loginStyle.txtUser} />
        <Input name="password" type="password"className="inputField" id={loginStyle.txtPass} />
        <button type="submit"  className="btnEntrar"> Entrar </button>
      </Form>
    </>
  );
}
export default Login;
