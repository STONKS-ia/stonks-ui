import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuApi from "../../Components/MenuApi";
import Despesas from "./despesas";
import Municipios from "./municipios";
import Receitas from "./receitas";

import apisStyle from "./api.module.scss";

const APIs = () => {
  return (
    <BrowserRouter>
    <div className={apisStyle.container}>
      <MenuApi />
      <Switch>
        <Route exact path="/apis" component={Despesas} />
        <Route exact path="/apis/receitas" component={Receitas} />
        <Route exact path="/apis/municipios" component={Municipios} />
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default APIs;
