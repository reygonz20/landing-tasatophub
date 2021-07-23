import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------

//-------Import bootstrap table-----
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
//----------------------------------

const SimuladorPernat = ({pernat, setPernat, pernatArea}) => {


  const [monto, setMonto] = useState(25000)
  const [plazo, setPlazo] = useState(183)
  const [moneda, setMoneda] = useState('S/')
  const [openModal, setOpenModal] = useState(false)
  const [categoria, setCategoria] = useState('resultados')

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

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 5000);
  }, []);

  const headerStyle = { backgroundColor: '#146cae' };
  const rowStyle = { height: '80px' };

  const columns = [{
    dataField: 'id',
    text: 'Institución Financiera',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }, {
    dataField: 'tasa',
    text: 'Tasa de interés (TEA/TREA)',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }, {
    dataField: 'gananciatotal',
    text: 'Ganancia Total (aprox)',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }, {
    dataField: 'gananciamensual',
    text: 'Ganancia Mensual (aprox)',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }, {
    dataField: 'montoapertura',
    text: 'Monto Mínimo de Apertura',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }, {
    dataField: 'masinfo',
    text: 'Mas Info',
    headerStyle: {
      backgroundColor: '#146cae',
      color: 'white'
    }
  }];


function opcionFormatter(cell, row) {
  return (
    <div id="compara" className="form-item col-lg-12" style={{ textAlign: 'center'}}>
  <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
  // onClick={() => {
      //   setCategory('resumeHistory');
      //   setSelectHistory(row);
      //   setOpenModal(true);
      // }}
       />
</div>
  );
}


  const financieras = [{
    id: <img src="/assets/images/financieras/financiera01.png"></img>,
    tasa: 3,
    fsd: true,
    gananciatotal: 'S/ 5000',
    gananciamensual: 'S/ 200',
    montoapertura: 20000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  },
  {
    id: <img src="/assets/images/financieras/financiera02.png"></img>,
    tasa: 4,
    fsd: true,
    gananciatotal: 'S/ 8000',
    gananciamensual: 'S/ 500',
    montoapertura: 80000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/deposito-plazo-fijo/seleccion'
        }}
         />
  </div>
  },{
    id: <img src="/assets/images/financieras/financiera03.png"></img>,
    tasa: 5,
    fsd: false,
    gananciatotal: 'S/ 9000',
    gananciamensual: 'S/ 600',
    montoapertura: 15000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  },
  {
    id: <img src="/assets/images/financieras/financiera04.png"></img>,
    tasa: 3.5,
    fsd: false,
    gananciatotal: 'S/ 25000',
    gananciamensual: 'S/ 4200',
    montoapertura: 200000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  },
  {
    id: <img src="/assets/images/financieras/financiera05.png"></img>,
    tasa: 3,
    fsd: true,
    gananciatotal: 'S/ 5000',
    gananciamensual: 'S/ 200',
    montoapertura: 20000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  },{
    id: <img src="/assets/images/financieras/financiera06.png"></img>,
    tasa: 5,
    fsd: false,
    gananciatotal: 'S/ 9000',
    gananciamensual: 'S/ 600',
    montoapertura: 15000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  },{
    id: <img src="/assets/images/financieras/financiera07.png"></img>,
    tasa: 5,
    fsd: true,
    gananciatotal: 'S/ 9000',
    gananciamensual: 'S/ 600',
    montoapertura: 15000,
    masinfo: <div id="compara" className="form-item col-lg-12" style={{marginTop: '10%'}}>
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    // onClick={() => {
        //   setCategory('resumeHistory');
        //   setSelectHistory(row);
        //   setOpenModal(true);
        // }}
         />
  </div>
  }];



  const data_icons = {
    columns: [
      {
        'label': 'Institucion Financiera',
        'field': 'id',
        'sort': 'asc'
      },
      {
        'label': 'Tasa de interés (TEA/TREA)',
        'field': 'tasa',
        'sort': 'asc'
      },
      {
        'label': 'Ganancia Total (aprox)',
        'field': 'gananciatotal',
        'sort': 'asc'
      },
      {
        'label': 'Ganancia Mensual (aprox)',
        'field': 'gananciamensual',
        'sort': 'asc'
      },
      {
        'label': 'Monto Mínimo de Apertura',
        'field': 'montoapertura',
        'sort': 'asc'
      },
      {
        'label': 'Mas Info',
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
      financieras.map((cliente, i) => {


        const tasa = 
          <span className="d-inline-block">
            <div style={{textAlign: 'center'}}>{`${cliente.tasa.toFixed(1)}%`}</div>
          {cliente.fsd === true ? 
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">FSD</Tooltip>}>
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
      
    
        const ganTotal = monto * cliente.tasa / 100;
        const ganMensual = (monto * cliente.tasa / 100) / plazo * 30;
        return {
          'id': cliente.id,
          'tasa': tasa,
          'gananciatotal':`S/ ${ganTotal.toLocaleString('en')}`,
          'gananciamensual': `S/ ${ganMensual.toLocaleString('en', {maximumFractionDigits: 2})}`,
          'montoapertura': `S/ ${(cliente.montoapertura).toLocaleString('en', {maximumFractionDigits: 2})}`,
          'masinfo': cliente.masinfo
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


  
  

  function idFormatter(cell, row) {
    return (
      <div id="compara" className="form-item col-lg-12" style={{ textAlign: 'center'}}>
    {productos.id}
  </div>
    );
  }


  

    return (
      <React.Fragment>
        <div  style={{backgroundColor: 'white', padding: '0px'}}>
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', marginBottom: '10px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Simula tu Depósito a Plazo</span></div>
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
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Valor del Depósito:</span></div>
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
                                    style={{width: '50%', marginLeft: '110px'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div>
            <input type="text" id="days" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '12%'}}/>
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
                                    style={{width: '50%', marginLeft: '110px'}}
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
          
                    
         <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }} onClick={() => {
                setPernat(false);
                }}>Simular</button>
          
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>

{pernat ? <div></div> 
:
<div style={{margin: '20px'}}>

<div className="row" style={{marginLeft: '0px'}}>
    <div  style={categoria === 'resultados' ? { backgroundColor: '#e01e2b', width: '8%', color: 'white', borderTopLeftRadius: '5px', cursor: 'pointer', textAlign: 'center', borderRightColor: 'white', borderRightWidth: '1px', borderRightStyle: 'solid'} : { backgroundColor: '#146cae', width: '8%', color: 'white', borderTopLeftRadius: '5px', cursor: 'pointer', textAlign: 'center', borderRightColor: 'white', borderRightWidth: '1px', borderRightStyle: 'solid'}} onClick={()=>{setCategoria('resultados');}}>Resultados</div>
    <div  style={categoria === 'resultados' ? { backgroundColor: '#146cae', width: '8%', color: 'white', borderTopRightRadius: '5px', cursor: 'pointer', textAlign: 'center'} : { backgroundColor: '#e01e2b', width: '8%', color: 'white', borderTopRightRadius: '5px', cursor: 'pointer', textAlign: 'center'}} onClick={()=>{setCategoria('relacion');}}>Relacion</div>
</div>

{categoria === 'resultados' ? 
<MDBTable responsive hover>
      <MDBTableHead style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center'}} columns={data_icons.columns} />
      <MDBTableBody style={{textAlign: 'center'}} rows={data_icons.rows} />
    </MDBTable>

  :
  <MDBTable responsive bordered hover>
      <MDBTableHead style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center'}} columns={data_icons.columns2} />
      <MDBTableBody style={{textAlign: 'center'}} rows={data_icons.rows2} />
    </MDBTable>

}


<div className="row" style={{paddingRight: '50px', paddingLeft: '50px'}}>
  <div className="col-lg-12" style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%', color: '#e01e2b', fontSize: '1rem', border: '1px solid #e01e2b', borderRadius: '5px', padding: '5px'}}>¿Quieres conocer nuestros productos de inversion con mejores tasas? <a href="/pe">¡haz click aqui!</a></div>
  </div>
  </div>

  
}



 
      {/* <Modal show={openModal} backdrop="static" size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => {setOpenModal(false)}}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center'}}>
        <div>Que es esto?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setOpenModal(false)}}>
            Cancelar
          </Button>
          <Button variant="primary" style={{backgroundColor: '#e01e2b', borderColor: '#e01e2b'}} onClick={() => {setOpenModal(false)
                                                   window.location.href='/pe/productos-de-inversion' }}>
            Me interesa
          </Button>
        </Modal.Footer>
      </Modal> */}

</React.Fragment>
    )
}


export default SimuladorPernat;