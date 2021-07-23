import moment from 'moment'
import { FaExternalLinkAlt, FaTimes  } from "react-icons/fa";

const canceladas = [{"id":9945,"codigo":"SPF331421000254","situacion":"C","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9945,"producto":1,"moneda":1,"monto":100000.00,"plazo":365,"tasa":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000254","situacion":"C","inicio":1618795607032,"fin":1618869600001},"datosCliente":{"nombre":"Lorenzo","apellidos":"Burga","documento":1,"docNumero":"73984393","celular":"955417061","correo":"lorenzo_burga@icloud.com"},"ganador":true}]

const dataCanceladas = {
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
        label: 'Número de documento',
        field: 'docNumero',
        sort: 'asc',
        width: 150
      },
    ],
    rows: canceladas.map((item, i) => {

      return {                  
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`,
          plazo: `${item.datosProducto.plazo} días`,
          inicio: moment(item.datosProducto.inicio).format('DD/MM/YYYY'),
          ubicacion: item.datosProducto.ubicacion,
          docNumero: item.datosCliente.docNumero
      }
    })
  };

  export default dataCanceladas;