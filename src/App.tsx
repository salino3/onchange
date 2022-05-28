import { useState, Fragment } from "react";
import Input from "./components/Input";
import TextoGenerico from "./components/TextoGenerico";

import './App.css';


function App() {
// 1) antes creo array
  const variable = {
    nombre: "",
    apellido: "",
    edad: '',
    correo: ''
  };
// 2) me creo un useState por cada paramentro de la variable
const [first, setfirst] = useState(variable.nombre);
const [second, setsecond] = useState(variable.apellido);
const [third, setthird] = useState(variable.edad);
const [fourth, setfourth] = useState(variable.correo);

// 3) acabo creando un array con cada paramentro igual al valor de cada useState de cada parametro del 1º array
const final: any = {
   name: first,
   surname: second,
   age: third,
   email: fourth
 };

const handleConLog = () => {
 console.log(final)
}


/* para copiar en portapapeles */
const [form, setForm ] = useState({
  input: ''
})

const handleChange = async (e: any) => {
  const { name, value} = e.target;
  await setForm({
    ...form,
    [name]: value,
  });
};

const copiarAlPortapapeles= () => {
   let elemento = document.createElement('input');
elemento.setAttribute('value', form.input);
document.body.appendChild(elemento);
elemento.select();
document.execCommand('copy');
document.body.removeChild(elemento)
/* * */

alert(' se copió')
 }

  return (
    <Fragment>
      <h1 className="H1arriba">App</h1>
      contenido input nombre: {first}
      <hr /> <br /> <br />
      {/* para copiar en portapapeles */}
      <Input
        onCl={null}
        onCh={handleChange}
        title={"input"}
        focus={null}
        pl={""}
        tipo={"text"}
        lbl={"Contenido Input para el portapapeles:"}
        p={""}
        name={"input"}
      />
      <button onClick={copiarAlPortapapeles}>porta papeles</button>
      {/* div formulario*/}
      <div className="divMayor">
        <form action="">
          <TextoGenerico
            h6h={`Sñr: ${final.name}`}
            parrafo={`con apellido: ${final.surname} `}
            parrafo2={`con edad: ${final.age} `}
            H4H={`y email: ${final.email} `}
          />

          {/* los inputs */}

          <div className="divInputs">
            <Input
              onCl={null}
              onCh={(evento) => {
                setfirst(evento.target.value);
              }}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"text"}
              lbl={"Nombre:"}
              p={""}
              name={""}
            />

            <Input
              onCl={null}
              onCh={(evento) => {
                setsecond(evento.target.value);
              }}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"text"}
              lbl={"Apellido:"}
              p={""}
              name={""}
            />

            <Input
              onCl={null}
              onCh={(evento) => {
                setthird(evento.target.value);
              }}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"number"}
              lbl={"Edad:"}
              p={""}
              name={""}
            />

            <Input
              onCl={null}
              onCh={(evento) => {
                setfourth(evento.target.value);
              }}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"email"}
              lbl={"Email:"}
              p={""}
              name={""}
            />
          </div>
        </form>

        <div className="Abottom">
          <p> confirmación texto con datos personales de: ~{first}~ </p>

          <input
            id="inpConfirmacion"
            title="tit1"
            placeholder=""
            type="text"
            value={first}
          />
          <button onClick={() => handleConLog()} type='submit' value={final}>
            click console.log
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
