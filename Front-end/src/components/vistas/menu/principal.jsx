// import React, { useState,useRef } from "react";
// import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
// import {Contenedor,Logo, MenuItem,Menucontainer,Navegacion, Ajustes, TamañoIcono,Perfil, ContenedorPerfil, ContenedorOpciones, OpcionesPrincipales
// } from "./menu";
// import imagen from "../../img/Logo VY-02.svg";
// import Retorno1 from "../menu/configuracion";
// import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

// const Menu = () => {
// // Estado para controlar la visibilidad del menú desplegable de perfil

// const location = useLocation();
// const currentPath = location.pathname;
// /* nos llevara a una vista con otras opciones */

// const [activo, setActivo] = useState(false);

// const [, /* selectedOption */ setSelectedOption] = useState("inicio");
// const opcionElegida = (Option) => {
//     setSelectedOption(Option);
// };

// const modalRef = useRef(null);
// // const handleOutsideClick = (event) => {
// // if (modalRef.current && !modalRef.current.contains(event.target)) {
// // setActivo(false);
// // }
// // };

// const [acordion, setAcordeon] = useState(false);
// const Abrir = () => {
//     setAcordeon(!acordion)}

// return (
//     <>
//     <Contenedor>
//     {/* Barra de navegación */}
//     <TamañoIcono>
//         {/* <BiMenu></BiMenu> */}
//         <DensityMediumRoundedIcon onClick={Abrir}/>
//     </TamañoIcono>

    
//         <Navegacion>
//             <Link to="/vistaprincipal">
//                 <Logo src={imagen}></Logo>
//             </Link>
//         </Navegacion>
//     <Menucontainer/>
//     <Perfil> 
//         <ContenedorPerfil>
//             <Link to="/perfilusuario"style={{ textDecoration: "none", color: "white", display:"flex", alignItems:"center"}}>
//             <PermIdentityOutlinedIcon style={{fontSize:"35px"}}/>usuario
//             </Link>
//         </ContenedorPerfil>
            
//         <Ajustes>
//             <NotificationsOutlinedIcon style={{fontSize:"35px", cursor:"pointer"}}
//             onClick={()=>setActivo(!activo)}>
//             </NotificationsOutlinedIcon>    
//         {/* se veran reflejada las vistas al momento de darle click */}
//         </Ajustes>
//     </Perfil>    
//     {activo && <div ref={modalRef}><Retorno1/></div>} 
// </Contenedor> 

//     <ContenedorOpciones style={{display: acordion ? "flex" : "none"}}>
//         <Menucontainer>
//             {/*utilizamos el <NavLink> de react para asi indicar la navegacion */}
//             <NavLink
//                 to="/empresas"
//                 style={{
//                 color: currentPath === "/empresas" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("empresas")}>
//                 <MenuItem>Companies</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/contactos"
//                 style={{
//                 color: currentPath === "/contactos" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("contactos")}>
//                 <MenuItem>Contacts</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/negocios"
//                 style={{
//                 color: currentPath === "/negocios" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("negocios")}>
//                 <MenuItem>Business</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/tareas"
//                 style={{
//                 color: currentPath === "/tareas" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("tareas")}>
//                 <MenuItem>Tasks</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/pedidos"
//                 style={{
//                 color: currentPath === "/pedidos" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("pedidos")}>
//                 <MenuItem>Pedidos</MenuItem>
//             </NavLink>
//             <NavLink
//             to="/call"
//                 style={{
//                 color: currentPath === "/call" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("call")}>
//                 <MenuItem>call log</MenuItem>
//             </NavLink>  
//         </Menucontainer>    
//     </ContenedorOpciones>
//     <div style={{height:"90vh", width:"100%"}}>
//         <Outlet/>
//     </div>     
// </>
// );
// };
// export default Menu;

// import React, { useState,useRef } from "react";
// import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
// import {Contenedor,Logo, MenuItem,Menucontainer,Navegacion, Ajustes, TamañoIcono,Perfil, ContenedorPerfil, ContenedorOpciones, OpcionesPrincipales
// } from "./menu";
// import imagen from "../../img/Logo VY-02.svg";
// import Retorno1 from "../menu/configuracion";
// import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


// const Menu = () => {
// // Estado para controlar la visibilidad del menú desplegable de perfil

// const location = useLocation();
// const currentPath = location.pathname;
// /* nos llevara a una vista con otras opciones */

// const [activo, setActivo] = useState(false);

// const [, /* selectedOption */ setSelectedOption] = useState("inicio");
// const opcionElegida = (Option) => {
//     setSelectedOption(Option);
// };

// const modalRef = useRef(null);
// // const handleOutsideClick = (event) => {
// // if (modalRef.current && !modalRef.current.contains(event.target)) {
// // setActivo(false);
// // }
// // };

// const [acordion, setAcordeon] = useState(false);
// const Abrir = () => {
//     setAcordeon(!acordion)}

// return (
//     <>
//     <Contenedor>
//     {/* Barra de navegación */}
//     <TamañoIcono>
//         {/* <BiMenu></BiMenu> */}
//         <DensityMediumRoundedIcon onClick={Abrir}/>
//     </TamañoIcono>

    
//         <Navegacion>
//             <Link to="/vistaprincipal">
//                 <Logo src={imagen}></Logo>
//             </Link>
//         </Navegacion>
//     <Menucontainer/>
//     <Perfil> 
//         <ContenedorPerfil>
//             <Link to="/perfilusuario"style={{ textDecoration: "none", color: "white", display:"flex", alignItems:"center"}}>
//             <PermIdentityOutlinedIcon style={{fontSize:"35px"}}/>usuario
//             </Link>
//         </ContenedorPerfil>
            
