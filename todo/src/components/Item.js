import React, { useState } from "react";

export default function Item(props) {

  const [iditem, setItemid]=useState(-1);
  return (
    <>
      <div onClick={()=>props.updatefunc(props.id)}className="card">
        <h1>{props.titre}</h1>
        <h2>{props.id}</h2>
        <p>{props.text}</p>
        <button onClick={(e)=>props.del(e, props.id)}>delete</button>
      </div>
    </>
  );
}
