import React, { Fragment, useState } from 'react';
import Link from 'next/link'

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

const SimuInversiones2 = () => {


  const [monto, setMonto] = useState(25000)
  const [plazo, setPlazo] = useState(183)
  const [moneda, setMoneda] = useState('S/')

  const handleMonto = (value) => {
    setMonto(value);
  };

  const handlePlazo = (value) => {
    setPlazo(value);
  };

  // const headerStyle = { backgroundColor: '#146cae' };
  // const rowStyle = { height: '80px' };


  const ids = [<img src="/assets/images/financieras/financiera01.png"></img>,
                <img src="/assets/images/financieras/financiera02.png"></img>,
                <img src="/assets/images/financieras/financiera03.png"></img>,
                <img src="/assets/images/financieras/financiera04.png"></img>,
                <img src="/assets/images/financieras/financiera05.png"></img>,
                <img src="/assets/images/financieras/financiera06.png"></img>,
                <img src="/assets/images/financieras/financiera07.png"></img>]

  const productosInversion = [{
    producto: 'Proyecto Educativo',
    renta: 'Fija, mensual',
    rentabilidad: '12% en soles o 10% en dolares',
    plazomin: '1 ó 2 años',
    montomin: 'S/ 35,000.00 o $ 10,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Factoring y carteras',
    renta: 'Proyectada',
    rentabilidad: '12% (proyectada)',
    plazomin: '1 ó 2 años',
    montomin: '$ 6,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Fondo inmobiliario',
    renta: 'Fija trimestral',
    rentabilidad: '7% (proyectada)',
    plazomin: '3.5 años',
    montomin: '$ 20,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Acciones y bonos',
    renta: 'Renta fija condicionada',
    rentabilidad: '12% neto',
    plazomin: '1 ó 2 años',
    montomin: '$ 10,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Portafolio Global - Balanceado',
    renta: 'Proyectada',
    rentabilidad: '6.72% (promedio de los ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Portafolio Global - Renta',
    renta: 'Proyectada',
    rentabilidad: '3.72% (promedio de los ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  },
  {
    producto: 'Portafolio Global - Acciones',
    renta: 'Proyectada',
    rentabilidad: '9.13% (promedio de los ultimos 3 años)',
    plazomin: '1 ó 2 años',
    montomin: '$ 50,000.00',
    masinfo: <div id="compara" className="form-item col-lg-12">
    <input type="submit" value="Me interesa" name="source" id="boton-compara" className="btn" style={{height: '35px', backgroundColor: '#e01e2b', color: 'white'}}
    onClick={() => {
      window.location.href='/pe/productos-de-inversion/seleccion'
        }}
         />
  </div>
  }];

  

  const data_icons = {
    columns: [
      {
        'label': 'Empresa',
        'field': 'producto',
        'sort': 'asc'
      },
      {
        'label': 'Tipo de renta',
        'field': 'renta',
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
    rows:
    productosInversion.map((cliente, i) => {
    
        return {
          'producto': cliente.producto,
          'renta': cliente.renta,
          'rentabilidad': cliente.rentabilidad,
          'plazomin': cliente.plazomin,
          'montomin': cliente.montomin,
          'masinfo': cliente.masinfo
        };
      })
  };



    return (
      <React.Fragment>
        <div  style={{backgroundColor: 'white', padding: '0px'}}>
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '10px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Elige tu Producto de Inversión</span></div>
  <div className="row">
        <div className="form-content col-lg-12" style={{textAlign: 'center'}}>
      <form method="post" id="compare" action="/depositos-plazo/result">
        <div className="form-compare row">

          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Moneda:</span></div>
            <div id="currency-div" className="radio-group">
            <button aria-selected="true" type="button" className="btn btn-outline-danger" style={moneda == 'S/' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('S/');
                }}>Soles</button>
            <button type="button" className="btn btn-outline-danger" style={moneda == '$' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('$');
                }}>Dolares</button>
              {/* <label for="soles"><input type="radio" id="soles" name="currency" class="action-key" checked="checked" value="MN" /><span class="btn">Soles</span></label>
              <label for="dolares"><input type="radio" id="dolares" name="currency" class="action-key" value="ME" /><span class="btn" >Dólares</span></label> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto de inversión:</span></div>
            <div>

              <input type="text" id="balance" onChange={handleMonto} value={`${moneda} ${monto.toLocaleString('en')}`} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center'}} />
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
                                    style={{width: '50%', marginLeft: '80px'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
          <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select placeholder="Seleccione" name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option value="6m">6 Meses</option>
                              
                <option value="1a">1 Año</option>
                              
                <option value="2a">2 Años</option>

                <option value="3a">3 Años</option>
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>
                    {/* <input type="hidden" id="exclude" name="exclude" value="all" /> */}
          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
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
          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
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
          
                    
          <div id="compara" className="form-item col-lg-12" style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <input type="submit" value="Simular" name="source" id="boton-compara" className="btn" style={{backgroundColor: '#e01e2b', color: 'white'}} />
          </div>
          
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>

<div style={{margin: '20px'}}>
{/* <div>
            <BootstrapTable
              version="4"
              data={productos}
              pagination={productos.length >= 10 ? true : false}
              options={{
                noDataText: 'No se encontraron consultas para mostrar',
              }}
              bordered={false}
            >
              <TableHeaderColumn dataField="id" width="190" dataSort={true}>
                Producto
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="tasa"
                width="270"
                isKey
                dataSort={true}
              >
                Tasa de Interés (TEA / TREA)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="gananciatotal"
                width="220"
                dataSort={true}
              >
                Ganancia Total (aprox)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="gananciamensual"
                width="250"
                dataSort={true}
              >
                Ganancia Mensual (aprox)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="montoapertura"
                width="260"
                dataSort={true}
              >
                Monto Minimo de Apertura
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="masinfo"
                dataSort={true}
                width="200"
                dataFormat={opcionFormatter}
              >
                Más Info
              </TableHeaderColumn>
              
            </BootstrapTable>
          </div> */}
  {/* <BootstrapTable bordered={ false } keyField='id' data={productos} columns={ columns } rowStyle={rowStyle} /> */}


  <MDBTable responsive hover>
      <MDBTableHead style={{backgroundColor: '#146cae', color: 'white', textAlign: 'center'}} columns={data_icons.columns} />
      <MDBTableBody style={{textAlign: 'center'}} rows={data_icons.rows} />
    </MDBTable>
  </div>

  <div className="row" style={{paddingRight: '50px', paddingLeft: '50px'}}>
  <div className="col-lg-12" style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%', color: '#e01e2b', fontSize: '1rem', border: '1px solid #e01e2b', borderRadius: '5px', padding: '5px'}}>¿Quieres ver nuestras tasas para depositos a plazo fijo? <a href="/pe">¡haz click aqui!</a></div>
  </div>
</React.Fragment>
    )
}


export default SimuInversiones2;