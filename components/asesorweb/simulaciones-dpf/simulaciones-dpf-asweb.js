import React, { Fragment, useState, useEffect } from 'react';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Modal, Button, Tooltip, OverlayTrigger, Popover, Form, InputGroup, Row, Col, Spinner } from 'react-bootstrap';
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit, FaTelegramPlane, FaInfo, FaCheck  } from "react-icons/fa";
import axios from 'axios'
import Url from '../../url'
import { VscArrowSmallUp, VscArrowSmallDown  } from "react-icons/vsc";

import moment from 'moment'

//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------


import Detalle from './detalleUsuario';
import Detalle2 from './detalleUsuario2';


import './subastas-asweb.css'


const BodySubastasAsweb = ({mobile}) => {

    const [tab, setTab] = useState('1');
    const [detalleFila, setDetalleFila] = useState(false);
    const [selectedRow, setSelectedRow] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const [loading, setLoading] = useState(false);


    //---------------cosas de Modal de Aperturar
    const [monto, setMonto] = useState(25000)
  const [plazo, setPlazo] = useState(183)
  const [moneda, setMoneda] = useState('S/')
  const [tasa, setTasa] = useState();
  const [fechaApertura, setFechaApertura] = useState();
  const [codigoProducto, setCodigoProducto] = useState('')
  const [modalResume, setModalResume] = useState('')
  const [motivo, setMotivo] = useState('');
  const [check, setCheck] = useState(false)
  const [numDoc, setNumDoc] = useState('')
  const [operaciones, setOperaciones] = useState([]);

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
  //-------------------------------------------------


  const situacionAperturada = 5;
  const situacionRechazada = 4;
  const situacionValidar = 2;
  const situacionFacturada = 6;

  const concretadoAdmin = true;
  const concretadoPorAdmin = `${localStorage.getItem('tasaUsuario')} ${localStorage.getItem('tasaApellido')}`;

  const getOperaciones = async () => {

    loading === false ? setLoading(true) : null
    let res = await axios.get(`${Url}/inversion`)
    setOperaciones(res.data.data)
    // console.log(res.data.data)
    setLoading(false);
}


const aperturarOperacion = async (id, usulog, monto, plazo, tasa, fechaApertura, situacion, concretadoAdmin, concretadoPorAdmin) => {

  setLoading(true)
  let userInfo = { id_usuario_logueado: usulog, monto_real: monto, plazo_nominal: plazo, tasa_real: tasa, fecha_concretado_admin: fechaApertura, id_situacion: situacion, concretado_admin: concretadoAdmin, concretado_por_admin: concretadoPorAdmin }
  let res = await axios.put(`${Url}/inversion/${id}`, userInfo)
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}

const rechazarOp = async (id, usulog, situacion) => {

  setLoading(true)
  let userInfo = { id_usuario_logueado: usulog, id_situacion: situacion }
  let res = await axios.put(`${Url}/inversion/${id}`, userInfo)
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}

const validarOp = async (id, usulog, situacion) => {

  setLoading(true)
  let userInfo = { id_usuario_logueado: usulog, id_situacion: situacion }
  let res = await axios.put(`${Url}/inversion/${id}`, userInfo)
  setModificado(res.data)
  getOperaciones()
  // window.location.reload()
  // console.log(res.data)

  // let userInfo = { correo: correo, clave: clave }
  // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}

const facturarOp = async (id, usulog, situacion) => {

  setLoading(true)
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

  const onCheckboxChange = () => {
    if (!check) {
        setCheck(true)
    } else {
        setCheck(false)
        setNumDoc('')
    }
 }

 const handleOnchangeNumDoc = (e) => {
  if (e.target.value.length) {
    setNumDoc(e.target.value);
  } else {
    setNumDoc(0);
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


const popover = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Editar Simulación
    </Popover.Content>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Aperturar Simulación
    </Popover.Content>
  </Popover>
);

const popover3 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Validar Simulación
    </Popover.Content>
  </Popover>
);

const popover4 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Rechazar Simulación
    </Popover.Content>
  </Popover>
);

const popover5 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Facturar Simulación
    </Popover.Content>
  </Popover>
);

const dataSelectedRow = operaciones.filter(item => item.id === selectedRow);

const pendientes = operaciones.filter(item => item.id_situacion == 1);

const porAperturarBD = operaciones.filter(item => item.id_situacion == 2);

const porRechazarBD = operaciones.filter(item => item.id_situacion == 3);

const rechazadasBD = operaciones.filter(item => item.id_situacion == 4);

const aperturadasBD =operaciones.filter(item => item.id_situacion == 5);

const facturadasBD = operaciones.filter(item => item.id_situacion == 6);

const totalPorValidar = Intl.NumberFormat("en-US").format(pendientes.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0)) 
const totalPorAperturar = Intl.NumberFormat("en-US").format(porAperturarBD.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0))
const totalAperturadas = Intl.NumberFormat("en-US").format(aperturadasBD.reduce((sum, value) => (typeof parseFloat(value.monto_real) == "number" ? sum + parseFloat(value.monto_real) : sum), 0)) 
const totalPorRechazar = Intl.NumberFormat("en-US").format(porRechazarBD.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0)) 
const totalRechazadas = Intl.NumberFormat("en-US").format(rechazadasBD.reduce((sum, value) => (typeof parseFloat(value.monto_nominal) == "number" ? sum + parseFloat(value.monto_nominal) : sum), 0)) 
const totalFacturadas = Intl.NumberFormat("en-US").format(facturadasBD.reduce((sum, value) => (typeof parseFloat(value.monto_real) == "number" ? sum + parseFloat(value.monto_real) : sum), 0)) 


