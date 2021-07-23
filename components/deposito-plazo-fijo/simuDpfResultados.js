import React, { Fragment, useState, useEffect, useContext } from 'react';
// import $ from 'jquery';
import {  Modal, Button, Tooltip, OverlayTrigger, Dropdown, Popover } from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'
import {FaInfo, FaBars, FaHome, FaUserAlt} from "react-icons/fa"
import './estilo.css'

// import { ScrollTop} from '../../components/sofbox';

import Url from '../url'


import Router from 'next/router';

import { useRouter } from 'next/router';


//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------

//-------Import bootstrap table-----
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable } from 'mdbreact';
//----------------------------------



//CONTEXT 
// import PernatContext from '../../../context/user/PernatContext'

const Simulador2 = ({pernat, setPernat, pernatArea}) => {

  // const {getSimulacion, simulacion, getPrueba} = useContext(PernatContext)
  
  const getSimulacion = async (valor, moneda, grupo, plazo, pagointeres, ubicacion) => {

    let userInfo = { valordeposito: valor, moneda: moneda, grupo: grupo, plazo: plazo, pagointeres: pagointeres, ubicacion: ubicacion }
    let res = await axios.post(`${Url}/simulacion`,userInfo)
    setSimulacion(res.data.data)
  
        
  }

//   const jumpTo = (href) => {
//     $('html, body').stop().animate({
//         scrollTop: $(href).offset().top
//     }, 1500);
//     console.log(top)
// };

//Recuperar los paraemtros enviados desde el componente simulador del home
const router = useRouter();
const { query: { pmonto, pplazo, pmoneda, pgrupo, ppagointeres, pubicacion } } = router;
// console.log('PAgina 2', pmonto, pplazo, pmoneda, pgrupo, ppagointeres, pubicacion);

// llamar la funcion getSimulacion enviandole los parametros para tener respuesta
useEffect(() => {
  pmonto ? getSimulacion(pmonto, pmoneda, pgrupo, pplazo, ppagointeres, pubicacion) : null

  setTimeout( () => {
    // console.log(simulacion)
}, 5000);

}, []);

// REcoger los datos (id) para mandarlos al componente seleccion y tener resultado

const BuscarProducto = (id) => {
 
  // console.log('Buscando ' , id);
  //Validamos que haya texto en el input
  
  //Redireccionamos a la pagina pasando los parametros para recuperarlos en la pagina de busqueda
  pernat === false ? 
  
  Router.push({
      pathname:'/pe/deposito-plazo-fijo/seleccion',
      query:{
          pid: id, pmonto: monto, pplazo: plazo
      }
  }) 
  : pernat === true ?
  Router.push({
    pathname:'/zonaprivada/beta/dashboard/pernat/dpf/producto',
    query:{
        pid: id, pmonto: monto, pplazo: plazo
    }
}) 
: null
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
    Esto es importante para agilizar el proceso de contacto y apertura de la cuenta con la institución financiera. De esta manera sabremos que la cuenta estará a nombre de otra persona.
    </Popover.Content>
  </Popover>
);

const [tipoDoc, setTipoDoc] = useState([])
  const [tipoDocEnv, setTipoDocEnv] = useState(0)

  const [getCiudades, setGetCiudades] = useState([])
  const [ciudadEnv, setCiudadEnv] = useState()
  const [simulacion, setSimulacion] = useState([])
  const [check, setCheck] = useState(false)
  const [monto, setMonto] = useState(pmonto ? pmonto : 25000)
  const [plazo, setPlazo] = useState(pplazo ? pplazo : 183)
  const [moneda, setMoneda] = useState('S/')
  const [monedaenv, setMonedaenv] = useState('Soles')
  const [openModal, setOpenModal] = useState(false)
  const [categoria, setCategoria] = useState('resultados')
  const grupo = "Plazo Fijo"
  const [ubicacion, setUbicacion] = useState('')
  const [pagointeres, setPagointeres] = useState('')
  const [numDoc, setNumDoc] = useState('')

  // console.log(simulacion)

  useEffect(() => {
    gettingciudades()
    getTipoDoc()
}, []);

const getTipoDoc = async () => {

  let res = await axios.get(`${Url}/tipodocumento`)
  setTipoDoc(res.data.data)
            
}


  const gettingciudades = async () => {

    let res = await axios.get(`${Url}/ciudad`)
    setGetCiudades(res.data.data)




//       var config = {
//         headers: { 'Authorization': `Bearer ` }
//       };

//       axios.get('http://161.97.67.227:3000/api/ciudad', config)
//   .then((res) => {
//   console.log(res.data);
//   setGetCiudades(res.data)
// });
              
  }

  const handleChangeDoc = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setTipoDocEnv(event.target.value);
  }

  const handleChangeCiud = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setCiudadEnv(event.target.value);
  }

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

  const handleOnchangePlazo = (e) => {
    if (e.target.value.length) {
      setPlazo(e.target.value);
    } else {
      setPlazo(0);
    }
  };

  const handleOnchangeNumDoc = (e) => {
    if (e.target.value.length) {
      setNumDoc(e.target.value);
    } else {
      setNumDoc(0);
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

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 5000);
  }, []);

