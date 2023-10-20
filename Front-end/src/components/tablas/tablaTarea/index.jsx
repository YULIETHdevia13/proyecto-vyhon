import React from "react";
import {
    ImagenUser,
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
    HederCaja1 ,HederCaja2,
    BarraNavegacion,
    HederContenido,
    Checkbox
    } from "../tablaContacto/styled";
import imagenUser from "../../img/perfil.jpg";
import { NavLink } from "react-router-dom";
import { RiDeleteBin6Line, RiEdit2Line, RiSettings3Line} from "react-icons/ri";
import {AiOutlineSearch } from 'react-icons/ai'
import { useState, useEffect } from "react";
import CrearTarea from "../../formularios/crearTarea";
import Axios from "axios";
import UpdateTarea from "../../formularios/updateTarea";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

function TablaTarea() {

    const [active, setActive] = useState(false);
    const [activeEditar, setActiveEditar] = useState(false);
    const [tarea, setTarea] = useState([]);
    const [tareaEditar, setTareaEditar] = useState([]);
    
    const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {

        const userToken = localStorage.getItem("user");
        if(userToken){
            try {
            jwt_decode(userToken);
        setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('/');
        }    
    },[navigate])

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
  resBusqueda = tarea|| [];
} else {
  resBusqueda = tarea.filter(
      (dato) =>
      (dato.nombreNegocio && dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.asunto && dato.asunto.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.responsable  && dato.responsable.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.tipoTarea  && dato.tipoTarea.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.fecha && dato.fecha.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.hora && dato.hora.toLowerCase().includes(buscar.toLowerCase()))
);
}

    const handleEditarClick = (item) => {
        setTareaEditar(item); // Cuando se hace clic en Editar, almacena la tarea a editar en el estado
        setActiveEditar(true); // Activa el componente de edición
      };


    const ReflejarDatos = async () => {
        // ev.preventDefault();
     
        const tareas = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/tareasTabla`);
        setTarea(tareas.data);
    };

    const TabladeleteTarea = async (item) => {
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
        const res = await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/tareastabla/desactivar/${item.idTarea}`,{      
          
        },{
          headers:{
            Authorization: tokensincomillas,
          }
        }
        );
        console.log("Contacto eliminado con éxito.", res.data);


        setTimeout(() => {
            window.location.href = "/tareas"
        }, 0);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);

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
                    Tarea
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
                  <Parrafo className="Parrafo">Responsable</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Negocio</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Asunto</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Tipo de tarea</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Fecha</Parrafo>
                </Caja1>
                <Caja1>
                  <Parrafo className="Parrafo">Hora</Parrafo>
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
                      <Parrafo className="LetraAzul">{item.responsable}</Parrafo>
                        <Parrafo>Negocio</Parrafo>
                      </div>
                    </Caja1>
                  <Caja1>
                    <Parrafo className="LetraAzul">{item.nombreNegocio}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.asunto}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.tipoTarea}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.fecha}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.hora}</Parrafo>
                  </Caja1>

                  <Caja1>
                    <CajaIcono>
                      <RiEdit2Line
                        style={{ fontSize: "23px" }}
                        onClick={() => handleEditarClick(item)} /* llama a la funcion para actualizar */
                      />
                    </CajaIcono>
                    <CajaIcono>
                      <RiDeleteBin6Line
                        style={{ fontSize: "23px" }}
                        onClick={()=> TabladeleteTarea(item)}
                      />
                    </CajaIcono>
                  </Caja1>
                </BodyTabla>
              ))}
            </ContainerSecundario>
              
            {active && <CrearTarea></CrearTarea>}
                {activeEditar && (<UpdateTarea tarea={tareaEditar} setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}></UpdateTarea>)}
            </div>
          </CajaContenido>
        </ContainerPrincipal>
      )}
      ;
    </>
    );
}
export default TablaTarea;