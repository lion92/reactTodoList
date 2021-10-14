import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from "./components/Form"
import{BrowserRouter as Router,Switch,Route}from'react-router-dom'
import NotFound from './components/NotFound';

const Root=()=>(

  
  <Router>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route component={NotFound}/>
      </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




