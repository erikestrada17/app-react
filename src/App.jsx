import React from 'react';
// para compon.  import { Fragment, useState } from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Local from './components/Local';
import Admin from './components/Admin';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu></Menu>
        <Switch>
          <Route exact path='/' component={Inicio}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/local' component={Local}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
