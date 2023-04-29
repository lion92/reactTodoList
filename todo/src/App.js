
import './App.css';
import Form from './components/Form';
function App() {
 
  return (
  
    <div>
       {(load)?(<Form></Form>):(<h1>Chargement...</h1>)
       }
    
    </div>
  );
}

export default App;
