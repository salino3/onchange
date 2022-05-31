import { useState, Fragment } from "react";
// npm install react-hook-form
import { useForm } from "react-hook-form";

import Input from "./components/Input";
import TextoGenerico from "./components/TextoGenerico";
import ActionCopiaenportapapeles from "./components/ActionCopiaenportapapeles";

import './App.css';

function App() {

  // 1) antes creo un array
  const variable = {
    nombre: "",
    apellido: "",
    edad: "",
    correo: "",
  };
  // 2) creo un useState por cada paramentro de la variable
  const [first, setfirst] = useState(variable.nombre);
  const [second, setsecond] = useState(variable.apellido);
  const [third, setthird] = useState(variable.edad);
  const [fourth, setfourth] = useState(variable.correo);

  // 3) acabo creando un array con cada paramentro igual al valor de cada useState de cada parametro del 1º array
  const final: any = {
    name: first,
    surname: second,
    age: third,
    email: fourth,
  };

  const handleConLog = () => {
    console.log(final);
  };

  return (
    <Fragment>
      <h1 className="H1arriba">App</h1>
      <ActionCopiaenportapapeles par={`contenido input-nombre: ~${first} ~`} />

      {/* div formulario*/}
      <div className="divMayor">
        <form >
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
                min={null}
                title={"input"}
                focus={null}
                pl={""}
                tipo={"text"}
                lbl={"Nombre:"}
                p={""}
                name={""}
              />
           
            <br />
              <Input
                onCl={null}
                onCh={(evento) => {
                  setsecond(evento.target.value);
                }}
                min={null}
                title={"input"}
                focus={null}
                pl={""}
                tipo={"text"}
                lbl={"Apellido:"}
                p={""}
                name={""}
              />
           
            <br />
            <Input
              onCl={null}
              onCh={(evento) => {
                setthird(evento.target.value);
              }}
              min={0}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"number"}
              lbl={"Edad:"}
              p={""}
              name={""}
            />
          
            <br />
            <Input
              onCl={null}
              onCh={(evento) => {
                setfourth(evento.target.value);
              }}
              min={null}
              title={"input"}
              focus={null}
              pl={""}
              tipo={"email"}
              lbl={"Email:"}
              p={""}
              name={""}
            />
          
            <br />
          </div>

          <div className="Abottom">
            <p> confirmación texto con datos personales de: ~{first}~ </p>

            <button onClick={() => handleConLog()} type="submit" value={final}>
              Enviar 
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default App;
