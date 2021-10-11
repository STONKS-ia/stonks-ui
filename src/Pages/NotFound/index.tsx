import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/img/404Image.svg';
import notFoundStyle from './notFound.module.scss';

const NotFound  = () =>{
        return (
          <div className={notFoundStyle.notFound}>
            <img src={PageNotFound}  alt="Not Found" />
             <h1> Não achei essa pagina </h1>
             <Link to="/"> Quer voltar ?</Link>
          </div>
          )
}
export default NotFound;