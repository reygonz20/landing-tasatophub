import React, { Fragment, useState, useEffect } from 'react';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Modal, Button, Tooltip, OverlayTrigger, Popover, Form, InputGroup, Row, Col, Spinner } from 'react-bootstrap';

import { VscArrowSmallUp, VscArrowSmallDown  } from "react-icons/vsc";
//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------

import moment from 'moment'
import { FaExternalLinkAlt, FaTimes  } from "react-icons/fa";
import axios from 'axios'


import Url from '../../url'

import dataPerdidas from './perdidas';

import DetallePorAperturar from './detalleUsuario'
import DetalleAperturadas from './detalleAperturadas'

import './index.css'


const SubastasIfi = ({mobile}) => {

    const [tab, setTab] = useState('1');
    const [detalleFila, setDetalleFila] = useState(false);
    const [selectedRow, setSelectedRow] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const [operaciones, setOperaciones] = useState([]);

    const [loading, setLoading] = useState(false);

  const situacionAperturada = 5;
  const situacionARechazar = 3;

    //---------------cosas de Modal de Aperturar
    const [monto, setMonto] = useState(25000)
    const [montoReal, setMontoReal] = useState(0)
  const [plazo, setPlazo] = useState(183)
  const [plazoReal, setPlazoReal] = useState(0)
  const [moneda, setMoneda] = useState('S/')
  const [tasa, setTasa] = useState();
  const [tasaReal, setTasaReal] = useState();
  const [fechaApertura, setFechaApertura] = useState();
  const [codigoProducto, setCodigoProducto] = useState('')
  const [modalResume, setModalResume] = useState('')
  const [motivo, setMotivo] = useState('');
  const [opSelected, setOpSelected] = useState(0);
  const usuLog = localStorage.getItem("tasaID")
  const [modificado, setModificado] = useState([]);


  //----------------para el sort -------------
  const [orden, setOrden] = useState('asc');
  const [fechaSort, setFechaSort] = useState(false);
  const [montoSort, setMontoSort] = useState(false);
  const [plazoSort, setPlazoSort] = useState(false);
  const [numdocSort, setNumdocSort] = useState(false);
  const [codigoSort, setCodigoSort] = useState(false);
  const [ciudadSort, setCiudadSort] = useState(false);
  const [tasaSort, setTasaSort] = useState(false);
  //-------------------------------------------------

  const concretadoInstitucion = true;
  const concretadoPorInstitucion = `${localStorage.getItem('tasaUsuario')} ${localStorage.getItem('tasaApellido')}`;


  const getOperaciones = async () => {

    loading === false ? setLoading(true) : null
    let res = await axios.get(`${Url}/inversion`)
    setOperaciones(res.data.data)
    // console.log(res.data.data)
    setLoading(false);
}

const deleteOperacion = async (id, usuModificacion, ip) => {

  let userInfo = { usuario_modificacion: usuModificacion, ip_modificacion: ip }
  let res = await axios.delete(`${Url}/inversion/${id}`, {data: userInfo})
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}

const aperturarOperacion = async (id, usulog, monto, plazo, tasa, fechaApertura, situacion, concretadoInstitucion, concretadoPorInstitucion) => {

  let userInfo = { id_usuario_logueado: usulog, monto_real: monto, plazo_nominal: plazo, tasa_real: tasa, fecha_concretado_institucion: fechaApertura, id_situacion: situacion, concretado_institucion: concretadoInstitucion, concretado_por_institucion: concretadoPorInstitucion }
  let res = await axios.put(`${Url}/inversion/${id}`, userInfo)
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}

const enviarRechazarOp = async (id, usulog, situacion) => {

  let userInfo = { id_usuario_logueado: usulog, id_situacion: situacion }
  let res = await axios.put(`${Url}/inversion/${id}`, userInfo)
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}


useEffect(() => {
  getOperaciones()


}, []);



  const handleMonto = (value) => {
    setMonto(value);
  };

  const handlePlazo = (value) => {
    setPlazo(value);
  };

  const handleOnchange = (e) => {
    if (e.target.value.length) {
      setMonto(e.target.value);
    } else {
      setMonto(0);
    }
  };

  const handleOnchangeTasa = (e) => {
    if (e.target.value.length) {
      setTasa(e.target.value);
    } else {
      setTasa();
    }
  };

  const handleOnchangeMotivo = (e) => {
    if (e.target.value.length) {
      setMotivo(e.target.value);
    } else {
      setMotivo('');
    }
  };

  const handleOnchangeFecha = (e) => {
    if (e.target.value.length) {
      setFechaApertura(e.target.value);
    } else {
      setFechaApertura();
    }
  };

  const handleOnchangePlazo = (e) => {
    if (e.target.value.length) {
      setPlazo(e.target.value);
    } else {
      setPlazo(0);
    }
  };



    //-----------------------------------


    
  const handleOpen = () => {
    setOpenModal(true)
}
const handleClose = () => {
    setOpenModal(false)
}

  
const porAperturar = operaciones.filter(item => item.id_situacion == 2 && item.proveedor_inversion.id == localStorage.getItem('tasaIdProveedor') && item.estado >= 1)

const aperturadasBd = operaciones.filter(item => item.id_situacion == 5 && item.proveedor_inversion.id == localStorage.getItem('tasaIdProveedor') && item.estado >= 1)

const enviadasRechazarBd = operaciones.filter(item => item.id_situacion == 3 && item.proveedor_inversion.id == localStorage.getItem('tasaIdProveedor') && item.estado >= 1)

const rechazadasBd = operaciones.filter(item => item.id_situacion == 4 && item.proveedor_inversion.id == localStorage.getItem('tasaIdProveedor') && item.estado >= 1)

const facturadasBd = operaciones.filter(item => item.id_situacion == 6 && item.proveedor_inversion.id == localStorage.getItem('tasaIdProveedor') && item.estado >= 1)

const dataSelectedRow = tab === '1' ? porAperturar.filter(item => item.id === selectedRow) : tab === '2' ? aperturadasBd.filter(item => item.id === selectedRow) : tab === '3' ? enviadasRechazarBd.filter(item => item.id === selectedRow) : tab === '4' ? rechazadasBd.filter(item => item.id === selectedRow) : tab === '5' ? facturadasBd.filter(item => item.id === selectedRow) : null 

const totalPorAperturar = Intl.NumberFormat("en-US").format(porAperturar.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0))
const totalAperturadas = Intl.NumberFormat("en-US").format(aperturadasBd.reduce((sum, value) => (typeof parseFloat(value.monto_real) == "number" ? sum + parseFloat(value.monto_real) : sum), 0)) 
const totalEnviadasRechazar = Intl.NumberFormat("en-US").format(enviadasRechazarBd.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0)) 
const totalRechazadas = Intl.NumberFormat("en-US").format(rechazadasBd.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0)) 
const totalFacturadas = Intl.NumberFormat("en-US").format(facturadasBd.reduce((sum, value) => (typeof parseFloat(value.monto_real) == "number" ? sum + parseFloat(value.monto_real) : sum), 0)) 

