import styled from "styled-components";
import "../../../App.css";
import FondoVistas from "../../img/Fondos.svg";
export const Fondo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  background-image: url(${FondoVistas});
`;

export const Contenedor = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const Logo = styled.img`
  width: 350px;
`;
export const BoxLogo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

export const Formulario = styled.form`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Titulo = styled.h1`
  color: #4f4f4f;
`;
export const Label = styled.label`
  height: 25%;
  color: #929191;
  flex-direction: column;
  display: flex;
`;
export const Parrafo = styled.div`
  width: 85%;
  height: 22%;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 350px;
  height: 40px;
  border: none;
  color: #000000;
  font-size: 18px;
  background-color: var(--color-input);
`;
export const Olvidar = styled.p`
  color: #4f4f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Button = styled.button`
  background-color: var(--color-button);
  margin-top: 7px; 
  /* margin-bottom: 7px; */
  color: white;
  width: 55%;
  height: 24%;
  border: none;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-buttonHover);
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 1px 2px 15px (--color-buttonFocus);
  }
`;

export const ContainerUltimo = styled.div`
  width: 100%;
  height: 35%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Message = styled.div`
  font-size: 15px;
  align-items: center;
  color: red;
  margin-left: 50px;
`;
