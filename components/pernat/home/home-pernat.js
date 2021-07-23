import React, { Fragment, useState, useEffect, useContext } from 'react';
import $ from 'jquery';
import { RiAuctionFill, RiLineChartFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa"
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import './home.css'
import GenerateCharts from '../charts/generateCharts'
import HistoryTimeline from '../historytimeline/historyTimeline'
import PanelDetalles from '../panelDetalles/panelDetalles'
import Link from 'next/link'
import PernatContext from '../../../context/user/PernatContext'
import axios from 'axios'
import Url from '../../url'

const BodyPernat = ({mobile}) => {

    const jumpTo = (href) => {
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 1500);
        console.log(top)
    };

    // onClick={ () => { jumpTo('#referencias') } } href="#referencias"
    
    const { usuario, setUsuario } = useContext(PernatContext)

    const [openModal, setOpenModal] = useState(false);
    const [resume, setResume] = useState('');
    const [moneda, setMoneda] = useState('');
    const [panelDet, setPanelDet] = useState(false);
    const [checkPlazo, setCheckPlazo] = useState(false);
    const [checkFechaVen, setCheckFechaVen] = useState(false);
    const [monedaList, setMonedaList] = useState('');

    const getMoneda = async () => {

        let res = await axios.get(`${Url}/tipodocumento`)
        setMonedaList(res.data.data)
                  
      }

      useEffect(() => {
        getMoneda()
    }, []);

    const cambioResume = (arg) => {
        setResume(arg)
    }

    const cambioMoneda = (arg) => {
        setMoneda(arg)
    }

    const cambioOpenModal = (arg) => {
        setOpenModal(arg)
    }

    const cambioPanelDet = (arg) => {
        setPanelDet(arg)
    }

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
    moneda: "Dolares",
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
moneda: "Dolares",
monto: 25000,
plazo: 682,
producto: "OTROS",
serie: null,
tiporeg: "USER",
trea: 3,
ubicacion: 1,
vencimiento: "29/10/2021"}
    ]

    const detalleProducto = productos.filter(item => item.producto === resume && item.idmoneda === moneda)

    const headers = [
        {
          label: <div style={{textAlign: 'center'}}><span>Name</span></div>,
          key: 'name'
        },
        {
          label: 'Position',
          key: 'position'
        },
        {
          label: 'Office',
          key: 'office'
        },
        {
          label: 'Age',
          key: 'age'
        },
        {
          label: 'Start date',
          key: 'date'
        },
        {
          label: 'Salary',
          key: 'salary'
        }
      ]


    const data = {
        columns: [
          {
            label: 'Institución',
            field: 'institucion',
            sort: 'asc',
            width: 150,
            text: {textAlign: 'center'}
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
            label: 'Inicio',
            field: 'inicio',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Tasa',
            field: 'tasa',
            sort: 'asc',
            width: 100
          }
        ],
        rows: detalleProducto.map((item, i) => {

          return {
              institucion: item.ifi,
              codigo: 'N/D',
              monto: item.monto,
              inicio: item.apertura,
              tasa: item.trea           
          }
        })
      };

      

    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        panelDet === true ? 
        <React.Fragment>

