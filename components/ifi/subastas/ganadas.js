import moment from 'moment'
import { FaExternalLinkAlt, FaTimes  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger, Popover, Form, InputGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';


const Ganadas = ({ selectedRow, setSelectedRow, detalleFila, setDetalleFila, dataSelectedRow, setDataSelectedRow }) => {

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpen = () => {
    setOpenModal(true)
}
const handleClose = () => {
    setOpenModal(false)
}

const dataGan = [{"id":9941,"codigo":"SPF331421000250","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9941,"producto":1,"moneda":1,"monto":180830.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"clonado":true,"codigo":"SPF331421000250","situacion":"F","inicio":1618597266260,"fin":1618610400213},"datosCliente":{"nombre":"Rafael Gabriel","apellidos":"de la Rosa Pimentel","documento":1,"docNumero":"09464968","celular":"960317295","correo":"rdelarosa@voiperu.com"},"ganador":true},{"id":9901,"codigo":"SPF331421000214","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9901,"producto":1,"moneda":1,"monto":102000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000214","situacion":"F","inicio":1617215223359,"fin":1617228000328},"datosCliente":{"nombre":"Gonzalo Alberto ","apellidos":"La Puente Miyashiro","documento":1,"docNumero":"06805170","celular":"998445244","correo":"glapuente@aelucoop.com.pe"},"ganador":true},{"id":9900,"codigo":"SPF331421000213","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9900,"producto":1,"moneda":1,"monto":1450000.00,"plazo":1080,"tasa":5.200,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":5.200,"tyc":true,"titular":true,"codigo":"SPF331421000213","situacion":"F","inicio":1617198900154,"fin":1617228000091},"datosCliente":{"nombre":"Adolfo","apellidos":"Granadino Arana","documento":1,"docNumero":"07861998","celular":"994045313","correo":"agranadinoa@hotmail.com"},"ganador":true},{"id":9888,"codigo":"SPF331421000201","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9888,"producto":1,"moneda":1,"monto":50000.00,"plazo":365,"tasa":4.500,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.500,"tyc":true,"titular":true,"codigo":"SPF331421000201","situacion":"F","inicio":1616790484100,"fin":1616796000068},"datosCliente":{"nombre":"Antonio ","apellidos":"Villegas Euribe","documento":1,"docNumero":"41363628","celular":"946074489","correo":"antoniodatosv@gmail.com"},"ganador":true},{"id":9887,"codigo":"SPF331421000200","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9887,"producto":1,"moneda":1,"monto":40000.00,"plazo":181,"tasa":2.200,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.200,"otroDoc":1,"tyc":true,"titular":false,"codigo":"SPF331421000200","situacion":"F","otroNum":"08665587","inicio":1616780552111,"fin":1616796000064},"datosCliente":{"nombre":"Ricardo Luis","apellidos":"Portocarrero Dulanto ","documento":1,"docNumero":"07782907","celular":"993123206","correo":"ricardopd270@gmail.com"},"ganador":true},{"id":9883,"codigo":"SPF331221000004","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9883,"producto":1,"moneda":1,"monto":40000.00,"plazo":1080,"tasa":3.650,"ubicacion":"Trujillo","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.650,"tyc":true,"titular":true,"codigo":"SPF331221000004","situacion":"F","inicio":1616614434358,"fin":1616623200311},"datosCliente":{"nombre":"IVAN CARTER","apellidos":"COTRINA ANGULO","documento":1,"docNumero":"45074712","celular":"979090498","correo":"ivanc_ca@hotmail.com"},"ganador":true},{"id":9882,"codigo":"SPF330421000007","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9882,"producto":1,"moneda":1,"monto":100000.00,"plazo":366,"tasa":4.900,"ubicacion":"Arequipa","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF330421000007","situacion":"F","inicio":1616600844554,"fin":1616623200522},"datosCliente":{"nombre":"LESLY","apellidos":"RODRIGUEZ","documento":1,"docNumero":"45121991","celular":"958346614","correo":"lesrodriguez0604@gmail.com"},"ganador":true},{"id":9881,"codigo":"SPF331421000196","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9881,"producto":1,"moneda":1,"monto":100000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000196","situacion":"F","inicio":1616597062460,"fin":1616623200413},"datosCliente":{"nombre":"JOSE MIGUEL","apellidos":"SAAVEDRA","documento":2,"docNumero":"001086972","celular":"992436734","correo":"jmsaaved@gmail.com"},"ganador":true},{"id":9879,"codigo":"SPF330421000006","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9879,"producto":1,"moneda":1,"monto":1000.00,"plazo":365,"tasa":2.100,"ubicacion":"Arequipa","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.100,"tyc":true,"titular":true,"codigo":"SPF330421000006","situacion":"F","inicio":1616595473327,"fin":1616623200280},"datosCliente":{"nombre":"Modesto Eudes","apellidos":"Valeriano Calsina","documento":1,"docNumero":"73764155","celular":"914238472","correo":"valerianocalsinamodesto@gmail.com"},"ganador":true},{"id":9878,"codigo":"SPF331421000194","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9878,"producto":1,"moneda":1,"monto":95000.00,"plazo":365,"tasa":4.500,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.500,"tyc":true,"titular":true,"codigo":"SPF331421000194","situacion":"F","inicio":1616560666094,"fin":1616623200031},"datosCliente":{"nombre":"Amalia","apellidos":"Medina","documento":1,"docNumero":"40861655","celular":"997094565","correo":"medina.ai@gmail.com"},"ganador":true},{"id":9876,"codigo":"SPF331421000192","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9876,"producto":1,"moneda":1,"monto":43500.00,"plazo":365,"tasa":3.600,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.600,"tyc":true,"titular":true,"codigo":"SPF331421000192","situacion":"F","inicio":1616509749618,"fin":1616536800556},"datosCliente":{"nombre":"Jose","apellidos":"Gonzales","documento":1,"docNumero":"08139629","celular":"993479039","correo":"jlgp2007@yahoo.com"},"ganador":true},{"id":9875,"codigo":"SPF331421000191","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9875,"producto":1,"moneda":1,"monto":1500.00,"plazo":365,"tasa":2.100,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.100,"tyc":true,"titular":true,"codigo":"SPF331421000191","situacion":"F","inicio":1616474206544,"fin":1616536800497},"datosCliente":{"nombre":"Lucero Bestriz","apellidos":"Arela Huatta","documento":1,"docNumero":"76440139","celular":"946371211","correo":"lbeatrizarela@gmail.com"},"ganador":true},{"id":9874,"codigo":"SPF331421000190","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9874,"producto":1,"moneda":1,"monto":10000.00,"plazo":365,"tasa":2.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.900,"tyc":true,"titular":true,"codigo":"SPF331421000190","situacion":"F","inicio":1616464155730,"fin":1616536800683},"datosCliente":{"nombre":"Leonor Consuelo","apellidos":"Garcia huamani","documento":1,"docNumero":"46848856","celular":"921138125","correo":"leonorgarciah@gmail.com"},"ganador":true},{"id":9872,"codigo":"SPF331421000189","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9872,"producto":1,"moneda":1,"monto":50000.00,"plazo":750,"tasa":4.550,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.550,"tyc":true,"titular":true,"codigo":"SPF331421000189","situacion":"F","inicio":1616409300930,"fin":1616450400867},"datosCliente":{"nombre":"Jubher Jozsef","apellidos":"Herencia Acuña","documento":1,"docNumero":"45044802","celular":"956721144","correo":"jubher@gmail.com"},"ganador":true},{"id":9871,"codigo":"SPF331421000188","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9871,"producto":1,"moneda":1,"monto":25000.00,"plazo":365,"tasa":3.600,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.600,"tyc":true,"titular":true,"codigo":"SPF331421000188","situacion":"F","inicio":1616379171628,"fin":1616450400550},"datosCliente":{"nombre":"Flor ","apellidos":"Tello Sarmiento","documento":1,"docNumero":"74664251","celular":"995864425","correo":"tellosarmiento.flor@gmail.com"},"ganador":true},{"id":9869,"codigo":"SPF331421000186","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9869,"producto":1,"moneda":1,"monto":330000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000186","situacion":"F","inicio":1616342043952,"fin":1616450400874},"datosCliente":{"nombre":"Eliana Verónica","apellidos":"Mansilla Sanchez","documento":1,"docNumero":"44380455","celular":"995218632","correo":"eliana.mansilla87@gmail.com"},"ganador":true},{"id":9868,"codigo":"SPF331421000185","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9868,"producto":1,"moneda":1,"monto":11000.00,"plazo":182,"tasa":2.000,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.000,"tyc":true,"titular":true,"codigo":"SPF331421000185","situacion":"F","inicio":1616271373762,"fin":1616450400715},"datosCliente":{"nombre":"WENDY","apellidos":"RIVAS","documento":1,"docNumero":"70608452","celular":"922742985","correo":"logyco-transportes@hotmail.com"},"ganador":true},{"id":9863,"codigo":"SPF331421000183","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9863,"producto":1,"moneda":1,"monto":80000.00,"plazo":721,"tasa":4.550,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.550,"tyc":true,"titular":true,"codigo":"SPF331421000183","situacion":"F","inicio":1616072284545,"fin":1616104800482},"datosCliente":{"nombre":"Milton Juan","apellidos":"Mesares Rosales","documento":1,"docNumero":"10298178","celular":"920044869","correo":"miltonmesares@gmail.com"},"ganador":true},{"id":9861,"codigo":"SPF331421000181","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9861,"producto":1,"moneda":1,"monto":100000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000181","situacion":"F","inicio":1616028790417,"fin":1616104800370},"datosCliente":{"nombre":"Talia","apellidos":"De La Puente Carrasco","documento":1,"docNumero":"48091019","celular":"961090009","correo":"taliadlp@outlook.com"},"ganador":true},{"id":9860,"codigo":"SPF331421000180","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9860,"producto":1,"moneda":1,"monto":20000.00,"plazo":365,"tasa":3.600,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.600,"tyc":true,"titular":true,"codigo":"SPF331421000180","situacion":"F","inicio":1616017354387,"fin":1616104800340},"datosCliente":{"nombre":"David","apellidos":"Huaman","documento":1,"docNumero":"10696189","celular":"951642291","correo":"huamand@gmail.com"},"ganador":true},{"id":9858,"codigo":"SPF331421000178","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9858,"producto":1,"moneda":1,"monto":100000.00,"plazo":420,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000178","situacion":"F","inicio":1616004761417,"fin":1616018400355},"datosCliente":{"nombre":"Noe Felipe","apellidos":"Alcocer Ramos","documento":1,"docNumero":"41975429","celular":"996686439","correo":"noealcocer@gmail.com"},"ganador":true},{"id":9855,"codigo":"SPF331421000175","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9855,"producto":1,"moneda":1,"monto":100000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000175","situacion":"F","inicio":1615860775649,"fin":1615932000602},"datosCliente":{"nombre":"ANA MATILDE","apellidos":"MENDOZA TUPAYACHI","documento":1,"docNumero":"20000227","celular":"964931288","correo":"anamendoza56@hotmail.com"},"ganador":true},{"id":9853,"codigo":"SPF331421000173","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9853,"producto":1,"moneda":1,"monto":100000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000173","situacion":"F","inicio":1615824655182,"fin":1615845600136},"datosCliente":{"nombre":"Irene","apellidos":"Rodriguez ","documento":1,"docNumero":"40116959","celular":"997338162","correo":"irenerodrigo@gmail.com"},"ganador":true},{"id":9847,"codigo":"SPF331421000167","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9847,"producto":1,"moneda":1,"monto":87000.00,"plazo":365,"tasa":4.500,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.500,"tyc":true,"titular":true,"codigo":"SPF331421000167","situacion":"F","inicio":1615561125863,"fin":1615586400831},"datosCliente":{"nombre":"Cesar ","apellidos":"Calderon Heshiki","documento":1,"docNumero":"10549236","celular":"946672501","correo":"cesarheshiki@gmail.com"},"ganador":true},{"id":9843,"codigo":"SPF331421000163","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9843,"producto":1,"moneda":1,"monto":25000.00,"plazo":365,"tasa":3.600,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.600,"tyc":true,"titular":true,"codigo":"SPF331421000163","situacion":"F","inicio":1615410734784,"fin":1615413600721},"datosCliente":{"nombre":"ANA","apellidos":"DE LA TORRE ","documento":1,"docNumero":"47138592","celular":"941388263","correo":"ana.delatorre013@gmail.com"},"ganador":true},{"id":9842,"codigo":"SPF331421000162","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9842,"producto":1,"moneda":1,"monto":15000.00,"plazo":365,"tasa":3.600,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":3.600,"tyc":true,"titular":true,"codigo":"SPF331421000162","situacion":"F","inicio":1615383401303,"fin":1615413600241},"datosCliente":{"nombre":"Lorena ","apellidos":"Villarreal Ruiz ","documento":1,"docNumero":"41047136","celular":"997207276","correo":"lorvilla@hotmail.com"},"ganador":true},{"id":9841,"codigo":"SPF331421000161","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9841,"producto":1,"moneda":1,"monto":10000.00,"plazo":365,"tasa":2.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":2.900,"tyc":true,"titular":true,"codigo":"SPF331421000161","situacion":"F","inicio":1615337175165,"fin":1615413600118},"datosCliente":{"nombre":"GUIDO FRANCESCO","apellidos":"FONTTIS CALDERON","documento":1,"docNumero":"46446529","celular":"914720362","correo":"gfonttisc@gmail.com"},"ganador":true},{"id":9836,"codigo":"SPF331421000156","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9836,"producto":1,"moneda":1,"monto":50000.00,"plazo":365,"tasa":4.500,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.500,"tyc":true,"titular":true,"codigo":"SPF331421000156","situacion":"F","inicio":1615173252030,"fin":1615240800967},"datosCliente":{"nombre":"jorge","apellidos":"Durán","documento":1,"docNumero":"70448091","celular":"997950568","correo":"j.duranagama@gmail.com"},"ganador":true},{"id":9823,"codigo":"SPF331421000143","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9823,"producto":1,"moneda":1,"monto":230000.00,"plazo":719,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000143","situacion":"F","inicio":1614279204073,"fin":1614290400995},"datosCliente":{"nombre":"cecilia","apellidos":"cabrera ","documento":1,"docNumero":"08785639","celular":"942117624","correo":"lourdescz1@yahoo.com"},"ganador":true},{"id":9820,"codigo":"SPF330421000004","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9820,"producto":1,"moneda":1,"monto":500.00,"plazo":181,"tasa":1.200,"ubicacion":"Arequipa","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":1.200,"tyc":true,"titular":true,"codigo":"SPF330421000004","situacion":"F","inicio":1614228155398,"fin":1614290400366},"datosCliente":{"nombre":"Rosa ","apellidos":"Salazar","documento":1,"docNumero":"71933861","celular":"924331662","correo":"ross.irene2001@gmail.com"},"ganador":true},{"id":9788,"codigo":"SPF331421000116","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9788,"producto":1,"moneda":1,"monto":80000.00,"plazo":365,"tasa":4.500,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.500,"tyc":true,"titular":true,"codigo":"SPF331421000116","situacion":"F","inicio":1613437698358,"fin":1613512800327},"datosCliente":{"nombre":"JAVIER","apellidos":"INGA URETA","documento":1,"docNumero":"40998059","celular":"961060425","correo":"javier210881@gmail.com"},"ganador":true},{"id":9783,"codigo":"SPF331421000111","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9783,"producto":1,"moneda":1,"monto":100001.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000111","situacion":"F","inicio":1613153532715,"fin":1613167200699},"datosCliente":{"nombre":"FLOR","apellidos":"Hurtado","documento":1,"docNumero":"06543636","celular":"980030125","correo":"fhurtado07@yahoo.es"},"ganador":true},{"id":9720,"codigo":"SPF331421000054","situacion":"D","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9720,"producto":1,"moneda":1,"monto":150000.00,"plazo":1080,"tasa":6.000,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":6.000,"otroDoc":1,"tyc":true,"titular":false,"codigo":"SPF331421000054","situacion":"D","otroNum":"10270170","inicio":1611172639711,"fin":1611180000664},"datosCliente":{"nombre":"Diego","apellidos":"Llona","documento":1,"docNumero":"42235059","celular":"984799473","correo":"diegollona@yahoo.com"},"ganador":true}]


