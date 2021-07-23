import React, { Fragment, useState, useEffect } from 'react';
import { RiAuctionFill, RiLineChartFill } from "react-icons/ri";
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import GenerateCharts from '../charts/generateCharts'
import {FaInfo, FaBars, FaHome, FaUserAlt, FaDollarSign} from "react-icons/fa"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './index.css'
import Link from 'next/link'


const CampañaDPF = ({mobile}) => {

    const [tab, setTab] = useState('1');
    const [openModal, setOpenModal] = useState(false);
    const [resume, setResume] = useState('');
    const [moneda, setMoneda] = useState('');
    const [panelDet, setPanelDet] = useState('');
    

    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <React.Fragment>
            
            <div className="row">
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Campañas DPF</h4></div>
           <div className="col-md-2" style={{marginLeft: '40px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Soles:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>3,965,501.00</span></div>
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Dolares:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>0.00</span></div>

       </div>

    <div style={{padding: '20px', marginTop: '20px'}}>
       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => setTab(t)}
    >
      <Tab eventKey="1" title="Pendiente">
    <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>

      </Tab>
      <Tab eventKey="2" title="Enviado">
    <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        
      </Tab>
    </Tabs>
    </div>


        </React.Fragment>
    )
}

export default CampañaDPF;