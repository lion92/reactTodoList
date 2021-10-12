import React from "react";

export default function Item(props) {
  return (
    <>
      <div>
        <h1>{props.titre}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
}