<PanelDetalles
                mobile={mobile}
                arr={productos.filter(item => item.producto === resume && item.idmoneda === moneda)}
                product={
                  resume === "dpf" ? "DPF" : resume === "cts" ? "CTS" : "Inv"
                }
                onClose={setPanelDet}
                cambioMoneda={cambioMoneda}
                cambioResume={cambioResume}
                openModal={openModal}
                cambioOpenModal={cambioOpenModal}
                cambioPanelDet={cambioPanelDet}
              />



        </React.Fragment>
 :
        <React.Fragment>

            <div style={{borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', boxShadow: '2px 2px 5px #999', borderRadius: '3px'}}>
            <h4 style={!mobile ? {fontWeight: 'bold', padding: '1%', fontSize: '18px', color: '#146cae'} : {fontWeight: 'bold', padding: '5%', fontSize: '18px', color: '#146cae'}}>Productos Tasatop</h4>
        
        {/* <a onClick={ () => { jumpTo('#resumen') } } href="#resumen">ir al div de abajo</a> */}
        
        <div className="row" style={{display: 'flex', alignContent: 'center', textAlign: 'center'}}>
            <div className="caja col-sm-6" style={{paddingLeft: '5%', paddingRight: '5%', marginBottom: '3%', marginTop: '3%'}}>
                <Link href="/zonaprivada/beta/dashboard/pernat/dpf">
                    <div className="carta row" style={{cursor: 'pointer', backgroundColor: '#146cae', width: '60%', margin: 'auto', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-12">
                        <RiAuctionFill style={{width: '100px', color: 'white', height: '100px'}}/>
                    </div>
                    <div className="col-lg-12">
                        <span style={{color: 'white', lineHeight: '100%', fontSize: '1.2rem', fontWeight: 'bold'}}>Simula tu Depósito <br></br>a Plazo Fijo</span>
                    </div>
                </div>
                </Link>
            </div>
            <div className="caja col-sm-6" style={!mobile ? {paddingLeft: '5%', paddingRight: '5%', marginTop: '3%', marginBottom: '3%'} : {paddingLeft: '5%', paddingRight: '5%', marginTop: '3%', marginBottom: '10%'}}>
                <Link href="/zonaprivada/beta/dashboard/pernat/inv">
                    <div className="row carta" style={{cursor: 'pointer', backgroundColor: '#e01e2b', width: '60%', margin: 'auto', height: '200px', borderRadius: '5px', display: 'flex', justifyContent: 'center' }}>
                    <div className="col-lg-12">
                        <RiLineChartFill style={{width: '100px', color: 'white', height: '100px', marginTop: '20px'}}/>
                    </div>
                    <div className="col-lg-12">
                        <span style={{color: 'white', lineHeight: '100%', fontSize: '1.2rem', fontWeight: 'bold'}}>Elige tu Oportunidad de Inversión</span>
                    </div>
                </div>
            </Link>
            </div>
        </div>
        </div>



        <div id="resumen" style={!mobile ? {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', boxShadow: '2px 2px 5px #999', borderRadius: '3px'} : {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', boxShadow: '2px 2px 5px #999', borderRadius: '3px'}}>
        
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Mi Resumen</h4>

<div className="row" style={{textAlign: 'center'}}>
    {resume && moneda === 2 ? 
    <>
        {<div className="col-md-6" style={{textAlign: 'center', padding: '80px'}}>
        <FaTimes style={{position: 'absolute', right: '0', marginRight: '90px', marginTop: '10px'}} onClick={()=> setMoneda('')} />
            <div style={{border: '1px solid #BEBEBE'}}>
            <h4 style={{fontWeight: '600', borderBottom: '2px solid #146cae', padding: '15px'}}>Detalles</h4>
            <div style={{padding: '20px'}}>
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
            <h4 style={{fontWeight: '600', padding: '15px', fontSize: '1rem'}} onClick={()=>setPanelDet(true)}><span style={{cursor: 'pointer'}}>Ver más detalles</span></h4>
            </div>            
    </div>}
    </>
    :    
    <>
    <div className="col-md-6">
            <h4 style={{fontWeight: '600'}}>Soles</h4>
            
            {!localStorage.getItem('tasaToken') || !localStorage.getItem('tasaID') || !localStorage.getItem('tasaRol') || !localStorage.getItem('tasaUsuario') || !localStorage.getItem('tasaApellido') || !localStorage.getItem('tasaCorreo') 
            ? null 
            :
            <GenerateCharts cambioMoneda={cambioMoneda} cambioResume={cambioResume} moneda={1} setResume={setResume} setPanelDet={setPanelDet} productos={productos} mobile={mobile} setMoneda={setMoneda} style={{margin: 'auto'}}/>
            }
        {mobile === true ?
        <div className="col-lg-12" style={{border: '1px solid grey', marginTop: '10px', marginBottom: '20px'}}>
        <p style={{marginBottom: '0px', marginTop: '20px', fontSize: '1.2rem', color: 'black'}}>S/ 75,500.00</p>
        <p style={{fontSize: '0.8rem', marginBottom: '10px'}}>Total en Soles</p>
    </div> 
        :
            null
        }
            
    </div> </>}


    {resume && moneda === 1 ? 
    <>
        {<div className="col-md-6" style={{textAlign: 'center', padding: '80px'}}>
        <FaTimes style={{position: 'absolute', right: '0', marginRight: '90px', marginTop: '10px'}} onClick={()=> setMoneda('')} />
            <div style={{border: '1px solid #BEBEBE'}}>
            <h4 style={{fontWeight: '600', borderBottom: '2px solid #146cae', padding: '15px'}}>Detalles</h4>
            <div style={{padding: '20px'}}>
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
            <h4 style={{fontWeight: '600', padding: '15px', fontSize: '1rem'}} onClick={()=>setPanelDet(true)}><span style={{cursor: 'pointer'}}>Ver más detalles</span></h4>
            </div>            
    </div>}
    </>
    : 
    <>
    <div className="col-md-6">
            <h4 style={{fontWeight: '600'}}>Dólares</h4>

            {!localStorage.getItem('tasaToken') || !localStorage.getItem('tasaID') || !localStorage.getItem('tasaRol') || !localStorage.getItem('tasaUsuario') || !localStorage.getItem('tasaApellido') || !localStorage.getItem('tasaCorreo') 
            ? null 
            :
            <GenerateCharts cambioMoneda={cambioMoneda} cambioResume={cambioResume} moneda={2} resume={resume} setResume={setResume} setPanelDet={setPanelDet} productos={productos} mobile={mobile} setMoneda={setMoneda} />
            }
            {mobile === true ?
        <div className="col-lg-12" style={{border: '1px solid grey', marginTop: '10px', marginBottom: '20px'}}>
        <p style={{marginBottom: '0px', marginTop: '20px', fontSize: '1.2rem', color: 'black'}}>$ 32,500.00</p>
        <p style={{fontSize: '0.8rem', marginBottom: '10px'}}>Total en Dólares</p>
    </div> 
        :
            null
        }
    </div>
    </>}
</div>


{ !mobile ?
<div className="row" style={{width: '98%', border: '1px solid grey', textAlign: 'center', margin: 'auto', marginTop: '30px'}}>
    <div className="col-lg-6">
        <p style={{marginBottom: '0px', marginTop: '20px', fontSize: '1.2rem', color: 'black'}}>S/ 75,500.00</p>
        <p style={{fontSize: '0.8rem', marginBottom: '10px'}}>Total en Soles</p>
    </div>

    <div className="col-lg-6">
        <p style={{marginBottom: '0px', marginTop: '20px', fontSize: '1.2rem', color: 'black'}}>$ 32,500.00</p>
        <p style={{fontSize: '0.8rem', marginBottom: '10px'}}>Total en Dólares</p>
    </div>
</div> 
: 
null
}

        
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '2%', paddingTop: '1%', paddingBottom: '1%'}}>¿Deseas agregar otros productos ajenos a TasaTop?</h4>
        
        <div className="row" style={{marginTop: '2%'}}>           
            <div className="col-lg-12" style={{display: 'flex', alignContent: 'center', textAlign: 'center', marginBottom: '2%'}}>
            <button type="button" onClick={handleOpen} className="btn btn-outline-danger" style={{width: '50%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'}}>Agregar Producto</button>
            </div>
        </div>
    

        </div>

        <div style={!mobile ? {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid white', marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', boxShadow: '2px 2px 5px #999', borderRadius: '3px'} : {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', boxShadow: '2px 2px 5px #999', borderRadius: '3px'}}>
        
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Historial Financiero</h4>

        <div style={{padding: '20px'}}>
        <HistoryTimeline arr={_.orderBy(productos, ['producto'])} />
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
                        <option>Institucion 1</option>
                        <option>Institucion 2</option>
                        <option>Institucion 3</option>
                        <option>Institucion 4</option>
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
                    <div className="col-lg-4">
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
                    <div className="col-lg-6">
                    <Row>
                        <Col>
                            <Form.Check name="grupo1" id={'inline-radio-2'} type="radio" onClick={()=>{setCheckPlazo(false), setCheckFechaVen(true)}} label="Fecha de vencimiento" aria-label="radio 1" />
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

export default BodyPernat;