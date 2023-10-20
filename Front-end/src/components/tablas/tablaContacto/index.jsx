import React from "react";
import {
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
} from "./styled";
import { ContainerPrincipal } from "./styled"
import { AiOutlineSearch } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Retorno4 from "../../formularios/crearContacto";
import Axios from "axios";
import ContactoUpdate from "../../formularios/updateContacto";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import imagenUser from "../../img/perfil.jpg";
import { NavLink } from "react-router-dom";

function TablaContacto() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [ContactoEditar, setContactoEditar] = useState(false);
  const [contacto, setContacto] = useState([]);

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

  //Metodo de filtrado tabla empresa
  let resBusqueda = [];

  if (!buscar) {
    resBusqueda = contacto || [];
  } else {
    resBusqueda = contacto.filter(
      (dato) =>
        (dato.nombreContacto &&
          dato.nombreContacto.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.cargo &&
          dato.cargo.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.telefono &&
          dato.telefono
            .toString()
            .toLowerCase()
            .includes(buscar.toLowerCase())) ||
        (dato.correo &&
          dato.correo.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.nombreEmpresa &&
          dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase()))
    );
  }

  const handleEditarClick = (item) => {
    setContactoEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };

  const TablagetContacto = async () => {
    const token = localStorage.getItem("user");
    const tokensincomillas = token.replace(/"/g, "");
    try {
      const contactos = await Axios.get(
       ` ${process.env.REACT_APP_URL_BACKEND}/contactotabla`,
        {},
        {
          headers: {
            Authorization: tokensincomillas,
          },
        }
      );
      setContacto(contactos.data);
    } catch {
      console.log("error de axio en la query");
    }
  };

  const TabladeleteContacto = async (item) => {
    try {
      const token = localStorage.getItem("user");
      const tokensincomillas = token.replace(/"/g, "");
      await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/contactotabla/desactivar/${item.idContacto}`,
        {},
        {
          headers: {
            Authorization: tokensincomillas,
          },
        }
      );
      console.log("Contacto desactivado con éxito.");
    } catch (error) {
      console.log("Error al desactivar el contacto", error);
    }
    setTimeout(() => {
      window.location.href = "/contactos";
    }, 0);
  };

  useEffect(() => {
    TablagetContacto();
  }, []);

  useEffect(() => {
    TablagetContacto();
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
                    Contactos <HiUsers className="EstiloIconos"></HiUsers>
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
                  <Parrafo className="Parrafo">Contacto</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Actividad</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Responsable</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Creado</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Recorrido de clientes</Parrafo>
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
                        <Parrafo className="LetraAzul">
                          {item.nombreContacto}
                        </Parrafo>
                        <Parrafo>Cliente</Parrafo>
                      </div>
                    </Caja1>
                    <Caja1>
                      <Parrafo>{item.cargo}</Parrafo>
                    </Caja1>
                    <Caja1>
                      <Parrafo className="LetraAzul">{item.telefono}</Parrafo>
                    </Caja1>
                    <Caja1>
                      <Parrafo>{item.correo}</Parrafo>
                    </Caja1>
                    <Caja1>
                      <Parrafo>{item.nombreEmpresa}</Parrafo>
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
                          onClick={() => TabladeleteContacto(item)}
                        />
                      </CajaIcono>
                    </Caja1>
                  </BodyTabla>
                ))}
                
              </ContainerSecundario>
              
              {active && <Retorno4 />}
              {activeEditar && (
                <ContactoUpdate
                  contacto={ContactoEditar}
                  setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}
                ></ContactoUpdate>
              )}
            </div>
          </CajaContenido>
        </ContainerPrincipal>
      )}
      ;
    </>
  );
}
export default TablaContacto;