const ordenar = () => {
  // console.log('HOLAA!!')
}
  
const dataGanadas = {
  columns: [
    {
      'label': 'Institucion Financiera',
      'field': 'id',
    },
    {
      'label': 'Tasa de interés (TREA)',
      'field': 'tasa',
    },
    {
      'label': 'Ganancia Total (Aprox.)',
      'field': 'gananciatotal',
    },
    {
      'label': 'Ganancia Mensual (Aprox.)',
      'field': 'gananciamensual',
    },
    {
      'label': 'Monto Mínimo de Apertura',
      'field': 'montoapertura',
    },
    {
      'label': 'Mas Info',
      'field': 'masinfo',
    }
  ],
  rows:
      simulacion.map((cliente, i) => {


        const tasa = 
          <span className="d-inline-block">
            <div style={{textAlign: 'center'}}>{cliente.tea ? `${cliente.tea}%` : null}</div>
          {cliente.id === 1 || cliente.id === 3 || cliente.id === 5 ? 
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Esta cubierto por el Fondo de Seguro de Depósitos. <br></br>FSD: S/ 101,522.00</Tooltip>}>
              <span className="d-inline-block">
                <a style={{color: '#e01e2b', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #e01e2b', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">FSD</a>
              </span>
            </OverlayTrigger>
          :
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No esta cubierto por el Fondo de Seguro de Depósitos</Tooltip>}>
              <span className="d-inline-block">
                <a style={{color: '#999999', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #999999', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">No tiene FSD</a>
              </span>
            </OverlayTrigger>
          }
          
        </span>
      
        const gananciaTotal = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
        const gananciaMensual = Intl.NumberFormat("en-US").format(cliente.monto_minimo)
        const montoApertura = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
        const ganTotal = monto * cliente.tasa / 100;
        const ganMensual = (monto * cliente.tasa / 100) / plazo * 30;
        return {

          'id': cliente.id,
          'tasa': cliente.tea,
          'gananciatotal': `S/ ${gananciaTotal}`,
          'gananciamensual': `S/ ${gananciaMensual}`,
          'montoapertura': `S/ ${montoApertura}`,
          'masinfo': <button type="button" className="btn btn-outline-danger" style={{ margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', width: '115px' }} onClick={() => BuscarProducto(cliente.id)}>Me Interesa</button>
        };
      })
}


  const data_icons = {
    columns: [
      {
        'label': 'Institución financiera',
        'field': 'id',
        'sort': 'asc'
      },
      {
        'label': 'Tasa de interés (TREA)',
        'field': 'tasa',
        'sort': 'asc'
      },
      {
        'label': 'Ganancia total (Aprox.)',
        'field': 'gananciatotal',
        'sort': 'asc'
      },
      {
        'label': 'Ganancia mensual (Aprox.)',
        'field': 'gananciamensual',
        'sort': 'asc'
      },
      {
        'label': 'Monto mínimo',
        'field': 'montoapertura',
        'sort': 'asc'
      },
      {
        'label': 'Más información',
        'field': 'masinfo',
        'sort': 'asc'
      }
    ],
    columns2: [
      {
        'label': 'Monto / Plazo',
        'field': 'head1',
        'sort': 'asc'
      },
      {
        'label': `${plazo - 15} días`,
        'field': 'head2',
        'sort': 'asc'
      },
      {
        'label': `${plazo - 10} días`,
        'field': 'head3',
        'sort': 'asc'
      },
      {
        'label': `${plazo - 5} días`,
        'field': 'head4',
        'sort': 'asc'
      },
      {
        'label': `${plazo} días`,
        'field': 'head5',
        'sort': 'asc'
      },
      {
        'label': `${plazo + 5} días`,
        'field': 'head6',
        'sort': 'asc'
      },
      {
        'label': `${plazo + 10} días`,
        'field': 'head7',
        'sort': 'asc'
      },
      {
        'label': `${plazo + 15} días`,
        'field': 'head8',
        'sort': 'asc'
      }
    ],
    rows:
      simulacion.map((cliente, i) => {


        const tasa = 
          <span className="d-inline-block">
            <div style={{textAlign: 'center'}}>{cliente.tea ? `${cliente.tea}%` : null}</div>
          {cliente.id === 1 || cliente.id === 3 || cliente.id === 5 ? 
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Esta cubierto por el Fondo de Seguro de Depósitos. <br></br>FSD: S/ 101,522.00</Tooltip>}>
              <span className="d-inline-block">
                <a style={{color: '#e01e2b', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #e01e2b', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">FSD</a>
              </span>
            </OverlayTrigger>
          :
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No esta cubierto por el Fondo de Seguro de Depósitos</Tooltip>}>
              <span className="d-inline-block">
                <a style={{color: '#999999', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #999999', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">No tiene FSD</a>
              </span>
            </OverlayTrigger>
          }
          
        </span>
      
        const gananciaTotal = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
        const gananciaMensual = Intl.NumberFormat("en-US").format(cliente.monto_minimo)
        const montoApertura = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
        const ganTotal = monto * cliente.tasa / 100;
        const ganMensual = (monto * cliente.tasa / 100) / plazo * 30;
        return {

          'id': cliente.id,
          'tasa': tasa,
          'gananciatotal': `S/ ${gananciaTotal}`,
          'gananciamensual': `S/ ${gananciaMensual}`,
          'montoapertura': `S/ ${montoApertura}`,
          'masinfo': <button type="button" className="btn btn-outline-danger" style={{ margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', width: '115px' }} onClick={() => BuscarProducto(cliente.id)}>Me Interesa</button>
        };
      }),
      rows2:
      [
        {
        'head1': <b>{`S/ ${monto - 3000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.0%',
        'head7': '3.5%',
        'head8': '3.5%'
        },
        {
        'head1': <b>{`S/ ${monto - 2000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.0%',
        'head7': '3.5%',
        'head8': '3.5%'
        },
        {
        'head1': <b>{`S/ ${monto - 1000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.0%',
        'head7': '3.5%',
        'head8': '3.5%'
        },
        {
        'head1': <b>{`S/ ${monto}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.8%',
        'head7': '3.8%',
        'head8': '3.8%'
        },
        {
        'head1': <b>{`S/ ${monto + 1000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.8%',
        'head7': '3.8%',
        'head8': '3.8%'
        },
        {
        'head1': <b>{`S/ ${monto + 2000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '3.8%',
        'head7': '3.8%',
        'head8': '3.8%'
        },
        {
        'head1': <b>{`S/ ${monto + 3000}`}</b>,
        'head2': '3.0%',
        'head3': '3.0%',
        'head4': '3.0%',
        'head5': '3.0%',
        'head6': '4.0%',
        'head7': '4.0%',
        'head8': '4.0%'
        }
        ]
  };

    

    return (
      <React.Fragment>
        <div  style={{backgroundColor: 'white', padding: '0px'}}>
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', marginBottom: '10px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Simula tu Depósito a Plazo</span></div>
  <div className="row">
        <div className="form-content col-lg-12" style={{textAlign: 'center'}}>
      <form method="post" id="compare">
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
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto:</span></div>
            <div>
            <span type="text" style={{color: '#e01e2b', marginLeft: '20%'}}>{moneda}</span>
              <input type="text" id="balance" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'left', width: '30%'}} />
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
                                    style={{width: '50%', marginLeft: '110px'}}
                                  />
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div>
            <input type="text" id="days" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'right', width: '15%', marginRight: '5px'}}/>
            <span type="text" style={{color: '#e01e2b', marginRight: '5%'}}>días</span>
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
                                    style={{width: '50%', marginLeft: '110px'}}
                                  />
            </div>
          </div>

          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Ubicación:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required">
                
                <select name="geo" id="geo" value={ciudadEnv} onChange={handleChangeCiud} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="LI">Lima y Callao</option>

                {getCiudades.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}


                {/* <option value="LI">Lima y Callao</option>
                              
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
                              
                <option value="UC">Ucayali</option> */}
                            </select>
                            </div>
            </div>
          </div>


          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Pago de intereses:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="TD">Mostrar Todo</option>
                              
                <option value="AV">Al vencimiento</option>
                              
                <option value="MS">Mensual</option>
                              
                              
                
                            </select>
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
                            </div>
            </div>
          </div>

          


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
  <div className="dropdown bootstrap-select required">
    
    <select name="doc" id="tdoc" value={tipoDocEnv} onChange={handleChangeDoc} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
  {tipoDoc.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
                  
    
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
          
                    
        
          <div id="compara" className="form-item col-lg-12" style={{textAlign: 'center', marginTop: '50px', marginBottom: '20px'}}>
            <button href="" type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '0px' }} onClick={() => getSimulacion(monto, monedaenv, grupo,`${plazo} dias`, pagointeres, ciudadEnv)}>Simular</button>
          </div>

          {/* <a onClick={()=>jumpTo('#resultados')}>Probar jumptoooo</a> */}
          
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>
{/* <div id="resultados" style={{margin: '20px'}}></div> */}
{simulacion.length ?  
  <div style={{margin: '20px'}}>

<div className="row" style={{marginLeft: '0px'}}>
    <div  style={categoria === 'resultados' ? { backgroundColor: '#e01e2b', width: '8%', color: 'white', borderTopLeftRadius: '5px', cursor: 'pointer', textAlign: 'center', borderRightColor: 'white', borderRightWidth: '1px', borderRightStyle: 'solid'} : { backgroundColor: '#146cae', width: '8%', color: 'white', borderTopLeftRadius: '5px', cursor: 'pointer', textAlign: 'center', borderRightColor: 'white', borderRightWidth: '1px', borderRightStyle: 'solid'}} onClick={()=>{setCategoria('resultados');}}>Resultados</div>
    <div  style={categoria === 'resultados' ? { backgroundColor: '#146cae', width: '12%', color: 'white', borderTopRightRadius: '5px', cursor: 'pointer', textAlign: 'center'} : { backgroundColor: '#e01e2b', width: '12%', color: 'white', borderTopRightRadius: '5px', cursor: 'pointer', textAlign: 'center'}} onClick={()=>{setCategoria('relacion');}}>+/- Monto y Plazo</div>
</div>

{categoria === 'resultados' ? 


  <MDBTable responsive hover>
      <MDBTableHead style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center', fontSize: '0.9rem'}} columns={data_icons.columns} />
      <MDBTableBody className="celda" style={{textAlign: 'center'}} rows={data_icons.rows} />
    </MDBTable>

  
  :
  <MDBTable responsive bordered hover>
      <MDBTableHead style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center'}} columns={data_icons.columns2} />
      <MDBTableBody className="celda" style={{textAlign: 'center'}} rows={data_icons.rows2} />
    </MDBTable>

}

{pernat === true ? null :
<div className="row" style={{paddingRight: '50px', paddingLeft: '50px'}}>
  <div className="col-lg-12" style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%', color: '#e01e2b', fontSize: '1rem', border: '1px solid #e01e2b', borderRadius: '5px', padding: '5px'}}>¿Quieres conocer nuestros productos de inversion con mejores tasas? <Link href="/pe/inversiones"><a>¡haz click aqui!</a></Link></div>
  </div>
}
  </div>
:
<div></div>

  
}



 
      

</React.Fragment>
    )
}


export default Simulador2;