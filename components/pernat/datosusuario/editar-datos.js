import React, { Fragment, useState, useEffect, useContext } from 'react';
import { RiAuctionFill, RiLineChartFill, RiAlertFill } from "react-icons/ri";
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import PernatContext from '../../../context/user/PernatContext'
// const { usuario, setUsuario } = useContext(PernatContext)
import Router from 'next/router';
import { useRouter } from 'next/router';

import axios from 'axios'
import Url from '../../url'

const EditarUsuario = ({mobile, pathname}) => {

  //Recuperar los paraemtros enviados desde el componente simulador del home
const router = useRouter();
const { query: { pcelular, pfechaNac, ptipoDoc, pnumdoc, psexo, pciudad, pdireccion, pnombres, papellidos } } = router;
// console.log('PAgina 2', pmonto, pplazo, pmoneda, pgrupo, ppagointeres, pubicacion);

    const [ciudades, setCiudades] = useState([])
    const [tipoDoc, setTipoDoc] = useState([])
    

    // const { usuario, setUsuario } = useContext(PernatContext)
    const [correoMostrar, setCorreoMostrar] = useState('')
    const [claveAct, setClaveAct] = useState('');
    const [claveNueva, setClaveNueva] = useState('');
    const [datos, setDatos] = useState('personales');
    const [openModal, setOpenModal] = useState(false);
    const [cambioPass, setCambioPass] = useState([])


    

const [error, setError] = useState([]);

const handleClose = () => {
    setOpenModal(false)
}

const getciudades = async () => {

    let res = await axios.get(`${Url}/ciudad`)
    setCiudades(res.data.data)
    // console.log(res.data)

              
  }


const getTipoDoc = async () => {

    let res = await axios.get(`${Url}/tipodocumento`)
    setTipoDoc(res.data.data)
              
  }

const cambioClave = async (correo, claveactual, nuevaclave) => {

    let userInfo = { correo: correo, claveactual: claveactual, nuevaclave: nuevaclave}
  
  
    axios.post(`${Url}/cambiaclave`, userInfo)
    .then((res) => {
    console.log(res.data);
    setCambioPass(res.data)
    setOpenModal(true)
  }).catch(e => {
    console.log(e)
    setError(e)
    setOpenModal(true)
  });
  }

  useEffect(()=> {
    getciudades();
    getTipoDoc();
}, [])

//---------------para editar datos-------------------------
const [nombres, setNombres] = useState('')
const [apellidos, setApellidos] = useState('')
const [celular, setCelular] = useState('')
const [tipodoc, setTipodoc] = useState('')
const [documento, setDocumento] = useState('')
const [sexo, setSexo] = useState('')
const [ubicacion, setUbicacion] = useState('')
const [direccion, setDireccion] = useState('')
const [fechanac, setFechanac] = useState('')
const [correo, setCorreo] = useState('')


//---------------------------------------------------------


const handleChangeCiud = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setCiudadEnv(event.target.value);
  }

  const handleChangeDoc = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setDocEnv(event.target.value);
  }

  useEffect(() => {
    setCorreoMostrar(localStorage.getItem('tasaCorreo'))
  }, []);




