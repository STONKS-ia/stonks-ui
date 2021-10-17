
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import About from '../pages/About';
import AddCity from '../pages/AddCity';
import UsersList from '../pages/UsersList';
import AddUser from '../pages/AddUser';
import APIs from '../pages/APIs';
import Detail from '../pages/DetailCity';
import Home from '../pages/Home';
import CitiesList from '../pages/CitiesList';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Denied from '../pages/Denied';
import PrivateRoute from '../routes/privateRoute';
import SpecificRoute from './specificRoute';

const AppRoutes = () => (
 <BrowserRouter>
     <Nav />
     <Switch>
       <Route exact  path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/apis" component={APIs} />
       <Route exact path="/cities" component={CitiesList} />
       <Route exact path="/cities/:id" component={Detail} />

       <SpecificRoute exact path="/save/city/:id?" component={AddCity} />
       
       <PrivateRoute exact path="/users" component={UsersList} />
       <PrivateRoute exact path="/save/users/:id?" component={AddUser}  />
       
       <Route exact path="/denied" component={Denied}/>
       <Route path="*" component={NotFound} />
    </Switch>
 </BrowserRouter>
);

export default AppRoutes;
