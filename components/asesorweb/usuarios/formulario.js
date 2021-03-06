import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
// import ObtenerUsuarios from '../../../context/user/apis'
import Url from '../../url'

import Router from 'next/router';

import { useRouter } from 'next/router';

import PernatContext from '../../../context/user/PernatContext'

const formulario = ({refresh, setRefresh}) => {

  const { usuario, setUsuario } = useContext(PernatContext)

const [ciudades, setCiudades] = useState([])
const [tipoDoc, setTipoDoc] = useState([])
const [ciudadEnv, setCiudadEnv] = useState(0)
const [docEnv, setDocEnv] = useState(0)
const [nombres, setNombres] = useState("")
const [apellidos, setApellidos] = useState("")
const [numDoc, setNumDoc] = useState("")
const [correo, setCorreo] = useState("")
const [celular, setCelular] = useState("")
const [check, setCheck] = useState(false)
const [correoLog, setCorreoLog] = useState("")
const [clave, setClave] = useState("")
const [claveReg, setClaveReg] = useState("")
const [idIfi, setIdIfi] = useState(null)

const ipCreacion = '192.168.8.182'
const usuCreacion = 'ReyGonz'
const publicidad = false;
const responsabilidad = false;
const correoVerif = false;
const celularVerif = false;
const numDocVerif = false;

const [idRol, setIdRol] = useState(0);
const [genero, setGenero] = useState('');
const [fechaNac, setFechaNac] = useState('1990-11-10');

const [error, setError] = useState({})

const [creado, setCreado] = useState({})

const refreshChange = () => {
  setTimeout( () => {
    if (!refresh) {
      setRefresh(true)
  } else {
      setRefresh(false)
  }
}, 1000);
    
}

    const getciudades = async () => {

        let res = await axios.get(`${Url}/ciudad`)
        setCiudades(res.data.data)
                  
      }

    const getTipoDoc = async () => {

        let res = await axios.get(`${Url}/tipodocumento`)
        setTipoDoc(res.data.data)
                  
      }

    const logeo = async (correo, clave) => {

      let userInfo = { correo: correo, clave: clave }
      let res = await axios.post(`${Url}/usuariologin`,userInfo)

      // console.log(res.data)

      if (res.status !== 200) {
        setError(res.data.msg)
    } else {
        //Si todo es ok
        //$("button[type='submit']").before(`<div class="alert alert-success">${result.token}</div>`)
        // console.log(res.data)
      localStorage.setItem('tasaToken', res.data.token)
      localStorage.setItem('tasaID', res.data.usuario.id)
      localStorage.setItem('tasaUsuario', res.data.usuario.nombre)
      localStorage.setItem('tasaApellido', res.data.usuario.apellido)
      localStorage.setItem('tasaCorreo', res.data.usuario.correo)
      localStorage.setItem('tasaRol', res.data.usuario.id_rol)
        //Ejecutamos la actualizacion del navegador para que se vaya al token
          res.data.usuario.id_rol === 3 ? 
          Router.push({
            pathname:'/zonaprivada/beta/dashboard/pernat',
        }) : res.data.usuario.id_rol === 2 ? 
        Router.push({
          pathname:'/zonaprivada/beta/dashboard/ifi',
      }) : res.data.usuario.id_rol === 1 ? 
      Router.push({
        pathname:'/zonaprivada/beta/dashboard/aseweb/usuarios',
    }) : null
        
    }
       

    }

    const registro = async (nombre, apellido, numdoc, celular, clave, correo, tipodoc, idciudad, idRol, correoVerif, numDocVerif, celularVerif, responsabilidad, publicidad, fechaNac, sexo, ipcreacion, usucreacion, idIfi ) => {

      let userInfo = { nombre: nombre, apellido: apellido, numdoc: numdoc, celular: celular, clave: clave, correo: correo, id_tipodocumento: tipodoc, id_ciudad: idciudad, id_rol: idRol, correo_verif: correoVerif, numdoc_verif: numDocVerif, celular_verif: celularVerif, responsabilidad: responsabilidad, publicidad: publicidad, fecha_nac: fechaNac, sexo: sexo, ip_creacion: ipcreacion, usuario_creacion: usucreacion, id_proveedor: idIfi  }
      let res = await axios.post(`${Url}/usuarioback`,userInfo)
      setCreado(res.data)

      // console.log(creado)

      
    }

useEffect(()=> {
    getciudades();
    getTipoDoc();
}, [])


const handleChangeCiud = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setCiudadEnv(event.target.value);
  }

  const handleChangeDoc = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setDocEnv(event.target.value);
  }

  const handleChangeGenero = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setGenero(event.target.value);
  }

  const handleChangeFechaNac = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setFechaNac(event.target.value);
  }

  const handleChangeIdRol = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setIdRol(event.target.value);
  }

  const handleChangeIdIfi = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setIdIfi(event.target.value);
  }

  const handleOnchangeCorreoLog = (e) => {
    if (e.target.value.length) {
      setCorreoLog(e.target.value);
    } else {
      setCorreoLog("");
    }
  };

  const handleOnchangeClave = (e) => {
    if (e.target.value.length) {
      setClave(e.target.value);
    } else {
      setClave("");
    }
  };

  const handleOnchangeNombres = (e) => {
    if (e.target.value.length) {
      setNombres(e.target.value);
    } else {
      setNombres("");
    }
  };

  const handleOnchangeApellidos = (e) => {
    if (e.target.value.length) {
      setApellidos(e.target.value);
    } else {
      setApellidos("");
    }
  };

  const handleOnchangeNumDoc = (e) => {
    if (e.target.value.length) {
      setNumDoc(e.target.value);
    } else {
      setNumDoc("");
    }
  };

  const handleOnchangeCorreo = (e) => {
    if (e.target.value.length) {
      setCorreo(e.target.value);
    } else {
      setCorreo("");
    }
  };

  const handleOnchangeClaveReg = (e) => {
    if (e.target.value.length) {
      setClaveReg(e.target.value);
    } else {
      setClaveReg("");
    }
  };

  const handleOnchangeCelular = (e) => {
    if (e.target.value.length) {
      setCelular(e.target.value);
    } else {
      setCelular("");
    }
  };

  const onCheckboxChange = () => {
     if (!check) {
         setCheck(true)
     } else {
         setCheck(false)
     }
  }

    return (
        <>

        {creado.success === true ?
        <div className="col-md-12 col-sm-12" style={{ backgroundColor: 'white',  height: '200px', padding: 'auto', textAlign: 'center', borderRadius: '10px'}}>
    
            <div className="col-lg-12" style={{ color: 'green',textAlign: 'center', marginTop: '20px', fontSize: '1rem'}}>??Felicidades! Usuario registrado con exito, te hemos enviado un correo electronico con tus datos.</div>
            

        </div>
      
      : creado.success === false ? 
      <div className="col-md-12 col-sm-12" style={{ backgroundColor: 'white',  height: '200px', padding: 'auto', textAlign: 'center', borderRadius: '10px'}}>
    
            <div className="col-lg-12" style={{ color: 'red',textAlign: 'center', marginTop: '20px', fontSize: '1rem'}}>Ha ocurrido un problema con el registro</div>

            <button onClick={()=>{console.log(creado)}}>Ver Error</button>

            <button type="button" className="btn btn-outline-danger" style={{width: '150px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '30px' }} onClick={() => {setCreado({})}}>Volver</button>
        </div>
      : creado.success === undefined ?
  
<React.Fragment>
        {/* Comienzo del formulario de registro */}
        <div className="col-md-12">
    <div className="compare-container container " style={{backgroundColor: 'white', padding: '0px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: '1px solid grey', boxShadow: '2px 2px 2px grey'}}>
<div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '10px', width: '100%', height: '50px', display: 'flex', alignItems: 'center', textAlign: 'center', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Registro de usuario</span></div>
<div className="row" style={{paddingBottom: '30px'}}>
<div className="form-content col-lg-12" style={{textAlign: 'center'}}>
<form method="post" id="compare">
<div className="form-compare row">

<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Nombres:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" id="contact_name" type="text" onChange={handleOnchangeNombres} value={nombres}
placeholder="Nombres*" name="name" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>
</div>


<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Apellidos:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" id="contact_lastname" type="text" onChange={handleOnchangeApellidos} value={apellidos}
placeholder="Apellidos" name="lastname" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>
</div>
<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Tipo de Documento:</span></div>
<div id="geo-container" className="select-container select-input action-select">
<div className="dropdown bootstrap-select required">
<select name="doc" id="doc" value={docEnv} onChange={handleChangeDoc} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">


{tipoDoc.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
{/*                 
<option className="bs-title-option" value="LI">DNI</option>
      
<option value="LI">C. Extranjeria</option>
      
<option value="AM">C. FFAA</option>
      
<option value="AN">C. Polic??a</option>
      
<option value="AP">Pasaporte</option> */}
      
    </select>
    {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
    </div>
</div>
</div>


<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Nro de Documento:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" id="contact_doc" type="text" onChange={handleOnchangeNumDoc} value={numDoc}
placeholder="Documento*" name="doc" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>


</div>
<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Correo:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" id="contact_email" type="email" onChange={handleOnchangeCorreo} value={correo}
placeholder="Correo*" name="email" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>


</div>
<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Celular:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" type="text" name="num_tel1" id="num_tel1" onChange={handleOnchangeCelular} value={celular}
placeholder="Celular*" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>


</div>

<div className="form-item col-lg-6">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Contrase??a:</span></div>
<div className="form-item col-lg-12" style={{textAlign: 'center'}}>
<div className="contact-form">
<div className="section-field">
<input className="require" id="pass" type="text" onChange={handleOnchangeClaveReg} value={claveReg}
placeholder="Contrase??a*" name="pass" required style={{ borderColor: '#e01e2b', height: '40px'}}
// onChange={(event)=>this.inputChangedHandler(event)}
/>
</div>
</div>

</div>
</div>

<div className="form-item col-lg-6" style={{marginBottom: '10px'}}>
<div className="label" style={{marginBottom: '10px', marginTop: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Ubicaci??n:</span></div>
<div id="geo-container" className="select-container select-input action-select">
<div className="dropdown bootstrap-select required">

<select name="ubi" id="ubi" value={ciudadEnv} onChange={handleChangeCiud} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">

{ciudades.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}

{/* <option className="bs-title-option" value="LI">Lima y Callao</option>
      
<option value="LI">Lima y Callao</option>
      
<option value="AM">Amazonas</option>
      
<option value="AN">Ancash</option>
      
<option value="AP">Apur??mac</option>
      
<option value="AR">Arequipa</option>
      
<option value="AY">Ayacucho</option>
      
<option value="CA">Cajamarca</option>
      
<option value="CU">Cusco</option>
      
<option value="HV">Huancavelica</option>
      
<option value="HU">Hu??nuco</option>
      
<option value="IC">Ica</option>
      
<option value="JU">Jun??n</option>
      
<option value="LL">La Libertad</option>
      
<option value="LA">Lambayeque</option>
      
<option value="LO">Loreto</option>
      
<option value="MD">Madre de Dios</option>
      
<option value="MO">Moquegua</option>
      
<option value="PA">Pasco</option>
      
<option value="PI">Piura</option>
      
<option value="PU">Puno</option>
      
<option value="SM">San Mart??n</option>
      
<option value="TA">Tacna</option>
      
<option value="TU">Tumbes</option>
      
<option value="UC">Ucayali</option> */}
    </select>
    {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
    </div>
</div>
</div>

<div className="form-item col-lg-4">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>G??nero:</span></div>
<div className="select-container select-input action-select">
<div className="dropdown bootstrap-select required">
<select name="doc" value={genero} onChange={handleChangeGenero} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">



<option value={'Masculino'}>Masculino</option>
<option value={'Femenino'}>Femenino</option>

{/*                 
<option className="bs-title-option" value="LI">DNI</option>
      
<option value="LI">C. Extranjeria</option>
      
<option value="AM">C. FFAA</option>
      
<option value="AN">C. Polic??a</option>
      
<option value="AP">Pasaporte</option> */}
      
    </select>
    {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
    </div>
</div>
</div>

<div className="form-item col-lg-4">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Tipo de Usuario:</span></div>
<div  className="select-container select-input action-select">
<div className="dropdown bootstrap-select required">
<select name="doc" value={idRol} onChange={handleChangeIdRol} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">



<option value={1}>Asesor TasaTop</option>
<option value={2}>Asesor IFI</option>
<option value={3}>Persona Natural</option>

{/*                 
<option className="bs-title-option" value="LI">DNI</option>
      
<option value="LI">C. Extranjeria</option>
      
<option value="AM">C. FFAA</option>
      
<option value="AN">C. Polic??a</option>
      
<option value="AP">Pasaporte</option> */}
      
    </select>
    {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
    </div>
</div>
</div>

<div className="form-item col-lg-4">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Fecha de Nacimiento:</span></div>
<input type="date" value={fechaNac} style={{ borderColor: '#e01e2b', height: '40px', color: '#e01e2b'}}/>
</div>

<div className="form-item col-lg-4">
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem', fontWeight: '600'}}>Instituci??n Financiera:</span></div>
<div  className="select-container select-input action-select">
<div className="dropdown bootstrap-select required">
<select name="ifi" value={idIfi} onChange={handleChangeIdIfi} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">



<option value={1}>Asesor TasaTop</option>
<option value={2}>Asesor IFI</option>
<option value={3}>Persona Natural</option>

{/*                 
<option className="bs-title-option" value="LI">DNI</option>
      
<option value="LI">C. Extranjeria</option>
      
<option value="AM">C. FFAA</option>
      
<option value="AN">C. Polic??a</option>
      
<option value="AP">Pasaporte</option> */}
      
    </select>
    {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
    </div>
</div>
</div>




<button type="button" className="btn btn-outline-danger" style={{width: '150px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '30px' }} onClick={() =>{registro(nombres, apellidos, numDoc, celular, claveReg, correo, docEnv, ciudadEnv, idRol, correoVerif, numDocVerif, celularVerif, responsabilidad, publicidad, fechaNac, genero, ipCreacion, usuCreacion, idIfi), refreshChange()}}>Registrar</button>




</div>
</form>
</div>
</div>
</div>
    </div>
    {/* Final del formulario de registro */}
    </React.Fragment>
: null
}

                  
        </>
    )
}



export default formulario;