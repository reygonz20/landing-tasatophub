import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import logo from '../../../public/assets/images/logotasa.png'
import {FaInfo, FaBars, FaHome, FaUserAlt} from "react-icons/fa"
import { Modal, Button, Tooltip, OverlayTrigger, Dropdown, Popover, Form, Row, Col } from 'react-bootstrap';

import axios from 'axios'
import Url from '../../url'

import Router from 'next/router';


const HeaderIfi = ({props, mobile, setMobile, midScreen, openMenu, setOpenMenu, botonMenu, botonMenu2}) => {


const [pathname, setPathname] = useState('');
const [whref, setWhref] = useState({})

const [claveAct, setClaveAct] = useState('');
const [claveNueva, setClaveNueva] = useState('');
const [check, setCheck] = useState(false);
const [openModal, setOpenModal] = useState(false);
const [resumeModal, setResumeModal] = useState('');

const [usuarioMostrar, setUsuarioMostrar] = useState('')
const [apellidoMostrar, setApellidoMostrar] = useState('')
const [correoMostrar, setCorreoMostrar] = useState('')

const [cambioPass, setCambioPass] = useState([])
const [error, setError] = useState([]);

const cambioClave = async (correo, claveactual, nuevaclave) => {

  let userInfo = { correo: correo, claveactual: claveactual, nuevaclave: nuevaclave}


  axios.post(`${Url}/cambiaclave`, userInfo)
  .then((res) => {
  console.log(res.data);
  setCambioPass(res.data)
  setResumeModal('resultado')
}).catch(e => {
  console.log(e)
  setError(e)
  setResumeModal('resultado')
});
}



useEffect(() => {
    setPathname(window.location.pathname);
    setWhref(window.location)
  }, []);

  useEffect(() => {
    setUsuarioMostrar(localStorage.getItem('tasaUsuario'))
    setCorreoMostrar(localStorage.getItem('tasaCorreo'))
    setApellidoMostrar(localStorage.getItem('tasaApellido'))
  }, []);

  const handleOpen = () => {
    setOpenModal(true)
}
const handleClose = () => {
    setOpenModal(false)
    setResumeModal('')
}


  const onCheckboxChange = () => {
    if (!check) {
        setCheck(true)
    } else {
        setCheck(false)
    }
 }

 const handleOnchangeClaveAct = (e) => {
  if (e.target.value.length) {
    setClaveAct(e.target.value);
  } else {
    setClaveAct(0);
  }
};

const handleOnchangeClaveNueva = (e) => {
    if (e.target.value.length) {
      setClaveNueva(e.target.value);
    } else {
      setClaveNueva(0);
    }
  };

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
                            
{/* mobile */}          <Link href="/zonaprivada/beta/dashboard/ifi"><FaHome size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer', marginLeft: '0px'}} /></Link>
                            
                            </div> 
                            
                            :
                            
                            <div className="" style={{width: '50px', marginLeft: '1%', height: '50px', padding: '10px'}}>
                                
{/*no mobile */}        <Link href="/zonaprivada/beta/dashboard/ifi"><FaHome size="30px" style={{color: '#146cae', margin: 'auto', cursor: 'pointer'}} /></Link>
                                
                                </div> }
                        
                        
                        
                        {mobile ?<div className="col-lg-1 col-md-1" style={{width: '50px', marginLeft: '0px', height: '50px', padding: '0px', position: 'absolute', right: '3px', top: '10px'}}>
                            
                        <Dropdown>
                            <Dropdown.Toggle className="custom-button" id="dropdown-basic" style={{backgroundColor: 'white', color: 'white', border: '0px solid white', marginRight:'0px'}}>
                            <FaUserAlt size="25px" style={{color: '#146cae', margin: 'auto'}} />
{/* Mobile */}              </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#" onClick={()=>{setOpenModal(true), setResumeModal('cambioclave')}}>Cambiar Contraseña</Dropdown.Item>
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
                            {`${usuarioMostrar} ${apellidoMostrar}`}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item style={{marginBottom: '10px'}} href="#" onClick={()=>{setOpenModal(true), setResumeModal('cambioclave')}}>Cambiar Contraseña</Dropdown.Item>
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
                                }} href="#">Cerrar Sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <div style={{textAlign: 'center'}}>{correoMostrar}</div>

                            </div>
                        
                             </div>
                             </React.Fragment> 
                             : null}
            </div>


            <Modal style={{}} size="lg" show={openModal} onHide={()=>{handleClose()}}>
        <Modal.Header closeButton>
        <Modal.Title>Cambiar Contraseña</Modal.Title>
        </Modal.Header>

        {resumeModal === 'cambioclave' ? 
        <Modal.Body style={{textAlign: 'center'}}>

        <div className="col-md-12 col-lg-12 col-sm-12" style={{margin: 'auto', border: '1px solid #BEBEBE', marginTop: '20px', padding: '20px', width: '80%'}}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control placeholder={correoMostrar} disabled/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label style={{color: 'black'}}>Contraseña actual</Form.Label>
                            <Form.Control type={check === false ? "password" : ""}  onChange={handleOnchangeClaveAct}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label style={{color: 'black'}}>Contraseña nueva</Form.Label>
                            <Form.Control type={check === false ? "password" : ""}  onChange={handleOnchangeClaveNueva}/>
                        </Col>
                    </Row>
                    <div style={{margin: 'auto', marginTop: '10px'}}>
<div className="form-check">
    <label style={{color: 'black'}}>
      <input
        type="checkbox"
        name="contraseña"
        checked={check}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      Mostrar contraseña.
    </label>
  </div>
          </div>
                </Form>

            </div>

        </Modal.Body> 
        : resumeModal === 'resultado' ?
        <Modal.Body style={{textAlign: 'center'}}>

        <div className="col-md-12 col-lg-12 col-sm-12" style={{margin: 'auto', marginTop: '20px', padding: '20px', width: '80%'}}>
               
               {cambioPass.success == true ?
               <h3 style={{color: 'green', fontSize: '1.2rem'}}>Se ha realizado su cambio de contraseña con éxito.</h3> 
              :
              <h3 style={{color: 'red', fontSize: '1.2rem'}}>Las credenciales ingresada son incorrectas.</h3> 
              } 
              
              

            </div>

        </Modal.Body> 
        :
        null}
               
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {handleClose()}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} 
          onClick={
            resumeModal === 'cambioclave' ? 
            ()=>{cambioClave(correoMostrar, claveAct, claveNueva)}
            : resumeModal === 'resultado' ?
            ()=>{handleClose()}
            : null
            }>
            {'Aceptar'}
          </Button>
        </Modal.Footer>
      </Modal>




        </>
    );
};

export default HeaderIfi;