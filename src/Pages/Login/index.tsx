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

interface SignInFormData {
  login: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { singIn } = useAuth();

  const handleFormSubmit  = async (data: SignInFormData, ) => {
     try {
       formRef.current?.setErrors({});
      //  const yup = require("yup")
      //  const schema = yup.object().shape({
      //    login: yup.string()
      //      .required('Usuario obrigatório')
      //      .login('Digite um usuario válido'),
      //    password: Yup.string().required('Senha obrigatória'),
      //  });
      //   await schema.validate(data, {
      //     abortEarly: false,
      //   });
      debugger;
        await singIn({
          login: data.login,
          password: data.password,
        });
     } catch (err) {
       console.log(err)
       if (err instanceof Yup.ValidationError) {
         const errors = getValidationErrors(err);
         formRef.current?.setErrors(errors);
         return;
       }
     };
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
