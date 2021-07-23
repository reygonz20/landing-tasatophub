import moment from 'moment'
import { FaRegEdit, FaUserTimes, FaTrash, FaRegSquare, FaRegCheckSquare  } from "react-icons/fa";
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const ifi = [{"crypt":"DB1FCD2E83D1668118CE172837629AEF","estado":1,"nombres":"Marco Antonio","apellidos":"De la Cruz Bernado","celular":"934552158","documento":"42381135","email":"mdelacruz@cajacentro.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1613059657582,"nacimiento":1044939600000,"verifiedEmail":true,"verifiedTelef":true,"verifiedNumdoc":true},{"crypt":"722875FB5724DE70FEE9F5A18B61B99E","estado":1,"nombres":"Yomara Yadira ","apellidos":"Lazo Alvarez","celular":"934552150","documento":"70038440","email":"ylazo@cajacentro.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1593752704606,"verifiedEmail":true,"verifiedTelef":true,"verifiedNumdoc":true},{"crypt":"F52BD674F90D7F03FADDCD53D6F9CA23","estado":1,"nombres":"Guillermo Manuel ","apellidos":"Saenz Venegas","celular":"999999999","documento":"44444444","email":"gsaenz@credinka.com","userType":2,"ciudad":1,"registro":1573674228120,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"74DBEA52BBC15814BB1E4DD2EBE86C35","estado":1,"nombres":"Lucía","apellidos":"Tuco Meza","celular":"987789273","documento":"45676767","email":"ltuco@credinka.com","userType":2,"ciudad":1,"registro":1572983311604,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"47BCB502B23EC49B26B2D7A149759468","estado":1,"nombres":"Javier Diofemenes","apellidos":"Maldonado Arriola","celular":"991795726","documento":"25744294","email":"jmaldonadoa@credinka.com","userType":2,"ciudad":1,"registro":1572982442306,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"46EC15F1185FB209D76340EDF508BD5B","estado":1,"nombres":"Manuel","apellidos":"Lozano","celular":"999999999","documento":"00000000","email":"mlozano@ladoeconomico.com","userType":2,"ciudad":1,"registro":1570463175998,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"746D906ED9AD6C52F1DB58821981905E","estado":1,"nombres":"Manuel","apellidos":"Lozano","celular":"999999999","documento":"00000000","email":"mlozano@tasatop.com","userType":2,"ciudad":1,"registro":1567637526029,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"67285461974B16EABCBB61629E51BD21","estado":1,"nombres":"Alberto","apellidos":"Falcon","celular":"999999999","documento":"00000000","email":"alberto@agroinvesting.lat","userType":2,"ciudad":1,"registro":1567637389719,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"6EFA29980FDC5D8757531ADD19F87250","estado":1,"nombres":"Edson","apellidos":"Espinoza","celular":"999999999","documento":"00000000","email":"eespinoza@aricapital.org","userType":2,"ciudad":1,"registro":1567637074787,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"7493FB14C3611AE63F46413235548CBD","estado":1,"nombres":"Silvia","apellidos":"Delgado Inga","celular":"976594119","documento":"44491253","email":"silviadelgado@zestcapital.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1565648472715,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"E4D5AD7936F187EE9204DF72D491F795","estado":1,"nombres":"Jorge Segundo ","apellidos":"Orellano Bicerra","celular":"942101387","documento":"71243125","email":"jorellano@cajamaynas.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1544549494536,"nacimiento":976510800000,"verifiedEmail":true,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"6C22A2DFF33A142CD0856129F3B5C68B","estado":1,"nombres":"George Steven ","apellidos":"Luna Sanchez","celular":"940181449","documento":"46623236","email":"sluna@cajamaynas.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1544548656550,"nacimiento":976510800000,"verifiedEmail":true,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"BD45C053D25C736590FC9513DBE59C10","estado":1,"nombres":"Grupo","apellidos":"Ahorros","celular":"972729486","documento":"00000000","email":"ahorros@proempresa.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1533658455531,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"A82122254AD8D8F9413FB6EF8D3F7834","estado":1,"nombres":"Francisco","apellidos":"Toledo","celular":"987654321","documento":"87654321","email":"ftoledo1@yahoo.com","tipoPersona":1,"userType":2,"ciudad":1,"registro":1528737118227,"nacimiento":960699600000,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"C513E459C1E2A9E3A7012D3888EDFF19","estado":1,"nombres":"Eduardo ","apellidos":"Gálvez","celular":"994081445","documento":"47368781","email":"eduardogalvez@zestcapital.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1526918261201,"nacimiento":958885200000,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"2B84EF224480266E8A2E7C38610AC020","estado":1,"nombres":"Gisella Margaret ","apellidos":"Asencios Ollero","celular":"987654321","documento":"40905242","email":"masencios@proempresa.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1518470328675,"nacimiento":573022800000,"verifiedEmail":true,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"0FB7DBF262014268DE7B82D24F27FC3E","estado":1,"nombres":"Carmen Milagros ","apellidos":"Larrea Fonseca","celular":"989066484","documento":"40584646","email":"clarrea@proempresa.com.pe","tipoPersona":1,"userType":2,"ciudad":1,"registro":1496953463000,"nacimiento":339656400000,"verifiedEmail":false,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"F5F3018D368C9E36E481D24DEEC3C43B","estado":1,"nombres":"Katherine Giovanna","apellidos":"Palomino Jara","celular":"920232818","documento":"45922819","email":"kpalomino@raizperu.com","tipoPersona":1,"userType":2,"ciudad":1,"registro":1495562016063,"verifiedEmail":true,"verifiedTelef":false,"verifiedNumdoc":false},{"crypt":"698CE565A0AE241BE7590DDF91023FEB","estado":1,"nombres":"Diego","apellidos":"Quispe Gutierrez","celular":"920231036","documento":"44444444","email":"captaciones@raizperu.com","tipoPersona":1,"userType":2,"ciudad":1,"registro":1488576263332,"nacimiento":542523600000,"verifiedEmail":true,"verifiedTelef":false,"verifiedNumdoc":false}]

const dataIfi = {
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
        label: 'Numero de documento',
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
        label: 'Registrado',
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: 'icon',
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
    ifi.map((item, i) => {

      return {          
          numero: i + 1,
          nombres: item.nombres,
          apellidos: item.apellidos,
          documento: item.documento,
          email: item.email,
          ciudad: item.ciudad,
          celular: item.celular,
          registro: moment(item.registro).format('DD/MM/YYYY'),
          check: item.verifiedEmail === true ? <FaRegCheckSquare style={{width: '20px', height: '20px'}} /> : <FaRegSquare style={{width: '20px', height: '20px' }} />,
          opciones: <div className="row" style={{}}><FaRegEdit style={{width: '25px', marginLeft: '30px'}} /> {item.verifiedEmail === true ? <FaUserTimes style={{width: '25px'}} /> : <FaTrash style={{width: '25px'}} /> }</div>
      }
    })
  };


export default dataIfi;





