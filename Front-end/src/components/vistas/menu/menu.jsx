import styled from "styled-components";

export const Contenedor = styled.div`
  height: 10%;
  width: 100%;
  box-shadow: var(--box-shadow) 0px 3px 5px;
  background-color: var(--color-contenedor);
  color: var(--colorTitulo);
  display: flex;
  align-items: center;
  background-color: #004968;
  
`;
export const Navegacion = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 1%;
  /* background-color: aliceblue; */

`;
export const Logo = styled.img`
  height: 55px;
  /* background-color: red; */
`;
export const Menucontainer = styled.ul`
  height: 100%;
  width: 65%;
  list-style: none;
  display: flex;
  align-items: center;
  /* background-color: green; */
  flex-direction: column;
`;
export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease;
  &:last-child {
    margin-right: 45px;
  }
  &:hover {
    width: 65%;
    color: var(--color-MenuItem);
    transform: scale(1.2); 
    text-decoration: underline;
  }
  font-size: 20px;

`;

export const Flecha = styled.li`
  margin-left: 5px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const Ajustes = styled.div`
  height: 60px;
  width: 40px;
  color: white;
  display: flex;
  align-items: center;
  right: 0px;
  justify-content: flex-end;
  /* background-color: aqua; */
`;

export const TamañoIcono = styled.div`
  /* background-color: aqua; */
  height: 100px;
  width: 85px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Perfil = styled.div`
  /* background-color: #ff9102; */
  height: 65px;
  width: 15%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-evenly; */
`
export const ContenedorPerfil = styled.div`
display: flex;
align-items: center;

`
export const ContenedorOpciones = styled.div`
  display: none;
  background-color: #004055;
  height: 88%;
  width: 200px;
  position: absolute;
  z-index: 1000;
`