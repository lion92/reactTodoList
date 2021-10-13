import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Item from "./Item";
export default function Form(props) {
  let [valueInput, setValue] = useState("");
  let [valueInputTitre, setTitre] = useState("");
  let [idVal, setId] = useState(-1);
  let [textp, setText] = useState([
    { titre: "bonjour1", text: "hehe" },
    { titre: "bonjour2", text: "hehe" },
    { titre: "bonjour3", text: "hehe" },
  ]);
  const fetchAPI = useCallback(async () => {
    const response = await fetch("https://memo.krissclotilde.com/tout/tache");
    const resbis = await response.json();
    console.log(resbis.message);
    setText(resbis.message);
  }, [setText]);
  let idchange = (data) => {
    setId(data);
  };
useEffect(() => {
  fetchAPI();
}, [])
  let del = (e,data) => {
    e.preventDefault();
    fetchdelete(data);
  };
  let fetchdelete = useCallback(async (data) => {
    
    const response = await fetch(
      "https://memo.krissclotilde.com/delete/tache",
      {
        method: "POST",
        body: JSON.stringify({
          id: parseInt(data, 10),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();
    console.log(idVal);
    console.log(resbis);
    fetchAPI();
  });
  let fetchCreer = useCallback(async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://memo.krissclotilde.com/insert/tache",
      {
        method: "POST",
        body: JSON.stringify({
          msg: valueInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();
    fetchAPI();
  });
  let fetchAPIupdate = useCallback(async () => {
    const response = await fetch(
      "https://memo.krissclotilde.com/update/tache",
      {
        method: "POST",
        body: JSON.stringify({
          msg: valueInput,
          id: idVal,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();
    fetchAPI();
    console.log(valueInput);
    console.log(idVal);
    console.log(JSON.stringify(resbis));
  });

  
  let Valuechange = (e) => {
    let a = e.target.value;
    console.log(a);
    setValue(a);

    return a;
  };
 

  let HandleSubmit = (e) => {
    e.preventDefault();
    fetchAPIupdate();
    setValue("");
    setTitre("");
  };
  return (
    <>
      <form className="container"><div>
        <label>
          Essay:{idVal}
          <input value={valueInput} onChange={(e) => Valuechange(e)} />{" "}
        </label>
        <button onClick={HandleSubmit}>modifier</button>
        <button onClick={fetchCreer}>creer</button></div>
        
      </form>
      <div>
        {textp.map((item, index) => {
          return (
            <Item
              del={del}
              updatefunc={idchange}
              titre={item.titre}
              text={item.text}
              id={item.id}
            ></Item>
          );
        })}
      </div>
    </>
  );
}
