import {useState, useEffect} from 'react'
import Item from './Item';

export default function Form(props) {
   
let [valueInput, useValue]=useState("bon");
let [valueInputTitre, useValueTitre]=useState("bon");
const context = {titre: valueInputTitre, text: valueInput};
let [text, useText]=useState([

]);
   let Valuechange=(e)=>{
       
       let a=e.target.value;
       console.log(a);
    useValue(a);

         

        return a;
    }
   let Valuechangetitre=(e)=>{
       
       let a=e.target.value;
       console.log(a);

       
       useValueTitre(a)

        return a;
    }

    let HandleSubmit=(e)=>{
        e.preventDefault();
       let nouveau=[...text];
       let newinput= {};
       newinput.text=valueInput;
       newinput.titre=valueInputTitre;

       nouveau.push(newinput);

       useText(nouveau);

    }
    return (
        <>
        <div className="container">
         <form className="container" onSubmit={HandleSubmit}>
        <label>
          Essay: 
          <input value={valueInputTitre} onChange={(e)=>{Valuechangetitre(e);}} />  
          <input value={valueInput} onChange={(e)=>Valuechange(e)} />        </label>
         
        <input type="submit" value="Envoyer" />
        {
      
            text.map((item, index)=>{
                return(
                    <Item titre={item.titre} text={item.text}></Item>
                )
            })
        }
      </form>
      </div>
        </>
    )
}

