import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound';
import Navigation from "./components/Navigation";
import Form from "./components/Form";

const Root=()=>(

  
  <Router>
    <Switch>
      <Route exact path="/" component={Navigation}/>
      <Route exact path="/Form" component={Form}/>
      <Route component={NotFound}/>
      </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




