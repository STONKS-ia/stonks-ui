import React, {  useCallback, useRef } from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from "../../utils/getValidationErrors";

import Input  from "../../components/Input"
import loginStyle from "./login.module.scss";
import api from "../../services/api";

interface SignInFormData {
  login: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const handleFormSubmit  = async (data: SignInFormData, ) => {
     try {
      console.log(data)
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
        const response = await api.post("/stonks/login", {
            login: data.login,
            password: data.password,});
        console.log(response)
     } catch (err) {
       if (err instanceof Yup.ValidationError) {
         const errors = getValidationErrors(err);
         formRef.current?.setErrors(errors);
         return;
       }
     };
    };

  return (
    <div>
      <Form ref={formRef} onSubmit={handleFormSubmit } id={loginStyle.divLogin}>
        <h3>LOGIN</h3>
        <Input name="login" type="text" id={loginStyle.txtUser} />
        <Input name="password" type="password" id={loginStyle.txtPass} />
        <button type="submit" className={loginStyle.btnEntrar}> Entrar </button>
      </Form>
    </div>
  );
}
export default Login;
