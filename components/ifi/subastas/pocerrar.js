import moment from 'moment'
import { FaExternalLinkAlt, FaTimes  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap';

const porCerrar = [{"id":9720,"codigo":"SPF331421000054","situacion":"D","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9720,"producto":1,"moneda":1,"monto":150000.00,"plazo":1080,"tasa":6.000,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":6.000,"otroDoc":1,"tyc":true,"titular":false,"codigo":"SPF331421000054","situacion":"D","otroNum":"10270170","mitasa":6.000,"inicio":1611172639711,"fin":1611180000664},"datosCliente":{"nombre":"Diego","apellidos":"Llona","documento":1,"docNumero":"42235059","celular":"984799473","correo":"diegollona@yahoo.com"},"comentarios":[{"autor":"Carmen Milagros ","texto":"La persona que abrió la cuenta fue captada por un canal interno con fecha anterior a la subasta es por ello que no se considera para el pago de comisión.","fecha":1614722900161},{"autor":"Karla Michelle","texto":"Calificación de la EFI: DEFICIENTE (2)","fecha":1614634962616},{"autor":"Karla Michelle","texto":"Satisfacción del usuario: BUENA (4)","fecha":1614634962601},{"autor":"Karla Michelle","texto":"usurio nos indico que si se concreto la propuesta y la atención fue la mas cordial , Y no hubo comunicación fluida con el personal de pro empresa","fecha":1614634962585},{"autor":"Karla Michelle","texto":"se le envio mensaje","fecha":1614632037517},{"autor":"Karla Michelle","texto":"usuario esta evaluando la propuesta, se le envio el numero de las asesora para que la contacte","fecha":1611334737032},{"autor":"Karla Michelle","texto":"contactado correctamente","fecha":1611172704819}],"ganador":true}]

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

const dataPorCerrar = {
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
      }
    ],
    rows: porCerrar.map((item, i) => {

      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`,
          plazo: `${item.datosProducto.plazo} días`,
          inicio: moment(item.datosProducto.inicio).format('DD/MM/YYYY'),
          ubicacion: item.datosProducto.ubicacion,
          docNumero: item.datosCliente.docNumero,
          
      }
    })
  };

  export default dataPorCerrar;

