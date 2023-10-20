import styled from "styled-components";
import "../../../../App.css";
import Fondos from "../../../img/Fondos.svg";
export const LogitoImg = styled.img`
  width: 350px;
`

export const Fondo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Fondos});

`;
export const BoxForm = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  background-color: #14adbbaa;
  justify-content: end;
  box-shadow: 0px 1px 10px 2px #0000005c;
`;
export const BoxLogo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormRegistro = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

export const Titulo = styled.h1`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #565656;
`;

export const Contenedor1 = styled.div``;

export const Input = styled.input`
  width: 350px;
  height: 35px;
`;

export const Boton = styled.button`
  width: 250px;
  height: 35px;
`;
export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextoCheckbox = styled.p`
  font-size: 13px;
`;

export const Seleccionar = styled.input``;
export const LabelText = styled.label`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
`;