const changeOrden = () => {
  orden === "asc" ? setOrden("desc") : setOrden("asc")
}

const porValidarOrder = 

  orden === 'asc' && fechaSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  pendientes.sort((o1, o2)=>{
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
  pendientes.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  pendientes.sort((o1, o2)=>{
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
  pendientes.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  pendientes.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : pendientes.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });

  const porAperturarOrder = 

  orden === 'asc' && fechaSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  porAperturarBD.sort((o1, o2)=>{
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
  porAperturarBD.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  porAperturarBD.sort((o1, o2)=>{
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
  porAperturarBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  porAperturarBD.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : porAperturarBD.sort((o1, o2)=>{
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
  porRechazarBD.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  porRechazarBD.sort((o1, o2)=>{
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
  porRechazarBD.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  porRechazarBD.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  porRechazarBD.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  porRechazarBD.sort((o1, o2)=>{
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
  porRechazarBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  porRechazarBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  porRechazarBD.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  porRechazarBD.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : porRechazarBD.sort((o1, o2)=>{
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
  rechazadasBD.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  rechazadasBD.sort((o1, o2)=>{
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
  rechazadasBD.sort((o1, o2)=>{
    if (o1.monto_nominal < o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal > o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  rechazadasBD.sort((o1, o2)=>{
    if (o1.monto_nominal > o2.monto_nominal){
      return -1;
    } else if (o1.monto_nominal < o2.monto_nominal) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  rechazadasBD.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  rechazadasBD.sort((o1, o2)=>{
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
  rechazadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  rechazadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  rechazadasBD.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  rechazadasBD.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : rechazadasBD.sort((o1, o2)=>{
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
  aperturadasBD.sort((o1, o2)=>{
    if (o1.fecha_concretado_admin < o2.fecha_concretado_admin){
      return -1;
    } else if (o1.fecha_concretado_admin > o2.fecha_concretado_admin) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.fecha_concretado_admin > o2.fecha_concretado_admin){
      return -1;
    } else if (o1.fecha_concretado_admin < o2.fecha_concretado_admin) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :
  orden === 'asc' && montoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.monto_real < o2.monto_real){
      return -1;
    } else if (o1.monto_real > o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.monto_real > o2.monto_real){
      return -1;
    } else if (o1.monto_real < o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
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
  aperturadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  aperturadasBD.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : aperturadasBD.sort((o1, o2)=>{
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
  facturadasBD.sort((o1, o2)=>{
    if (o1.fecha_creacion < o2.fecha_creacion){
      return -1;
    } else if (o1.fecha_creacion > o2.fecha_creacion) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && fechaSort === true ?
  facturadasBD.sort((o1, o2)=>{
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
  facturadasBD.sort((o1, o2)=>{
    if (o1.monto_real < o2.monto_real){
      return -1;
    } else if (o1.monto_real > o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && montoSort === true ?
  facturadasBD.sort((o1, o2)=>{
    if (o1.monto_real > o2.monto_real){
      return -1;
    } else if (o1.monto_real < o2.monto_real) {
      return 1;
    } else {
      return 0;
    }
  }) 
  : orden === 'asc' && plazoSort === true ?
  facturadasBD.sort((o1, o2)=>{
    if (o1.plazo_nominal < o2.plazo_nominal){
      return -1;
    } else if (o1.plazo_nominal > o2.plazo_nominal) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && plazoSort === true ?
  facturadasBD.sort((o1, o2)=>{
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
  facturadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && numdocSort === true ?
  facturadasBD.sort((o1, o2)=>{
    if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
      return -1;
    } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
      return 1;
    } else {
      return 0;
    }
  }) 
  :orden === 'asc' && codigoSort === true ?
  facturadasBD.sort((o1, o2)=>{
    if (o1.codigo < o2.codigo){
      return -1;
    } else if (o1.codigo > o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  })
  : orden === 'desc' && codigoSort === true ?
  facturadasBD.sort((o1, o2)=>{
    if (o1.codigo > o2.codigo){
      return -1;
    } else if (o1.codigo < o2.codigo) {
      return 1;
    } else {
      return 0;
    }
  }) 
  
  : facturadasBD.sort((o1, o2)=>{
    if (o1.fecha_modificacion > o2.fecha_modificacion){
      return -1;
    } else if (o1.fecha_modificacion < o2.fecha_modificacion) {
      return 1;
    } else {
      return 0;
    }
  });






const dataPorValidar = {
  columns: [
    {
      label: '#',
      field: 'numero',
      sort: 'asc',
      width: 150
    },
    {
      label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
      field: 'codigo',
      sort: 'asc',
      width: 270
    },
    {
      label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
      field: 'monto',
      sort: 'asc',
      width: 200,
    },
    {
      label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
      field: 'plazo',
      sort: 'asc',
      width: 100
    },
    {
      label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
      field: 'registro',
      sort: 'asc',
      width: 150
    },
    {
      label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
      field: 'docNumero',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Celular',
      field: 'celular',
      sort: 'asc',
      width: 150
    },
      {
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows:
    porValidarOrder.map((item, i) => {

      return {   
          id:item.id,       
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            

            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaRegEdit style={{width: '25px', marginLeft: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setMonto(item.monto_nominal),
                setPlazo(item.plazo_nominal),
                setTasa(item.tasa_nominal),
                setCodigoProducto(item.codigo),
                setModalResume('editar'),
              setOpenModal(true)}} />
              </OverlayTrigger>

              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setOpSelected(item.id),
              setCodigoProducto(item.codigo),
              setModalResume('cancelar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              </div>,


          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
        }
    })
  };

  const dataPorAperturar = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'docNumero',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Celular',
        field: 'celular',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: porAperturarOrder.map((item, i) => {

      return {    
          id: item.id,      
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
              <FaTelegramPlane style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setOpSelected(item.id),
              setMonto(item.monto_nominal),
              setPlazo(item.plazo_nominal),
              setTasa(item.tasa_nominal),
              setCodigoProducto(item.codigo),
              setModalResume('aperturar'),
            setOpenModal(true)}} />
              </OverlayTrigger>


            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setOpSelected(item.id)
              setModalResume('cancelar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger>
            
            
            </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
        }
    })
  };

  const dataPorRechazar = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'docNumero',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Celular',
        field: 'celular',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: porRechazarOrder.map((item, i) => {

      return {    
          id: item.id,      
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer', marginLeft: '30px'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
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

  const dataRechazadas = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'docNumero',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Celular',
        field: 'celular',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: rechazadasOrder.map((item, i) => {



      return {       
          id: item.id,   
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaRegEdit style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setMonto(item.monto_nominal),
                setPlazo(item.plazo_nominal),
                setTasa(item.tasa_nominal),
                setCodigoProducto(item.codigo),
                setModalResume('editar'),
              setOpenModal(true)}} />
              </OverlayTrigger>

              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
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
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de apertura <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'docNumero',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Celular',
        field: 'celular',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: aperturadasOrder.map((item, i) => {

      const otroTitular = <spam style={{color: 'red'}}>A nombre de:</spam>

      return {        
          id: item.id,  
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_real)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}>
                <FaDollarSign style={{width: '25px', marginLeft: '40px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setOpSelected(item.id)
                setCodigoProducto(item.codigo),
                setModalResume('facturar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
            
            </div>,
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
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de facturación <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'docNumero',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Celular',
        field: 'celular',
        sort: 'asc',
        width: 150
      }
    ],
    rows: facturadasOrder.map((item, i) => {

      return {          
          id: item.id,
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_real)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} A nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
      }
    })
  };


    return (
        <React.Fragment>
           
       <div className="row">
           <div className="col-md-3" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Simulaciones DPF</h4></div>
           <div className="col-md-2" style={{marginLeft: '40px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Soles:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>      {tab === '1' ? totalPorValidar : tab === "2" ? totalPorAperturar : tab === "3" ? totalPorRechazar : tab ==="4" ? totalRechazadas : tab === "5" ? totalAperturadas : tab === "6" ? totalFacturadas : null}       </span></div>
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Dolares:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>0.00</span></div>

       </div>


    <div style={{padding: '20px', marginTop: '20px'}}>

{ detalleFila === true && openModal === false && (tab === '1' || tab === '2' || tab === '3' || tab === '4') ? 

<Detalle dataSelectedRow={dataSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile} selectedRow={selectedRow} setSelectedRow={setSelectedRow} /> 

:
detalleFila === true && openModal === false && (tab === '5' || tab === '6' ) ?

<Detalle2 dataSelectedRow={dataSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile} selectedRow={selectedRow} setSelectedRow={setSelectedRow} /> 
:

       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => {setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setTab(t)}}
    >
        <Tab eventKey="1" title="Por Validar">
        {!dataPorValidar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>

{loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
sortable={false}
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
    data={dataPorValidar}
    
/>
}


</div>
}
      </Tab>
      <Tab eventKey="2" title="Por Aperturar">
        {!dataPorAperturar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
sortable={false}
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
      <Tab eventKey="3" title="Por Rechazar">
        {!dataPorRechazar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
  {loading === true ? 
<div style={{textAlign: 'center', }}>
<Spinner className="col-lg-12" animation="border" role="status" style={{margin: 'auto', width: '100px', height: '100px', marginTop: '10%'}}>
  <span className="visually-hidden"></span>
</Spinner>
</div>
:
<MDBDataTable
sortable={false}
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
    data={dataPorRechazar}
    
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
sortable={false}
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
      <Tab eventKey="5" title="Aperturadas">
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
sortable={false}
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
      <Tab eventKey="6" title="Facturadas">
        {!dataFacturadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
sortable={false}
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


    <Modal style={modalResume === 'aperturar' || modalResume === 'editar' ? {} : {marginTop: '10%'}} size="lg" show={openModal} onHide={()=>{setDetalleFila(false), handleClose()}}>
        <Modal.Header closeButton>
          {modalResume === 'validar' ? 
          <Modal.Title>Validar Simulación</Modal.Title>
        : modalResume === 'editar' ?
        <Modal.Title>Editar Simulación</Modal.Title>
        : modalResume === 'aperturar' ?
        <Modal.Title>Confirmar Apertura de Simulación</Modal.Title>
        : modalResume === 'cancelar' ?
        <Modal.Title>Rechazar Simulaciòn</Modal.Title>
        : modalResume === 'facturar' ?
        <Modal.Title>Simulaciòn facturada</Modal.Title>
        : null
        }
          
        </Modal.Header>

        {modalResume === 'aperturar' ? 
        
        <Modal.Body style={{textAlign: 'center'}}>

          <p>¿Confirma que el cliente depositó el dinero, referente a la subasta <strong>{codigoProducto}</strong>, con la información que a continuación se presenta?</p>
            
      
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
            <input type="text" name="days" onChange={handleOnchangeTasa} value={tasa} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '80%'}}/>
            </div>
          </div>

          <div className="form-item col-lg-12">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Fecha de Apertura:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="date" onChange={handleOnchangeFecha} value={fechaApertura} style={{border: '0px none white', color: '#e01e2b'}} />
            </div>
          </div>

         
          
          
        </div>
  

        </Modal.Body>

        : modalResume === 'cancelar' ?

        <Modal.Body style={{}}>

          <p>¿Está seguro que quieres solicitar la cancelación de la subasta <strong>{codigoProducto}</strong>?</p>
            
       
                          

          <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
            <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
            <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
            </div>
          </div>

  

        </Modal.Body>

        : modalResume === 'editar' ?

        <Modal.Body style={{textAlign: 'center'}}>

<div  style={{backgroundColor: 'white', padding: '0px'}}>
  <div className="row">
        <div className="form-content col-lg-12" style={{textAlign: 'center'}}>
      <form method="post" id="compare" action="/depositos-plazo/result">
        <div className="form-compare row">

          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Moneda:</span></div>
            <div id="currency-div" className="radio-group">
            <button type="button" className="btn btn-outline-danger" style={moneda == 'S/' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('S/');
                }}>Soles</button>
            <button type="button" className="btn btn-outline-danger" style={moneda == '$' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('$');
                }}>Dólares</button>
              {/* <label for="soles"><input type="radio" id="soles" name="currency" class="action-key" checked="checked" value="MN" /><span class="btn">Soles</span></label>
              <label for="dolares"><input type="radio" id="dolares" name="currency" class="action-key" value="ME" /><span class="btn" >Dólares</span></label> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto:</span></div>
            <div>
            <span type="text" style={{color: '#e01e2b'}}>{moneda}</span>
              <input type="text" id="balance" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
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
                                    style={{width: '50%', marginLeft: '60px'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div>
            <input type="text" id="days" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '20%'}}/>
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
                                    style={{width: '50%', marginLeft: '60px'}}
                                  />
              {/* <input type="range" min="30" max="1800" value="360" step="30" class="slider" id="daysRange" /> */}
            </div>
          </div>
                    {/* <input type="hidden" id="exclude" name="exclude" value="all" /> */}
          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Ubicación:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="LI">Lima y Callao</option>
                              
                <option value="LI">Lima y Callao</option>
                              
                <option value="AM">Amazonas</option>
                              
                <option value="AN">Ancash</option>
                              
                <option value="AP">Apurímac</option>
                              
                <option value="AR">Arequipa</option>
                              
                <option value="AY">Ayacucho</option>
                              
                <option value="CA">Cajamarca</option>
                              
                <option value="CU">Cusco</option>
                              
                <option value="HV">Huancavelica</option>
                              
                <option value="HU">Huánuco</option>
                              
                <option value="IC">Ica</option>
                              
                <option value="JU">Junín</option>
                              
                <option value="LL">La Libertad</option>
                              
                <option value="LA">Lambayeque</option>
                              
                <option value="LO">Loreto</option>
                              
                <option value="MD">Madre de Dios</option>
                              
                <option value="MO">Moquegua</option>
                              
                <option value="PA">Pasco</option>
                              
                <option value="PI">Piura</option>
                              
                <option value="PU">Puno</option>
                              
                <option value="SM">San Martín</option>
                              
                <option value="TA">Tacna</option>
                              
                <option value="TU">Tumbes</option>
                              
                <option value="UC">Ucayali</option>
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>


          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Pago de Intereses:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="TD">Mostrar Todo</option>
                              
                <option value="AV">Al vencimiento</option>
                              
                <option value="MS">Mensual</option>
                              
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>


          
          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tipo de institución:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="LI">Todas</option>
                              
                <option value="LI">Bancos, Cajas y Financieras</option>
                              
                <option value="AM">Cooperativas</option>
                              
                <option value="AN">Solo Bancos</option>
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>
          
                    
         {/* <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }}>Simular</button> */}
          
         <div className="col-lg-12" style={{margin: 'auto', paddingLeft: '20px', paddingRight: '20px', marginTop: '20px'}}>
<div className="form-check">
<label>
<input style={{marginTop: '8px'}}
type="checkbox"
name="terminos"
checked={check}
onChange={onCheckboxChange}
className="form-check-input"

/>
<span style={{color: '#e01e2b'}}>Es para otra persona </span><OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}><FaInfo size="15px" style={{color: 'black', margin: 'auto', cursor: 'pointer', marginLeft: '0px', width: '15px'}}/></OverlayTrigger>
</label>
</div>
</div>

{check === true ? 
<>
<div className="form-item col-lg-6" style={{marginTop: '20px'}}>
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tipo de documento:</span></div>
<div id="tipodocsimu" className="select-container select-input action-select">
  <div className="dropdown bootstrap-select required"><select name="doc" id="tdoc" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
    <option value="LI">DNI</option>
                  
    <option value="AM">Carné de Extranjeria</option>
                  
    <option value="AN">Pasaporte</option>
                  
    
                </select>
                </div>
</div>
</div>
<div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Número de documento</span></div>
            <div>
             <input type="text" id="balance" placeholder="Ingrese su documento" onChange={handleOnchangeNumDoc} value={numDoc} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
            </div>
          </div>

        </>  
        :
        null}
        </div>  
            </form>
        </div>
    </div>
</div>
  

        </Modal.Body>

: modalResume === 'validar' ?

<Modal.Body style={{}}>

  <p>¿Está seguro que quieres validar la simulación con código: <strong>{codigoProducto}</strong>?</p>
    

                  

  {/* <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
    <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
    <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
    <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
    </div>
  </div> */}



</Modal.Body>

: modalResume === 'facturar' ? 

<Modal.Body style={{}}>

<p>¿Está seguro de pasar a FACTURADAS la simulación con codigo: <strong>{codigoProducto}</strong>?</p>
  

                

{/* <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
  <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
  <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
  <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
  </div>
</div> */}



</Modal.Body>

        : null    
      
      
      }
        
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {setDetalleFila(false), handleClose()}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} 
          
          onClick={
            modalResume === 'aperturar' ? 

            ()=>{aperturarOperacion(opSelected, usuLog, monto, plazo, tasa, fechaApertura, situacionAperturada, concretadoAdmin, concretadoPorAdmin), setDetalleFila(false), handleClose()}

            : modalResume === 'validar' ?
            
            ()=>{validarOp(opSelected, usuLog, situacionValidar), setDetalleFila(false), handleClose()}

            : modalResume === 'cancelar' ?
            
            ()=>{rechazarOp(opSelected, usuLog, situacionRechazada), setDetalleFila(false), handleClose()}

            : modalResume === 'facturar' ?
            
            ()=>{facturarOp(opSelected, usuLog, situacionFacturada), setDetalleFila(false), handleClose()}

            :
            ()=>{setDetalleFila(false), handleClose()}
          
          }>

            {modalResume === 'editar' ? 'Editar' : 'Aceptar'}
          </Button>
        </Modal.Footer>
      </Modal>

       
        </React.Fragment>
    )
}

export default BodySubastasAsweb;