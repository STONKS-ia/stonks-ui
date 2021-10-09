
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
        <Switch>
          <Route path="/" component={Despesas} />
          <Route path="/receitas" component={Receitas} />
          <Route path="/municipios" component={Municipios} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default APIs;
