import React, { Fragment } from 'react';
import "../App.css";

interface props {
  H4H: string,
  parrafo: string,
  parrafo2: string,
  h6h: string
}


const TextoGenerico = ({H4H, parrafo, parrafo2, h6h}: props) => {
 

  return (
    <Fragment>
      <div className="txtGenerico container">
        <h6>{h6h} </h6>
        <p>{parrafo} </p>
        <p>{parrafo2}</p>
        <h4>{H4H}</h4>
      </div>
    </Fragment>
  );
}

export default TextoGenerico