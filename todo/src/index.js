import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from "./components/Form"
import{BrowserRouter as Router,Switch,Route}from'react-router-dom'
import NotFound from './components/NotFound';
import Helloword from "./components/Helloword";

const Root=()=>(

  
  <Router>
    <Switch>
      <Route exact path="/" component={Helloword}/>
      <Route exact path="/form" component={Form}/>
      <Route component={NotFound}/>
      </Switch>
  </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




