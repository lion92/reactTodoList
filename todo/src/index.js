import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from "./components/Form"
import{BrowserRouter as Router,Switch,Route}from'react-router-dom'
import NotFound from './components/NotFound';
import Helloword from "./components/Helloword";
import Navigation from "./Navigation";
import Connection from "./components/connection";

const Root=()=>(

  
  <Router>
    <Switch>
      <Route exact path="/" component={Navigation}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/connection" component={Connection}/>
      <Route component={NotFound}/>
      </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




