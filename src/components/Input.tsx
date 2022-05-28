import React, { Fragment } from 'react';

interface props {
  lbl: string;
  title: any;
  tipo: string;
  pl: string;
  focus: any;
  name?: string;
  onCh: any;
  onCl: any,
  p: string;
}

const Input = ({lbl, title, tipo, pl, focus, name, onCh, onCl, p}:props) => {
  return (
    <Fragment>
      <label>{lbl}</label>
      <input title={title} type={tipo} placeholder={pl} onFocus={focus} name={name} onChange={onCh} onClick={onCl}  />
      <p>{p}</p>
    </Fragment>
  );
}

export default Input