// console.log(totalPorAperturar, totalAperturadas, totalEnviadasRechazar, totalRechazadas, totalFacturadas)

const changeOrden = () => {
  orden === "asc" ? setOrden("desc") : setOrden("asc")
}

const porAperturarOrder = 

  orden === 'asc' && fechaSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.fecha_creacion > o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion < o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.plazo_nominal > o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal < o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && numdocSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && ciudadSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && ciudadSort === true ?
  porAperturar.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })   
  : porAperturar.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

  

  const porRechazarOrder = 

  orden === 'asc' && fechaSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.fecha_creacion > o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion < o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.plazo_nominal > o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal < o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && numdocSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && ciudadSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && ciudadSort === true ?
  enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })   
  : enviadasRechazarBd.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

  const rechazadasOrder = 

  orden === 'asc' && fechaSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.fecha_creacion > o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion < o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal > o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal < o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && numdocSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && ciudadSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && ciudadSort === true ?
  rechazadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })   
  : rechazadasBd.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

  const aperturadasOrder = 

  orden === 'asc' && fechaSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.fecha_concretado_institucion < o2.fecha_concretado_institucion){
      return -1;
    } else if (o1.fecha_concretado_institucion > o2.fecha_concretado_institucion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.fecha_concretado_institucion > o2.fecha_concretado_institucion){
      return -1;
    } else if (o1.fecha_concretado_institucion < o2.fecha_concretado_institucion) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.monto_real < o2.monto_real){
      return -1;
    } else if (o1.monto_real > o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.monto_real > o2.monto_real){
      return -1;
    } else if (o1.monto_real < o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal > o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal < o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && numdocSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && ciudadSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && ciudadSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  :orden === 'asc' && tasaSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.tasa_real < o2.tasa_real){
      return -1;
    } else if (o1.tasa_real > o2.tasa_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && tasaSort === true ?
  aperturadasBd.sort((o1, o2)=>{
    if (o1.tasa_real > o2.tasa_real){
      return -1;
    } else if (o1.tasa_real < o2.tasa_real) {
      return 1;
    } else {
      return 0;
    }
  })   
  : aperturadasBd.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

  const facturadasOrder = 

  orden === 'asc' && fechaSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.fecha_creacion > o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion < o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.monto_real < o2.monto_real){
      return -1;
    } else if (o1.monto_real > o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.monto_real > o2.monto_real){
      return -1;
    } else if (o1.monto_real < o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.plazo_nominal > o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal < o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && numdocSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && ciudadSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && ciudadSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.ciudad_inversion.nombre > o2.ciudad_inversion.nombre){
      return -1;
    } else if (o1.ciudad_inversion.nombre < o2.ciudad_inversion.nombre) {
      return 1;
    } else {
      return 0;
    }
  })   
  :orden === 'asc' && tasaSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.tasa_real < o2.tasa_real){
      return -1;
    } else if (o1.tasa_real > o2.tasa_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && tasaSort === true ?
  facturadasBd.sort((o1, o2)=>{
    if (o1.tasa_real > o2.tasa_real){
      return -1;
    } else if (o1.tasa_real < o2.tasa_real) {
      return 1;
    } else {
      return 0;
    }
  })   
  : facturadasBd.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

    const popover = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Aperturar simulación
        </Popover.Content>
      </Popover>
    );
    
    const popover2 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Enviar a rechazar
        </Popover.Content>
      </Popover>
    );

    const popover3 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Monto final
        </Popover.Content>
      </Popover>
    );

    const popover4 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Monto inicial
        </Popover.Content>
      </Popover>
    );
    const popover5 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Plazo final
        </Popover.Content>
      </Popover>
    );

    const popover6 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Plazo inicial
        </Popover.Content>
      </Popover>
    );
    const popover7 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Tasa final
        </Popover.Content>
      </Popover>
    );

    const popover8 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Tasa inicial
        </Popover.Content>
      </Popover>
    );
    
      const dataPorAperturar = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setCiudadSort(false), setTasaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false),setCiudadSort(false), setTasaSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'inicio',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(false), setTasaSort(false), setCiudadSort(true), changeOrden()}}>Ubicación <VscArrowSmallUp style={orden === "asc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'ubicacion',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setTasaSort(false), setCiudadSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'docNumero',
            sort: 'asc',
            width: 150
          },
          {
            label: '',
            field: 'opciones',
            sort: 'asc',
            width: 150
          }
        ],
        rows: porAperturar.map((item, i) => {
    
          return {  
              id:item.id,        
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
              plazo: `${item.plazo_nominal} días`,
              inicio: item.fecha_creacion
              // moment(item.inicio).format('DD/MM/YYYY')
              ,
              ubicacion: item.ciudad_inversion.nombre,
              docNumero: item.numdoc_titular,
              opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
                      
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaExternalLinkAlt style={{width: '25px', marginLeft: '20px', marginRight: '10px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setMonto(item.monto_nominal),
                setPlazo(item.plazo_nominal),
                setTasa(item.tasa_nominal),
                setCodigoProducto(item.codigo),
                setModalResume('aperturar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setOpSelected(item.id),
              setModalResume('cancelar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger>
              
              </div>,
              clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
          }
        })
      };

      const dataAperturadas = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setCiudadSort(false), setTasaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false),setCiudadSort(false), setTasaSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setFechaSort(true), changeOrden()}}>Fecha de apertura <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'inicio',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(false), setTasaSort(false), setCiudadSort(true), changeOrden()}}>Ubicación <VscArrowSmallUp style={orden === "asc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'ubicacion',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setCiudadSort(false), setNumdocSort(true), setTasaSort(true), changeOrden()}}>Tasa <VscArrowSmallUp style={orden === "asc" && tasaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && tasaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'tasa',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setTasaSort(false), setCiudadSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'docNumero',
            sort: 'asc',
            width: 150
          },
        ],
        rows: aperturadasBd.map((item, i) => {
    
            const tasa = <div style={{textAlign: 'center'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover7}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.tasa_real} %`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover8}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.tasa_nominal} %`}</p></OverlayTrigger></div>
            const monto = <div style={{textAlign: 'right'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.monto_real)}`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`}</p></OverlayTrigger></div>
            const plazo = <div style={{textAlign: 'right'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.plazo_nominal} días`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover6}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.plazo_nominal} días`}</p></OverlayTrigger></div>
    
    
            
          return {
              id: item.id,
              numero: i + 1,
              codigo: item.codigo,
              monto: monto
              ,
              plazo: plazo
              ,
              inicio: item.fecha_creacion
              // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
              ,
              ubicacion: item.ciudad_inversion.nombre,
              tasa: tasa
              ,
              docNumero: item.numdoc_titular,
              clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
          }
        })
      };

      const dataEnviadasRechazar = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setCiudadSort(false), setTasaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false),setCiudadSort(false), setTasaSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'inicio',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(false), setTasaSort(false), setCiudadSort(true), changeOrden()}}>Ubicación <VscArrowSmallUp style={orden === "asc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'ubicacion',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setTasaSort(false), setCiudadSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'docNumero',
            sort: 'asc',
            width: 150
          }
        ],
        rows: enviadasRechazarBd.map((item, i) => {
    
          return {   
              id: item.id,       
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
              plazo: `${item.plazo_nominal} días`,
              inicio: item.fecha_creacion
              // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
              ,
              ubicacion: item.ciudad_inversion.nombre,
              docNumero: item.numdoc_titular,
              clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
              
          }
        })
      };

      const dataRechazadas = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setCiudadSort(false), setTasaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false),setCiudadSort(false), setTasaSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'inicio',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(false), setTasaSort(false), setCiudadSort(true), changeOrden()}}>Ubicación <VscArrowSmallUp style={orden === "asc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'ubicacion',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setTasaSort(false), setCiudadSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'docNumero',
            sort: 'asc',
            width: 150
          },
        ],
        rows: rechazadasBd.map((item, i) => {
    
          return { 
              id: item.id,                 
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
              plazo: `${item.plazo_nominal} días`,
              inicio: item.fecha_creacion
              // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
              ,
              ubicacion: item.ciudad_inversion.nombre,
              docNumero: item.numdoc_titular,
              clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
          }
        })
      };

      const dataFacturadas = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setCiudadSort(false), setTasaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false),setCiudadSort(false), setTasaSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setFechaSort(true), changeOrden()}}>Fecha de facturación <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'inicio',
            sort: 'asc',
            width: 150
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(false), setTasaSort(false), setCiudadSort(true), changeOrden()}}>Ubicación <VscArrowSmallUp style={orden === "asc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && ciudadSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'ubicacion',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setCiudadSort(false), setNumdocSort(true), setTasaSort(true), changeOrden()}}>Tasa <VscArrowSmallUp style={orden === "asc" && tasaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && tasaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'tasa',
            sort: 'asc',
            width: 100
          },
          {
            label: <div className="col-lg-12" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setTasaSort(false), setCiudadSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
            field: 'docNumero',
            sort: 'asc',
            width: 150
          },
        ],
        rows: facturadasBd.map((item, i) => {
    
            // const tasa = <div style={{textAlign: 'center'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover7}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.datosProducto.tasafinal} %`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover8}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.datosProducto.tasa} %`}</p></OverlayTrigger></div>
            // const monto = <div style={{textAlign: 'right'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.montofinal)}`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`}</p></OverlayTrigger></div>
            // const plazo = <div style={{textAlign: 'right'}}><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.datosProducto.plazofinal} días`}</p></OverlayTrigger><OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover6}><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.datosProducto.plazo} días`}</p></OverlayTrigger></div>
    
    
            
          return {
              id: item.id,
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_real)}`
              // monto
              ,
              plazo: `${item.plazo_nominal} días`
              // plazo
              ,
              inicio: item.fecha_creacion
              // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
              ,
              ubicacion: item.ciudad_inversion.nombre,
              tasa: `${item.tasa_nominal} %`
              // tasa
              ,
              docNumero: item.numdoc_titular,
              clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
          }
        })
      };

    return (
        <React.Fragment>           
       <div className="row">
           <div className="col-md-3" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Depósito a Plazo Fijo - Persona</h4></div>
           <div className="col-md-2" style={{marginLeft: '40px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Soles:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>          {tab === '1' ? totalPorAperturar : tab === "2" ? totalAperturadas : tab === "3" ? totalEnviadasRechazar : tab ==="4" ? totalRechazadas : tab === "5" ? totalFacturadas : null}           </span></div>
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Dólares:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>0.00</span></div>

       </div>

    <div style={{padding: '20px', marginTop: '20px'}}>
    { detalleFila === true && (tab === '1' || tab === '3' || tab === '4') && openModal === false ? 
    
    <DetallePorAperturar dataSelectedRow={dataSelectedRow} selectedRow={selectedRow} setSelectedRow={setSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile} />
    : detalleFila === true && (tab === '2' || tab === '5' ) && openModal === false ?
    <DetalleAperturadas dataSelectedRow={dataSelectedRow} selectedRow={selectedRow} setSelectedRow={setSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile}s />
   
    :
       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => {setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCiudadSort(false), setTasaSort(false), setCodigoSort(false), setTab(t)}}
    >
      <Tab eventKey="1" title="Por Aperturar">
      {!dataPorAperturar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
   {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
order={['monto', 'asc']}
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataPorAperturar}
    
/>
}
</div>
}
      </Tab>
      <Tab eventKey="2" title="Aperturadas">
        {!dataAperturadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
           {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataAperturadas}
    
/>
}
</div>
}
      </Tab>
      <Tab eventKey="3" title="Enviadas a Rechazar">
      {!dataEnviadasRechazar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
           {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataEnviadasRechazar}
    
/>
}
</div>
}
      </Tab>
      
      <Tab eventKey="4" title="Rechazadas">
      {!dataRechazadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
           {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataRechazadas}
    
/>
}
</div>
}
      </Tab>
      <Tab eventKey="5" title="Facturadas">
      {!dataPerdidas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
           {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataFacturadas}
    
/>
}
</div>
}
      </Tab>
    </Tabs>
}
    </div>



    <Modal style={modalResume === 'aperturar' ? {} : {marginTop: '10%'}} size="lg" show={openModal} onHide={()=>{setDetalleFila(false), handleClose()}}>
        <Modal.Header closeButton>
        {modalResume === 'cancelar' ?
         <Modal.Title>Rechazar operación</Modal.Title>
         : modalResume === 'aperturar' ? 
         <Modal.Title>Aperturar operación</Modal.Title>
         : null
      }

  
        </Modal.Header>

        {modalResume === 'aperturar' ? 
        
        <Modal.Body style={{textAlign: 'center'}}>

          <p>¿Confirma que el cliente depositó el dinero, referente a la operación <strong>{codigoProducto}</strong>, con la información que a continuación se presenta?</p>
            
      
        <div className="form-compare row" style={{paddingLeft: '25%', paddingRight: '25%'}}>
          
          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto final:</span></div>
            <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center', border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <span type="text" style={{color: '#e01e2b', marginLeft: '15%'}}>{moneda}</span>
              <input type="text" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'left', width: '80px'}} />
            </div>
            <div>
            <Slider
                                    min={1000}
                                    max={250000}
                                    step={1000}
                                    value={monto}
                                    onChange={handleMonto}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '100%'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo final:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="text" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '50px'}}/>
            <span type="text" style={{color: '#e01e2b'}}>dias</span>
            </div>
            <div>
            <Slider
                                    min={0}
                                    max={1460}
                                    step={30}
                                    value={plazo}
                                    onChange={handlePlazo}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '100%'}}
                                  />
              {/* <input type="range" min="30" max="1800" value="360" step="30" class="slider" id="daysRange" /> */}
            </div>
          </div>

          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tasa final:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="text" name="days" onChange={handleOnchangeTasa} value={tasa} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '100%'}}/>
            </div>
          </div>

          <div className="form-item col-lg-12">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Fecha de apertura:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="date" onChange={handleOnchangeFecha} value={fechaApertura} style={{border: '0px none white', color: '#e01e2b'}} />
            </div>
            {/* <button onClick={()=>{console.log(fechaApertura)}}></button> */}
          </div>

         
          
          
        </div>
  

        </Modal.Body>

        : modalResume === 'cancelar' ?

        <Modal.Body style={{}}>

          <p>¿Está seguro de enviar a rechazar la operación <strong>{codigoProducto}</strong>?</p>
           
                          

          <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
            <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Ingresa el motivo:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
            <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
            </div>
          </div>

  

        </Modal.Body>

        : null    
      
      
      }
        

        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {setDetalleFila(false), setOpenModal(false)}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} onClick={modalResume === "aperturar" ? ()=>{aperturarOperacion(opSelected, usuLog, monto, plazo, tasa, fechaApertura, situacionAperturada, concretadoInstitucion, concretadoPorInstitucion), setDetalleFila(false), handleClose()} : ()=>{enviarRechazarOp(opSelected, usuLog, situacionARechazar), setDetalleFila(false), handleClose()} }>
           {modalResume === 'aperturar' ? 'Guardar' : 'Aceptar'} 
          </Button>
        </Modal.Footer>
      </Modal>

         
        </React.Fragment>
    )
}

export default SubastasIfi;