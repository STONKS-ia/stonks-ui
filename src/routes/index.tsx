
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import About from '../pages/About';
import AddCity from '../pages/AddCity';
import AddUser from '../pages/AddUser';
import APIs from '../pages/APIs';
import Detail from '../pages/DetailCity';
import Home from '../pages/Home';
import List from '../pages/List';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Denied from '../pages/Denied';
import PrivateRoute from '../routes/privateRoute';
const AppRoutes = () => (
 <BrowserRouter>
     <Nav />
     <Switch>
       <Route exact  path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/apis" component={APIs} />
       <Route exact path="/cities" component={List} />
       <Route exact path="/cities/:id" component={Detail} />

      <PrivateRoute path="/users" component={AddUser} exact />
       <PrivateRoute path="/addCity" component={AddCity} exact/>
       
       <Route path="/denied" component={Denied} exact/>
       <Route path="*" component={NotFound} />
    </Switch>
 </BrowserRouter>
);

export default AppRoutes;
