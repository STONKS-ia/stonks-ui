import React from 'react';
import { Link } from 'react-router-dom';
import denied from '../../assets/img/denied.svg';
import deniedStyle from './denied.module.scss';

const Denied  = () =>{
        return (
          <div className={deniedStyle.notFound}>
            <img src={denied}  alt="Access Denied" />
             <h1> Você não tem acesso a essa página </h1>
             <Link to="/"> Quer voltar ?</Link>
          </div>
          )
}
export default Denied;