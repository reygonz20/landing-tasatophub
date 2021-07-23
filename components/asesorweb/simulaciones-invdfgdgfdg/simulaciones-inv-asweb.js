import React, { Fragment, useState, useEffect } from 'react';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

import dataRechazadas from './rechazadas'
import dataCanceladas from './canceladas';
import dataTerminadas from './terminadas';
import dataPorCerrar from './porcerrar'
import dataCerradas from './cerradas';
import dataFacturadas from './facturadas';

import Detalle from './detalleUsuario'


import './subastas-asweb.css'


const BodySubastasAsweb = ({mobile}) => {

    const [tab, setTab] = useState('1');
    const [selectedUser, setSelectedUser] = useState(true)


    return (
        <React.Fragment>
           
       <div className="row">
           <div className="col-md-3" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Validación de Usuario</h4></div>
           <div className="col-md-2" style={{marginLeft: '40px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Soles:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>3,965,501.00</span></div>
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Dolares:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>0.00</span></div>

       </div>

       <button className="btn" onClick={() => setSelectedUser(true)}>Seleccionar Usuario</button>

    <div style={{padding: '20px', marginTop: '20px'}}>

{ selectedUser === true ? <Detalle selectedUser={selectedUser} setSelectedUser={setSelectedUser} mobile={mobile} /> :

       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => setTab(t)}
    >
        <Tab eventKey="1" title="Por validar">
        {!dataPorCerrar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
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
    data={dataPorCerrar}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="2" title="Por Aperturar">
        {!dataCerradas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
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
    data={dataCerradas}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="3" title="Por rechazar">
        {!dataRechazadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
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
</div>
}
      </Tab>
      <Tab eventKey="4" title="Rechazadas">
        {!dataTerminadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
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
    data={dataTerminadas}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="5" title="Aperturadas">
        {!dataCanceladas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
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
    data={dataCanceladas}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="6" title="Facturadas">
        {!dataFacturadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
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
</div>
}
      </Tab>
    </Tabs>

}

    </div>
       
        </React.Fragment>
    )
}

export default BodySubastasAsweb;