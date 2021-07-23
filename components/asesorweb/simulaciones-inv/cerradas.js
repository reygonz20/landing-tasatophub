import moment from 'moment'
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaTelegramPlane  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const cerradas = [{"id":9831,"crypt":"58CEF6F48A84EC5012CB0F54990A970A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":4.350,"tasafinal":4.350,"codigo":"SPF331421000151","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1615179600000,"isCanceledByIfi":false,"clave":"6451","inicio":1614807000857,"fin":1614808800857,"revDate":1615179600000,"enRev":true,"userCrypt":"F2CD5E482FE6195A3C2CBD2BF348D837","nombre":"Ricardo Luis","apellidos":"Portocarrero Dulanto ","documento":1,"docNumero":"07782907","celular":"993123206","correo":"ricardopd270@gmail.com"},{"id":9719,"crypt":"72B473BAC8FDB104497D9F06E79358FB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":94500.00,"montofinal":96495.20,"tasa":5.000,"tasafinal":5.000,"codigo":"SPF331421000053","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1615525200000,"isCanceledByIfi":false,"clave":"8589","inicio":1611178200888,"fin":1611180000888,"revDate":1611550800000,"enRev":true,"userCrypt":"1E5CDB998AC447B71D19F56D0724A097","nombre":"cesar","apellidos":"rojas soto","documento":1,"docNumero":"40959580","celular":"949173413","correo":"cesars961@hotmail.com"},{"id":9561,"crypt":"216E54DC5B09ED0167AA2CB457ECB318","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":180,"plazofinal":360,"tyc":true,"titular":true,"monto":90480.00,"montofinal":90475.00,"tasa":4.600,"tasafinal":5.000,"codigo":"SPF331420000945","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1606366800000,"isCanceledByIfi":false,"clave":"3851","inicio":1605821400016,"fin":1605823200016,"revDate":1606107600000,"enRev":true,"userCrypt":"983BB5A051B6C08395D7A8598BDB88C8","nombre":"Sergio ","apellidos":"Urday Zegarra","documento":1,"docNumero":"40280142","celular":"926800577","correo":"surday@gmail.com"},{"id":9350,"crypt":"0D3B9B03342E701F7FC3EFF24E8C2C92","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":183,"plazofinal":365,"tyc":true,"titular":false,"monto":60000.00,"montofinal":60000.00,"tasa":4.600,"tasafinal":5.500,"codigo":"SPF331420000775","situacion":"T","otroNum":"08638472","ganador":"Caja Rural Del Centro","apertura":1599195600000,"isCanceledByIfi":false,"clave":"9253","inicio":1599082200051,"fin":1599084000051,"revDate":1599454800000,"enRev":true,"userCrypt":"1866BD33FB8AD36AA3D09572662EA8FF","nombre":"Jesus","apellidos":"Loarte","documento":1,"docNumero":"45197103","celular":"974638983","correo":"jesus204@gmail.com"}]



const dataCerradas = {
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
        label: 'Registro',
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Número de documento',
        field: 'docNumero',
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
        label: 'Opciones',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: cerradas.map((item, i) => {

      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}><FaTelegramPlane style={{width: '25px', marginLeft: '50px'}} /><FaTimes style={{width: '25px'}} /> </div>
      }
    })
  };


export default dataCerradas;



