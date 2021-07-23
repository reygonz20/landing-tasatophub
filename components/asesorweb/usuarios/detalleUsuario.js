import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { FaRegEdit, FaUserTimes, FaTimes, FaArrowLeft, FaExternalLinkAlt, FaCamera, FaCopy  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import {dataSimulaciones, dataInversiones, dataDpfDirecto} from './dataDetalleUsuario'

const detalle = ({usuarioSeleccionado, setOpenDetalle, mobile, tab}) => {


    // <Button color='blue' onClick={() => {
    //     navigator.clipboard.writeText(`Nombres: ${data.nombres}, Apellidos: ${data.apellidos}, Celular: ${data.celular}, Correo: ${data.email}, DNI: ${data.documento}`)
    //     setCopied(true)
    //     }}>
    //     <i className="fas fa-copy fa-lg"></i>
    //   </Button>

    const mapDetalle = usuarioSeleccionado.map((item) => {
        return (
    <React.Fragment>
        <div className="row" style={{marginLeft: '10px'}}>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Nombres:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.nombre}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Apellidos:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.apellido}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Celular:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.celular}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                DNI:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.numdoc}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Correo:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.correo}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Ciudad:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.ciudad.nombre}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'}}>
                Fecha de nacimiento:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', fontSize: '0.8rem', marginBottom: '0px'} : {textAlign: 'left', height: '30px', fontSize: '0.8rem'}}>
                {item.fecha_nac ? item.fecha_nac : <span></span> }
            </div>
            </div>
                                    
    </React.Fragment>
        )
    })

    const dataDpfs = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Código',
            field: 'codigo',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Monto',
            field: 'monto',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Plazo (días)',
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Trea',
            field: 'trea',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Subastado El',
            field: 'fechasubasta',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Situación',
            field: 'situacion',
            sort: 'asc',
            width: 150
          },
          {
            label: 'IFI Ganadora',
            field: 'ifiganadora',
            sort: 'asc',
            width: 150
          }
        ],
        rows:
        
        usuarioSeleccionado[0].usuario_inversion.map((item, i) => {
    
            
    
          return {          
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
              plazo: `${item.plazo_nominal} días`,
              trea: `${item.tasa_nominal} %`,
              fechasubasta: item.fecha_creacion
            //   moment(item.subastado).format('DD/MM/YYYY')
              ,
              situacion: item.situacion_inversion.nombre,
              ifiganadora: item.proveedor_inversion.razon_social,
          }
        })
      };

    return (
        <React.Fragment>
        <div className="row">
            <div className="col-md-10">
                <button type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', marginRight: '5px' }} ><FaCamera /></button>
                <button type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#146cae', borderColor: '#146cae', color: 'white', marginTop: '10px', marginRight: '5px' }} ><FaCopy /></button>
                <button onClick={()=>{}} type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#363439', borderColor: '#363439', color: 'white', marginTop: '10px' }} ><FaExternalLinkAlt onClick={()=>{}} /></button>
        
            </div>
            <div className="col-md-2" style={{textAlign: 'end'}}>
                <FaArrowLeft style={{color: 'black', width: '20px', marginRight: '10px'}} onClick={() => setOpenDetalle(false)} />
                <FaTimes style={{color: 'black', width: '20px'}} onClick={() => setOpenDetalle(false)} />
            </div>
        </div>

        <div className="row" style={{width: '90%', border: '1px solid grey', margin: 'auto', marginTop: '20px', paddingBottom: '20px'}}>
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h4 style={{fontWeight: '600', fontSize: '1.2rem', color: '#146cae', marginTop: '20px', marginLeft: '0px'}}>Información de usuario</h4>
            </div>

        <div className="col-lg-6 col-md-6 col-sm-12" style={{marginTop: '30px'}}>
            {mapDetalle}
            </div>
        
        
        
        </div>

{ tab === '1' ?

        <div style={{width: '90%', border: '1px solid grey', margin: 'auto', marginTop: '20px', padding: '10px'}}>
            <div style={{width: '100%', border: '1px solid grey', margin: 'auto', marginBottom: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: '600', fontSize: '1.2rem', marginBottom: '10px'}}>Simulaciones</h4>

                <MDBDataTable
                noRecordsFoundLabel={"No hay datos para mostrar"}
                searching={false}
exportToCSV={true}
noBottomColumns={true}
paging={false}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataDpfs}
    
/>
                
            </div>

            <div style={{width: '100%', border: '1px solid grey', margin: 'auto', marginBottom: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: '600', fontSize: '1.2rem', marginBottom: '10px'}}>Inversiones</h4>
                
                <MDBDataTable
                noRecordsFoundLabel={"No hay datos para mostrar"}
                searching={false}
exportToCSV={true}
noBottomColumns={true}
paging={false}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataInversiones}
    
/>

            </div>
        
        
        </div>

        :
        null
    
}

        </React.Fragment>
    )
}

export default detalle;




