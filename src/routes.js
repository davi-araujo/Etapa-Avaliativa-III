import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import App from './App'
import {TelaDoGrey} from './pages'
import {TelaDoJaguar} from './pages'
import {TelaDoChanel} from './pages'
import {CompraFinalizada} from './pages'

const Routers = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/grey' component={TelaDoGrey}/>
        <Route exact path='/jaguar' component={TelaDoJaguar}/>
        <Route exact path='/chanel' component={TelaDoChanel}/>
        <Route exact path='/fim' component={CompraFinalizada}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;