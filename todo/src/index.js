import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from "./components/Form"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound';
import Helloword from "./components/Helloword";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {rootReducer} from 'reducers'
let store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);
const Root=()=>(
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Helloword}/>
          <Route exact path="/form" component={Form}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </Provider>
)
  

)

ReactDOM.render(<Root/>, document.getElementById('root'));




