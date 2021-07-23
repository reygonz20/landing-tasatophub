import React, { Fragment, useState, useEffect } from 'react';
import { RiAuctionFill, RiLineChartFill, RiAlertFill } from "react-icons/ri";
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit, FaRegCheckCircle  } from "react-icons/fa";
import {FiCheckCircle} from "react-icons/fi"
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup, Popover, } from 'react-bootstrap';
import Link from 'next/link'
import moment from 'moment'
import axios from 'axios'

import Url from '../../url'

const PendientesPernat = ({mobile, pathname}) => {


    const [openModal, setOpenModal] = useState(true);
    const [resumeModal, setResumeModal] = useState('eso es todo');
    const [codigoSelected, setCodigoSelected] = useState('');
    const [opSelected, setOpSelected] = useState(0);
    const [operaciones, setOperaciones] = useState([]);
    const [eliminado, setEliminado] = useState([]);
    const ipEnv = "192.168.0.100"
    const usuarioModif = localStorage.getItem("tasaUsuario");


    const getOperaciones = async () => {

      let res = await axios.get(`${Url}/inversion`)
      setOperaciones(res.data.data)
      console.log(res.data.data)
  }

  const deleteOperacion = async (id, usuModificacion, ip) => {

    let userInfo = { usuario_modificacion: usuModificacion, ip_modificacion: ip }
    let res = await axios.delete(`${Url}/inversion/${id}`, {data: userInfo})
    setEliminado(res.data)
    getOperaciones()
    // window.location.reload()
    // console.log(res.data)

    // let userInfo = { correo: correo, clave: clave }
    // let res = await axios.post('http://161.97.67.227:3000/api/usuariologin',userInfo)

}
  
  useEffect(() => {
    getOperaciones()
  
  }, []);

    const popover = (
      <Popover id="popover-basic">
        <Popover.Content style={{color: 'black'}}>
          Eliminar registro
        </Popover.Content>
      </Popover>
    );

    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
        setResumeModal('')
    }

    const pendientes = operaciones.filter(item => item.id_situacion == 1 && item.usuario_inversion.id == localStorage.getItem('tasaID') && item.estado >= 1);
    const simulaciones = [{"codigo":"SPF331421000263","crypt":"461DC7FD7B1B31D69DBF37758C7D18B0","monto":10000.00,"moneda":1,"plazo":365,"trea": 4.300,"subastado":1619474400202,"situacion":"F","ifiGanador":"Financiera Credinka"}]


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
            label: 'Rentabilidad (TREA)',
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
          },
          {
            label: 'Opciones',
            field: 'opciones',
            sort: 'asc',
            width: 150
          }
        ],
        rows: pendientes.map((item, i) => {
    
          return {          
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
              plazo: `${item.plazo_nominal} días`, 
              tasa: `${item.tasa_nominal} %`,         
              registro: item.fecha_creacion
              // moment(item.inicio).format('DD/MM/YYYY')
              ,
              ifi: item.proveedor_inversion.razon_social,
              opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
                
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaTimes style={{width: '25px', marginLeft: '60px', cursor: 'pointer'}} onClick={()=> {setResumeModal('eliminar'), setCodigoSelected(item.codigo), setOpSelected(item.id), setOpenModal(true)}} />
                </OverlayTrigger>
                
                
                 </div>
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
            label: 'Rentabilidad (TEA)',
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
          },
          {
            label: 'Opciones',
            field: 'opciones',
            sort: 'asc',
            width: 150
          }
        ],
        rows: pendientes.map((item, i) => {
    
          return {          
              numero: i + 1,
              codigo: item.codigo,
              monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
              plazo: `${item.plazo} días`, 
              tasa: `${item.trea} %`,         
              registro: moment(item.inicio).format('DD/MM/YYYY'),
              ifi: 'Acorde',
              opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
                
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaTimes style={{width: '25px', marginLeft: '60px', cursor: 'pointer'}} onClick={()=> {setResumeModal('eliminar'), setCodigoSelected(item.codigo), setOpenModal(true)}} />
                </OverlayTrigger>
                
                
                 </div>
          }
        })
      };


    return (
        <React.Fragment>
            
        {pathname == '/zonaprivada/beta/dashboard/pernat/dpf/pendientes' ? 
        <div style={!mobile ? {marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey', borderBottom: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', boxShadow: '2px 2px 5px #999', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Simulaciones pendientes</h4>
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
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ninguna simulacion pendiente</h4>
        
        <div className="row" style={{marginTop: '2%'}}>           
            <div className="col-lg-12" style={{display: 'flex', alignContent: 'center', textAlign: 'center', marginBottom: '2%'}}>
            <Link href="/zonaprivada/beta/dashboard/pernat/dpf"><button type="button" className="btn btn-outline-danger" style={!mobile ? {width: '20%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'} : {width: '40%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'}}>Simular DPF</button></Link>
            </div>
        </div>
</>
        }
        </div>
        : pathname == '/zonaprivada/beta/dashboard/pernat/inv/pendientes' ? 
        <div style={!mobile ? { marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', borderRadius: '3px', textAlign: 'center'} : {marginTop: '20px', borderTop: '1px solid grey', marginLeft: '0px', marginRight: '0px', padding: '5%', boxShadow: '2px 2px 5px #999', borderRadius: '3px', textAlign: 'center'}}>
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae', textAlign: 'left'}}>Productos de inversión pendientes</h4>

            
            {
              simulaciones.length ?
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
            
            <h4 style={{fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginTop: '0%', paddingTop: '1%', paddingBottom: '1%'}}>No posee ningun producto de inversión pendiente</h4>
        
        <div className="row" style={{marginTop: '2%'}}>           
            <div className="col-lg-12" style={{display: 'flex', alignContent: 'center', textAlign: 'center', marginBottom: '2%'}}>
            <Link href="/zonaprivada/beta/dashboard/pernat/inv"><button type="button" className="btn btn-outline-danger" style={!mobile ? {width: '20%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'} : {width: '50%', margin: 'auto', backgroundColor: '#e01e2b', color: 'white'}}>Simular Inversión</button></Link>
            </div>
        </div>
        </>
        }


        </div>
        :
        null
        }


        <Modal size="md" show={openModal} onHide={handleClose} style={resumeModal === 'eso es todo' ? {marginTop: '120px'} : {marginTop: '200px'}}>
        { resumeModal === 'eso es todo' ? 
        <>
        <Modal.Body>
            <div className="col-lg-12" style={{textAlign: 'center'}}>
            <div className="col-lg-12" style={{textAlign: 'center'}}>
              <FiCheckCircle size="80px" style={{color: 'green', marginTop: '30px' }} />
              </div>
              <h3 style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.5rem'}}>¡Es todo por ahora!</h3>              
              <p style={{marginTop: '20px', fontSize: '1.0rem'}}>Ahora nos toca ponernos en contacto contigo para validar la información registrada.</p>
            </div>
        </Modal.Body>
        <Modal.Footer style={{textAlign: 'center'}}>
          <div className="col-lg-12" style={{textAlign: 'center'}}>
          <Button style={{backgroundColor: '#e01e2b', color: 'white', borderColor: '#e01e2b'}} onClick={handleClose}>
            Aceptar
          </Button>
          </div>
          
        </Modal.Footer>
        </>
        : resumeModal === 'eliminar' ?
        <>
        <Modal.Body>
            <div className="col-lg-12" style={{textAlign: 'center'}}>
              <p style={{marginTop: '20px', fontSize: '1.0rem'}}>¿Está seguro de que desea eliminar el registro actual con código: <strong>{codigoSelected}</strong>?</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={handleClose}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} onClick={ resumeModal === 'eliminar' ? ()=>{
            console.log(opSelected, usuarioModif, ipEnv),
            deleteOperacion(opSelected, usuarioModif, ipEnv)
            setOpenModal(false)
            
            // setOpenModal(false)
          } : ()=>{handleClose()}}>
            Aceptar
          </Button>
        </Modal.Footer>
        </>
        :
        null
        }
      </Modal>



        </React.Fragment>
    )
}

export default PendientesPernat;