import React, { Component, useEffect, useState } from "react";
import './menu.css'
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar } from 'react-bootstrap';
import { Callbacks } from "jquery";
import { FaFileInvoiceDollar } from "react-icons/fa";
import $ from 'jquery';
import Simulador from '../../deposito-plazo-fijo/simuDpfResultados'
import Home from '../home/home-pernat'
import SimuInv from '../../productos-de-inversion/simuInvResultados'
import Pendientes from '../pedientes/pendientes'
import Concretadas from '../concretadas/concretadas'
import Rechazadas from '../rechazadas/rechazadas'
import EditarUsuario from '../datosusuario/editar-datos'
import Producto from '../../../components/deposito-plazo-fijo-seleccion/seccion/dpf-seleccion'
import ProductoInv from '../../../components/productos-de-inversion-seleccion/seccion/inverseleccion'
import Link from 'next/link'
import Router from 'next/router';

const Menu = ({mobile, setMobile, midScreen, openMenu, setOpenMenu, botonMenu, botonMenu2}) => {

const [showResults, setShowResults] = useState(false);


const [pernat, setPernat] = useState(true);

const pernatArea = true;

const [pathname, setPathname] = useState('');
// const [whref, setWhref] = useState({})

useEffect(() => {
    setPathname(window.location.pathname);
    // setWhref(window.location)
  }, []);


    return(
        <React.Fragment>


            
            <nav className={ !mobile ? "mostrar normal" : "normal"} style={{padding: '30px'}}>
                <ul>
                    <li><Link href=""><a><FaFileInvoiceDollar style={{width: '20px', color: 'black'}} /><span style={{color: 'black'}}>Depósito a Plazo Fijo</span></a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/dpf"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/dpf' ? {color: '#e01e2b'}:{}}>Simulador</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/dpf/pendientes"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/dpf/pendientes' ? {color: '#e01e2b'}:{}}>Pendientes</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/dpf/concretadas"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/dpf/concretadas' ? {color: '#e01e2b'}:{}}>Concretadas</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/dpf/rechazadas"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/dpf/rechazadas' ? {color: '#e01e2b'}:{}}>Rechazadas</a></Link></li>
                </ul>
                <ul style={{marginTop: '40px'}}>
                <li><Link href=""><a><FaFileInvoiceDollar style={{width: '20px', color: 'black'}} /><span style={{color: 'black'}}>Productos de Inversión</span></a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/inv"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/inv' ? {color: '#e01e2b'}:{}}>Simulador</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/inv/pendientes"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/inv/pendientes' ? {color: '#e01e2b'}:{}}>Pendientes</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/inv/concretadas"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/inv/concretadas' ? {color: '#e01e2b'}:{}}>Concretadas</a></Link></li>
                    <li style={{marginLeft: '30px'}}><Link href="/zonaprivada/beta/dashboard/pernat/inv/rechazadas"><a style={pathname === '/zonaprivada/beta/dashboard/pernat/inv/rechazadas' ? {color: '#e01e2b'}:{}}>Rechazadas</a></Link></li>
                </ul>
            </nav>
            
                    
        

<div id="principal" className={openMenu ? "main" : "main2"} style={{minHeight: 'calc(100vh - 135px)', border: '1px solid grey', borderRadius: '3px'}}>
    <div className="scrolldiv" style={mobile ? {overflow: 'scroll', padding: '3px'} : {overflow: 'scroll'}}>
        {pathname == '/zonaprivada/beta/dashboard/pernat' ?
            <Home mobile={mobile}/>
        : pathname == '/zonaprivada/beta/dashboard/pernat/dpf'  ?
            <div style={{padding: '30px'}}>
                <Simulador pernatArea={pernatArea} showResults={showResults} setShowResults={setShowResults} pernat={pernat} setPernat={setPernat}/>
            </div>
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv' ?
            <div style={{padding: '30px'}}>
                <SimuInv mobile={mobile} pernat={pernat} setPernat={setPernat} /> 
            </div>
        : pathname == '/zonaprivada/beta/dashboard/pernat/dpf/pendientes' ?
            <Pendientes mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/pendientes' ?
            <Pendientes mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/dpf/concretadas' ?
            <Concretadas mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/concretadas' ?
            <Concretadas mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/dpf/rechazadas' ?
            <Rechazadas mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/rechazadas' ?
            <Rechazadas mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/editar-usuario' ?
        <EditarUsuario mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/dpf/producto' ?
        <Producto pernat={pernat} mobile={mobile} pathname={pathname} />
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/producto' ?
        <ProductoInv pernat={pernat} mobile={mobile} pathname={pathname} />
        : 
        null
    }

    </div>
</div>


</React.Fragment>
    )
}

export default Menu;