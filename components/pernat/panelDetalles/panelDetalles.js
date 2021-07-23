import React, { Fragment, useState, useEffect, useContext } from 'react';
import $ from 'jquery';
import _ from 'lodash'
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit, FaTelegramPlane, FaInfo, FaCheck, FaTrash  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup, Popover, Row, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import Timelines from '../timeline/timelines'
import Link from 'next/link'
import PernatContext from '../../../context/user/PernatContext'

const PanelDetalles = ({mobile, arr,  cambioPanelDet, cambioMoneda, cambioResume}) => {


  const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
    console.log(top)
};

    const detalleProducto = []

    const [openEdit, setOpenEdit] = useState(false);
    const [checkPlazo, setCheckPlazo] = useState(false);
    const [checkFechaVen, setCheckFechaVen] = useState(false);


    const ordered = _.orderBy(arr, ['monto']).reverse()


    const popover = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Editar Producto
        </Popover.Content>
      </Popover>
    );
    
    const popover2 = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Eliminar Producto
        </Popover.Content>
      </Popover>
    );

    const data = {
        columns: [
          {
            label: 'Producto',
            field: 'producto',
            sort: 'asc',
            width: 150,
            text: {textAlign: 'center'}
          },
          {
            label: 'Serie',
            field: 'serie',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Código TasaTop',
            field: 'codigotasa',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Moneda',
            field: 'moneda',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Monto',
            field: 'monto',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Plazo (días)',
            field: 'plazo',
            sort: 'asc',
            width: 150,
            text: {textAlign: 'center'}
          },
          {
            label: 'Tasa de interes',
            field: 'tasa',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Fecha de apertura',
            field: 'inicio',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Fecha de vencimiento',
            field: 'vencimiento',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Institución financiera',
            field: 'ifi',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Opciones',
            field: 'opciones',
            sort: 'asc',
            width: 100
          }
        ],
        rows: arr.map((item, i) => {

          return {
              producto: item.producto,
              serie: '-',
              codigotasa: '-',
              moneda: item.moneda,
              monto: item.monto,
              plazo: item.plazo,
              tasa: item.trea,
              inicio: item.apertura,
              vencimiento: item.vencimiento,
              ifi: item.ifi,
              opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            

              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                  <FaRegEdit onClick={()=> {handleOpen()}} style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} />
                </OverlayTrigger>
                        
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
                <FaTrash style={{width: '25px', cursor: 'pointer'}} />
                </OverlayTrigger>
      
                </div>,

          }
        })
      };


    const handleOpen = () => {
        setOpenEdit(true)
    }
    const handleClose = () => {
        setOpenEdit(false)
    }

    return (
        <React.Fragment>
            
    
            <Timelines arr={ordered} />


            <div className="row" style={{padding: '20px', border: '1px solid #BEBEBE', marginTop: '20px'}}>
                
            
            <div className="col-lg-12">
            <div className="col-lg-12" style={{borderBottom: '1px solid #BEBEBE', marginBottom: '10px'}}></div>
            <MDBDataTable
            paging={false}
        noBottomColumns={true}
        entriesLabel=""
        entriesOptions={[]}
        displayEntries={false}
        searching={false}
        info={false}
            bordered
            small
            data={data}
            
        />
</div>
{/* 
<a onClick={()=> {
    window.location.href = "#resumen", cambioPanelDet(false)
    }}>volver</a> */}

{/* <a onClick={ () => { jumpTo('#resumen') } } href="#resumen">ir al div de abajo</a> */}

<div className="col-lg-12" style={{textAlign: 'center'}}>
<button type="button" onClick={()=> {
    window.location.href = "#resumen", cambioPanelDet(false)
    }} className="btn btn-outline-danger" style={{width: '15%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'}}>Volver</button>
</div>
        </div>



        <Modal size="lg" show={openEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto financiero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formGroupProduc">
        <Form.Label style={{color: 'black'}}>Producto</Form.Label>
                    <Form.Control disabled as="select" defaultValue="Seleccione un producto">
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
                <div className="row">
                    <div className="col-lg-2">
                        <h3 style={{fontSize: '1rem', color: 'black'}}>¿Conoces esta información?</h3>
                    </div>
                    <div className="col-lg-5">
                    <Row>
                        <Col>
                            <Form.Check name="grupo1" id={'inline-radio-1'} type="radio" onClick={()=>{setCheckPlazo(true), setCheckFechaVen(false)}} label="Plazo" aria-label="radio 1" />
                        </Col>
                        <Col>
                            <Form.Label style={{color: 'black'}}>Plazo (días)</Form.Label>
                            <Form.Control disabled={checkPlazo === false ? true : false } />
                        </Col>
                    </Row>
                    </div>
                    <div className="col-lg-5">
                    <Row>
                        <Col>
                            <Form.Check name="grupo1" id={'inline-radio-2'} type="radio" onClick={()=>{setCheckPlazo(false), setCheckFechaVen(true)}} label="Plazo" aria-label="radio 1" />
                        </Col>
                        <Col>
                            <Form.Label style={{color: 'black'}}>Fecha de vencimiento</Form.Label>
                            <Form.Control type="date" disabled={checkFechaVen === false ? true : false } />
                        </Col>
                    </Row>
                    </div>
                </div>

                
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

export default PanelDetalles;