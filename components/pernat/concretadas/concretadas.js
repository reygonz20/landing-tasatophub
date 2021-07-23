import React, { Fragment, useState, useEffect } from 'react';
import { RiAuctionFill, RiLineChartFill, RiAlertFill } from "react-icons/ri";
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit  } from "react-icons/fa";
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link'
import moment from 'moment'

const ConcretadasPernat = ({mobile, pathname}) => {


    const [openModal, setOpenModal] = useState(false);


    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    const simulaciones = [{"codigo":"SPF331421000263","crypt":"461DC7FD7B1B31D69DBF37758C7D18B0","monto":15000.00,"moneda":1,"plazo":365,"trea": 4.300,"subastado":1619474400202,"situacion":"F","ifiGanador":"Financiera Credinka"}]



    const dataPendientes = {
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
            label: 'Plazo',
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Tasa (TREA)',
            field: 'tasa',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Fecha de registro',
            field: 'registro',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Institución financiera',
            field: 'ifi',
            sort: 'asc',
            width: 100
          }
        ],
        rows: simulaciones.map((item, i) => {
    
          return {          
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
              plazo: `${item.plazo} días`, 
              tasa: `${item.trea} %`,         
              registro: moment(item.inicio).format('DD/MM/YYYY'),
              ifi: item.ifiGanador
          }
        })
      };

      const dataPendientesInv = {
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
            label: 'Plazo',
            field: 'plazo',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Tasa (TEA)',
            field: 'tasa',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Fecha de registro',
            field: 'registro',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Empresa',
            field: 'ifi',
            sort: 'asc',
            width: 100
          }
        ],
        rows: simulaciones.map((item, i) => {
    
          return {          
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
              plazo: `${item.plazo} días`, 
              tasa: `${item.trea} %`,         
              registro: moment(item.inicio).format('DD/MM/YYYY'),
              ifi: 'Acorde'
          }
        })
      };


    return (
        <React.Fragment>
           {pathname == '/zonaprivada/beta/dashboard/pernat/dpf/concretadas' ? 
        <div style={!mobile ? { marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px',  borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey',  marginLeft: '0px', marginRight: '0px', padding: '5%', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Simulaciones concretadas</h4>
        { simulaciones.length ?
<>
<div style={{padding: '30px', marginTop: '50px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paging={false}
paginationLabel={["Anterior", "Siguiente"]}
searching={false}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataPendientes}
    
/>
</div>
</>

    :
    <>
            <RiAlertFill style={!mobile ? {width: '10%', color: '#BEBEBE', marginTop: '10%'} : {width: '30%', color: '#BEBEBE', marginTop: '15%'}}/>
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ninguna simulación concretada</h4>
            </>
}
        
        </div>
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/concretadas' ? 
        <div style={!mobile ? { marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey',  marginLeft: '0px', marginRight: '0px', padding: '5%', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Productos de inversión concretados</h4>

        { simulaciones.length ?
<>
<div style={{padding: '30px', marginTop: '50px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paging={false}
paginationLabel={["Anterior", "Siguiente"]}
searching={false}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataPendientesInv}
    
/>
</div>
</>

    :

            <>
            <RiAlertFill style={!mobile ? {width: '10%', color: '#BEBEBE', marginTop: '10%'} : {width: '30%', color: '#BEBEBE', marginTop: '15%'}}/>
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ningun producto de inversión concretado</h4>
        </>
}
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

export default ConcretadasPernat;