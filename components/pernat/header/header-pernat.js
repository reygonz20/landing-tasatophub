import React, { useState, useEffect, useContext } from 'react';
import logo from '../../../public/assets/images/logotasa.png'
import {FaInfo, FaBars, FaHome, FaUserAlt} from "react-icons/fa"
import { Modal, Button, Tooltip, OverlayTrigger, Dropdown, Popover } from 'react-bootstrap';
import './header.css'
import Link from 'next/link'
import Router from 'next/router';
import PernatContext from '../../../context/user/PernatContext'
// const { usuario, setUsuario } = useContext(PernatContext)
import axios from 'axios'
import Url from '../../url'
import { slice } from 'lodash';

const HeaderPernat = ({props, mobile, setMobile, midScreen, openMenu, setOpenMenu, botonMenu, botonMenu2}) => {

const { usuario, setUsuario } = useContext(PernatContext)

const [pathname, setPathname] = useState('');
const [whref, setWhref] = useState({})
const [usuarioMostrar, setUsuarioMostrar] = useState('')
const [correoMostrar, setCorreoMostrar] = useState('')
const [headerInfo, setHeaderInfo] = useState([]);
const [cambioCompra, setCambioCompra] = useState('');
const [cambioVenta, setCambioVenta] = useState('');

const [datosUsu, setDatosUsu] = useState([])

useEffect(() => {
    setPathname(window.location.pathname);
    setWhref(window.location)
  }, []);

  useEffect(() => {
    setUsuarioMostrar(localStorage.getItem('tasaUsuario'))
    setCorreoMostrar(localStorage.getItem('tasaCorreo'))
  }, []);

  useEffect(() => {
    getHeaderInfo()
    getDatosUsu(localStorage.getItem('tasaID'))
  }, []);

  const tipoCambioCompra = headerInfo.fx_rate_buy;
  const tipoCambioVenta = headerInfo.fx_rate_sell;

  const getDatosUsu = async (id) => {

    let res = await axios.get(`${Url}/usuario/inverisiones/${id}`)
    setDatosUsu(res.data.data)
    // console.log(res.data)

              
  }

  const getHeaderInfo = async () => {

    let res = await axios.post(`${Url}/tipocambiorextie`)
    setHeaderInfo(res.data.data)
    setCambioCompra(res.data.data.fx_rate_buy.slice(0, -2))
    setCambioVenta(res.data.data.fx_rate_sell.slice(0, -2))
  }

  //recoger la informacion recolectada por el simulador y mandarlo al componente de resultados.
  const pasarDatosUsu = e => {
   
    // console.log('Buscando ' , monto);
    //Validamos que haya texto en el input
    
    //Redireccionamos a la pagina pasando los parametros para recuperarlos en la pagina de busqueda
    Router.push({
        pathname:'/zonaprivada/beta/dashboard/pernat/editar-usuario',
        query:{
            pcelular: datosUsu[0].celular, pfechaNac: datosUsu[0].fecha_nac, ptipoDoc: datosUsu[0].tipo_documento.nombre, pnumdoc: datosUsu[0].numdoc, psexo: datosUsu[0].sexo, pciudad: datosUsu[0].ciudad.nombre, pdireccion: datosUsu[0].direccion, pnombres: datosUsu[0].nombre, papellidos: datosUsu[0].apellido
        }
    })

}

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content style={{color: 'black'}}>
        Tipo de cambio proporcionado por Rextie, casa de cambio digital.
      </Popover.Content>
    </Popover>
  );
  
  const popover2 = (
    <Popover id="popover-basic">
      <Popover.Content style={{color: 'black'}}>
      Este monto, de acuerdo a Ley, es actualizado trimestralmente. La cobertura del seguro respalda los depósitos nominativos de las personas naturales y jurídicas. Dicho monto incluye todos los depósitos asegurados que un depositante tiene en una misma institución financiera. El monto máximo de cobertura para el periodo de marzo a mayo de 2021 es de S/ 104,377
      </Popover.Content>
    </Popover>
  );
  
  const popover3 = (
    <Popover id="popover-basic">
      <Popover.Content style={{color: 'black'}}>
      La tasa de interés de referencia es la que establece la entidad encargada de la política monetaria de cada país para influenciar en el precio de las operaciones crediticias de muy corto plazo entre diferentes entidades bancarias, es decir, para servir de referencia a la tasa de interés interbancaria.
      </Popover.Content>
    </Popover>
  );
  
  const popover4 = (
    <Popover id="popover-basic">
      <Popover.Content style={{color: 'black'}}>
      Proceso económico provocado por el desequilibrio existente entre la producción y la demanda; causa una subida continuada de los precios de la mayor parte de los productos y servicios, y una pérdida del valor del dinero para poder adquirirlos o hacer uso de ellos.
      </Popover.Content>
    </Popover>
  );

    return (
        <>
            <div className="row" style={{backgroundColor: 'white', color: 'black', height: '60px', borderBottom: '1px solid grey', marginBottom: '0.2%', alignContent: 'center', boxShadow: '1px 1px 3px #999', display: 'flex', lineHeight: '100%'}}>
            {/* <button onClick={()=>{console.log(datosUsu[0].nombre)}}>probar datos usuario</button> */}
                       
            {/*LOGO */} {!mobile ? <div className="col-lg-1 col-md-1" style={{marginRight: '1%', height: '50px'}}><img src={logo} style={{width: '120px', marginLeft: '5%', marginTop: '10%'}}></img></div> : null }
                        
                        
                        
    {/* BOTON MENU */}  {mobile === false ? 
    
    <div className={mobile ? "" : ""} style={{width: '50px', marginLeft: '0px', height: '50px', border: '2px solid #146cae', borderRadius: '5px', textAlign: 'center', paddingTop: '15px'}}>
        
{/*no mobile */}       <FaBars style={{color: '#146cae', margin: 'auto', width: '20px', height: '20px'}} onClick={()=>{botonMenu()}} />
        
        </div> 
        
        : 
        
        <div style={{width: '50px', marginLeft: '5%', marginRight: '3%', height: '50px',  padding: '10px', alignContent: 'center'}}>
            
{/* mobile */}         <FaBars size="30px" style={{color: '#146cae', margin: 'auto'}} onClick={()=>{botonMenu2()}} />
            
            </div>
            }
                                         
                        
                        {mobile ? 
                        <div className="col-lg-1 col-md-1" style={{width: '50px', marginLeft: '0px', height: '50px', borderLeft: '1px solid grey', padding: '10px'}}>
                            
{/* mobile */}          <Link href="/zonaprivada/beta/dashboard/pernat"><FaHome onClick={()=>{cambioActive('')}} size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer', marginLeft: '0px'}} /></Link>
                            
                            </div> 
                            
                            :
                            
                            <div className="" style={{width: '50px', marginLeft: '1%', height: '50px', padding: '10px'}}>
                                
{/*no mobile */}        <Link href="/zonaprivada/beta/dashboard/pernat"><FaHome size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer'}} /></Link>
                                
                                </div> }
                        
                        
                        
                        {mobile ?<div className="col-lg-1 col-md-1" style={{width: '50px', marginLeft: '0px', height: '50px', borderLeft: '1px solid grey', padding: '0px', justifyContent: 'left'}}>
                            

                        <Dropdown style={{marginTop: '5px'}}>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'white', border: '0px solid white'}}>
                            <FaInfo size="25px" style={{color: '#146cae'}} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item style={{lineHeight: '1.2'}}>Rextie<br></br><strong>Compra $:</strong> <br></br> S/ {cambioCompra} <br></br> <strong>Venta $:</strong><br></br>S/ {cambioVenta}</Dropdown.Item>
                            <Dropdown.Item style={{lineHeight: '1.2'}}><strong>FSD:</strong><br></br> S/ 104,377.00 </Dropdown.Item>
{/* Mobile */}              <Dropdown.Item style={{lineHeight: '1.2'}}><strong>T. Ref. (BCR):</strong><br></br> 0.25% </Dropdown.Item>
                            <Dropdown.Item style={{lineHeight: '1.2'}}><strong>Inflación:</strong><br></br> 2.1% </Dropdown.Item>
                            <Dropdown.Item style={{lineHeight: '1.2'}}><strong>Fecha:</strong><br></br> 25/05/2021 </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                           
                            
                            
                            
                            </div> 
                            
                            
                            :
                            
                            
                            <span></span> }
                        
                        
                        
                        
                        
                        
                        
                        {mobile ?<div className="col-lg-1 col-md-1" style={{width: '50px', marginLeft: '0px', marginTop: '1%', height: '50px', padding: '10px', position: 'absolute', right: '0'}}>
                            
                        <Dropdown>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'white', border: '0px solid white'}}>
                            <FaUserAlt size="25px" style={{color: '#146cae', margin: 'auto'}} />
{/* Mobile */}              </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item style={{marginBottom: '10px'}}><Link href="/zonaprivada/beta/dashboard/pernat/editar-usuario">Cuenta</Link></Dropdown.Item>
                            <Dropdown.Item onClick={()=>{
                                localStorage.removeItem('tasaToken'),
                                localStorage.removeItem('tasaID'),
                                localStorage.removeItem('tasaUsuario'),
                                localStorage.removeItem('tasaApellido'),
                                localStorage.removeItem('tasaCorreo'),
                                localStorage.removeItem('tasaRol'),
                                Router.push({
                                    pathname:'/zonaprivada/iniciar-sesion',
                                })
                                }} href="#/action-2">Cerrar Sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            
                            </div> 
                            
                            :
                            
                            <span></span> }

                        {!mobile ? 
                        
                        <div className="col-lg-8 col-md-8" style={{display: 'flex', alignItems: 'center'}}>
                            
                            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover}>
                            <span style={{fontSize: '0.8rem'}}>(<strong>Compra $:</strong> S/ {cambioCompra} - <strong>Venta $:</strong> S/ {cambioVenta} <a target="_blank" href="https://www.rextie.com/#utm_source=email&utm_medium=mail&utm_campaign=tasatopsend"><sub style={{color: 'blue'}}>Rextie</sub></a></span>
                            </OverlayTrigger>
                            
                            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover2}>
                            <span style={{fontSize: '0.8rem', marginLeft: '1%'}}><strong>FSD:</strong></span>
                            </OverlayTrigger>
                            <span style={{fontSize: '0.8rem', marginLeft: '3px'}}>S/ 101,522.00</span>

                            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover3}>
                            <span style={{fontSize: '0.8rem', marginLeft: '1%'}}><strong>T. Ref. (BCR):</strong></span>
                            </OverlayTrigger>
                            <span style={{fontSize: '0.8rem', marginLeft: '3px'}}>0.25%</span>

                            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover4}>
                            <span style={{fontSize: '0.8rem', marginLeft: '1%'}}><strong>Inflación:</strong></span>
                            </OverlayTrigger>
                            <span style={{fontSize: '0.8rem', marginLeft: '3px'}}>2.1%</span>
                            
                            <span style={{fontSize: '0.8rem', marginLeft: '1%'}}><strong>Fecha:</strong> 09/02/2021</span>
                            
                        </div> : null}







                        {!mobile ? <React.Fragment><div className="" style={{display: 'flex', alignItems: 'center', position: 'absolute', right: '0', marginRight: '15px', lineHeight: '100%', marginTop: '0.5%', fontSize: '0.8em'}}>
                            <div>
                            <Dropdown>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'black', border: '0px solid white'}}>
                            {usuarioMostrar ? usuarioMostrar : null}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item style={{marginBottom: '10px'}}><Link href="/zonaprivada/beta/dashboard/pernat/editar-usuario">Cuenta</Link></Dropdown.Item>
                            <Dropdown.Item onClick={()=>{
                                localStorage.removeItem('tasaToken'),
                                localStorage.removeItem('tasaID'),
                                localStorage.removeItem('tasaUsuario'),
                                localStorage.removeItem('tasaApellido'),
                                localStorage.removeItem('tasaCorreo'),
                                localStorage.removeItem('tasaRol'),
                                Router.push({
                                    pathname:'/zonaprivada/iniciar-sesion',
                                })
                                }} href="#/action-2">Cerrar Sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <div style={{textAlign: 'center'}}>{correoMostrar ? correoMostrar : null}</div>

                            </div>
                        
                             </div></React.Fragment> : null}
            </div>
        </>
    );
};

export default HeaderPernat;