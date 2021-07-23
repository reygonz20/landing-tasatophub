import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaRegEdit, FaUserTimes, FaTimes, FaArrowLeft, FaExternalLinkAlt, FaCamera, FaCopy  } from "react-icons/fa";
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import {dataSimulaciones, dataInversiones, dataDpfDirecto} from './dataDetalleUsuario'
import './detalle.css'

const detalle = ({selectedUser, setSelectedUser, mobile}) => {


    const comentarios = [{usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}]


    return (
        <React.Fragment>
        <div className="row">
            <div className="col-md-10">
                <button type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', marginRight: '5px' }} ><FaCamera /></button>
                <button type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#146cae', borderColor: '#146cae', color: 'white', marginTop: '10px', marginRight: '5px' }} ><FaCopy /></button>
                <button type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#363439', borderColor: '#363439', color: 'white', marginTop: '10px' }} ><FaExternalLinkAlt /></button>
        
            </div>
            <div className="col-md-2" style={{textAlign: 'end'}}>
                <FaArrowLeft style={{color: 'black', width: '20px', marginRight: '10px'}} onClick={() => setSelectedUser(false)} />
                <FaTimes style={{color: 'black', width: '20px'}} />
            </div>
        </div>

        <div className="row" style={{width: '90%', border: '1px solid grey', margin: 'auto', marginTop: '20px', paddingBottom: '20px'}}>
           

        <div className="col-lg-6 col-md-6 col-sm-12" style={{marginTop: '0px'}}>
        <h4 style={{fontWeight: '600', fontSize: '1.2rem', color: '#146cae', marginTop: '20px', marginLeft: '0px', marginBottom: '20px'}}>Información de Subasta</h4>
            <div className="row" style={{marginLeft: '10px'}}>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Codigo:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            SPF331421000060
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Monto:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
            S/ 500.00
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Plazo(días):
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            365
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Registro:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            25/01/2021
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Entidades participantes:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            Financiera ProEmpresa 5.00% <br></br>
            Caja Rural Del Centro 4.80% <br></br>
            Caja Maynas 2.50%
            </div>
            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12" style={{marginTop: '0px'}}>
        <h4 style={{fontWeight: '600', fontSize: '1.2rem', color: '#146cae', marginTop: '20px', marginLeft: '0px', marginBottom: '20px'}}>Información de usuario</h4>
            <div className="row" style={{marginLeft: '10px'}}>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Nombres:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                Luis Fernando
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Apellidos:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                Campos Palpa
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Celular:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                989138349
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                DNI:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                <span style={{}}>45237967</span><span style={{color: '#e01e2b', marginLeft: '10px'}}>A nombre de: 19945877</span>
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Correo:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                lfercampos@gmail.com
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Ciudad:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                Lima y Callao
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'}}>
                Fecha de nacimiento:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', fontSize: '0.8rem', marginBottom: '0px'} : {textAlign: 'left', height: '30px', fontSize: '0.8rem'}}>
                12 enero 1988
            </div>
            </div>
        </div>
                
        
        </div>

        <div className="row" style={{width: '90%', margin: 'auto', marginTop: '20px'}}>
            <h4 className="col-lg-12" style={{color: '#146cae', fontWeight: '600', width: '100%', borderBottom: '2px solid #146cae'}}>Comentarios</h4>

{comentarios.map((item) => {
    return (
        <>
        <h4 style={{fontSize: '0.9rem', marginTop: '20px', fontWeight: '600'}}>{item.usuario}</h4><h4 style={{marginLeft: '5px', fontSize: '0.75rem', marginTop: '22px'}}>{item.fecha}</h4>
        <h4 className="col-lg-12" style={{marginTop: '10px', fontSize: '0.9rem', fontWeight: '500'}}>{item.mensaje}</h4>
    </>
    )
})}

            



            <textarea className="require comentario" style={{width: '100%', minHeight: '150px', marginTop: '20px',}}></textarea>

            <button type="button" className="btn btn-outline-danger" style={{ backgroundColor: '#146cae', color: 'white', marginTop: '20px', borderColor: '#146cae'}}>Agregar Comentario</button>
        </div>




        <div style={{width: '90%', border: '1px solid grey', margin: 'auto', marginTop: '20px', padding: '10px'}}>
            <div style={{width: '100%', border: '1px solid grey', margin: 'auto', marginBottom: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: '600', fontSize: '1.2rem', marginBottom: '10px'}}>Simulaciones</h4>

                <MDBDataTable
                noRecordsFoundLabel={"No hay datos para mostrar"}
                searching={false}
                responsive
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
    data={dataSimulaciones}
    
/>
                
            </div>

            <div style={{width: '100%', border: '1px solid grey', margin: 'auto', marginBottom: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: '600', fontSize: '1.2rem', marginBottom: '10px'}}>Inversiones</h4>
                
                <MDBDataTable
                noRecordsFoundLabel={"No hay datos para mostrar"}
                searching={false}
                responsive
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

            <div style={{width: '100%', border: '1px solid grey', margin: 'auto', marginBottom: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: '600', fontSize: '1.2rem', marginBottom: '10px'}}>DPF Directo</h4>
                
                <MDBDataTable
                noRecordsFoundLabel={"No hay datos para mostrar"}
                searching={false}
                responsive
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
    data={dataDpfDirecto}
    
/>

            </div>
        
        
        </div>
    


        </React.Fragment>
    )
}

export default detalle;