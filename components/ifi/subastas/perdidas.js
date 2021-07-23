import moment from 'moment'
import { FaExternalLinkAlt, FaTimes  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const perdidas = [{"id":9946,"codigo":"SPF331421000255","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9946,"producto":1,"moneda":1,"monto":30000.00,"plazo":721,"tasa":4.800,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera Credinka","tasaGanadora":4.800,"otroDoc":1,"tyc":true,"titular":false,"codigo":"SPF331421000255","situacion":"F","otroNum":"09644377","mitasa":3.650,"inicio":1618803360294,"fin":1618869600231},"datosCliente":{"nombre":"ROSA","apellidos":"CAYCHO","documento":1,"docNumero":"09644377","celular":"991882323","correo":"rosa.caycho.40@gmail.com"},"ganador":false},{"id":9944,"codigo":"SPF331421000253","situacion":"F","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9944,"producto":1,"moneda":1,"monto":20000.00,"plazo":365,"tasa":4.300,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera Credinka","tasaGanadora":4.300,"tyc":true,"titular":true,"codigo":"SPF331421000253","situacion":"F","mitasa":3.600,"inicio":1618793179061,"fin":1618869600014},"datosCliente":{"nombre":"carlos iván ","apellidos":"arce alayo","documento":1,"docNumero":"70025421","celular":"949912109","correo":"carlosivanarce@gmail.com"},"ganador":false}]

const dataPerdidas = {
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
        label: 'Mi Tasa',
        field: 'mitasa',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Institución ganadora - TREA',
        field: 'ifitrea',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Fin',
        field: 'fin',
        sort: 'asc',
        width: 150
      }
    ],
    rows: perdidas.map((item, i) => {

        
      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`,
          plazo: `${item.datosProducto.plazo} días`,
          inicio: moment(item.datosProducto.inicio).format('DD/MM/YYYY'),
          ubicacion: item.datosProducto.ubicacion,
          mitasa: `${item.datosProducto.mitasa} %`,
          ifitrea: `${item.datosProducto.ifiGanadora} - ${item.datosProducto.tasaGanadora}%`,
          fin: moment(item.datosProducto.fin).format('DD/MM/YYYY')
      }
    })
  };


export default dataPerdidas;