import React, { Component, useEffect, useState } from "react";
import Link from 'next/link'
import './menu.css'
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar } from 'react-bootstrap';
import { Callbacks } from "jquery";
import { FaFileInvoiceDollar, FaDollarSign, FaUserAlt, FaTable } from "react-icons/fa";
import $ from 'jquery';
import Home from '../home/home-ifi'
import Subasta from '../subastas/subastas-ifi'
import Campaña from '../campaña-dpf/campañadpf'
import Tarifario from '../tarifario/tarifario-ifi'

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
                    <li><FaUserAlt style={{width: '20px', color: 'black', marginRight: '5px'}} /><Link href="/zonaprivada/beta/dashboard/ifi/subasta"><a style={pathname === '/zonaprivada/beta/dashboard/ifi/subasta' ? {color: '#e01e2b'}:{}}>Depósitos a Plazo Fijo</a></Link></li>
                    {/* <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf">Simulador</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/pendientes">Pendientes</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/concretadas">Concretadas</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/dpf/rechazadas">Rechazadas</a></li> */}
                </ul>
                {/* <ul style={{marginTop: '40px'}}>
                <li><FaDollarSign style={{width: '20px', color: 'black'}} /><Link href="/zonaprivada/beta/dashboard/ifi/dpf-directo"><a>Campañas DPF</a></Link></li> */}
                    {/* <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv">Simulador</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/pendientes">Pendientes</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/concretadas">Concretadas</a></li>
                    <li style={{marginLeft: '30px'}}><a href="/zonaprivada/beta/dashboard/pernat/inv/rechazadas">Rechazadas</a></li> */}
                {/* </ul> */}
                <ul style={{marginTop: '40px'}}>
                <li><FaTable style={{width: '20px', color: 'black', marginRight: '5px'}} /><Link href="/zonaprivada/beta/dashboard/ifi/tarifario"><a style={pathname === '/zonaprivada/beta/dashboard/ifi/tarifario' ? {color: '#e01e2b'}:{}}>Tarifario</a></Link></li>
                </ul>
            </nav>
            
                    
        

<div id="principal" className={openMenu ? "main" : "main2"} style={{minHeight: 'calc(100vh - 135px)', border: '1px solid grey', borderRadius: '3px'}}>
    <div className="scrolldiv" style={mobile ? {overflow: 'scroll', padding: '3px'} : {overflow: 'scroll'}}>
        {pathname == '/zonaprivada/beta/dashboard/ifi' ?
            <Home mobile={mobile}/>
        : pathname == '/zonaprivada/beta/dashboard/ifi/subasta'  ?
            <div style={{}}>
                <Subasta />
            </div>
        // : pathname == '/zonaprivada/beta/dashboard/ifi/dpf-directo' ?
        //     <div style={{}}>
        //         <Campaña /> 
        //     </div>
        : pathname == '/zonaprivada/beta/dashboard/ifi/tarifario' ?
            <Tarifario pathname={pathname} />
        : 
        null
    }

    </div>
</div>


</React.Fragment>
    )
}

export default Menu;