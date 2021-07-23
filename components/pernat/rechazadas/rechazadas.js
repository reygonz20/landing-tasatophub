import React, { Fragment, useState, useEffect } from 'react';
import { RiAuctionFill, RiLineChartFill, RiAlertFill } from "react-icons/ri";
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link'

const RechazadasPernat = ({mobile, pathname}) => {


    const [openModal, setOpenModal] = useState(false);


    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <React.Fragment>
             {pathname == '/zonaprivada/beta/dashboard/pernat/dpf/rechazadas' ? 
        <div style={!mobile ? { marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Simulaciones rechazadas</h4>

            <RiAlertFill style={!mobile ? {width: '10%', color: '#BEBEBE', marginTop: '10%'} : {width: '30%', color: '#BEBEBE', marginTop: '15%'}}/>
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ninguna simulación rechazada</h4>
        
        
        </div>
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/rechazadas' ? 
        <div style={!mobile ? { marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Productos de inversión rechazados</h4>

            <RiAlertFill style={!mobile ? {width: '10%', color: '#BEBEBE', marginTop: '10%'} : {width: '30%', color: '#BEBEBE', marginTop: '15%'}}/>
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ningun producto de inversión rechazado</h4>
        
        
        </div>
        :
        null
        }
        


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
                    <Form.Label>Trea</Form.Label>
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
                    <Form.Label>Fecha de apertura</Form.Label>
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

export default RechazadasPernat;