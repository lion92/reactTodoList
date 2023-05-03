import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound';
import Navigation from "./components/Navigation";
import Login from "./components/login";
import Signup from "./components/signup";

const Root=()=>(

  
  <Router>
    <Switch>
      <Route exact path="/" component={Navigation}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/inscription" component={Signup}/>
      <Route exact path="/mdpOublie" component={Login}/>
      <Route component={NotFound}/>
      </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




