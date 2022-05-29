import React, { useState, Fragment } from 'react';
import Input from './Input';

interface props {
  par: string
}

const ActionCopiaenportapapeles = ({ par }: props) => {
  /* para copiar en portapapeles */
  const [form, setForm] = useState({
    input: "",
  });

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    await setForm({
      ...form,
      [name]: value,
    });
  };

  const copiarAlPortapapeles = () => {
    let elemento = document.createElement("input");
    elemento.setAttribute("value", form.input);
    document.body.appendChild(elemento);
    elemento.select();
    document.execCommand("copy");
    document.body.removeChild(elemento);
    alert(" se copió");
  };
  /* * */

  return (
    <Fragment>
      <p>{par}</p>
      <hr /> <br /> <br />
      {/* para copiar en portapapeles */}
      <Input
        onCl={null}
        onCh={handleChange}
        min={null}
        title={"input"}
        focus={null}
        pl={""}
        tipo={"text"}
        lbl={"Contenido Input para el portapapeles:"}
        p={""}
        name={"input"}
      />
      <button onClick={() => copiarAlPortapapeles()}>porta papeles</button>
    </Fragment>
  );
};

export default ActionCopiaenportapapeles