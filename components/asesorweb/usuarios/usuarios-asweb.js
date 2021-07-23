import React, { Fragment, useState, useEffect, Component } from 'react';
import $ from 'jquery';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Modal, Button, Tooltip, OverlayTrigger, Form, InputGroup, Popover, Row, Col } from 'react-bootstrap';
import moment from 'moment'
import { FaRegEdit, FaUserTimes, FaTrash, FaRegSquare, FaRegCheckSquare, FaEnvelope, FaIdBadge, FaMobileAlt, FaPlusSquare  } from "react-icons/fa";
import Formulario from './formulario'

import axios from 'axios'
import Url from '../../url'


import './usuarios-asweb.css'

import Detalle from './detalleUsuario'


const BodyUsuariosAsweb = ({mobile}) => {

  const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
    console.log(top)
};

// onClick={ () => { jumpTo('#referencias') } } href="#referencias"/

    const [tab, setTab] = useState('1');
    const [selectedUser, setSelectedUser] = useState(0);
    const [openDetalle, setOpenDetalle] = useState(false)

    const [listaUsuarios, setListaUsuarios] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [modalResume, setModalResume] = useState('');
    
    const usuarioSeleccionado = listaUsuarios.filter(item => item.id == selectedUser)

    const [error, setError] = useState([]);

    const [codigoProducto, setCodigoProducto] = useState('')
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [tipoDoc, setTipoDoc] = useState("")
    const [tipoDocEnv, setTipoDocEnv] = useState("")
    const [getTipoDoc, setGetTipoDoc] = useState([])
    const [getCiudades, setGetCiudades] = useState([])
    const [ciudad, setCiudad] = useState("")
    const [numDoc, setNumDoc] = useState("")
    const [celular, setCelular] = useState("")
    const [ciudadEnv, setCiudadEnv] = useState("")
    const [correo, setCorreo] = useState("")

    const [getUpdate, setGetUpdate] = useState([])

    const [refresh, setRefresh] = useState(false);

    const gettingTipoDoc = async () => {

      let res = await axios.get(`${Url}/tipodocumento`)
      setGetTipoDoc(res.data.data)
                
    }

    

    const gettingciudades = async () => {

      let res = await axios.get(`${Url}/ciudad`)
      setGetCiudades(res.data.data)




//       var config = {
//         headers: { 'Authorization': `Bearer ` }
//       };

//       axios.get('http://161.97.67.227:3000/api/ciudad', config)
//   .then((res) => {
//   console.log(res.data);
//   setGetCiudades(res.data)
// });
                
    }

    const updateUser = async (id, nombres, apellidos, tipoDocEnv, numDoc, ciudadEnv, celular, correo ) => {
      
      let userInfo = { correo: correo, nombre: nombres, apellido: apellidos, numdoc: numDoc, celular: celular, id_tipodocumento: tipoDocEnv, id_ciudad: ciudadEnv }
      let res = await axios.put(`${Url}/usuario/${id}`,userInfo)
      console.log(res.data)
      setGetUpdate(res.data)

      if(res.data.data.success === true) {
        localStorage.setItem('tasaToken', res.data.token)
      } else {
        null
      }
                
    }


    useEffect(() => {
        getUsuarios()
        gettingTipoDoc()
        gettingciudades()
    }, [refresh]);


    const getUsuarios = async () => {       
        let res = await axios.get(`${Url}/usuario`)
        setListaUsuarios(res.data.data)               
      }

    
    const usuariosPernat = listaUsuarios.filter(item => item.id_rol == 3)
    const usuariosTasa = listaUsuarios.filter(item => item.id_rol == 1)
    const usuariosIfi = listaUsuarios.filter(item => item.id_rol == 2)

    const handleOpen = (arg) => {
      setOpenModal(true)
  }
  const handleClose = () => {
      setOpenModal(false)
  }

  
  const handleOnchangeNombres = (e) => {
    if (e.target.value.length) {
      setNombres(e.target.value);
    } else {
      setNombres("");
    }
  };

  const handleOnchangeApellidos = (e) => {
    if (e.target.value.length) {
      setApellidos(e.target.value);
    } else {
      setApellidos("");
    }
  };

  const handleOnchangeNumDoc = (e) => {
    if (e.target.value.length) {
      setNumDoc(e.target.value);
    } else {
      setNumDoc("");
    }
  };

  const handleOnchangeCelular = (e) => {
    if (e.target.value.length) {
      setCelular(e.target.value);
    } else {
      setCelular("");
    }
  };

  const handleChangeCiud = (event) => {
    setCiudadEnv(event.target.value);
  }

  const handleChangeDoc = (event) => {
    setTipoDocEnv(event.target.value);
  }

  



    const popover = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Editar usuario
          </Popover.Content>
        </Popover>
      );
      
      const popover2 = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Desactivar usuario
          </Popover.Content>
        </Popover>
      );
      
      const popover3 = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Eliminar usuario
          </Popover.Content>
        </Popover>
      );
      
      const popover4 = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Correo validado
          </Popover.Content>
        </Popover>
      );
      
      const popover5 = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Correo sin validar
          </Popover.Content>
        </Popover>
      );

      const popover6 = (
        <Popover id="popover-basic">
          <Popover.Content style={{color: 'black'}}>
            Nueva Cuenta
          </Popover.Content>
        </Popover>
      );
      
      
      
      const dataPernat = {
          columns: [
            {
              label: '#',
              field: 'numero',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Nombres',
              field: 'nombres',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Apellidos',
              field: 'apellidos',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Número de documento',
              field: 'documento',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Correo',
              field: 'email',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Ciudad',
              field: 'ciudad',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Celular',
              field: 'celular',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Fecha de registro',
              field: 'registro',
              sort: 'asc',
              width: 150
            },
            {
              label: <FaEnvelope style={{width: '25px', height: '25px'}} />,
              field: 'check',
              sort: 'asc',
              width: 150
            },
            {
              label: <FaMobileAlt style={{width: '25px', height: '25px'}} />,
              field: 'check',
              sort: 'asc',
              width: 150
            },
            {
              label: <FaIdBadge style={{width: '25px', height: '25px'}} />,
              field: 'check',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Opciones',
              field: 'opciones',
              sort: 'asc',
              width: 150
            }
          ],
          rows: 
          usuariosPernat.map((item, i) => {
      
            return {  
                id: item.id,        
                numero: i + 1,
                nombres: item.nombre,
                apellidos: item.apellido,
                documento: item.numdoc,
                email: item.correo,
                ciudad: item.ciudad.nombre,
                celular: item.celular,
                // registro: moment(item.registro).format('DD/MM/YYYY'),
                check: item.correo_verif === true ? <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}><FaRegCheckSquare style={{width: '20px', height: '20px'}} /></OverlayTrigger> : <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}><FaRegSquare style={{width: '20px', height: '20px' }} /></OverlayTrigger>,
                clickEvent: (item) => {setSelectedUser(item.id), setOpenDetalle(true)},
                opciones: <div className="row" style={{}}>
                  
                  <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                  <FaRegEdit style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setModalResume('editar'), setNombres(item.nombre), setApellidos(item.apellido), setCelular(item.celular), setCorreo(item.correo), setNumDoc(item.numdoc), setCiudadEnv(item.ciudad.id), setTipoDocEnv(item.tipo_documento.id), handleOpen()}} />
                </OverlayTrigger>
      
                {item.correo_verif === true ?
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
                <FaUserTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setNombres(item.nombre), setApellidos(item.apellido), setModalResume('desactivar'), handleOpen()}} />
                </OverlayTrigger>
                  :
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaTrash style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setNombres(item.nombre), setApellidos(item.apellido), setModalResume('eliminar'), handleOpen()}}/>
                </OverlayTrigger>
            }
                              
                  
                  
                  </div>
            }
          })
        };

        const dataIfi = {
          columns: [
            {
              label: '#',
              field: 'numero',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Razón Social',
              field: 'razon',
              sort: 'asc',
              width: 270
            },
            {
              label: 'RUC',
              field: 'ruc',
              sort: 'asc',
              width: 200
            },
            {
              label: 'SIGLA',
              field: 'sigla',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Cantidad de Usuarios',
              field: 'cantusu',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Fecha de registro',
              field: 'registro',
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
          rows: []
          // usuariosIfi.map((item, i) => {
      
          //   return {  
          //       id: item.id,        
          //       razon: i + 1,
          //       ruc: item.nombre,
          //       sigla: item.apellido,
          //       cantusu: item.numdoc,
          //       registro: moment(item.registro).format('DD/MM/YYYY'),
          //       clickEvent: (item) => {setSelectedUser(item.id), setOpenDetalle(true)},
          //       opciones: <div className="row" style={{}}>
                  
          //         <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
          //         <FaRegEdit style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setNombres(item.nombre), setApellidos(item.apellido), setCelular(item.celular), setCorreo(item.correo), setNumDoc(item.numdoc), setCiudadEnv(item.ciudad.id), setTipoDocEnv(item.tipo_documento.id), handleOpen()}} />
          //       </OverlayTrigger>
      
          //       {item.correo_verif === true ?
          //       <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
          //       <FaUserTimes style={{width: '25px', cursor: 'pointer'}} />
          //       </OverlayTrigger>
          //         :
          //       <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
          //       <FaTrash style={{width: '25px', cursor: 'pointer'}} />
          //       </OverlayTrigger>
          //   }
                              
                  
                  
          //         </div>
          //   }
          // })
        };

        const dataUsuIfi = {
          columns: [
            {
              label: '#',
              field: 'numero',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Grupo',
              field: 'grupo',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Familia',
              field: 'familia',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Razón Social',
              field: 'razon',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Nombres',
              field: 'nombres',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Apellidos',
              field: 'apellidos',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Correo',
              field: 'email',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Celular',
              field: 'celular',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Fecha de registro',
              field: 'registro',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Opciones',
              field: 'opciones',
              sort: 'asc',
              width: 150
            }
          ],
          rows: 
          usuariosIfi.map((item, i) => {
      
            return {  
                id: item.id,        
                numero: i + 1,
                nombres: item.nombre,
                apellidos: item.apellido,
                documento: item.numdoc,
                email: item.correo,
                ciudad: item.id_ciudad,
                celular: item.celular,
                registro: moment(item.registro).format('DD/MM/YYYY'),
                check: item.correo_verif === true ? <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}><FaRegCheckSquare style={{width: '20px', height: '20px'}} /></OverlayTrigger> : <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}><FaRegSquare style={{width: '20px', height: '20px' }} /></OverlayTrigger>,
                clickEvent: (item) => {setSelectedUser(item.id), setOpenDetalle(true), console.log(item)},
                opciones: <div className="row" style={{}}>
                  
                  <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                  <FaRegEdit style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setModalResume('editar'), setNombres(item.nombre), setApellidos(item.apellido), setCelular(item.celular), setCorreo(item.correo), setNumDoc(item.numdoc), setCiudadEnv(item.ciudad.id), setTipoDocEnv(item.tipo_documento.id), handleOpen()}} />
                </OverlayTrigger>
      
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
                <FaUserTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setNombres(item.nombre), setApellidos(item.apellido), setModalResume('desactivar'), handleOpen()}} />
                </OverlayTrigger>
                  
                              
                  
                  
                  </div>
            }
          })
        };

        const dataUsuTasa = {
          columns: [
            {
              label: '#',
              field: 'numero',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Nombres',
              field: 'nombres',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Apellidos',
              field: 'apellidos',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Número de documento',
              field: 'documento',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Correo',
              field: 'email',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Ciudad',
              field: 'ciudad',
              sort: 'asc',
              width: 100
            },
            {
              label: 'Celular',
              field: 'celular',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Fecha de registro',
              field: 'registro',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Opciones',
              field: 'opciones',
              sort: 'asc',
              width: 150
            }
          ],
          rows: 
          usuariosTasa.map((item, i) => {
      
            return {  
                id: item.id,        
                numero: i + 1,
                nombres: item.nombre,
                apellidos: item.apellido,
                documento: item.numdoc,
                email: item.correo,
                ciudad: item.ciudad.nombre,
                celular: item.celular,
                registro: item.fecha_creacion
                // moment(item.registro).format('DD/MM/YYYY')
                ,
                clickEvent: (item) => {setSelectedUser(item.id), setOpenDetalle(true)},
                opciones: <div className="row" style={{}}>
                  
                  <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                  <FaRegEdit style={{width: '25px', marginLeft: '30px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setModalResume('editar'), setNombres(item.nombre), setApellidos(item.apellido), setCelular(item.celular), setCorreo(item.correo), setNumDoc(item.numdoc), setCiudadEnv(item.ciudad.id), setTipoDocEnv(item.tipo_documento.id), handleOpen()}} />
                </OverlayTrigger>
      
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
                <FaUserTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedUser(item.id), setNombres(item.nombre), setApellidos(item.apellido), setModalResume('desactivar'), handleOpen()}} />
                </OverlayTrigger>
               
                              
                  
                  
                  </div>
            }
          })
        };






    return (
        <React.Fragment>
           
       <div className="row">
           <div className="col-md-3" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Validación de Usuario</h4></div>

       </div>

<div>
<OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover6}>
<FaPlusSquare style={{width: '30px', color: '#146cae', cursor: 'pointer', marginLeft: '15px', marginTop: '10px'}} onClick={()=>{setOpenModal(true), setModalResume('nueva cuenta')}} />
                </OverlayTrigger>
  
