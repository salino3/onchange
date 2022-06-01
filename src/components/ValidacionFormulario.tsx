import React, {  useState, Fragment } from "react";
// npm install react-hook-form
import { useForm } from "react-hook-form"; // está añadido también en 'package.json', 'package-lock.json'
import Input from "./Input";

const ValidacionFormulario = () => {

  let valorInput = "";
  let valorInput2 = "";
 const [first, setfirst] = useState(valorInput)
 const [second, setsecond] = useState(valorInput2)

//
 const handleClick = () => {
   console.log(first)
   valorInput2 = first;
   return setsecond(valorInput2)

 };
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Fragment>
      <h1>Formulario FormExample:</h1>
      <div>
        <p className="parrafo">~{second}~</p> 
      </div>
      <input
        placeholder="^al clicar envia el valor^"
        type="text"
        onChange={(evento) => {
          setfirst(evento.target.value);
        }}
        // defaultValue={second} --> no hace falta
      />
      <button onClick={() => handleClick()}>pass value</button>
      <br />
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Description: &nbsp; </label>
        <input
          className="validacionFormInput"
          placeholder="min 3, max 25 caracteres"
          title="title"
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 25,
          })}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>
            <br /> the field 'Description' is required
          </span>
        )}
        <br />
        {/* NO funciona correctamente la validación*/}
        <Input
          {...register("Nombre", { required: true })}
          onCl={null}
          onCh={null}
          min={null}
          title={"input"}
          focus={null}
          pl={"NO ejecuta aún correctamente"}
          tipo={"text"}
          lbl={"Nombre:"}
          p={""}
          name={"joe"}
          div={
            errors.Nombre && (
              <span style={{ color: "red" }}>
                <br /> the field 'Nombre' is required
              </span>
            )
          }
        />

        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default ValidacionFormulario;
