import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Item from "./Item";
export default function Form(props) {
  let [valueInput, useValue] = useState("bon");
  let [valueInputTitre, useValueTitre] = useState("bon");
  let [textp, setText] = useState([
    { titre: "bonjour1", text: "hehe" },
    { titre: "bonjour2", text: "hehe" },
    { titre: "bonjour3", text: "hehe" },
  ]);
  const fetchAPI = useCallback(async () => {
    const response = await fetch("https://memo.krissclotilde.com/tout/tache");
    const resbis = await response.json();
    setText(resbis.message);
  }, [setText]);

useEffect(fetchAPI, []);
  const context = { titre: valueInputTitre, text: valueInput };

  let Valuechange = (e) => {
    let a = e.target.value;
    console.log(a);
    useValue(a);

    return a;
  };
  let Valuechangetitre = (e) => {
    let a = e.target.value;
    console.log(a);

    useValueTitre(a);

    return a;
  };

  let HandleSubmit = (e) => {
    e.preventDefault();
    let nouveau = [...textp];
    let newinput = {};
    newinput.text = valueInput;
    newinput.titre = valueInputTitre;

    nouveau.push(newinput);

    setText(nouveau);
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label>
          Essay:
          <input value={valueInput} onChange={(e) => Valuechange(e)} />{" "}
        </label>
        <input
          value={valueInputTitre}
          onChange={(e) => {
            Valuechangetitre(e);
          }}
        />
        <input type="submit" value="Envoyer" />
        {textp.map((item, index) => {
          return <Item titre={item.titre} text={item.text}></Item>;
        })}
      </form>
    </>
  );
}
