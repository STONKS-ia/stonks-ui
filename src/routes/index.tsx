
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
import List from '../pages/List';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

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

       <Route exact path="/users" component={UsersList} />
       <Route exact path="/users" component={AddUser} />
       <Route exact path="/addCity" component={AddCity} />
       
       <Route path="*" component={NotFound} />
    </Switch>
 </BrowserRouter>
);

export default AppRoutes;