const [check, setCheck] = useState(false)

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
        <React.Fragment>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Edita tus datos</h4>


        <div className="row" style={{width: '80%', margin: 'auto', marginTop: '50px'}}>

            <div className="col-md-2" style={datos === 'personales' ? {borderBottom: '2px solid black', color: 'black', fontWeight: '600', cursor: 'pointer'} : {borderBottom: '2px solid #BEBEBE', color: 'black', cursor: 'pointer'}} onClick={()=>{setDatos('personales')}}>Datos personales</div>
            <div className="col-md-2" style={datos === 'cuenta' ? {borderBottom: '2px solid black', color: 'black', fontWeight: '600', cursor: 'pointer'} : {borderBottom: '2px solid #BEBEBE', color: 'black', cursor: 'pointer'}} onClick={()=>{setDatos('cuenta')}}>Cuenta</div>
            {mobile === true ? null : <div className="col-md-8" style={{borderBottom: '2px solid #BEBEBE', color: 'white'}}>.</div>}



            { datos === 'personales' ? 

<div className="col-md-12 col-lg-12 col-sm-12" style={{border: '1px solid #BEBEBE', marginTop: '20px', padding: '20px'}}>
<Form>
    <Row>
        <Col>
            <Form.Label>Nombres</Form.Label>
            <Form.Control placeholder={nombres} disabled/>
        </Col>
        <Col>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder={apellidos} disabled />
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Label style={{color: 'black'}}>Celular</Form.Label>
            <Form.Control placeholder={celular}/>
        </Col>
        <Col>
        <Form.Label style={{color: 'black'}}>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" />
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label>Tipo de Documento</Form.Label>
            <Form.Control as="select" placeholder={tipodoc} disabled>
            
            {tipoDoc.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
            
            {/* <option>Large select</option> */}
            </Form.Control>
        </Col>
        <Col>
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control placeholder={documento} disabled/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label style={{color: 'black'}}>Sexo</Form.Label>
            <Form.Control as="select" placeholder={sexo}>
            <option>Masculino</option>
            <option>Femenino</option>
            </Form.Control>
        </Col>
        <Col>
            <Form.Label style={{color: 'black'}}>Ubicación</Form.Label>
            <Form.Control as="select" placeholder={ubicacion} onChange={handleChangeCiud} >

            {ciudades.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
            {/* <option>Lima y Callao</option>
            <option>Andahuaylas</option>
            <option>Arequipa</option>
            <option>Ayacucho</option>
            <option>Cajamarca</option>
            <option>El Pedregal (Majes)</option>
            <option>Huamachuco</option>
            <option>Huancavelica</option>
            <option>Huancayo</option>
            <option>Huanta</option>
            <option>Huánuco</option>
            <option>Pichanaki</option>
            <option>Tingo Maria</option>
            <option>Trujillo</option> */}
            </Form.Control>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Label style={{color: 'black'}}>Dirección</Form.Label>
            <Form.Control placeholder={direccion}/>
        </Col>
    </Row>
</Form>

</div>

: datos === 'cuenta' ?

<div className="col-md-12 col-lg-12 col-sm-12" style={{border: '1px solid #BEBEBE', marginTop: '20px', padding: '20px'}}>
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
                            <Form.Control type={check === false ? "password" : ""} onChange={handleOnchangeClaveAct}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label style={{color: 'black'}}>Contraseña nueva</Form.Label>
                            <Form.Control type={check === false ? "password" : ""} onChange={handleOnchangeClaveNueva} />
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
: null

            }
            
            <button type="button" className="btn btn-outline-danger" style={{width: '50%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '20px'}} 
            onClick={
                datos === 'cuenta' ? 
                ()=>{cambioClave(correoMostrar, claveAct, claveNueva)}
                :
                datos === 'personales' ?
                ()=>{handleClose()}
                : null
                }>Guardar</button>
        </div>
    


        <Modal style={{}} size="lg" show={openModal} onHide={()=>{handleClose()}}>
        <Modal.Header closeButton>
        <Modal.Title>Cambio de Contraseña</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{textAlign: 'center'}}>

        <div className="col-md-12 col-lg-12 col-sm-12" style={{margin: 'auto', marginTop: '20px', padding: '20px', width: '80%'}}>
               
               {cambioPass.success == true ?
               <h3 style={{color: 'green', fontSize: '1.2rem'}}>Se ha realizado su cambio de contraseña con éxito.</h3> 
              :
              <h3 style={{color: 'red', fontSize: '1.2rem'}}>Las credenciales ingresada son incorrectas.</h3> 
              } 
              
              

            </div>

        </Modal.Body> 
               
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {handleClose()}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} 
          onClick={()=>{handleClose()}}>
            {'Aceptar'}
          </Button>
        </Modal.Footer>
      </Modal>



        </React.Fragment>
    )
}

export default EditarUsuario;