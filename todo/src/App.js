
import './App.css';
import Form from './components/Form';
import {Fragment, useEffect, useState} from "react";
import BarChart from './components/BarChart';
function App() {
 
  return (
  
    <div>
       {(load)?(<><Form></Form><BarChart></BarChart></>):(<h1>Chargement...</h1>)
       }
    
    </div>
  );
}

export default App;
