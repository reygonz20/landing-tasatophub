import React, { useState, useEffect } from 'react';
import logo from '../../../public/assets/images/logotasa.png'
import {FaInfo, FaBars, FaHome, FaUserAlt} from "react-icons/fa"
import { Modal, Button, Tooltip, OverlayTrigger, Dropdown, Popover } from 'react-bootstrap';
import Link from 'next/link'
import Router from 'next/router';

const HeaderAsweb = ({props, mobile, setMobile, midScreen, openMenu, setOpenMenu, botonMenu, botonMenu2}) => {


const [pathname, setPathname] = useState('');
const [whref, setWhref] = useState({})

useEffect(() => {
    setPathname(window.location.pathname);
    setWhref(window.location)
  }, []);

    return (
        <>
            <div className="row" style={{backgroundColor: 'white', color: 'black', height: '60px', borderBottom: '1px solid grey', marginBottom: '0.2%', alignContent: 'center', boxShadow: '1px 1px 3px #999', display: 'flex', lineHeight: '100%'}}>
            
                       
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
                            
{/* mobile */}          <Link href="/zonaprivada/beta/dashboard/aseweb/usuarios"><FaHome size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer', marginLeft: '0px'}} /></Link>
                            
                            </div> 
                            
                            :
                            
                            <div className="" style={{width: '50px', marginLeft: '1%', height: '50px', padding: '10px'}}>
                                
{/*no mobile */}        <Link href="/zonaprivada/beta/dashboard/aseweb/usuarios"><FaHome size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer'}} /></Link>
                                
                                </div> }
                        
                        
                        
                        {mobile ?<div className="col-lg-1 col-md-1" style={{width: '50px', marginLeft: '0px',  height: '50px', padding: '0px', position: 'absolute', right: '3px', top: '10px'}}>
                            
                        <Dropdown>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'white', border: '0px solid white'}}>
                            <FaUserAlt size="25px" style={{color: '#146cae', margin: 'auto'}} />
{/* Mobile */}              </Dropdown.Toggle>

                            <Dropdown.Menu>
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


                        {!mobile ? <React.Fragment><div className="" style={{display: 'flex', alignItems: 'center', position: 'absolute', right: '3px', top: '5px', lineHeight: '100%', fontSize: '0.8em'}}>
                            <div>
                            <Dropdown>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'black', border: '0px solid white'}}>
                            Asesor TasaTop
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
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
                        
                        <div style={{textAlign: 'center'}}>asesorweb@tasatop.com</div>

                            </div>
                        
                             </div></React.Fragment> : null}
            </div>
        </>
    );
};

export default HeaderAsweb;