//         <Ajustes>
//             <NotificationsOutlinedIcon style={{fontSize:"35px", cursor:"pointer"}}
//             onClick={()=>setActivo(!activo)}>
//             </NotificationsOutlinedIcon>    
//         {/* se veran reflejada las vistas al momento de darle click */}
//         </Ajustes>
//     </Perfil>    
//     {activo && <div ref={modalRef}><Retorno1/></div>} 
// </Contenedor> 

//     <ContenedorOpciones style={{display: acordion ? "flex" : "none"}}>
//         <Menucontainer>
//             {/*utilizamos el <NavLink> de react para asi indicar la navegacion */}
//             <NavLink
//                 to="/empresas"
//                 style={{
//                 color: currentPath === "/empresas" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("empresas")}>
//                 <MenuItem>Companies</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/contactos"
//                 style={{
//                 color: currentPath === "/contactos" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("contactos")}>
//                 <MenuItem>Contacts</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/negocios"
//                 style={{
//                 color: currentPath === "/negocios" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("negocios")}>
//                 <MenuItem>Business</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/tareas"
//                 style={{
//                 color: currentPath === "/tareas" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("tareas")}>
//                 <MenuItem>Tasks</MenuItem>
//             </NavLink>
//             <NavLink
//                 to="/pedidos"
//                 style={{
//                 color: currentPath === "/pedidos" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("pedidos")}>
//                 <MenuItem>Pedidos</MenuItem>
//             </NavLink>
//             <NavLink
//             to="/call"
//                 style={{
//                 color: currentPath === "/call" ? "#6AB7BD" : "#ffffff",
//                 textDecoration: "none",
//                 marginBottom:"10px"
//                 }}
//                 onClick={() => opcionElegida("call")}>
//                 <MenuItem>call log</MenuItem>
//             </NavLink>  
//         </Menucontainer>    
//     </ContenedorOpciones>
//     <div style={{height:"90vh", width:"100%"}}>
//         <Outlet/>
//     </div>     
// </>
// );
// };
// export default Menu;

import React, { useState } from "react";
import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
import {
  Contenedor,
  Logo,
  MenuItem,
  Menucontainer,
  Navegacion,
  Ajustes,
  TamañoIcono,
  Perfil,
  ContenedorPerfil,
  ContenedorOpciones,
  OpcionesPrincipales,
} from "./menu";
import imagen from "../../img/Logo VY-02.svg";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Retorno1 from "../menu/configuracion";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activo, setActivo] = useState(false);
  const [, /* selectedOption */ setSelectedOption] = useState("inicio");
  const opcionElegida = (Option) => {
    setSelectedOption(Option);
  };

  const [acordion, setAcordeon] = useState(false);
  const Abrir = () => {
    setAcordeon(!acordion);
  };

  return (
    <>
      <Contenedor>
        <TamañoIcono>
          <DensityMediumRoundedIcon onClick={Abrir} />
        </TamañoIcono>
        <Navegacion>
          <Link to="/vistaprincipal">
            <Logo src={imagen} />
          </Link>
        </Navegacion>
        <Menucontainer />
        <Perfil>
          <ContenedorPerfil>
            <Link
              to="/perfilusuario"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PermIdentityOutlinedIcon style={{ fontSize: "35px" }} />usuario
            </Link>
          </ContenedorPerfil>
          <Ajustes>
            <NotificationsOutlinedIcon
              style={{ fontSize: "35px", cursor: "pointer" }}
              onClick={() => setActivo(!activo)}
            ></NotificationsOutlinedIcon>
          </Ajustes>
        </Perfil>
        {activo && <div><Retorno1 /></div>}
      </Contenedor>
      <ContenedorOpciones style={{ display: acordion ? "flex" : "none" }}>
        <Menucontainer>
          <NavLink
            to="/empresas"
            style={{
              color: currentPath === "/empresas" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("empresas")}
          >
            <MenuItem>Companies</MenuItem>
          </NavLink>
          <NavLink
            to="/contactos"
            style={{
              color: currentPath === "/contactos" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("contactos")}
          >
            <MenuItem>Contacts</MenuItem>
          </NavLink>
          <NavLink
            to="/negocios"
            style={{
              color: currentPath === "/negocios" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("negocios")}
          >
            <MenuItem>Business</MenuItem>
          </NavLink>
          <NavLink
            to="/tareas"
            style={{
              color: currentPath === "/tareas" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("tareas")}
          >
            <MenuItem>Tasks</MenuItem>
          </NavLink>
          <NavLink
            to="/pedidos"
            style={{
              color: currentPath === "/pedidos" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("pedidos")}
          >
            <MenuItem>Pedidos</MenuItem>
          </NavLink>
          <NavLink
            to="/call"
            style={{
              color: currentPath === "/call" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("call")}
          >
            <MenuItem>call log</MenuItem>
          </NavLink>
          <NavLink
            to="/campana-corre"
            style={{
              color: currentPath === "/campana-corre" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("campana-corre")}
          >
            <MenuItem>Campaña Corre</MenuItem>
          </NavLink>
          <NavLink
            to="/campana-sms"
            style={{
              color: currentPath === "/campana-sms" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("campana-sms")}
          >
            <MenuItem>Campaña SMS</MenuItem>
          </NavLink>
          <NavLink
            to="/llamada-audio"
            style={{
              color: currentPath === "/llamada-audio" ? "#6AB7BD" : "#ffffff",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={() => opcionElegida("llamada-audio")}
          >
            <MenuItem>Llamada Audio</MenuItem>
          </NavLink>
        </Menucontainer>
      </ContenedorOpciones>
      <div style={{ height: "90vh", width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Menu;
