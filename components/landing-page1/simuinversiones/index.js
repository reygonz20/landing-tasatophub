import React, { useEffect, useState } from 'react';
import Link from 'next/link'

import axios from 'axios'

//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------

import Url from '../../url'

import Router from 'next/router';

const simuInversiones = () => {


  const [getCiudades, setGetCiudades] = useState([])

  const [getPlazo, setGetPlazo] = useState([])
  const [monto, setMonto] = useState(25000)
  const [plazo, setPlazo] = useState(0)
  const [moneda, setMoneda] = useState('S/')
  const [ciudadEnv, setCiudadEnv] = useState()


  useEffect(()=> {
    gettingPlazo();
    gettingciudades()
}, [])


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


  const gettingPlazo = async () => {

    let res = await axios.get(`${Url}/plazo`)
    setGetPlazo(res.data.data)
              
  }

  const handleMonto = (value) => {
    setMonto(value);
    
  };

  const handleChangeCiud = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setCiudadEnv(event.target.value);
  }

  const handleChangePlazo = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setPlazo(event.target.value);
  }

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

  const BuscarProducto = () => {
 
    // console.log('Buscando ' , id);
    //Validamos que haya texto en el input
    
    //Redireccionamos a la pagina pasando los parametros para recuperarlos en la pagina de busqueda
        
    Router.push({
        pathname:'/pe/productos-de-inversion',
        // query:{
        //     pid: id, pmonto: monto, pplazo: plazo
        // }
    }) 
  }


    return (
      <React.Fragment>
        <div className="row" style={{paddingLeft: '15px', paddingRight: '15px', marginBottom: '0px'}}>
      <div className="h1 compare-title col-lg-6" style={{backgroundColor: '#DCDCDC', marginBottom: '0px', padding: '0px', textAlign: 'center',  height: '50px', display: 'flex', alignItems: 'center', textAlign: 'center', borderTopLeftRadius: '10px', borderColor: 'white', borderBottom: '1px solid grey'}}><Link href="/pe"><a style={{color: 'black', fontSize: '1.0rem', margin: 'auto', fontWeight: '600'}}><span style={{color: 'Black', fontSize: '1.0rem', margin: 'auto', fontWeight: '600'}}>Simula tu Depósito a Plazo</span></a></Link></div>
    <div className="h1 compare-title col-lg-6" style={{backgroundColor: '#e01e2b', marginBottom: '0px', padding: '0px', textAlign: 'center', height: '50px', display: 'flex', alignItems: 'center', textAlign: 'center', borderTopRightRadius: '10px', borderColor: 'white', borderTop: '0px solid black', borderLeft: '0px solid white', borderRight: '0px solid white', boxShadow: '2px 2px 2px grey', borderBottom: '0px solid grey'}}><Link href="/pe/inversiones"><a style={{color: 'white', fontSize: '1.0rem', margin: 'auto', fontWeight: '600'}}><span style={{color: 'white', fontSize: '1.0rem', margin: 'auto', fontWeight: '600'}}>Productos de Inversión</span></a></Link></div>
    </div>
        <div className="compare-container container " style={{backgroundColor: 'white', padding: '0px', borderBottomLeftRadius: '10px',borderBottomRightRadius: '10px', borderBottom: '0px black solid', borderLeft: '0px solid black', borderRight: '0px solid black', boxShadow: '2px 2px 2px grey', borderTop: '0px solid white'}}>
              
  <div className="row" style={{paddingBottom: '30px', margin: '0px'}}>
    
        <div className="form-content col-lg-12" style={{textAlign: 'center', marginTop: '1%'}}>
      <form method="post" id="compare" action="/pe/productos-de-inversion">
        <div className="form-compare row">

          <div className="form-item col-lg-6">
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Moneda:</span></div>
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
          <div className="form-item col-lg-6">
            <div className="label" ><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Monto:</span></div>
            <div>
            <span type="text" style={{color: '#e01e2b'}}>{moneda}</span>
              <input type="text" id="balance" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
            </div>
            <div>
            <Slider
                                    min={500}
                                    max={250000}
                                    value={monto}
                                    onChange={handleMonto}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '50%', marginLeft: '80px'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>


          <div className="form-item col-lg-4" style={{marginBottom: '50px'}}>
            <div className="label" style={{marginBottom: '10px', marginTop: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Plazo:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required">
                
                <select placeholder="Seleccione" name="plazo" id="plazo" value={plazo} onChange={handleChangePlazo} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
                  
                {getPlazo.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>


          <div className="form-item col-lg-4" style={{marginBottom: '50px'}}>
            <div className="label" style={{marginBottom: '10px', marginTop: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Pago de intereses:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option value="MT">Mostrar todo</option>
                              
                <option value="AV">Al vencimiento</option>
                              
                <option value="MS">Mensual</option>
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>



                    {/* <input type="hidden" id="exclude" name="exclude" value="all" /> */}
          <div className="form-item col-lg-4" style={{marginBottom: '50px'}}>
            <div className="label" style={{marginBottom: '10px', marginTop: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Ubicación:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required">
                <select name="ciud" id="ciud" value={ciudadEnv} onChange={handleChangeCiud} style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
                {getCiudades.map((item) => {
return (
<option value={item.id}>{item.nombre}</option>
)
})}
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>
          
                    {/* <div className="form-item col-lg-12" style={{textAlign: 'center'}}>
            <div className="label" style={{marginBottom: '10px', marginTop: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '0.8rem'}}>Regístrate:</span></div>
            <div className="contact-form">
    <div className="section-field">
        <input className="require" id="contact_email" type="email"
            placeholder="Correo*" name="email" required style={{width: '50%', borderColor: '#e01e2b'}}
            // onChange={(event)=>this.inputChangedHandler(event)}
        />
    </div>
</div>
                        
          </div> */}
          {/* <div className="form-check w-100" style={{textAlign: 'center'}}>
            <label className="custom-control ios-switch">
              <span className="ios-switch-control-description"></span>
              <input type="checkbox" id="news" checked="checked" class="ios-switch-control-input" value="on" name="news" />
              <span className="ios-switch-control-indicator"></span>
              <span className="ios-switch-control-description">Quiero recibir consejos y ofertas (<a target="blank" href="/legal#privacidad">Términos y Condiciones</a>)</span>
            </label>
          </div>   */}
          <div id="compara" className="form-item col-lg-12" style={{textAlign: 'center'}}>
          <button type="button" className="btn btn-outline-danger" onClick={()=>{BuscarProducto()}} style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '0px' }}>Simular</button>
          </div>
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>
</React.Fragment>
    )
}


export default simuInversiones;




