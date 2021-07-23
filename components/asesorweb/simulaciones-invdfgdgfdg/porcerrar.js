import moment from 'moment'
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const porCerrar = [{"id":9754,"crypt":"3DB6990B1C38E656914AEAA2B606BC13","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":25000.00,"tasa":4.800,"codigo":"SPF331421000083","situacion":"D","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6192","inicio":1612387800699,"fin":1612389600699,"revDate":1612501200000,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":9720,"crypt":"93EBDDA1A2993054B4066E198671BE27","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":1080,"tyc":true,"titular":false,"monto":150000.00,"tasa":6.000,"codigo":"SPF331421000054","situacion":"D","otroNum":"10270170","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6434","inicio":1611178200664,"fin":1611180000664,"revDate":1611550800000,"enRev":true,"userCrypt":"F9BEEB35A91601B92AF580BB098A5B32","nombre":"Diego","apellidos":"Llona","documento":1,"docNumero":"42235059","celular":"984799473","correo":"diegollona@yahoo.com"},{"id":9349,"crypt":"FF9A98BAC1845D74B03248A41DDF5658","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":120000.00,"tasa":6.000,"codigo":"SPF331420000774","situacion":"D","ganador":"Caja Rural Raíz","isCanceledByIfi":false,"clave":"5864","inicio":1599082200308,"fin":1599084000308,"revDate":1603688400000,"enRev":true,"userCrypt":"4994688AAAEA22A85E012074A876287D","nombre":"Jose ","apellidos":"Bacilio velasco","documento":1,"docNumero":"15425021","celular":"994411165","correo":"elzurdo1960.10@hotmail.com"},{"id":9258,"crypt":"517087F4DC773BAF9B37EE5EC6953C29","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"tyc":true,"titular":true,"monto":100050.00,"tasa":6.200,"codigo":"SPF331420000693","situacion":"D","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6165","inicio":1598045400773,"fin":1598047200773,"enRev":true,"userCrypt":"9B248BDDF15956D71CC93C6CB3FA386D","nombre":"Jose","apellidos":"Gonzales","documento":1,"docNumero":"08139629","celular":"993479039","correo":"jlgp2007@yahoo.com"},{"id":9124,"crypt":"828BFAAF3648A44F5BC61192930657D9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":6.250,"codigo":"SPF331420000606","situacion":"D","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3327","inicio":1594416600881,"fin":1594418400881,"enRev":true,"userCrypt":"121C06ECD756F4D5EB9555DF354943D1","nombre":"Ronald","apellidos":"Encarnacion Leyton ","documento":1,"docNumero":"41114805","celular":"951734675","correo":"ronald_leyton@hotmail.com"}]




const dataPorCerrar = {
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
    rows: porCerrar.map((item, i) => {

      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}><FaRegEdit style={{width: '25px', marginLeft: '50px'}} /> <FaRegCheckSquare style={{width: '25px'}} /> <FaTimes style={{width: '25px'}} /> </div>
      }
    })
  };


export default dataPorCerrar;


