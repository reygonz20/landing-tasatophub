import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { FaRegEdit, FaUserTimes, FaTimes, FaArrowLeft, FaExternalLinkAlt, FaCamera, FaCopy  } from "react-icons/fa";
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import './detalle.css'
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const detalleAperturadas = ({detalleFila, setDetalleFila, mobile, dataSelectedRow, selectedRow}) => {


    const comentarios = [{usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}, {usuario: 'Reinaldo González', fecha: 'hace 3 meses', mensaje: 'Este es un comentario de prueba para ver que tal se ve en este espacio! =D'}]

    const mapDetallesAperturadas = dataSelectedRow.map((item) => {
        return (
    <React.Fragment>
        <div className="row" style={{width: '90%', border: '1px solid grey', margin: 'auto', marginTop: '20px', paddingBottom: '20px'}}>
        
        <div className="col-lg-6 col-md-6 col-sm-12" style={{marginTop: '0px'}}>
        <h4 style={{fontWeight: '600', fontSize: '1.2rem', color: '#146cae', marginTop: '20px', marginLeft: '0px', marginBottom: '20px'}}>Información de Subasta</h4>
            <div className="row" style={{marginLeft: '10px'}}>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Monto:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Monto Final:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`S/ ${Intl.NumberFormat("en-US").format(item.monto_real)}`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Plazo:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`${item.plazo_nominal} días`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Plazo Final:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`${item.plazo_nominal} días`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Tasa:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`${item.tasa_nominal} %`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Tasa Final:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {`${item.tasa_real} %`}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Ubicación:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.ciudad_inversion.nombre}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Código:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.codigo}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Apertura:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.fecha_concretado_institucion
            // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
            }
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
            Fecha de Registro:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.fecha_creacion
            // moment(item.datosProducto.inicio).format('DD/MM/YYYY')
            }
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
                {item.usuario_inversion.nombre}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Apellidos:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center',  height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.usuario_inversion.apellido}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Tipo de documento:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.tipodocumento_inversion.nombre}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Número de documento:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
            {item.usuario_inversion.numdoc}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Celular:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.usuario_inversion.celular}
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                Correo:
            </div>
            <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                {item.usuario_inversion.correo}
            </div>
            </div>
        </div>            
        
        </div>
                                    
    </React.Fragment>
        )
    })

    return (
        <React.Fragment>
        <div className="row">
            <div className="col-md-10">
                <button onClick={()=>{}} type="button" className="btn btn-outline-danger" style={{width: '50px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '10px', marginRight: '5px' }} ><FaCamera /></button>
                
            </div>
            <div className="col-md-2" style={{textAlign: 'end'}}>
                <FaArrowLeft style={{color: 'black', width: '20px', marginRight: '10px'}} onClick={() => setDetalleFila(false)} />
                <FaTimes style={{color: 'black', width: '20px'}} />
            </div>
        </div>

        {mapDetallesAperturadas}

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

    


        </React.Fragment>
    )
}

export default detalleAperturadas;