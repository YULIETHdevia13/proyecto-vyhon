import React, { useState } from "react";
import {
  Titulo,
  FormRegistro,
  Input,
  Boton,
  Checkbox,
  TextoCheckbox,
  Seleccionar,
  LabelText,
  Fondo,
  BoxForm,
  LogitoImg,
  BoxLogo,
} from "./styled"; // Importa tus estilos desde el archivo "styled"
import Axios from "axios";
import validator from "validator";
import VentanaModal1 from "../../../modales/mensajeRegistro";
import UserExiste from "../../../modales/mensajeRegistroYaExiste";
import swal from "sweetalert";
import "../../../../App.css";
import { Link } from "react-router-dom";
import Logito from '../../../img/logito.svg'

const Registrarse = () => {
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [correoExistente, setCorreoExistente] = useState(false);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [emailValid, setEmailValid] = useState(true); // Estado para rastrear la validez del correo
  const [buttonClicked, setButtonClicked] = useState(false); // Estado para rastrear si se hizo clic en el botón
  const [mostrarAlertaCorreo, setMostrarAlertaCorreo] = useState(false); // Estado para mostrar el mensaje de alerta en el correo

  const VentanaModal = () => {
    cambiarEstadoModal1(!estadoModal1);
  };

  const VentanaModal4 = () => {
    cambiarEstadoModal4(!estadoModal4);
  };

  const Validacion = (e) => {
    let emai = e.target.value;

    if (validator.isEmail(emai)) {
      setEmailValid(true); // El correo es válido
      setEmail(emai);
      setMostrarAlertaCorreo(false); // Ocultar el mensaje de alerta
    } else {
      setEmailValid(false); // El correo no es válido
      setMostrarAlertaCorreo(true); // Mostrar el mensaje de alerta
    }
  };

  const Registro = (ev) => {
    ev.preventDefault();
    setButtonClicked(true); // Se hizo clic en el botón
    if (emailValid && password && nombre && empresa) {
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/users`, {
        correo: email,
        contraseña: password,
        nombreUsuario: nombre,
        nombreEmpresa: empresa,
      })
        .then((response) => {
          // VentanaModal4()
          VentanaModal();
        })
        .catch((error) => {
          console.clear(); //quita en la consola el error por el status 400
          if (error.response.status === 400) {
            // VentanaModal()
            VentanaModal4();
            setCorreoExistente(true);
          } else {
            swal({
              title: "Error",
              text: "Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
              icon: "error",
            });
          }
        });
    } else {
      swal({
        title: "Ingresa información en los campos",
        text: "Por favor, revisa que todos los datos estén bien",
        icon: "error",
      });
    }
  };

  return (
    <Fondo>
      <BoxForm>
        <BoxLogo>

        <LogitoImg src={Logito} alt="Logito" />
        </BoxLogo>
        <FormRegistro>
          <Titulo>Sign up for Vyhon</Titulo>
          <LabelText>
            ¿What's your name?
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[a-zA-Z]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              type="text"
            />
          </LabelText>

          <LabelText>
            ¿What company you work for?
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[a-zA-Z0-9&]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                setEmpresa(event.target.value);
              }}
              type="text"
              required
            />
          </LabelText>
          <LabelText>
            ¿What is your email?
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[_.@a-zA-Z0-9&]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => Validacion(e)}
              type="email"
              required
              className={!emailValid && buttonClicked ? "invalid-email" : ""}
            />
          </LabelText>
          {mostrarAlertaCorreo && (
            <div
              style={{ color: "red" }}
              className="alert alert-danger"
              role="alert"
            >
              ingrese todos los carracteres
            </div>
          )}
          {correoExistente && (
            <span
              style={{
                fontWeight: "bold",
                color: "green",
              }}
            >
              {email}
            </span>
          )}

          <LabelText>
            Create a password for your account
            <Input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              required
            />
          </LabelText>

          <Checkbox>
            <Seleccionar type="checkbox" required></Seleccionar>
            <TextoCheckbox>
              I agree with the terms of use of the software and know the privacy
              policy
            </TextoCheckbox>
          </Checkbox>

          <Boton type="submit" onClick={Registro}>
            Create Account
          </Boton>
      <Link to={"/login"}>
        <p>Log in to your account</p>
      </Link>
        </FormRegistro>
      </BoxForm>
      <VentanaModal1
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
      ></VentanaModal1>
      <UserExiste
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
      ></UserExiste>

    </Fondo>
  );
};

export default Registrarse;
