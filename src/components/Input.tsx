import { Fragment } from 'react';


interface props {
  lbl: string;
  title: any;
  tipo: string;
  pl: string;
  focus: any;
  name?: string;
  onCh: any;
  onCl: any;
  min: string | number;
  p: string;
  div?: any 
}

const Input = ({lbl, title, tipo, pl, focus, name, onCh, onCl, min, p, div}:props) => {
  return (
    <Fragment>
      <label>{lbl}</label>
      <input title={title} type={tipo} placeholder={pl} onFocus={focus} name={name} onChange={onCh} onClick={onCl} min={min}  />
      <p>{p}</p>
      <div>{div}</div>
    </Fragment>
  );
}

export default Input