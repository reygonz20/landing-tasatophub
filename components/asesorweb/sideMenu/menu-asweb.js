import React, { Component, useEffect, useState } from "react";
import './menu.css'
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar } from 'react-bootstrap';
import { Callbacks } from "jquery";
import { FaFileInvoiceDollar, FaDollarSign, FaUserAlt, FaTable } from "react-icons/fa";
import { RiAuctionFill, RiLineChartFill } from "react-icons/ri";
import $ from 'jquery';
import Usuarios from '../usuarios/usuarios-asweb'
import SimulacionesDpf from '../simulaciones-dpf/simulaciones-dpf-asweb'
import SimulacionesInv from '../simulaciones-inv/simulaciones-inv-asweb'
import Link from 'next/link'

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


            
            <nav className={ !mobile ? "mostrar normal" : "normal"} style={{padding: '20px'}}>
                <ul style={{minWidth: '180px'}}>
                <li><FaUserAlt style={{width: '20px', color: 'black', marginRight: '5px'}} /><Link href="/zonaprivada/beta/dashboard/aseweb/usuarios"><a style={pathname === '/zonaprivada/beta/dashboard/aseweb/usuarios' ? {color: '#e01e2b'}:{}}>Usuarios</a></Link></li>
                    {/* <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf">Simulador</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/pendientes">Pendientes</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/concretadas">Concretadas</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/rechazadas">Rechazadas</a></li> */}
                </ul>
                <ul style={{marginTop: '40px'}}>
                <li><RiAuctionFill style={{width: '20px', color: 'black', marginRight: '5px'}} /><Link href="/zonaprivada/beta/dashboard/aseweb/simulaciones-dpf"><a style={pathname === '/zonaprivada/beta/dashboard/aseweb/simulaciones-dpf' ? {color: '#e01e2b'}:{}}>Depósitos a Plazo Fijo</a></Link></li>
                
                    {/* <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv">Simulador</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/pendientes">Pendientes</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/concretadas">Concretadas</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/rechazadas">Rechazadas</a></li> */}
                </ul>
                <ul style={{marginTop: '40px'}}>
                <li><RiAuctionFill style={{width: '20px', color: 'black', marginRight: '5px'}} /><Link href="/zonaprivada/beta/dashboard/aseweb/simulaciones-inv"><a style={pathname === '/zonaprivada/beta/dashboard/aseweb/simulaciones-inv' ? {color: '#e01e2b'}:{}}>Inversiones</a></Link></li>
                
                    {/* <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv">Simulador</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/pendientes">Pendientes</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/concretadas">Concretadas</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/rechazadas">Rechazadas</a></li> */}
                </ul>
            </nav>
            
                    
        

<div id="principal" className={openMenu ? "main" : "main2"} style={{minHeight: 'calc(100vh - 135px)', border: '1px solid grey', borderRadius: '3px'}}>
    <div className="scrolldiv" style={mobile ? {overflow: 'scroll', padding: '3px'} : {overflow: 'scroll'}}>
        {pathname == '/zonaprivada/beta/dashboard/aseweb/usuarios' ?
            <Usuarios mobile={mobile}/>
        : pathname == '/zonaprivada/beta/dashboard/aseweb/simulaciones-dpf'  ?
            
                <SimulacionesDpf />

        : pathname == '/zonaprivada/beta/dashboard/aseweb/simulaciones-inv'  ?

        <SimulacionesInv />
        
        : null
    }

    </div>
</div>


</React.Fragment>
    )
}

export default Menu;