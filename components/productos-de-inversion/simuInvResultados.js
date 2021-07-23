import React, { Fragment, useState, useEffect, useContext } from 'react';
// import $ from 'jquery';
import {  Modal, Button, Tooltip, OverlayTrigger, Dropdown, Popover } from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'
import {FaInfo, FaBars, FaHome, FaUserAlt} from "react-icons/fa"
import './estilo.css'

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
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
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
      pathname:'/pe/productos-de-inversion/seleccion',
      // query:{
      //     pid: id, pmonto: monto, pplazo: plazo
      // }
  }) 
  : pernat === true ?
  Router.push({
    pathname:'/zonaprivada/beta/dashboard/pernat/inv/producto',
    // query:{
    //     pid: id, pmonto: monto, pplazo: plazo
    // }
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


const [getCiudades, setGetCiudades] = useState([])
const [getPlazo, setGetPlazo] = useState([])
  const [simulacion, setSimulacion] = useState([])
  const [check, setCheck] = useState(false)
  const [monto, setMonto] = useState(pmonto ? pmonto : 25000)
  const [plazo, setPlazo] = useState(pplazo ? pplazo : 183)
  const [moneda, setMoneda] = useState('S/')
  const [monedaenv, setMonedaenv] = useState('Soles')
  const [openModal, setOpenModal] = useState(false)
  const [categoria, setCategoria] = useState('resultados')
  const grupo = "Plazo Fijo"
  const [ciudadEnv, setCiudadEnv] = useState()
  const [pagointeres, setPagointeres] = useState('')
  const [numDoc, setNumDoc] = useState('')

  const handleMonto = (value) => {
    setMonto(value);
  };

  const handlePlazo = (value) => {
    setPlazo(value);
  };

  const handleChangeCiud = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setCiudadEnv(event.target.value);
  }

  const handleOnchange = (e) => {
    if (e.target.value.length) {
      setMonto(e.target.value);
    } else {
      setMonto(0);
    }
  };

  const handleChangePlazo = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setPlazo(event.target.value);
  }

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

 useEffect(()=> {
  gettingPlazo();
  gettingciudades()
}, [])

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 5000);
  }, []);

  const gettingPlazo = async () => {

    let res = await axios.get(`${Url}/plazo`)
    setGetPlazo(res.data.data)
              
  }



  const productosInversion = [{
    producto: 'Proyecto Educativo',
    renta: 'Fija, mensual',
    rentabilidad: '12% soles / 10%dolares',
    plazomin: '1 ó 2 años',
    montomin: 'S/ 35,000.00 o $ 10,000.00',
  },
  {
    producto: 'Factoring y carteras',
    renta: 'Proyectada',
    rentabilidad: '12% (proyectada)',
    plazomin: '1 ó 2 años',
    montomin: '$ 6,000.00',
  },
  {
    producto: 'Fondo inmobiliario',
    renta: 'Fija trimestral',
    rentabilidad: '7% (proyectada)',
    plazomin: '3.5 años',
    montomin: '$ 20,000.00',
  },
  {
    producto: 'Acciones y bonos',
    renta: 'Renta fija',
    rentabilidad: '12% neto',
    plazomin: '1 ó 2 años',
    montomin: '$ 10,000.00',
  },
  {
    producto: 'Portafolio Global - Balanceado',
    renta: 'Proyectada',
    rentabilidad: '6.72% (promedio ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
  },
  {
    producto: 'Portafolio Global - Renta',
    renta: 'Proyectada',
    rentabilidad: '3.72% (promedio ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
  },
  {
    producto: 'Portafolio Global - Acciones',
    renta: 'Proyectada',
    rentabilidad: '9.13% (promedio ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
  }];

  

  const data_icons = {
    columns: [
      {
        'label': '#',
        'field': 'numero',
        'sort': 'asc'
      },
      {
        'label': 'Empresa',
        'field': 'empresa',
        'sort': 'asc'
      },
      {
        'label': 'Tipo de renta',
        'field': 'tipoRenta',
        'sort': 'asc'
      },
      {
        'label': 'Rentabilidad (TEA)',
        'field': 'rentabilidad',
        'sort': 'asc'
      },
      {
        'label': 'Plazo mínimo',
        'field': 'plazomin',
        'sort': 'asc'
      },
      {
        'label': 'Monto mínimo',
        'field': 'montomin',
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


      // const tasa = 
      //   <span className="d-inline-block">
      //     <div style={{textAlign: 'center'}}>{cliente.tea ? `${cliente.tea}%` : null}</div>
      //   {cliente.fsd === true ? 
      //     <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">FSD</Tooltip>}>
      //       <span className="d-inline-block">
      //         <a style={{color: '#e01e2b', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #e01e2b', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">FSD</a>
      //       </span>
      //     </OverlayTrigger>
      //   :
      //     <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No esta cubierto por el Fondo de Seguro de Depósitos</Tooltip>}>
      //       <span className="d-inline-block">
      //         <a style={{color: '#999999', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #999999', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">No tiene FSD</a>
      //       </span>
      //     </OverlayTrigger>
      //   }
        
      // </span>
    
      const gananciaTotal = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
      const gananciaMensual = Intl.NumberFormat("en-US").format(cliente.monto_minimo)
      const montoApertura = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
      const ganTotal = monto * cliente.tasa / 100;
      const ganMensual = (monto * cliente.tasa / 100) / plazo * 30;
      return {

        'numero': i + 1,
        'empresa': cliente.producto,
        'tipoRenta': cliente.renta,
        'rentabilidad': cliente.rentabilidad,
        'plazomin': cliente.plazomin,
        'montomin': cliente.montomin,
        'masinfo': <button type="button" className="btn btn-outline-danger" style={{ margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', width: '115px' }} onClick={() =>{BuscarProducto()}}>Me Interesa</button>
      };
    }),


      // simulacion.map((cliente, i) => {


      //   const tasa = 
      //     <span className="d-inline-block">
      //       <div style={{textAlign: 'center'}}>{cliente.tea ? `${cliente.tea}%` : null}</div>
      //     {cliente.fsd === true ? 
      //       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">FSD</Tooltip>}>
      //         <span className="d-inline-block">
      //           <a style={{color: '#e01e2b', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #e01e2b', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">FSD</a>
      //         </span>
      //       </OverlayTrigger>
      //     :
      //       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No esta cubierto por el Fondo de Seguro de Depósitos</Tooltip>}>
      //         <span className="d-inline-block">
      //           <a style={{color: '#999999', fontWeight: '100', marginTop: '15px', display: 'inline-block', padding: '1px 10px', border: '1px solid #999999', borderRadius: '20px', fontSize: '0.9rem'}} data-trigger='click' data-bs-toggle="popover" data-bs-placement="top" title="" href="#fsd" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">No tiene FSD</a>
      //         </span>
      //       </OverlayTrigger>
      //     }
          
      //   </span>
      
      //   const gananciaTotal = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
      //   const gananciaMensual = Intl.NumberFormat("en-US").format(cliente.monto_minimo)
      //   const montoApertura = Intl.NumberFormat("en-US").format(cliente.monto_maximo)
      //   const ganTotal = monto * cliente.tasa / 100;
      //   const ganMensual = (monto * cliente.tasa / 100) / plazo * 30;
      //   return {

      //     'id': cliente.id,
      //     'tasa': tasa,
      //     'gananciatotal': `S/ ${gananciaTotal}`,
      //     'gananciamensual': `S/ ${gananciaMensual}`,
      //     'montoapertura': `S/ ${montoApertura}`,
      //     'masinfo': <button type="button" className="btn btn-outline-danger" style={{ margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', width: '115px' }} onClick={() => BuscarProducto(cliente.id)}>Me Interesa</button>
      //   };
      // }),
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
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', marginBottom: '10px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Elige tu Producto de Inversión</span></div>
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
            <div className="label" style={{marginBottom: '0px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required">
                
                <select name="plazo1" id="plazo1" value={plazo} onChange={handleChangePlazo} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                              
                {getPlazo.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
                              
                
                            </select>
                            </div>
            </div>
          </div>

          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Ubicación:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required">
                
                <select name="ciud1" id="ciud1" value={ciudadEnv} onChange={handleChangeCiud} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
                {getCiudades.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
                            </select>
                            </div>
            </div>
          </div>


          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Pago de intereses:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="TD">Mostrar Todo</option>
                              
                <option value="AV">Al vencimiento</option>
                              
                <option value="MS">Mensual</option>
                              
                              
                
                            </select>
                            </div>
            </div>
          </div>


          
          

          

{pernat === true ? 
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
:
null
}

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
          
                    
        
          <div id="compara" className="form-item col-lg-12" style={{textAlign: 'center', marginTop: '50px', marginBottom: '20px'}}>
            {/* <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '0px' }} onClick={() => {
              // getSimulacion(monto, monedaenv, grupo,`${plazo} dias`, pagointeres, ubicacion)
              setSimulacion(productosInversion)           
              }}>Simular</button> */}
              <a href="#resultados2" type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '0px' }} onClick={() => {
              // getSimulacion(monto, monedaenv, grupo,`${plazo} dias`, pagointeres, ubicacion)
              setSimulacion(productosInversion)          
              }}>Simular</a>
          </div>
          
          
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>
<div id="resultados2" style={{margin: '20px'}}></div>
{simulacion.length ?  
  <div id="resultados" style={{margin: '20px'}}>


<MDBTable responsive hover>
      <MDBTableHead width="auto" style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center', fontSize: '0.9rem'}} columns={data_icons.columns} />
      <MDBTableBody className="celda" style={{textAlign: 'center'}} rows={data_icons.rows} />
    </MDBTable>



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