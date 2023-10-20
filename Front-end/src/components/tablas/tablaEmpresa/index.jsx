import React from "react";
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
  HederCaja1, HederCaja2,
  BarraNavegacion,
  HederContenido,
  Checkbox
} from "../tablaContacto/styled";
import { AiOutlineSearch } from 'react-icons/ai'

import { useState, useEffect } from "react";
import Retorno8 from "../../formularios/crearEmpresa";
import EmpresaUpdate from "../../formularios/updateEmpresa";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
import { NavLink } from "react-router-dom";
import { RiSettings3Line, RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

function TablaEmpresa() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [empresa, setEmpresa] = useState([]);
  const [empresaEditar, setEmpresaEditar] = useState(null);

  const [loading, setLoading] = useState(true)

  const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {

    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        jwt_decode(userToken);
        setLoading(false);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate])
  // barra de busqueda
  const [buscar, setBuscar] = useState("")

  //Funcion para traer los datos de la tabla, a buscar

  //Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
    setBuscar(e.target.value);

  };

  //Metodo de filtrado tabla empresa
  let resBusqueda = [];

  if (!buscar) {
    resBusqueda = empresa || [];
  } else {
    resBusqueda = empresa.filter(
      (dato) =>
        (dato.nombreEmpresa && dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.segmento && dato.segmento.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.url && dato.url.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.descripcion && dato.descripcion.toLowerCase().includes(buscar.toLowerCase()))
    );
  }

  const handleEditarClick = (item) => {
    setEmpresaEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };

  const Getempresa = async () => {
    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g, "")
      const empresas = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/companytabla`
        , {
          headers: {
            Authorization: tokensincomillas
          }
        }
      )
      setEmpresa(empresas.data);
    } catch (error) {
      console.log("error de axio en la query");
    }

  };

  const TabladeleteEmpresa = async (item) => {
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g, "")
    try {
      const res = await Axios.put(`
        ${process.env.REACT_APP_URL_BACKEND}/companytabla/desactivar/${item.idEmpresa}`, {

      }, {
        headers: {
          Authorization: tokensincomillas,
        }
      });
      Getempresa()
      return res.data

    } catch (error) {
      console.log("Error al eliminar la empresa:", error);
    }
    setTimeout(() => {
      window.location.href = "/empresas"
    }, 0)
  };

  useEffect(() => {
    Getempresa();
  }, []);


  return (
    <>
      {loading ? (
        <>
          <h1>cargando.....</h1>
        </>
      ) : (
        <>
          <ContainerPrincipal>
            <CajaContenido>
              <Heder>
                <HederCaja1>
                  <NavLink style={{ textDecoration: "none" }}>
                    <BarraNavegacion>Negociaciones</BarraNavegacion>
                  </NavLink>

                  <NavLink style={{ textDecoration: "none" }}>
                    <BarraNavegacion>Invetario</BarraNavegacion>
                  </NavLink>

                  <NavLink style={{ textDecoration: "none" }}>
                    <BarraNavegacion>clientes</BarraNavegacion>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }}>
                    <BarraNavegacion>ventas</BarraNavegacion>
                  </NavLink>

                  <NavLink to="/grafica" style={{ textDecoration: "none" }}>
                    <BarraNavegacion>analitica</BarraNavegacion>
                  </NavLink>
                </HederCaja1>
                <HederCaja2>
                  <HederContenido>
                    <h1>Empresa</h1>
                    <Boton onClick={() => {
                      setActive(!active);
                      // Cierra EmpresaUpdate si está abierto al hacer clic en "Crear Empresa"
                      if (activeEditar) {
                        setActiveEditar(false);
                      }
                      if (empresaUpdateAbierto) {
                        setEmpresaUpdateAbierto();
                      }
                    }}>
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
                  <Caja1 className="EstiloCajaEmpresa">
                    <Parrafo className="Parrafo">company name</Parrafo>
                  </Caja1>
                  <Caja1 className="EstiloCajaEmpresa">
                    <Parrafo className="Parrafo">segment</Parrafo>
                  </Caja1>
                  <Caja1 className="EstiloCajaEmpresa">
                    <Parrafo className="Parrafo">url</Parrafo>
                  </Caja1>
                  <Caja1 className="EstiloCajaEmpresa">
                    <Parrafo className="Parrafo">Description</Parrafo>
                  </Caja1 >
                  <Caja1>
                  <RiSettings3Line
                      style={{ fontSize: "35px", color: "white" }}
                    />
                  </Caja1>
                </HederTabla>
                <ContainerSecundario>
                  {resBusqueda.map((item, i) => (
                    <BodyTabla key={i}>
                      <Caja1 className="CajaCheckbox">
                        <Checkbox type="checkbox"></Checkbox>
                      </Caja1>

                      <Caja1 className="EstiloCajaEmpresa">
                        <Parrafo>{item.nombreEmpresa}</Parrafo>
                      </Caja1>
                      <Caja1 className="EstiloCajaEmpresa">
                        <Parrafo>{item.segmento}</Parrafo>
                      </Caja1>
                      <Caja1 className="EstiloCajaEmpresa">
                        <Parrafo>{item.url}</Parrafo>
                      </Caja1>
                      <Caja1 className="EstiloCajaEmpresa">
                        <Parrafo>{item.descripcion}</Parrafo>
                      </Caja1>
                      <Caja1>
                        <CajaIcono>
                          <RiEdit2Line
                            style={{ fontSize: "23px" }}
                            onClick={() => handleEditarClick(item)}
                          />
                        </CajaIcono>
                        <CajaIcono>
                          {" "}
                          <RiDeleteBin6Line
                            style={{ fontSize: "23px" }}
                            onClick={() => TabladeleteEmpresa(item)}
                          />
                        </CajaIcono>
                      </Caja1>
                    </BodyTabla>
                  ))}
                </ContainerSecundario>
                {active && <Retorno8 />}
                {activeEditar && (
                  <EmpresaUpdate empresa={empresaEditar} setEmpresaUpdateAbierto={setEmpresaUpdateAbierto} />
                )}
              </div>
            </CajaContenido>
          </ContainerPrincipal>
        </>
      )}
    </>
  );
}

export default TablaEmpresa;