// const dataSelectedRow = dataGan.filter(item => item.id === selectedRow)


const popover = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Aperturar Simulación
    </Popover.Content>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Solicitar Cancelación
    </Popover.Content>
  </Popover>
);

  const dataGanadas = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Codigo',
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
        label: 'Plazo (días)',
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Fecha de registro',
        field: 'inicio',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ubicación',
        field: 'ubicacion',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Numero de documento',
        field: 'docNumero',
        sort: 'asc',
        width: 150
      },
      {
        label: '',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: dataGan.map((item, i) => {

      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`,
          plazo: `${item.datosProducto.plazo} días`,
          inicio: moment(item.datosProducto.inicio).format('DD/MM/YYYY'),
          ubicacion: item.datosProducto.ubicacion,
          docNumero: item.datosCliente.docNumero,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
                  
          <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
            <FaExternalLinkAlt style={{width: '25px', marginLeft: '20px', marginRight: '10px', cursor: 'pointer'}} />
          </OverlayTrigger>

          <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
          <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id)
          // console.log(selectedRow),
          // console.log(dataSelectedRow)
          }} />
          </OverlayTrigger>
          
          </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDataSelectedRow(dataGan.filter(item => item.id === selectedRow)), setDetalleFila(true)}
      }
    })
  };

  return (
    <React.Fragment>
    {!dataGanadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
<MDBDataTable
order={['monto', 'asc']}
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
    data={dataGanadas}
    
/>
</div>
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

  


  


export default Ganadas;

