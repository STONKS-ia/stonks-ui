
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuApi from "../../components/MenuApi";
import Despesas from "./despesas";
import Receitas from "./receitas";
import Municipios from "./municipios";

import apisStyle from "./api.module.scss";

const APIs = () => {
  return (
    <BrowserRouter>
      <div className={apisStyle.container}>
        <MenuApi />
          <Route path="/apis" component={Despesas} />
          <Route path="/apis/receitas" component={Receitas} />
          <Route path="/apis/municipios" component={Municipios} />
      </div>
    </BrowserRouter>
  );
};

export default APIs;
