import React, { Fragment, useState, useEffect } from 'react';
import { RiAuctionFill, RiLineChartFill } from "react-icons/ri";
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import './home.css'
import GenerateCharts from '../charts/generateCharts'
import {FaInfo, FaBars, FaHome, FaUserAlt, FaDollarSign} from "react-icons/fa"
import Link from 'next/link'

const BodyIfi = ({mobile}) => {


    const [openModal, setOpenModal] = useState(false);
    const [resume, setResume] = useState('');
    const [moneda, setMoneda] = useState('');
    const [panelDet, setPanelDet] = useState('');


    const productos = [
    {apertura: "08/02/2021",
    crypt: "29397F9B600F295A6B609BF90A6FDD88",
    estado: "ACTIVO",
    id: 1366,
    idifi: 25,
    idmoneda: 1,
    idproducto: 4,
    ifi: "Banco Pichincha",
    moneda: "Soles",
    monto: 7500,
    plazo: 341,
    producto: "CTA-AHORRO",
    serie: null,
    tiporeg: "USER",
    trea: 2,
    ubicacion: 1,
    vencimiento: "15/01/2022"},
    {apertura: "17/12/2019",
crypt: "B0CD77690E5CF5F2A5D9FF010DB42BD9",
estado: "ACTIVO",
id: 1363,
idifi: 999999998,
idmoneda: 1,
idproducto: 11,
ifi: "- Otra Institución",
moneda: "Soles",
monto: 25000,
plazo: 682,
producto: "OTROS",
serie: null,
tiporeg: "USER",
trea: 3,
ubicacion: 1,
vencimiento: "29/10/2021"},
{apertura: "07/07/2020",
crypt: "29A5742179F12FA2B88C52960A6ADDDC",
estado: "ACTIVO",
id: 1365,
idifi: 999999999,
idmoneda: 1,
idproducto: 2,
ifi: "- Varias Instituciones",
moneda: "Soles",
monto: 25000,
plazo: 703,
producto: "ESTRUCTURADO",
serie: null,
tiporeg: "USER",
trea: 3.5,
ubicacion: 1,
vencimiento: "10/06/2022"},
{apertura: "13/09/2020",
crypt: "71E1C27EC5F49B023A81287DF6345C43",
estado: "ACTIVO",
id: 1367,
idifi: 29,
idmoneda: 1,
idproducto: 3,
ifi: "Banco BBVA Perú",
moneda: "Soles",
monto: 15000,
plazo: 348,
producto: "CTS",
serie: null,
tiporeg: "USER",
trea: 2.5,
ubicacion: 1,
vencimiento: "27/08/2021"},
{apertura: "08/02/2021",
    crypt: "29397F9B600F295A6B609BF90A6FDD88",
    estado: "ACTIVO",
    id: 1366,
    idifi: 25,
    idmoneda: 2,
    idproducto: 4,
    ifi: "Banco Pichincha",
    moneda: "Soles",
    monto: 7500,
    plazo: 341,
    producto: "CTA-AHORRO",
    serie: null,
    tiporeg: "USER",
    trea: 2,
    ubicacion: 1,
    vencimiento: "15/01/2022"},
    {apertura: "17/12/2019",
crypt: "B0CD77690E5CF5F2A5D9FF010DB42BD9",
estado: "ACTIVO",
id: 1363,
idifi: 999999998,
idmoneda: 2,
idproducto: 11,
ifi: "- Otra Institución",
moneda: "Soles",
monto: 25000,
plazo: 682,
producto: "OTROS",
serie: null,
tiporeg: "USER",
trea: 3,
ubicacion: 1,
vencimiento: "29/10/2021"}
    ]



    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <React.Fragment>
            <div style={{borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', boxShadow: '2px 2px 5px #999', borderRadius: '3px'}}>
            {/* <h4 style={!mobile ? {fontWeight: 'bold', padding: '1%', fontSize: '18px', color: '#146cae'} : {fontWeight: 'bold', padding: '5%', fontSize: '18px', color: '#146cae'}}>Productos Tasatop</h4> */}
        <div className="row" style={{display: 'flex', alignContent: 'center', textAlign: 'center'}}>
            <div className="caja col-sm-12 col-lg-12" style={{paddingLeft: '5%', paddingRight: '5%', marginBottom: '3%', marginTop: '3%'}}>
                <Link href="/zonaprivada/beta/dashboard/ifi/subasta">
                    <div className="carta row" style={{cursor: 'pointer', backgroundColor: '#146cae', width: '30%', margin: 'auto', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-12">
                        <FaUserAlt style={{width: '100px', color: 'white', height: '100px'}}/>
                    </div>
                    <div className="col-lg-12">
                        <span style={{color: 'white', lineHeight: '100%', fontSize: '1.2rem', fontWeight: 'bold'}}>Depósitos a Plazo Fijo</span>
                    </div>
                </div>
                </Link>
            </div>
            {/* <div className="caja col-sm-6" style={!mobile ? {paddingLeft: '5%', paddingRight: '5%', marginTop: '3%', marginBottom: '3%'} : {paddingLeft: '5%', paddingRight: '5%', marginTop: '3%', marginBottom: '10%'}}>
                <Link href="/zonaprivada/beta/dashboard/ifi/dpf-directo">
                    <div className="row carta" style={{cursor: 'pointer', backgroundColor: '#e01e2b', width: '60%', margin: 'auto', height: '200px', borderRadius: '5px', display: 'flex', justifyContent: 'center' }}>
                    <div className="col-lg-12">
                        <FaDollarSign style={{width: '100px', color: 'white', height: '100px', marginTop: '20px'}}/>
                    </div>
                    <div className="col-lg-12">
                        <span style={{color: 'white', lineHeight: '100%', fontSize: '1.2rem', fontWeight: 'bold'}}>Campañas DPF</span>
                    </div>
                </div>
            </Link>
            </div> */}
        </div>
        </div>



        <div style={!mobile ? {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid white', marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', boxShadow: '2px 2px 5px #999', borderRadius: '3px'} : {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', boxShadow: '2px 2px 5px #999', borderRadius: '3px'}}>
        
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', marginBottom: '20px'}}>Depósito a Plazo Fijo Persona</h4>

<div className="row" style={{textAlign: 'center'}}>
    <div className="col-md-6">
            <h4 style={{fontWeight: '600'}}>Soles</h4>
            
            <GenerateCharts moneda={1} setResume={setResume} setPanelDet={setPanelDet} productos={productos} mobile={mobile} setMoneda={setMoneda} style={{margin: 'auto'}}/>
    </div>
    <div className="col-md-6">
            <h4 style={{fontWeight: '600'}}>Dólares</h4>
            <GenerateCharts moneda={2} setResume={setResume} setPanelDet={setPanelDet} productos={productos} mobile={mobile} setMoneda={setMoneda} />
    </div>
</div>

    

        </div>
    



        <Modal size="lg" show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto financiero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formGroupProd">
                    <Form.Label style={{color: 'black'}}>Producto</Form.Label>
                    <Form.Control as="select" defaultValue="Seleccione un producto">
                        <option>Seleccione un producto</option>
                        <option>Depósito a plazo fijo</option>
                        <option>Compensación por tiempo de servicio</option>
                        <option>Otros</option>
                        <option>Productos estructurados</option>
                        <option>Cuentas de ahorro</option>
                        <option>Cuentas corrientes</option>
                        <option>Fondos mutuos</option>
                        <option>Fondos privados</option>
                        <option>Factoring</option>
                        <option>Seguros personales</option>
                        <option>Bienes raíces / FIBRA</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupMon">
                    <Form.Label style={{color: 'black'}}>Moneda</Form.Label>
                    <Form.Control as="select" defaultValue="Seleccione un tipo de moneda">
                        <option>Seleccione un tipo de moneda</option>
                        <option>Soles</option>
                        <option>Dólares</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupMonto">
                    <Form.Label style={{color: 'black'}}>Monto</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>S/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formGroupTrea">
                    <Form.Label style={{color: 'black'}}>Trea</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formGroupUbic">
                    <Form.Label style={{color: 'black'}}>Ubicación</Form.Label>
                    <Form.Control as="select" defaultValue="Lima y Callao">
                        <option>Lima y Callao</option>
                        <option>Andahuaylas</option>
                        <option>Arequipa</option>
                        <option>Ayacucho</option>
                        <option>Cajamarca</option>
                        <option>El Pedregal (Majes)</option>
                        <option>Huamachuco</option>
                        <option>Huancavelica</option>
                        <option>Huancayo</option>
                        <option>Huanta</option>
                        <option>Huánuco</option>
                        <option>Pichanaki</option>
                        <option>Tingo María</option>
                        <option>Trujillo</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupTrea">
                    <Form.Label style={{color: 'black'}}>Fecha de apertura</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formGroupIns">
                    <Form.Label style={{color: 'black'}}>Institución Financiera</Form.Label>
                    <Form.Control as="select" defaultValue="Seleccione una institución financiera">
                        <option>Seleccione una institución financiera</option>
                        <option>Soles</option>
                        <option>Dólares</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupIns">
                    <Form.Label style={{color: 'black'}}>Descripción</Form.Label>
                    <Form.Control as="textarea">
                        
                    </Form.Control>
                </Form.Group>

                
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={handleClose}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>



        </React.Fragment>
    )
}

export default BodyIfi;