</div>

    <div style={{padding: '20px', marginTop: '10px'}}>
       
    { openDetalle === true && openModal === false ?   <Detalle tab={tab} usuarioSeleccionado={usuarioSeleccionado} setOpenDetalle={setOpenDetalle} mobile={mobile} /> 

    :
       
       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => setTab(t)}
    >
      <Tab eventKey="1" title="Persona natural">
        {!dataPernat.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: 
<div style={{padding: '30px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataPernat}
    
/>
</div>
 }
      </Tab>
      <Tab eventKey="2" title="Instituciones financieras">
        {!dataIfi.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: 
<div style={{padding: '30px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataIfi}
    
/>
</div>
 }
      </Tab>
      <Tab eventKey="3" title="Usuarios IFI">
        {!dataUsuIfi.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataUsuIfi}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="4" title="Usuarios TasaTop">
      {!dataUsuTasa.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
        :
        <div style={{padding: '30px'}}>
<MDBDataTable
exportToCSV={true}
noBottomColumns={true}
paginationLabel={["Anterior", "Siguiente"]}
searchLabel="Buscar Cliente..."
entriesLabel=""
entriesOptions={[]}
displayEntries={false}
info={false}
    bordered
    hover
    small
    data={dataUsuTasa}
    
/>
</div>
}
      </Tab>
    </Tabs>

}

    </div>




    <Modal style={modalResume === 'editar' || modalResume === 'nueva cuenta' ? {} : {marginTop: '10%'}} size="lg" show={openModal} onHide={()=>{setOpenDetalle(false), handleClose()}}>
        <Modal.Header closeButton>
        {modalResume === 'editar' ?
        <Modal.Title>Editar Usuario</Modal.Title>
        : modalResume === 'eliminar' ?
        <Modal.Title>Eliminar Usuario</Modal.Title>
        : modalResume === 'desactivar' ?
        <Modal.Title>Desactivar Usuario</Modal.Title>
        : null
         }

          
        </Modal.Header>
        
        {modalResume === 'editar' ? 
        <Modal.Body>
            
        <Form>
    <Row>
        <Col>
            <Form.Label style={{color: 'black'}}>Nombres</Form.Label>
            <Form.Control value={nombres} onChange={handleOnchangeNombres}/>
        </Col>
        <Col>
            <Form.Label style={{color: 'black'}}>Apellidos</Form.Label>
            <Form.Control value={apellidos} onChange={handleOnchangeApellidos}/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label style={{color: 'black'}}>Tipo de Documento</Form.Label>
            <Form.Control as="select" value={tipoDocEnv == "" ? tipoDoc : tipoDocEnv} onChange={handleChangeDoc}>
            {getTipoDoc.map((item) => {
                return (
                  <option value={item.id}>{item.nombre}</option>
                        )
            })}
            </Form.Control>
        </Col>
        <Col>
            <Form.Label style={{color: 'black'}}>Numero de Documento</Form.Label>
            <Form.Control value={numDoc} onChange={handleOnchangeNumDoc} />
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Label style={{color: 'black'}}>Ubicación</Form.Label>
            <Form.Control as="select" value={ciudadEnv == "" ? ciudad : ciudadEnv} onChange={handleChangeCiud} >
            
            {getCiudades.map((item) => {
                return (
                  <option value={item.id}>{item.nombre}</option>
                        )
            })}
            </Form.Control>
        </Col>
        <Col>
            <Form.Label style={{color: 'black'}}>Celular</Form.Label>
            <Form.Control value={celular} onChange={handleOnchangeCelular}/>
        </Col>
    </Row>
    <Row>
    <Col>
            <Form.Label>Usuario</Form.Label>
            <Form.Control value={correo}  disabled/>
        </Col>        
    </Row>
</Form>

        </Modal.Body>
      : modalResume === 'eliminar' ?

      <Modal.Body style={{}}>

          <p>¿Estás seguro de querer eliminar a <strong>{`${nombres} ${apellidos}`}</strong>?</p>
            
       
                          
{/* 
          <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
            <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
            <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
            </div>
          </div> */}

  

        </Modal.Body>

        : modalResume === 'desactivar' ? 
        <Modal.Body style={{}}>

        <p>¿Estás seguro de querer desactivar a <strong>{`${nombres} ${apellidos}`}</strong>?</p>
          
     
                        
{/* 
        <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
          <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
          <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
          <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
          </div>
        </div> */}



      </Modal.Body>

      : modalResume === 'nueva cuenta' ? 

      <Modal.Body style={{}}>

        <Formulario refresh={refresh} setRefresh={setRefresh} />

      </Modal.Body>
      
      : null
      }
        
        
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {setOpenDetalle(false), handleClose()}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} onClick={()=>{updateUser(selectedUser, nombres, apellidos, tipoDocEnv, numDoc, ciudadEnv, celular, correo), setOpenDetalle(false), handleClose()}}>
          {modalResume === 'editar' ? 'Editar' : 'Aceptar'}
          </Button>
        </Modal.Footer>
      </Modal>





        </React.Fragment>
    )
}

export default BodyUsuariosAsweb;