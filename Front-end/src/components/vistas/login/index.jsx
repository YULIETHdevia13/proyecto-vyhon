import React, { useState } from "react";
import {
  Fondo,
  Contenedor,
  Titulo,
  Parrafo,
  Input,
  Button,
  Olvidar,
  ContainerUltimo,
  Message,
  Formulario,
  Label,
  Logo,
  BoxLogo,
} from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../../App.css";
import logo from "../../img/Logo VY-02.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorCorreo, setErrorCorreo] = useState(null);
  const [errorContraseña, setErrorContraseña] = useState(null);
  const Login = (ev) => {
    ev.preventDefault();
    setError(null);
    setErrorContraseña(null);
    setErrorCorreo(null);
    if (email && password) { 
    
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/login`, {
        correo: email,
        contraseña: password,
      })
        .then((response) => {
          const result = response.data;
          if (response.data === "") {
            alert("Bienvenido VYHON");
          } else {
            localStorage.setItem("user", JSON?.stringify(result));
            setTimeout(() => {
              window.location.href = "/vistaprincipal";
            }, 1000);
          }
        })
        .catch((error) => {
          console.error(error);
          // alert("Error en la solicitud");
          alert("el usuario no existe");
        });
    } else if (!email && !password) {
      setError(`ingrese tanto el usuario como la contraseña`);
    } else if (!email) {
      setErrorCorreo(`ingresar correo`);
    } else if (!password) {
      setErrorContraseña(`ingresar contraseña`);
    }
  };

  return (
    <Fondo>
      <BoxLogo>
        <Logo src={logo} alt="logo" />
      </BoxLogo>
      <Contenedor>
        <Formulario>
          <Titulo>Bienvenidos</Titulo>
          <Message>{error}</Message>

          <Label htmlFor="email">
            <Parrafo>Email</Parrafo>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <Message>{errorCorreo}</Message>
          </Label>

          <Label htmlFor="password">
            <Parrafo>Password</Parrafo>
            <Input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </Label>
          <Message>{errorContraseña}</Message>

          <ContainerUltimo>
            <Button type="submit" onClick={Login}>
              Log in
            </Button>
            <Link to={"/recuperar"}>
              <Olvidar>Did you forget your password?</Olvidar>
            </Link>
            <Link to={"/registrarse"}>
              <Olvidar>Sign up</Olvidar>
            </Link>
          </ContainerUltimo>
        </Formulario>
      </Contenedor>
    </Fondo>
  );
}
export default Login;
