import React, { useEffect, useState } from "react";

import {
  ContainerPrincipal,
  Heder,
  ContainerInput,
  Input,
  HederTabla,
  Caja1,
  Parrafo,
  ContainerSecundario,
  BodyTabla,
  CajaIcono,
  Boton,
  CajaContenido,
  HederCaja1,
  HederCaja2,
  BarraNavegacion,
  HederContenido,
  Checkbox,
  ImagenUser
} from "../tablaContacto/styled"
import imagenUser from "../../img/perfil.jpg";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {  AiOutlineSearch } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";
import CrearNegocios from "../../formularios/crearNegocio";
import Axios from "axios";
import NegocioUpdate from "../../formularios/updateNegocio";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function TablaNegocio() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [negocios, setNegocios] = useState([]);
  const [negocioAEditar, setNegocioAEditar] = useState(null);

  const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);

  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        jwt_decode(userToken);
        setLoading(false);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  // barra de busqueda
  const [buscar, setBuscar] = useState("");

  //Funcion para traer los datos de la tabla, a buscar

  //Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
    setBuscar(e.target.value);
  };

  //Metodo de filtrado tabla negocio
  let resBusqueda = [];

  if (!buscar) {
    resBusqueda = negocios || [];
  } else {
    resBusqueda = negocios.filter(
      (dato) =>
        (dato.nombreNegocio &&
          dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.etapas &&
          dato.etapas.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.fuente &&
          dato.fuente.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.nombreEmpresa &&
          dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.nombreContacto &&
          dato.nombreContacto.toLowerCase().includes(buscar.toLowerCase()))
    );
  }

  const handleEditarClick = (item) => {
    setNegocioAEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };

  const ReflejarDatos = async () => {
    const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
    try {
      const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/negociotabla`,{      
      },{
        headers:{
          Authorization: tokensincomillas,
        }
      });
      setNegocios(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const TabladeleteNegocio = async (item) => {
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g,"")
    try {
      const res = await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/negociotabla/desactivar/${item.idNegocio}`,{      
          
        },{
          headers:{
            Authorization: tokensincomillas,
          }
        }
      );
      console.log("Negocio eliminado con éxito.", res.data);
      ReflejarDatos(); // Refresca la lista de negocios después de eliminar uno
    } catch (error) {
      console.error("Error al eliminar el negocio:", error);
    }
    setTimeout(() => {
      window.location.href = "/negocios";
    }, 0);
  };

  useEffect(() => {
    ReflejarDatos();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h1>cargando.....</h1>-
        </>
      ) : (
        <ContainerPrincipal>
          <CajaContenido>
            <Heder>
              <HederCaja1>
                <NavLink style={{ textDecoration: "none" }}>
                  <BarraNavegacion>Negociaciones</BarraNavegacion>
                </NavLink>

                <NavLink style={{ textDecoration: "none" }}>
                  <BarraNavegacion>
                    Invetario
                  </BarraNavegacion>
                </NavLink>

                <NavLink style={{ textDecoration: "none" }}>
                  <BarraNavegacion>
                    clientes
                  </BarraNavegacion>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }}>
                  <BarraNavegacion>
                    ventas
                  </BarraNavegacion>
                </NavLink>

                <NavLink to="/grafica" style={{ textDecoration: "none" }}>
                  <BarraNavegacion>
                    analitica
                  </BarraNavegacion>
                </NavLink>
              </HederCaja1>

              <HederCaja2>
                <HederContenido>
                  <h1>
                    Negocio
                  </h1>
                  <Boton
                    onClick={() => {
                      setActive(!active);
                      // Cierra EmpresaUpdate si está abierto al hacer clic en "Crear Empresa"
                      if (activeEditar) {
                        setActiveEditar(false);
                      }
                      if (empresaUpdateAbierto) {
                        setEmpresaUpdateAbierto();
                      }
                    }}
                  >
                    Crear
                  </Boton>
                  <ContainerInput>
                    <Input
                      placeholder="Filtrar y buscar"
                      value={buscar}
                      onChange={BarraDeBusqueda}
                    ></Input>
                    <AiOutlineSearch className="EstiloIconos" />
                  </ContainerInput>
                </HederContenido>
              </HederCaja2>
            </Heder>
            <div className="Tabla">
              <HederTabla>
                <Caja1 className="CajaCheckbox">
                  <Checkbox type="checkbox"></Checkbox>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Nombre del negocio</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Etapas</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Fuente</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Nombre empresa</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Nombre Contacto</Parrafo>
                </Caja1>
                <Caja1>
                    <RiSettings3Line
                      style={{ fontSize: "35px", color: "white" }}
                    ></RiSettings3Line>
                </Caja1>
              </HederTabla>
              <ContainerSecundario>
              {resBusqueda.map((item, i) => (
                <BodyTabla key={i}>
                  <Caja1 className="CajaCheckbox">
                  <Checkbox type="checkbox"></Checkbox>
                  </Caja1>
                  <Caja1>
                      <ImagenUser src={imagenUser}></ImagenUser>
                      <div className="Containernombre">
                      <Parrafo className="LetraAzul">{item.nombreNegocio}</Parrafo>
                        <Parrafo>Cliente</Parrafo>
                      </div>
                    </Caja1>
                  <Caja1>
                    <Parrafo>{item.etapas}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.fuente}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo className="LetraAzul">{item.nombreEmpresa}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.nombreContacto}</Parrafo>
                  </Caja1>

                  <Caja1>
                    <CajaIcono>
                      <RiEdit2Line
                        style={{ fontSize: "23px" }}
                        onClick={() => handleEditarClick(item)} // Llama a la función para editar
                      />
                    </CajaIcono>
                    <CajaIcono>
                      <RiDeleteBin6Line
                        style={{ fontSize: "23px" }}
                        onClick={() => TabladeleteNegocio(item)}
                      />
                    </CajaIcono>
                  </Caja1>
                </BodyTabla>
              ))}
            </ContainerSecundario>
              
            {active && <CrearNegocios />}
            {activeEditar && (
              <NegocioUpdate
                negocio={negocioAEditar}
                setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}
              />
            )}
            </div>
          </CajaContenido>
        </ContainerPrincipal>
      )}
      ;
    </>
  );
}

export default TablaNegocio;
