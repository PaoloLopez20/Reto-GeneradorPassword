import React, { useState, useEffect } from "react";   //Importamos react
import "./App.css";                                   //Importamos los estilos
import styled from "styled-components";               //Importamos los componentes

// Archivo donde vamos a construir la aplicacion

import {
  BotonIncrementar,
  BotonDisminuir,
  BotonCheck,
  BotonGenerar,
} from "./Components/Buttons";                      //importamos los botones 
import generarPassword from "./Functions/GenerarPassword";
import Navbar from "./Components/Navbar";

const App = () => {
  const [configuracion, cambiarConfiguracion] = useState({
    //declaramos las variables iniciales con la que se ejecuta la aplicacion
    numeroDeCaracteres: 7,
    simbolos: true,
    numeros: true,
    mayusculas: true,
  });

  const [passwordGenerada, cambiarPasswordGenerada] = useState("");

  //el useEffect en este caso lo estamos utilizando para que cada vez que se recargue la pagina aparezca automaticamente una contraseña
  useEffect(() => {
    cambiarPasswordGenerada(generarPassword(configuracion));
  }, [configuracion]);

  const incrementarNumeroCaracteres = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.numeroDeCaracteres += 1;
      return nuevaConfiguracion;
    });
  };

  const disminuirNumeroCaracteres = () => {
    //Condicional para no obtener numeros negativos
    if (configuracion.numeroDeCaracteres > 1) {
      cambiarConfiguracion((configuracionAnterior) => {
        const nuevaConfiguracion = { ...configuracionAnterior };
        nuevaConfiguracion.numeroDeCaracteres -= 1;
        return nuevaConfiguracion;
      });
    }
  };

  const toggleSimbolos = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;
      return nuevaConfiguracion;
    });
  };

  const toggleNumeros = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;
      return nuevaConfiguracion;
    });
  };

  const toggleMayusculas = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;
      return nuevaConfiguracion;
    });
  };

  //prevenir el comportamiento por defecto que tendra la página 
  const onSubmit = (e) => {
    e.preventDefault();

    cambiarPasswordGenerada(generarPassword(configuracion));
  };

  //Aca agregamos todos los componentes html para obtener los botones y los textos
  return (
    <div className="App">
      <body>
        <Navbar />
        <div className="contenedor">
          <form onSubmit={onSubmit}>
            <Fila>
              <label>Cantidad de caracteres:</label>
              <Controles>
                <BotonDisminuir click={disminuirNumeroCaracteres} />
                <span>{configuracion.numeroDeCaracteres}</span>
                <BotonIncrementar click={incrementarNumeroCaracteres} />
              </Controles>
            </Fila>
            <Fila>
              <label>¿Incluir Símbolos?</label>
              <BotonCheck
                seleccionado={configuracion.simbolos}
                click={toggleSimbolos}
              />
            </Fila>
            <Fila>
              <label>¿Incluir Numeros?</label>
              <BotonCheck
                seleccionado={configuracion.numeros}
                click={toggleNumeros}
              />
            </Fila>
            <Fila>
              <label>¿Incluir Mayúsculas?</label>
              <BotonCheck
                seleccionado={configuracion.mayusculas}
                click={toggleMayusculas}
              />
            </Fila>
            <Fila>
              <BotonGenerar />
              <Input type="text" readOnly={true} value={passwordGenerada} />
            </Fila>
          </form>
        </div>
      </body>
    </div>
  );
};

export default App;

//Aca implementamos los estilos del div
const Fila = styled.div`    
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr; //le estamos indicando que tenga dos columnas
  gap: 10px;                      //separacion entre las dos columnas
`;

// Aca ordenamos los botones de derecha a izquierda
const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;    //Con este metodo flex jalamos el tamaño de los botnones que hemos implementado
  }

  span {
    line-height: 40px;
    color: black;
  }
`;

const Input = styled.input`
  width: 100%;
  background: yellow;
  border-radius: 30px;
  border: 1px solid black;
  color: black;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
`;
