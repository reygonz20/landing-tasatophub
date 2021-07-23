import React, { Fragment, useState, useEffect } from 'react';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Modal, Button, Tooltip, OverlayTrigger, Popover, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt, FaTimes, FaDollarSign, FaRegCheckSquare, FaRegEdit, FaTelegramPlane, FaInfo, FaCheck  } from "react-icons/fa";


import moment from 'moment'

//import slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------


import Detalle from './detalleUsuario';
import Detalle2 from './detalleUsuario2';


import './subastas-asweb.css'


const BodySubastasAsweb = ({mobile}) => {

    const [tab, setTab] = useState('1');
    const [detalleFila, setDetalleFila] = useState(false);
    const [selectedRow, setSelectedRow] = useState(0);
    const [openModal, setOpenModal] = useState(false);


    //---------------cosas de Modal de Aperturar
    const [monto, setMonto] = useState(25000)
  const [plazo, setPlazo] = useState(183)
  const [moneda, setMoneda] = useState('S/')
  const [tasa, setTasa] = useState();
  const [fechaApertura, setFechaApertura] = useState();
  const [codigoProducto, setCodigoProducto] = useState('')
  const [modalResume, setModalResume] = useState('')
  const [motivo, setMotivo] = useState('');
  const [check, setCheck] = useState(false)
  const [numDoc, setNumDoc] = useState('')

  const handleMonto = (value) => {
    setMonto(value);
  };

  const handlePlazo = (value) => {
    setPlazo(value);
  };

  const handleOnchange = (e) => {
    if (e.target.value.length) {
      setMonto(e.target.value);
    } else {
      setMonto(0);
    }
  };

  const onCheckboxChange = () => {
    if (!check) {
        setCheck(true)
    } else {
        setCheck(false)
        setNumDoc('')
    }
 }

 const handleOnchangeNumDoc = (e) => {
  if (e.target.value.length) {
    setNumDoc(e.target.value);
  } else {
    setNumDoc(0);
  }
};

  const handleOnchangeTasa = (e) => {
    if (e.target.value.length) {
      setTasa(e.target.value);
    } else {
      setTasa();
    }
  };

  const handleOnchangeMotivo = (e) => {
    if (e.target.value.length) {
      setMotivo(e.target.value);
    } else {
      setMotivo('');
    }
  };

  const handleOnchangeFecha = (e) => {
    if (e.target.value.length) {
      setFechaApertura(e.target.value);
    } else {
      setFechaApertura();
    }
  };

  const handleOnchangePlazo = (e) => {
    if (e.target.value.length) {
      setPlazo(e.target.value);
    } else {
      setPlazo(0);
    }
  };

    //-----------------------------------

    
  const handleOpen = () => {
    setOpenModal(true)
}
const handleClose = () => {
    setOpenModal(false)
}

const porValidar = [{"id":9754,"crypt":"3DB6990B1C38E656914AEAA2B606BC13","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":25000.00,"tasa":4.800,"codigo":"SPF331421000083","situacion":"D","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6192","inicio":1612387800699,"fin":1612389600699,"revDate":1612501200000,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":9720,"crypt":"93EBDDA1A2993054B4066E198671BE27","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":1080,"tyc":true,"titular":false,"monto":150000.00,"tasa":6.000,"codigo":"SPF331421000054","situacion":"D","otroNum":"10270170","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6434","inicio":1611178200664,"fin":1611180000664,"revDate":1611550800000,"enRev":true,"userCrypt":"F9BEEB35A91601B92AF580BB098A5B32","nombre":"Diego","apellidos":"Llona","documento":1,"docNumero":"42235059","celular":"984799473","correo":"diegollona@yahoo.com"},{"id":9349,"crypt":"FF9A98BAC1845D74B03248A41DDF5658","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":120000.00,"tasa":6.000,"codigo":"SPF331420000774","situacion":"D","ganador":"Caja Rural Raíz","isCanceledByIfi":false,"clave":"5864","inicio":1599082200308,"fin":1599084000308,"revDate":1603688400000,"enRev":true,"userCrypt":"4994688AAAEA22A85E012074A876287D","nombre":"Jose ","apellidos":"Bacilio velasco","documento":1,"docNumero":"15425021","celular":"994411165","correo":"elzurdo1960.10@hotmail.com"},{"id":9258,"crypt":"517087F4DC773BAF9B37EE5EC6953C29","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"tyc":true,"titular":true,"monto":100050.00,"tasa":6.200,"codigo":"SPF331420000693","situacion":"D","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6165","inicio":1598045400773,"fin":1598047200773,"enRev":true,"userCrypt":"9B248BDDF15956D71CC93C6CB3FA386D","nombre":"Jose","apellidos":"Gonzales","documento":1,"docNumero":"08139629","celular":"993479039","correo":"jlgp2007@yahoo.com"},{"id":9124,"crypt":"828BFAAF3648A44F5BC61192930657D9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":6.250,"codigo":"SPF331420000606","situacion":"D","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3327","inicio":1594416600881,"fin":1594418400881,"enRev":true,"userCrypt":"121C06ECD756F4D5EB9555DF354943D1","nombre":"Ronald","apellidos":"Encarnacion Leyton ","documento":1,"docNumero":"41114805","celular":"951734675","correo":"ronald_leyton@hotmail.com"}]
const porAperturar = [{"id":9831,"crypt":"58CEF6F48A84EC5012CB0F54990A970A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":4.350,"tasafinal":4.350,"codigo":"SPF331421000151","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1615179600000,"isCanceledByIfi":false,"clave":"6451","inicio":1614807000857,"fin":1614808800857,"revDate":1615179600000,"enRev":true,"userCrypt":"F2CD5E482FE6195A3C2CBD2BF348D837","nombre":"Ricardo Luis","apellidos":"Portocarrero Dulanto ","documento":1,"docNumero":"07782907","celular":"993123206","correo":"ricardopd270@gmail.com"},{"id":9719,"crypt":"72B473BAC8FDB104497D9F06E79358FB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":94500.00,"montofinal":96495.20,"tasa":5.000,"tasafinal":5.000,"codigo":"SPF331421000053","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1615525200000,"isCanceledByIfi":false,"clave":"8589","inicio":1611178200888,"fin":1611180000888,"revDate":1611550800000,"enRev":true,"userCrypt":"1E5CDB998AC447B71D19F56D0724A097","nombre":"cesar","apellidos":"rojas soto","documento":1,"docNumero":"40959580","celular":"949173413","correo":"cesars961@hotmail.com"},{"id":9561,"crypt":"216E54DC5B09ED0167AA2CB457ECB318","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":180,"plazofinal":360,"tyc":true,"titular":true,"monto":90480.00,"montofinal":90475.00,"tasa":4.600,"tasafinal":5.000,"codigo":"SPF331420000945","situacion":"T","ganador":"Caja Rural Del Centro","apertura":1606366800000,"isCanceledByIfi":false,"clave":"3851","inicio":1605821400016,"fin":1605823200016,"revDate":1606107600000,"enRev":true,"userCrypt":"983BB5A051B6C08395D7A8598BDB88C8","nombre":"Sergio ","apellidos":"Urday Zegarra","documento":1,"docNumero":"40280142","celular":"926800577","correo":"surday@gmail.com"},{"id":9350,"crypt":"0D3B9B03342E701F7FC3EFF24E8C2C92","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":183,"plazofinal":365,"tyc":true,"titular":false,"monto":60000.00,"montofinal":60000.00,"tasa":4.600,"tasafinal":5.500,"codigo":"SPF331420000775","situacion":"T","otroNum":"08638472","ganador":"Caja Rural Del Centro","apertura":1599195600000,"isCanceledByIfi":false,"clave":"9253","inicio":1599082200051,"fin":1599084000051,"revDate":1599454800000,"enRev":true,"userCrypt":"1866BD33FB8AD36AA3D09572662EA8FF","nombre":"Jesus","apellidos":"Loarte","documento":1,"docNumero":"45197103","celular":"974638983","correo":"jesus204@gmail.com"}]
const porRechazar = [{"id":9926,"crypt":"9472C02C70ABAFCC065FB48B46FC1E21","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":5000.00,"codigo":"SPF331421000237","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"8828","inicio":1618263000003,"fin":1618264800003,"userCrypt":"5CD61C343F464541179E53CD443563EB","nombre":"Johnnathan ","apellidos":"Preciado Diaz","documento":2,"docNumero":"000947591","celular":"942858927","correo":"jpreciadodiaz@gmail.com"},{"id":9845,"crypt":"3E63D4F784258D4970B7231EEEB8F3D3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":24000.00,"codigo":"SPF331421000165","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"9372","inicio":1615498200236,"fin":1615500000236,"userCrypt":"471D0AA6618F651FD11A79A302FEE42D","nombre":"juan","apellidos":"perez","documento":1,"docNumero":"84521657","celular":"985463215","correo":"savicok120@566dh.com"},{"id":9728,"crypt":"B4F5C03A31CBAA84A64BF2B46E42F81D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":500.00,"codigo":"SPF331421000060","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2841","inicio":1611610200881,"fin":1611612000881,"userCrypt":"6FFC9F0996FFBC643A34466F713DF13C","nombre":"Alejandro","apellidos":"Aza","documento":1,"docNumero":"73755879","celular":"975936600","correo":"alejandroaza2001@gmail.com"},{"id":9709,"crypt":"2DA4662FEB4893F80144876EE67D850E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":1000.00,"codigo":"SPF331421000044","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2132","inicio":1610573400093,"fin":1610575200093,"userCrypt":"DE3239B755ABBD94AC816DCF918477A2","nombre":"Danilo alonso","apellidos":"Delgado Motta","documento":1,"docNumero":"72005622","celular":"965203114","correo":"ddanilo_98@hotmail.com"},{"id":9505,"crypt":"F479D56463E487C080417E63A4689819","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":182,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331420000907","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2138","inicio":1603920600461,"fin":1603922400461,"userCrypt":"D78536A4006090BB676B2E34EF28AA4F","nombre":"Eduardo","apellidos":"Pajuelo Otero","documento":1,"docNumero":"72428271","celular":"921168460","correo":"edupajuelootero@gmail.com"},{"id":9429,"crypt":"7F99DDD0C16B1C219EDE6C8075F23529","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"tyc":true,"titular":true,"monto":500.00,"codigo":"SPF331420000841","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"5917","inicio":1601501400100,"fin":1601503200100,"userCrypt":"C7C9D977AA7CB7AFA1283A12D574ACC9","nombre":"Paolo","apellidos":"Torres","documento":1,"docNumero":"47348004","celular":"966456082","correo":"yupanqui47348004@gmail.com"},{"id":9424,"crypt":"25D127D71052752F431297E84CA86461","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"clonado":true,"monto":1789.25,"codigo":"SPF331420000836","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"1622","inicio":1601415000305,"fin":1601416800305,"userCrypt":"34E053C0751B0BF70315BD184EA119CD","nombre":"María del Rosario","apellidos":"Jiménez del Rio","documento":1,"docNumero":"08762622","celular":"998122218","correo":"mrosariojr2003@yahoo.com"},{"id":9423,"crypt":"82A877C4CB9CE4A67DAE2208629750B4","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"codigo":"SPF331420000835","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"1622","inicio":1601415000305,"fin":1601416800305,"userCrypt":"34E053C0751B0BF70315BD184EA119CD","nombre":"María del Rosario","apellidos":"Jiménez del Rio","documento":1,"docNumero":"08762622","celular":"998122218","correo":"mrosariojr2003@yahoo.com"},{"id":9370,"crypt":"E33A83B258BA4D47ACBBDAC556CD8BA3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":720,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331420000795","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,40],"clave":"8976","inicio":1599773400521,"fin":1599775200521,"userCrypt":"750E0C4A13A6F554EF03D599F6895E89","nombre":"Celina","apellidos":"Astuquipan","documento":1,"docNumero":"41452945","celular":"973145333","correo":"celinaam@gmail.com"},{"id":9357,"crypt":"762F130DBF684C00DD244CD68A7D23CF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331420000782","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2532","inicio":1599514200420,"fin":1599516000420,"userCrypt":"9B00E555E9A4E14F62E438934B8F88D4","nombre":"Jean Paul","apellidos":"Alfaro Silva","documento":1,"docNumero":"41346789","celular":"950640875","correo":"jeanpaul44@hotmail.com"},{"id":9348,"crypt":"216D351422DC096E928B37F0AB9F03D6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":550,"tyc":true,"titular":true,"monto":50500.00,"codigo":"SPF331420000773","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"9589","inicio":1599082200025,"fin":1599084000025,"userCrypt":"5C09AFDD88C6721C8531CA510872CB90","nombre":"cromwell","apellidos":"anchante","documento":1,"docNumero":"43819686","celular":"981460764","correo":"cromwell026@gmail.com"},{"id":9337,"crypt":"2A44C302B3134E167D355B7FCDD65826","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":360,"tyc":true,"titular":true,"monto":5000.00,"codigo":"SPF331420000762","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"1438","inicio":1598909400040,"fin":1598911200040,"userCrypt":"A23E8C52695226BFD30AC190FEFD321B","nombre":"Elvis","apellidos":"Cn","documento":1,"docNumero":"00000009","celular":"980980980","correo":"elvis_2836944@hotmail.com"},{"id":9333,"crypt":"3C4CB1CC9B889B867F0311DEFC7F6D1F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"clonado":true,"monto":71160.00,"codigo":"SPF331420000758","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"8772","inicio":1598650200670,"fin":1598652000670,"userCrypt":"4D5173BB912FBD22D7211BB0685A3E2E","nombre":"Héctor Roberto ","apellidos":"Urquiaga Mayerhoffer ","documento":1,"docNumero":"17850903","celular":"915373440","correo":"hrum1951@hotmail.com"},{"id":9332,"crypt":"6E73798E7D4924F284FAFE522639F238","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":20000.00,"codigo":"SPF331420000757","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"8772","inicio":1598650200670,"fin":1598652000670,"userCrypt":"4D5173BB912FBD22D7211BB0685A3E2E","nombre":"Héctor Roberto ","apellidos":"Urquiaga Mayerhoffer ","documento":1,"docNumero":"17850903","celular":"915373440","correo":"hrum1951@hotmail.com"},{"id":9321,"crypt":"DCE44D12AFFB261312D5C6985F0F4D64","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":720,"tyc":true,"titular":true,"monto":50000.00,"codigo":"SPF331420000746","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"5324","inicio":1598563800579,"fin":1598565600579,"userCrypt":"D51988C0739ECFE6916CB8CFAAF11DF9","nombre":"Samuel","apellidos":"Pacheco","documento":1,"docNumero":"41419498","celular":"992877677","correo":"sajopasa@hotmail.com"},{"id":9302,"crypt":"78220F5E44D3D1C1893AC122CA9FDB07","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":721,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331420000728","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,40],"clave":"7566","inicio":1598477400206,"fin":1598479200206,"userCrypt":"A0D6641DC636FDCF6176B34581AEF5C4","nombre":"Carlos","apellidos":"Suyon","documento":1,"docNumero":"43293452","celular":"902457455","correo":"pachisuyon@hotmail.com"},{"id":9272,"crypt":"6EBDDB04B303D8D2F6A8AA94EB0E6CE8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":35856.00,"codigo":"SPF331420000706","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,40],"clave":"6736","inicio":1598391000440,"fin":1598392800440,"userCrypt":"F10061802DF61CDB2E2CEBB5773416F6","nombre":"Emmanuel","apellidos":"Ermoire","documento":2,"docNumero":"000769781","celular":"936257027","correo":"ermoire@gmail.com"},{"id":9271,"crypt":"A3FB6DBF1E2A3D917D65DBC87F9416BA","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331420000705","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,40],"clave":"6736","inicio":1598391000440,"fin":1598392800440,"userCrypt":"F10061802DF61CDB2E2CEBB5773416F6","nombre":"Emmanuel","apellidos":"Ermoire","documento":2,"docNumero":"000769781","celular":"936257027","correo":"ermoire@gmail.com"},{"id":9252,"crypt":"5AD758DF543CA8C558CE552E8FA063BA","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":14500.00,"codigo":"SPF331420000688","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2172","inicio":1597786200126,"fin":1597788000126,"userCrypt":"19426E7D9D26B0379780446212D8EAD6","nombre":"Frank","apellidos":"Carmona","documento":1,"docNumero":"44328802","celular":"993957005","correo":"fecarmonav@outlook.com"},{"id":9237,"crypt":"6FD5D67949FDAF6598536D1566328EAE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":5000.00,
"codigo":"SPF331420000677","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,33,40],"clave":"1274","inicio":1597095000536,"fin":1597096800536,"userCrypt":"6FE67081653009671A8F0F2CB1F8272E","nombre":"Gianfranco","apellidos":"Vivanco","documento":1,"docNumero":"73019268","celular":"922832086","correo":"gianf.1495@gmail.com"},{"id":9224,"crypt":"7FA02E7DF5369D438D5AB5A62CB6437B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"codigo":"SPF331420000664","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"7593","inicio":1596663000186,"fin":1596664800186,"userCrypt":"27B25ED4146C8D90FAFA62FF1B6A5F2E","nombre":"Juan Alberto","apellidos":"Quintana Effio","documento":1,"docNumero":"43406717","celular":"943097937","correo":"juanalbertoq@gmail.com"},{"id":9191,"crypt":"3904C59DFECB80C6C77783C0E2A6687C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331420000636","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"2494","inicio":1595626200948,"fin":1595628000948,"userCrypt":"CF1697CE85B83814D70BBB071CF65B61","nombre":"Konrat","apellidos":"Kala","documento":1,"docNumero":"41253419","celular":"952231576","correo":"konrat@hotmail.com"},{"id":9145,"crypt":"C3249D1556B037388D4B717788520085","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":724,"tyc":true,"titular":true,"monto":35000.00,"codigo":"SPF331420000621","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,40],"clave":"6215","inicio":1595021400430,"fin":1595023200430,"userCrypt":"087E59163809ED475DB4BC9919C9D50E","nombre":"Cesar ","apellidos":"Calderon Heshiki","documento":1,"docNumero":"10549236","celular":"946672501","correo":"cesarheshiki@gmail.com"},{"id":9108,"crypt":"FFB6AFC7431F35DA459F336E4A6627C8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":2000.00,"codigo":"SPF331420000597","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,33,40],"clave":"5113","inicio":1594071000447,"fin":1594072800447,"userCrypt":"349B5874AA5C4B168C22DDFD0CB40B9F","nombre":"Martin","apellidos":"Timana","documento":1,"docNumero":"73435533","celular":"968175661","correo":"martin24daniel@gmail.com"},{"id":9010,"crypt":"28B99C4C13FFC8012E806C33D00CB94D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331420000527","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"6656","inicio":1591047000713,"fin":1591048800713,"userCrypt":"B0F65A150877713C66D3CE81A0CD159E","nombre":"Mario","apellidos":"Viteri","documento":1,"docNumero":"73572784","celular":"967665674","correo":"mario.viteri.guevara@gmail.com"},{"id":8967,"crypt":"5B0AAD4CCF4986CB0F921105C352A0E6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":8539.00,"codigo":"SPF331420000491","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"3739","inicio":1590010200617,"fin":1590012000617,"userCrypt":"8C5B5313EAFBD9A6262C6FB356209760","nombre":"María de Fátima ","apellidos":"Andrade Ramos ","documento":1,"docNumero":"07198529","celular":"956903562","correo":"marifa505@gmail.com"},{"id":8954,"crypt":"94206CBFD291710BDB11A25738F9868E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":500.00,"codigo":"SPF331420000482","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"2825","inicio":1589837400799,"fin":1589839200799,"userCrypt":"AEE2EE5DB11D5F4A45CC682D461E1674","nombre":"JOSE ANTONIO","apellidos":"REQUEJO ORDOÑEZ","documento":1,"docNumero":"08852383","celular":"989386115","correo":"j_requejo@hotmail.com"},{"id":8881,"crypt":"1D78CC3AE44061306FFF63C5043927D9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":99000.00,"codigo":"SPF331420000430","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"2519","inicio":1588627800085,"fin":1588629600085,"userCrypt":"7FE1D894EEDF08BFF149DF7236FD76F9","nombre":"Dante Duval","apellidos":"Leon Altamirano","documento":1,"docNumero":"44981882","celular":"990353953","correo":"dleon@noova7.com"},{"id":8873,"crypt":"95F76B4E7EA74BBD6D515C8B1DDFAA0A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331420000425","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"5995","inicio":1588195800093,"fin":1588197600093,"userCrypt":"BAB59083933329F131D39149640BD2FD","nombre":"juan luis","apellidos":"choque aroni","documento":1,"docNumero":"714558908","celular":"925853539","correo":"hardy.jlca72@gmail.com"},{"id":8844,"crypt":"6D2AF0C3A386408F71D16E7635EF0EBF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":33000.00,"codigo":"SPF331420000402","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"5568","inicio":1586899800121,"fin":1586901600121,"userCrypt":"406766A016A263CAA2405B6C7F0789DC","nombre":"Leonor Eugenia ","apellidos":"Chia Picasso","documento":1,"docNumero":"70478249","celular":"989608258","correo":"lchiapicasso@gmail.com"},{"id":8829,"crypt":"0D12B20728AB0094F8D7B5769B6884AE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"clonado":true,"monto":10087.80,"codigo":"SPF331420000392","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11],"clave":"5581","inicio":1586813400501,"fin":1586815200501,"userCrypt":"FB8BACFB251EDF92E295E0F355B5F5F2","nombre":"PABLO CESAR ","apellidos":"ALLPAS OROPEZA","documento":1,"docNumero":"21257078","celular":"604226915","correo":"kakartes@mail.ee"},{"id":8828,"crypt":"84140B9036D15ACEF841A1EE87B92BB1","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000391","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11],"clave":"5581","inicio":1586813400501,"fin":1586815200501,"userCrypt":"FB8BACFB251EDF92E295E0F355B5F5F2","nombre":"PABLO CESAR ","apellidos":"ALLPAS OROPEZA","documento":1,"docNumero":"21257078","celular":"604226915","correo":"kakartes@mail.ee"},{"id":8824,"crypt":"AE33297E7A90A55A9F58AA1D0CF14600","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000387","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"5483","inicio":1586381400083,"fin":1586383200083,"userCrypt":"5465A728BDFB728756633E33093D1FBE","nombre":"Dirval Francisco ","apellidos":"Allca Sánchez ","documento":1,"docNumero":"10360002","celular":"948081098","correo":"spercy768@gmail.com"},{"id":8823,"crypt":"6AF9B6A1C2DAE5D1E41A9F235C5A75FB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000386","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"3811","inicio":1586381400699,"fin":1586383200699,"userCrypt":"5465A728BDFB728756633E33093D1FBE","nombre":"Dirval Francisco ","apellidos":"Allca Sánchez ","documento":1,"docNumero":"10360002","celular":"948081098","correo":"spercy768@gmail.com"},{"id":8802,"crypt":"7B7D06DCAD9030C9C5D15C25C9E799A3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":1988000.00,"codigo":"SPF331420000366","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"2398","inicio":1585603800494,"fin":1585605600494,"userCrypt":"DADBFC2F4B101E286FADBA7BC784F86A","nombre":"Eriberto","apellidos":"Romaina Gutierrez","documento":1,"docNumero":"48449954","celular":"922171086","correo":"eribertoromainagutierrez@gmail.com"},{"id":8783,"crypt":"B2C0DDDFA7295ABC559B9AB24717AB12","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":270,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000354","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"1745","inicio":1585344600448,"fin":1585346400448,"userCrypt":"7DE808F3493032C7C7924F29DD25D34E","nombre":"Jorge","apellidos":"Barrionuevo","documento":1,"docNumero":"76267341","celular":"933207373","correo":"jbvillanelo@gmail.com"},{"id":8769,"crypt":"C824AD759D39089B6D591D81324B86D7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331420000346","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"7122","inicio":1585171800980,"fin":1585173600980,"userCrypt":"F94F378BF39901C9C3F7EB7B80EC826E","nombre":"walter","apellidos":"morales","documento":1,"docNumero":"09994441","celular":"993484350","correo":"wamor55@gmail.com"},{"id":8699,"crypt":"57296E6DDEB8B6DD9B55D09A153ADAF5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000290","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,10,40],"clave":"3895","inicio":1584999000725,"fin":1585000800725,"userCrypt":"5E5FD7B6F3CBBBA092FDF2A429765600","nombre":"Milagros elvira","apellidos":"Farromeque. Marchan","documento":1,"docNumero":"77702783","celular":"981184001","correo":"kaorid_1516@outlook.com"},{"id":8697,"crypt":"4EFB1C0E5F5E7AA06D5A1050945F6037","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":181,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF330420000010","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11,40],"clave":"2241","inicio":1584653400631,"fin":1584655200631,
"userCrypt":"C864DEC9121CFA080892D0E64D841638","nombre":"Elard Pablo","apellidos":"Arocutipa Vásquez","documento":1,"docNumero":"70481341","celular":"959108968","correo":"p.arocutipavasquez@gmail.com"},{"id":8565,"crypt":"D9F147CC11D53FADAE8DA4A63616E251","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000166","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"8915","inicio":1581629400027,"fin":1581631200027,"userCrypt":"7B9D7F04C8BFD29FE51FE302851AAE37","nombre":"LILIA ANDREA","apellidos":"GUZMAN NEYRA","documento":1,"docNumero":"75762424","celular":"977889217","correo":"andreaguadalupe7576@gmail.com"},{"id":8564,"crypt":"2FA3115F6278CCFEF271529621F46DE3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"codigo":"SPF331420000165","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"2625","inicio":1581543000808,"fin":1581544800808,"userCrypt":"C64A374253867BD858433074AE5C06CD","nombre":"Luis ","apellidos":"Escobedo Chávez ","documento":1,"docNumero":"44144112","celular":"992721839","correo":"luisesc@hotmail.com"},{"id":8510,"crypt":"1DD667EC01F083EA8E75BC2F2D7C4655","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000120","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"1194","inicio":1580247000164,"fin":1580248800164,"userCrypt":"6F27D814EAE7D0174B2344FF59AA498A","nombre":"Hover","apellidos":"Campos Ramos","documento":1,"docNumero":"08532628","celular":"987758030","correo":"hcampos_ramos@hotmail.com"},{"id":8469,"crypt":"446846F0CA56ED770515A6AFB01E60DE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":64000.00,"codigo":"SPF331420000087","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"7674","inicio":1579555800546,"fin":1579557600546,"userCrypt":"B625271BD22EF7536BD2A134FB9CF3F2","nombre":"Daniel ","apellidos":"Alba Maguiña ","documento":1,"docNumero":"31664610","celular":"998831224","correo":"dalba99@hotmail.com"},{"id":8459,"crypt":"12954130616BA0111E49A3F50952485E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":30000.00,"codigo":"SPF331420000078","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"1185","inicio":1579296600310,"fin":1579298400310,"userCrypt":"3B75AA8A2201C538AA5A65B881656E13","nombre":"Katia","apellidos":"Segovia","documento":1,"docNumero":"43653741","celular":"988083442","correo":"kasedi.ing@gmail.com"},{"id":8433,"crypt":"863AA1E02808D7D865314EFF764E5904","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331420000057","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"2584","inicio":1579037400347,"fin":1579039200347,"userCrypt":"B501B1C8454099274CEE19BA64926850","nombre":"Wilder ","apellidos":"Rinza Santos ","documento":1,"docNumero":"76321024","celular":"997792056","correo":"wrisantos.isitel@gmail.com"},{"id":8257,"crypt":"1202CB9C8E05144EC2926A915CD083B4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419002352","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"4425","inicio":1576186200733,"fin":1576188000733,"userCrypt":"CCFC305CF2A2CF72EF779107BA4F674E","nombre":"David","apellidos":"Uriarte Perez","documento":1,"docNumero":"44015884","celular":"950295423","correo":"daviduriarte@hotmail.com"},{"id":8239,"crypt":"9CA6F231E1A4639050900EDB9B6B10FF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":33620.00,"codigo":"SPF331419002338","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,10,40],"clave":"6424","inicio":1575927000105,"fin":1575928800105,"userCrypt":"CB827271266AD4BAB4EA256C0DC9FA80","nombre":"LUZ MARY","apellidos":"VILLAYZAN","documento":1,"docNumero":"08005828","celular":"943909046","correo":"lumavita@yahoo.com.ar"},{"id":8177,"crypt":"096BF7353A871A4DD9BB65CAA63F2E9A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":368,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419002281","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"8463","inicio":1574285400212,"fin":1574287200212,"userCrypt":"C0C7CB002A1AF0726C800BAA86B0C2F0","nombre":"Oscar javier","apellidos":"Gonzáles sarmiento","documento":1,"docNumero":"07280819","celular":"991815915","correo":"oscarr259@hotmail.com"},{"id":8171,"crypt":"BC8790523F77101773C45B445BAF8FF5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":70000.00,"codigo":"SPF331419002276","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"8919","inicio":1574285400044,"fin":1574287200044,"userCrypt":"A17747F50A8B8D57BA8BC22709B9BA57","nombre":"Pedro","apellidos":"Javier Ruiz","documento":1,"docNumero":"44118982","celular":"995978888","correo":"pjavierr01@gmail.com"},{"id":8168,"crypt":"DE4E7F343290FE8D0074324C862D4313","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419002274","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11],"clave":"6512","inicio":1574199000653,"fin":1574200800653,"userCrypt":"D44F41D6A1216F1B04474EAA35E25208","nombre":"Sole","apellidos":"Poma","documento":1,"docNumero":"43639673","celular":"991999999","correo":"svpoma@gmail.com"},{"id":8115,"crypt":"B6F53A3F71B1EA78C07A94329D343FF1","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419002227","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,11],"clave":"4238","inicio":1574112600472,"fin":1574114400472,"userCrypt":"4D21BDE640318DEF2097FF68C5EA9236","nombre":"CESAR","apellidos":"VIGIL GUERRERO","documento":1,"docNumero":"08249071","celular":"990644828","correo":"cesarvigil@yahoo.com"},{"id":8099,"crypt":"E48BFE596EA704D1920B005B637A6067","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":40000.00,"codigo":"SPF331419002213","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,40],"clave":"2138","inicio":1573680600526,"fin":1573682400526,"userCrypt":"FE6C6E6E63629FF6B2996E214804E056","nombre":"Genix Jhon ","apellidos":"Gamarra bravo","documento":1,"docNumero":"47871166","celular":"952317510","correo":"stiver_5@hotmail.com"},{"id":8076,"crypt":"6F1D08DEB8588D4B400335BCFCF15C41","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":1000.00,"codigo":"SPF331419002196","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11],"clave":"5383","inicio":1573507800567,"fin":1573509600567,"userCrypt":"BC4DF816F09451207C86DD5C8D004062","nombre":"jose","apellidos":"ortega","documento":1,"docNumero":"43145264","celular":"999999999","correo":"antonio427@hotmail.com"},{"id":8048,"crypt":"4E15373138004F95A4C027A19AC560D1","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":33230.00,"codigo":"SPF331419002174","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8212","inicio":1572989400363,"fin":1572991200363,"userCrypt":"D901EFB776651BA740FC056C1F65D702","nombre":"wilfredo","apellidos":"zela","documento":1,"docNumero":"45189216","celular":"998994409","correo":"wilfredodg@gmail.com"},{"id":8001,"crypt":"F6A50AB89F5B2C4C66EAF73160FDD695","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":390,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331419002136","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"2995","inicio":1571866200991,"fin":1571868000991,"userCrypt":"783BA1D9E6E7FADAF0489E037F7F9688","nombre":"Milagros","apellidos":"Tania","documento":1,"docNumero":"00968396","celular":"959205128","correo":"militakm@hotmail.com"},{"id":7986,"crypt":"3929A5F10AE0A517FA80F50EE5F750AC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":182,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419002121","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"3998","inicio":1571693400082,"fin":1571695200082,"userCrypt":"5AA394B8DFFACDF0E57165DA2EAF7546","nombre":"Diana Marcela","apellidos":"Gallego Muñeton","documento":2,"docNumero":"000683402","celular":"971063090","correo":"dikamarce1116@gmail.com"},{"id":7954,"crypt":"CAB68827C184B4755E3C46CF77C701A3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":134400.00,"codigo":"SPF331419002093","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8716","inicio":1570829400192,"fin":1570831200192,"userCrypt":"10D69180A0BCE2FD0007E7C2CF63583B","nombre":"Claudia","apellidos":"Sologuren ","documento":1,"docNumero":"10264441","celular":"956416068","correo":"nanasnannies@gmail.com"},{"id":7953,"crypt":"DF9B184D3FE72487B2EA0E2B9D326C6A","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":40000.00,"codigo":"SPF331419002092","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8716","inicio":1570829400192,"fin":1570831200192,"userCrypt":"10D69180A0BCE2FD0007E7C2CF63583B","nombre":"Claudia","apellidos":"Sologuren ","documento":1,"docNumero":"10264441","celular":"956416068",
"correo":"nanasnannies@gmail.com"},{"id":7944,"crypt":"C3EA3BA798CDB26FF8203AF3B7BCB731","producto":1,"productoName":"DPF","moneda":1,"ubicacion":9,"plazo":365,"tyc":true,"titular":true,"monto":4000.00,"codigo":"SPF331919000025","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,11,38],"clave":"7343","inicio":1570656600494,"fin":1570658400494,"userCrypt":"58CEF6F48A84EC5012CB0F54990A970A","nombre":"Ernesto","apellidos":"García maza","documento":1,"docNumero":"03306564","celular":"968105025","correo":"nel.gar.jua@gmail.com"},{"id":7940,"crypt":"1705C2FD50542A04CB76678BB23A781C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":720,"tyc":true,"titular":false,"monto":940000.00,"codigo":"SPF331419002082","situacion":"R","otroNum":"10317993","isCanceledByIfi":false,"selectCompetidores":[9,11,38],"clave":"3824","inicio":1570656600301,"fin":1570658400301,"userCrypt":"3596FC576B058CF2FBDB3389F8AA6CC2","nombre":"Alejandro","apellidos":"Medina","documento":1,"docNumero":"07940050","celular":"94948634","correo":"alejandro.medina.moreno@gmail.com"},{"id":7932,"crypt":"736A4F2EAC2D80C2FBC1F1CD0AF35D79","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":365,"tyc":true,"titular":true,"monto":12000.00,"codigo":"SPF330419000054","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11,38],"clave":"5487","inicio":1570483800605,"fin":1570485600605,"userCrypt":"E57153103214054E082CB74B74354F5C","nombre":"Ernesto","apellidos":"Portugal","documento":1,"docNumero":"29592157","celular":"958439931","correo":"eportugal@hotmail.com"},{"id":7884,"crypt":"C29DA4C7A95C2B24E74FBBAD27BA7D45","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419002038","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"9263","inicio":1569447000578,"fin":1569448800578,"userCrypt":"C52427455A3A4D009E796A9EA5CDF2B3","nombre":"Paolo","apellidos":"Portal","documento":1,"docNumero":"41543778","celular":"987586343","correo":"paolopch@hotmail.com"},{"id":7834,"crypt":"1ECDB06B1A84EC897DC1C16224E6753B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001991","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"2719","inicio":1568669400441,"fin":1568671200441,"userCrypt":"526613C2C29DB165EA8F08C5E94503FF","nombre":"Deyanira","apellidos":"Mendez","documento":1,"docNumero":"47623889","celular":"983488621","correo":"lighny_23@hotmail.com"},{"id":7811,"crypt":"653B71E783152D6933AF12C75B536314","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"codigo":"SPF331419001975","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"4497","inicio":1568323800203,"fin":1568325600203,"userCrypt":"0A683BE16E2ADB7AFB1B2C716EECDC8D","nombre":"Jaime ","apellidos":"Vasquez","documento":1,"docNumero":"80299858","celular":"976300693","correo":"jaimevasquez1049@hotmail.com"},{"id":7761,"crypt":"5EB82C848D53DCA5133BAAABFC04A030","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":60000.00,"codigo":"SPF331419001932","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"9268","inicio":1567805400399,"fin":1567807200399,"userCrypt":"32FEA73AAD164EDFF97F45B21497EA6D","nombre":"Eduardo David","apellidos":"Urcuhuaranga Calderón","documento":1,"docNumero":"20010506","celular":"956714865","correo":"david_urcuhuaranga@hotmail.com"},{"id":7731,"crypt":"327ECAFD8FC1E217586CC2E8C32500E1","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":365,"tyc":true,"titular":false,"monto":100000.00,"codigo":"SPF331419001908","situacion":"R","otroNum":"12554485","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8211","inicio":1567546200846,"fin":1567548000846,"userCrypt":"C21942D05B119DFD07A7D2CAAC6D6BAA","nombre":"ALFREDO","apellidos":"AGUILAR","documento":1,"docNumero":"10667785","celular":"962803676","correo":"alfredo2323@gmail.com"},{"id":7722,"crypt":"99C2FD32A8709A1B774B31851A6EEB70","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":210,"tyc":true,"titular":true,"monto":45000.00,"codigo":"SPF331419001900","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"1427","inicio":1567459800630,"fin":1567461600630,"userCrypt":"4C4CD588645C71784F9925DF38A1132C","nombre":"Roberto","apellidos":"Bohórquez","documento":1,"docNumero":"06085457","celular":"924025283","correo":"rbhz@speedy.com.pe"},{"id":7715,"crypt":"4BFD431CFF5BE09AB5F3238DAE431A4E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419001893","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"3239","inicio":1567459800809,"fin":1567461600809,"userCrypt":"971C3036911B507C5B2603DF71584F30","nombre":"Keyla ","apellidos":"Medina Gonzales","documento":1,"docNumero":"45522789","celular":"989109188","correo":"laike_14@hotmail.com"},{"id":7707,"crypt":"64D8BF41A38701D58A1D1D0C72365D4A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":53000.00,"codigo":"SPF331419001886","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,38],"clave":"9287","inicio":1567459800311,"fin":1567461600311,"userCrypt":"3E037508F00DDA4E0D6FDC1E33E3360D","nombre":"fiorella","apellidos":"garay","documento":1,"docNumero":"45127647","celular":"949223785","correo":"fiorella.garaym@pucp.pe"},{"id":7701,"crypt":"A273846B0F9D75A6805243D2289315DD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001882","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"6415","inicio":1567114200347,"fin":1567116000347,"userCrypt":"973F9A13A80E104DFBAE216FDD3DE3B7","nombre":"Jorge Luis","apellidos":"Lopez","documento":1,"docNumero":"10353394","celular":"980078026","correo":"jpaucar1202@gmail.com"},{"id":7700,"crypt":"0914D641DFAA440EEF635ABD31697FC6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":5000.00,"codigo":"SPF331419001881","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,38],"clave":"9694","inicio":1567114200198,"fin":1567116000198,"userCrypt":"84F70F8A49895809778179AE7525AF10","nombre":"Pablo","apellidos":"Lostaunau rosales","documento":1,"docNumero":"41582731","celular":"932447389","correo":"lostaunauangel67@gmail.com"},{"id":7699,"crypt":"FB5FF295DBD03EF3D09594140FB1864E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"clonado":true,"monto":372680.00,"codigo":"SPF331419001880","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"2141","inicio":1567114200093,"fin":1567116000093,"userCrypt":"0417FBC50F3A763E0D46FEAA97FA46E2","nombre":"natalia","apellidos":"Gonzalez","documento":2,"docNumero":"001112548","celular":"944829071","correo":"ngonzalezriesgo@yahoo.com"},{"id":7686,"crypt":"657D5629C2D772E55EFED4B9DED1DA26","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":16932.50,"codigo":"SPF331419001868","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"9956","inicio":1567027800636,"fin":1567029600636,"userCrypt":"72DCD019903988AE2355A7079FDE5E7F","nombre":"Samuel","apellidos":"Lavado","documento":1,"docNumero":"10484845","celular":"961855778","correo":"selciq@gmail.com"},{"id":7672,"crypt":"C96F0F2541F8823A8788876896C51334","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":35000.00,"codigo":"SPF331419001858","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"9749","inicio":1567027800910,"fin":1567029600910,"userCrypt":"DD23277DBBE55FEE1EF345D91C3D1742","nombre":"JOSE","apellidos":"INGA","documento":1,"docNumero":"43097856","celular":"949598587","correo":"inga_perez@yahoo.com"},{"id":7670,"crypt":"CC2CCC85E2694B115617C1DA7B8439C6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":65000.00,"codigo":"SPF331419001856","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"1426","inicio":1567027800739,"fin":1567029600739,"userCrypt":"91ABA2D84253CD788AABAB108FD47F8B","nombre":"Karen Angie","apellidos":"Vargas Mesia ","documento":1,"docNumero":"74068256","celular":"977709416","correo":"karemvargasm@gmail.com"},{"id":7667,"crypt":"A4E81C0B3B470404997D3AF4313EB9DC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419001853","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,10,38],"clave":"1271","inicio":1566941400228,"fin":1566943200228,"userCrypt":"FF1D22BE1ABB83F407CE38765FF727DE","nombre":"Victor Luis","apellidos":"Gonzáles Silva ","documento":1,"docNumero":"42433677","celular":"945058719","correo":"vgonzales270583@gmail.com"},{"id":7666,"crypt":"582AAC969F667EDBADC11693F90BD370","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001852","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"7673","inicio":1566941400536,"fin":1566943200536,"userCrypt":"D17AC6C06BC2B6F628351E1D10BB06AD","nombre":"Alfredo","apellidos":"Cardoso Chunga","documento":1,"docNumero":"40690144","celular":"925103253","correo":"alfredo.cardoso@udep.pe"},{"id":7662,"crypt":"23AF26CCC8463A2591E4B30F2490BA99","producto":1,"productoName":"DPF","moneda":1,
"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"codigo":"SPF331419001848","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"4692","inicio":1566941400048,"fin":1566943200048,"userCrypt":"5E81DA9006D5B6406CD8A89FAAE95300","nombre":"Arianna","apellidos":"Alegre","documento":1,"docNumero":"71395145","celular":"957638749","correo":"arianna.alegre@gmail.com"},{"id":7648,"crypt":"1AD0ABA14AE0456C3E7340352025933F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":15000.00,"codigo":"SPF331419001835","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"2115","inicio":1566855000161,"fin":1566856800161,"userCrypt":"971F93BDF4B9CFA6E6DA2FBBF8C9B2DE","nombre":"Jonathan gerson ","apellidos":"Sanchez espinoza ","documento":1,"docNumero":"47615513","celular":"942976909","correo":"sanchez.jonathangerson@gmail.com"},{"id":7646,"crypt":"5ED154D47A2A370E10E7758BC33C4DC4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":30000.00,"codigo":"SPF331419001834","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"1792","inicio":1566855000158,"fin":1566856800158,"userCrypt":"FF69423F0B12B3EBA9510142D40F8313","nombre":"Roberto","apellidos":"Hurtado","documento":1,"docNumero":"41262586","celular":"959180794","correo":"roberto.hurtado@pucp.pe"},{"id":7645,"crypt":"D2A06F4CAD8D89213A4C72988F305203","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001833","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"3263","inicio":1566855000195,"fin":1566856800195,"userCrypt":"56490D4CCB9F2B4873489B1E3EBDCCEA","nombre":"Jull alexis","apellidos":"Rivas calle","documento":1,"docNumero":"43740884","celular":"943855404","correo":"jarc184_7@hotmail.com"},{"id":7616,"crypt":"AE9D9E20CDCA2D9B0FF1015D4EC400D8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":371,"tyc":true,"titular":true,"monto":40000.00,"codigo":"SPF331419001806","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,11,38],"clave":"9431","inicio":1566336600863,"fin":1566338400863,"userCrypt":"561A4B57DA8918D8486DA4DA4BDEC9D8","nombre":"Edison","apellidos":"Flores martinez","documento":1,"docNumero":"45043000","celular":"940150514","correo":"edisons.floresm@gmail.com"},{"id":7588,"crypt":"AB719E79D5372AEEA9AD530B6E83749A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":3385600.00,"codigo":"SPF331419001780","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,10,38],"clave":"4174","inicio":1565904600203,"fin":1565906400203,"userCrypt":"0863440BF72BF89515491894837E9C70","nombre":"CARLOS","apellidos":"SALAZAR","documento":1,"docNumero":"18101188","celular":"996353152","correo":"casadi1@hotmail.com"},{"id":7581,"crypt":"A2E6B6959D7DA5E42BBBD0297BFFE7A4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"clonado":true,"monto":50775.00,"codigo":"SPF331419001774","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"3975","inicio":1565904600895,"fin":1565906400895,"userCrypt":"B35D43B9E491B6EDC5E467137273D844","nombre":"thiago","apellidos":"ramirez","documento":1,"docNumero":"12787237","celular":"947970607","correo":"lj.sabogal18@outlook.com"},{"id":7580,"crypt":"07F81A4C108C54E03884E1F392AFD9E2","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":15000.00,"codigo":"SPF331419001773","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"3975","inicio":1565904600895,"fin":1565906400895,"userCrypt":"B35D43B9E491B6EDC5E467137273D844","nombre":"thiago","apellidos":"ramirez","documento":1,"docNumero":"12787237","celular":"947970607","correo":"lj.sabogal18@outlook.com"},{"id":7576,"crypt":"7A237B4D22B0023A3341CF802652A8CF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":83000.00,"codigo":"SPF331419001769","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,38],"clave":"6175","inicio":1565818200773,"fin":1565820000773,"userCrypt":"2009F2A1D62DB3ADDD3BCBE412CAF211","nombre":"LUIS","apellidos":"ORTIZ","documento":1,"docNumero":"41003408","celular":"993360609","correo":"luixleo@gmail.com"},{"id":7523,"crypt":"8809E7ABDD96FBEDAFB7FB3D821B8DFE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":101000.00,"codigo":"SPF331419001724","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,38],"clave":"2566","inicio":1565127000603,"fin":1565128800603,"userCrypt":"04CF6CA8B23998FF58C44D6E3E7DB16D","nombre":"Walter ","apellidos":"López miguel","documento":1,"docNumero":"10474598","celular":"928634389","correo":"welopem@hotmail.com"},{"id":7506,"crypt":"1C7F4C51C3BF6D357A44B3CD3C97EE81","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":211,"tyc":true,"titular":true,"monto":10000.00,"codigo":"SPF331419001707","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"9987","inicio":1565040600534,"fin":1565042400534,"userCrypt":"F49AF642C20A1973BBB6D2460FA7DD83","nombre":"Mirian","apellidos":"Carbajal Jaimes","documento":1,"docNumero":"45675346","celular":"970307343","correo":"miriancarbajal@gmail.com"},{"id":7499,"crypt":"D8DAC9241233F2C2C28602AD36456295","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":30000.00,"codigo":"SPF331419001702","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"1879","inicio":1565040600402,"fin":1565042400402,"userCrypt":"FB81C81DA44A5D19EE6D336A5ECB3E24","nombre":"Germán","apellidos":"Romero","documento":1,"docNumero":"10144858","celular":"966266071","correo":"cintiaaubert@gmail.com"},{"id":7494,"crypt":"158E452CC4DB482DF5A727651A7CB010","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"tyc":true,"titular":true,"monto":2000000.00,"codigo":"SPF331419001697","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[9,11,38],"clave":"6318","inicio":1564781400139,"fin":1564783200139,"userCrypt":"8A26D6DB76AA232E31A7EA2AB6649CF7","nombre":"Daniel Alonso ","apellidos":"Guerrero valle","documento":1,"docNumero":"41520127","celular":"922289245","correo":"daniel_guerrero82@hotmail.com"},{"id":7487,"crypt":"A074391B04CAA0D779B86B6EDD658217","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001691","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,11,38],"clave":"9414","inicio":1564781400677,"fin":1564783200677,"userCrypt":"5A2DB74C960C158D0A0CF2C82795FE8E","nombre":"Jose","apellidos":"Castro","documento":1,"docNumero":"77777777","celular":"972729486","correo":"josecastro.7@hotmail.com"},{"id":7486,"crypt":"C125A71B7817933CBD60A86F9FC31FDB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":60000.00,"codigo":"SPF331419001690","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"4272","inicio":1564781400002,"fin":1564783200002,"userCrypt":"A92D308404B42226EFC73CB5D30FC061","nombre":"José Javier","apellidos":"Morales More","documento":1,"docNumero":"03688978","celular":"920129163","correo":"jmoralesmore@outlook.com"},{"id":7456,"crypt":"21368D38765A275A143BCF14CA598DB2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001662","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"4529","inicio":1564608600188,"fin":1564610400188,"userCrypt":"65A940E468A53849D9853A1472065991","nombre":"Luis Alfredo","apellidos":"Benito Clemente","documento":1,"docNumero":"48298540","celular":"924005550","correo":"cheap.universe2012@gmail.com"},{"id":7454,"crypt":"91E16966351DDEB59AB0E07F2569DB63","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3000.00,"codigo":"SPF331419001661","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8618","inicio":1564608600602,"fin":1564610400602,"userCrypt":"A6421B084336DABF861F5BBBB6CEF4FC","nombre":"Joice","apellidos":"Salas","documento":1,"docNumero":"73222826","celular":"986699678","correo":"gsalashermoza@gmail.com"},{"id":7452,"crypt":"A027FED7434FB13B347BB7C369410CCE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"codigo":"SPF331419001660","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"7799","inicio":1564522200267,"fin":1564524000267,"userCrypt":"CCB15D4C9D32132B0B0DCE132BC98533","nombre":"Miguel","apellidos":"Mansilla","documento":1,"docNumero":"48226997","celular":"983678378","correo":"miguel.mansilla@rimac.com.pe"},{"id":7449,"crypt":"678B3B6E6B960F814E1D5D1696317BB8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":5000.00,"codigo":"SPF331419001657","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8722","inicio":1564522200336,"fin":1564524000336,"userCrypt":"DD57F6793F2252F85428E5AA6479D4DF","nombre":"Julián crisostomo","apellidos":"Huamani vargas","documento":1,"docNumero":"09465140","celular":"984704020","correo":"vargas20009@hotmail.com"},{"id":7443,"crypt":"C8FC863E6D8AA0E7CFA9D44470265D1C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":5000.00,"codigo":"SPF331419001652","situacion":"R","isCanceledByIfi":false,
"selectCompetidores":[7,9,10,11,38],"clave":"3559","inicio":1564522200804,"fin":1564524000804,"userCrypt":"5D11774B1C84652924BF3E9C3ACBEB1F","nombre":"Jose","apellidos":"Pérez mesones","documento":1,"docNumero":"47320398","celular":"941857674","correo":"joseperezmesones17@gmail.com"},{"id":7391,"crypt":"660F670F2250CCBAEAD3DA7D1AD08710","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":40000.00,"codigo":"SPF331419001610","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"5624","inicio":1563831000846,"fin":1563832800846,"userCrypt":"E6A2DAF5B3A8ED96ABAC6200D1AB4EA4","nombre":"Carmen Delia","apellidos":"Cáceres Rodríguez","documento":1,"docNumero":"09683329","celular":"933283654","correo":"carmendelia0470@gmail.com"},{"id":7375,"crypt":"FB6962EA2C6837B7B861C36DA8289AF2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":false,"monto":8000.00,"codigo":"SPF331419001598","situacion":"R","isCanceledByIfi":false,"selectCompetidores":[7,9,10,11,38],"clave":"8673","inicio":1563571800915,"fin":1563573600915,"userCrypt":"65AF1A70C4ACC1B4FA05BEA4F7C7A0E5","nombre":"PEDRO JEAN PIERRE","apellidos":"ALVINO TEMOCHE","documento":1,"docNumero":"71427453","celular":"953247749","correo":"jeanpierre_81_2@hotmail.com"}]

const rechazadas = [{"id":9951,"crypt":"4C91F523085D4A0EDE3DCB3673998159","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":3600.00,"tasa":4.300,"codigo":"SPF331421000259","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"1316","inicio":1619040600266,"fin":1619042400266,"enRev":false,"userCrypt":"9EF68EAC432F82D447816B40FC884D93","nombre":"vanessa","apellidos":"vera","documento":1,"docNumero":"40824620","celular":"964461668","correo":"vanessaveraavila@gmail.com"},{"id":9950,"crypt":"4F541DE1D87D163C571EF607AA2892C2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":18,"plazo":365,"tyc":true,"titular":true,"monto":7000.00,"tasa":4.300,"codigo":"SPF331221000007","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"6961","inicio":1619040600466,"fin":1619042400466,"enRev":false,"userCrypt":"D6FD50FF5FF37FD31B5BDDABADE6D7DE","nombre":"Valeria","apellidos":"Chavez","documento":1,"docNumero":"73086299","celular":"949260074","correo":"valeriacabrejos@gmail.com"},{"id":9949,"crypt":"2FFB570795A572473ACC6519F1797AFF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":15000.00,"tasa":4.300,"codigo":"SPF331421000258","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"1743","inicio":1619040600998,"fin":1619042400998,"enRev":false,"userCrypt":"04588B4F92387326EE77D639E2CFE774","nombre":"Ricardo ","apellidos":"Azurza mendoA","documento":1,"docNumero":"77342225","celular":"952940800","correo":"ricardoxx94@gmail.com"},{"id":9948,"crypt":"E18B1882B9386D0E16F564FBF04AA604","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.300,"codigo":"SPF331421000257","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"5989","inicio":1618954200480,"fin":1618956000480,"revDate":1619067600000,"enRev":true,"userCrypt":"80005FE39208E5BFAB1D00B490865B98","nombre":"David","apellidos":"Vásquez ","documento":1,"docNumero":"08021177","celular":"946209751","correo":"dvpuro2109@hotmail.com"},{"id":9947,"crypt":"54FA794F2F3BCBE084FA22A2A0019B38","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":730,"tyc":true,"titular":true,"monto":110000.00,"tasa":5.200,"codigo":"SPF331421000256","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"8163","inicio":1618867800571,"fin":1618869600571,"revDate":1619154000000,"enRev":true,"userCrypt":"DB2BF8376B032572319BE4ADD452265C","nombre":"Christian ","apellidos":"Valdivieso  Tamayo ","documento":1,"docNumero":"45888656","celular":"924092400","correo":"cvaldivieso10@hotmail.com"},{"id":9946,"crypt":"F52BD674F90D7F03FADDCD53D6F9CA23","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":721,"tyc":true,"titular":false,"monto":30000.00,"tasa":4.800,"codigo":"SPF331421000255","situacion":"F","otroNum":"09644377","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"5458","inicio":1618867800231,"fin":1618869600231,"revDate":1619154000000,"enRev":true,"userCrypt":"E4664930BE61A6B78F7D95AC01748D8D","nombre":"ROSA","apellidos":"CAYCHO","documento":1,"docNumero":"09644377","celular":"991882323","correo":"rosa.caycho.40@gmail.com"},{"id":9944,"crypt":"FE6C6E6E63629FF6B2996E214804E056","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.300,"codigo":"SPF331421000253","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"9544","inicio":1618867800014,"fin":1618869600014,"revDate":1619154000000,"enRev":true,"userCrypt":"71B216CC5AB9C86FF08755D62CD4D9D8","nombre":"carlos iván ","apellidos":"arce alayo","documento":1,"docNumero":"70025421","celular":"949912109","correo":"carlosivanarce@gmail.com"},{"id":9943,"crypt":"C2B0E1CB61ECDA47391F6A1E7A055F70","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":3.200,"codigo":"SPF331421000252","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"2692","inicio":1618867800830,"fin":1618869600830,"revDate":1619067600000,"enRev":true,"userCrypt":"BDC242F19A93E671C79B446C828B54AA","nombre":"NESTOR ","apellidos":"PACHECO  PARDO ","documento":1,"docNumero":"70999522","celular":"957769663","correo":"nestor_2611@hotmail.com"},{"id":9942,"crypt":"4800BFC1B19A71CC87EF6F2FF39A0768","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":70000.00,"tasa":4.500,"codigo":"SPF331421000251","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"9124","inicio":1618867800871,"fin":1618869600871,"revDate":1619067600000,"enRev":true,"userCrypt":"5E4855DC817950966A5C3EDA3878AC1B","nombre":"Soledad","apellidos":"Lozano Alvarez","documento":1,"docNumero":"06947833","celular":"971781580","correo":"lozanosoledad358@gmail.com"},{"id":9941,"crypt":"6A840C099799B0760E1E245C3FD3EEF2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"clonado":true,"monto":180830.00,"tasa":4.900,"codigo":"SPF331421000250","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"5397","inicio":1618608600213,"fin":1618610400213,"revDate":1618981200000,"enRev":true,"userCrypt":"C0B5290C7FE33294A834E5C67F4BB8F6","nombre":"Rafael Gabriel","apellidos":"de la Rosa Pimentel","documento":1,"docNumero":"09464968","celular":"960317295","correo":"rdelarosa@voiperu.com"},{"id":9940,"crypt":"83C03F9B380F709CD04A4492FEBAF843","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":0.350,"codigo":"SPF331421000249","situacion":"F","ganador":"Caja Maynas","isCanceledByIfi":false,"clave":"5397","inicio":1618608600213,"fin":1618610400213,"revDate":1618981200000,"enRev":true,"userCrypt":"C0B5290C7FE33294A834E5C67F4BB8F6","nombre":"Rafael Gabriel","apellidos":"de la Rosa Pimentel","documento":1,"docNumero":"09464968","celular":"960317295","correo":"rdelarosa@voiperu.com"},{"id":9937,"crypt":"9908B19E4DA0028C87BE4A5816AB0F2F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":184,"tyc":true,"titular":true,"monto":13000.00,"tasa":3.200,"codigo":"SPF331421000248","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"3112","inicio":1618608600499,"fin":1618610400499,"revDate":1618981200000,"enRev":true,"userCrypt":"84B0046F1D5370DFE06F1CEE30A6B021","nombre":"Carmela ","apellidos":"Romero Aguilar ","documento":1,"docNumero":"46137783","celular":"961250342","correo":"katty151715@gmail.com"},{"id":9936,"crypt":"7CE2577D47DBADEF37FCCEAD9BBE1D76","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":13000.00,"tasa":4.300,"codigo":"SPF331421000247","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"6261","inicio":1618608600766,"fin":1618610400766,"revDate":1618981200000,"enRev":true,"userCrypt":"84B0046F1D5370DFE06F1CEE30A6B021","nombre":"Carmela ","apellidos":"Romero Aguilar ","documento":1,"docNumero":"46137783","celular":"961250342","correo":"katty151715@gmail.com"},{"id":9935,"crypt":"B5FACF8FE17A341107FCDBFD88596A1A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":184,"tyc":true,"titular":true,"monto":10000.00,"tasa":3.200,"codigo":"SPF331421000246","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"6895","inicio":1618608600814,"fin":1618610400814,"revDate":1618981200000,"enRev":true,"userCrypt":"84B0046F1D5370DFE06F1CEE30A6B021","nombre":"Carmela ","apellidos":"Romero Aguilar ","documento":1,"docNumero":"46137783","celular":"961250342","correo":"katty151715@gmail.com"},{"id":9934,"crypt":"1643F675A0C697EC74954BE9B6F6E1D3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":4.300,"codigo":"SPF331421000245","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"3648","inicio":1618608600690,"fin":1618610400690,"revDate":1618981200000,"enRev":true,"userCrypt":"84B0046F1D5370DFE06F1CEE30A6B021","nombre":"Carmela ","apellidos":"Romero Aguilar ","documento":1,"docNumero":"46137783","celular":"961250342","correo":"katty151715@gmail.com"},{"id":9933,"crypt":"4E3F0F4C41923490A3D78FBD13C7F048","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":15000.00,"tasa":4.300,"codigo":"SPF331421000244","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"4812","inicio":1618522200090,"fin":1618524000090,"revDate":1618808400000,"enRev":true,"userCrypt":"0986479D9F7BEE625C011CE987D0F415","nombre":"Edeliza","apellidos":"Julcapari","documento":1,"docNumero":"47552977","celular":"988721756","correo":"edelijc@gmail.com"},{"id":9932,"crypt":"92FD9C63B1BFEE118A1123B900E4D6AB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":720,"tyc":true,"titular":true,"monto":60000.00,"tasa":4.900,"codigo":"SPF331421000243","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"4961","inicio":1618522200772,"fin":1618524000772,"revDate":1618808400000,"enRev":true,"userCrypt":"8C6B14874AFB392D2795BEF8F1C71770","nombre":"Erick ","apellidos":"Vásquez Saenz","documento":1,"docNumero":"43277071","celular":"948111700","correo":"erick_8569@hotmail.com"},{"id":9931,"crypt":"F049CAC74D86214479D2A1FFB74B43E7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":2000.00,"tasa":4.800,"codigo":"SPF331421000242","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2961","inicio":1618435800837,"fin":1618437600837,"revDate":1618808400000,"enRev":true,
"userCrypt":"41E7F19E7060EA83C26723FF246FCD9E","nombre":"Daniel","apellidos":"Molina","documento":1,"docNumero":"72773383","celular":"940496481","correo":"daniel.molina0392@gmail.com"},{"id":9930,"crypt":"FEEE32DC5762121F728A5A014A852760","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":730,"tyc":true,"titular":true,"monto":50000.00,"tasa":5.100,"codigo":"SPF331421000241","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6892","inicio":1618263000488,"fin":1618264800488,"revDate":1618462800000,"enRev":true,"userCrypt":"05EA09DE11B2212A4D8270C0A1BF965A","nombre":"Wally Bhelén","apellidos":"Polanco Sánchez Moreno","documento":1,"docNumero":"70082610","celular":"989371235","correo":"wbhelenpolanco@gmail.com"},{"id":9929,"crypt":"1073A6B9AF466BF8D57629062093F6A2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":391,"tyc":true,"titular":true,"monto":150000.00,"tasa":5.100,"codigo":"SPF331421000240","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3956","inicio":1618263000290,"fin":1618264800290,"revDate":1618462800000,"enRev":true,"userCrypt":"4999908FB4AD21A85E9629FC1D41C261","nombre":"Milko","apellidos":"Espejo Pezzini","documento":1,"docNumero":"15739654","celular":"964901375","correo":"milkespe@hotmail.com"},{"id":9927,"crypt":"F74EBD50D4640CA6BD6C00C5FC7837AD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"tyc":true,"titular":true,"monto":175000.00,"tasa":5.500,"codigo":"SPF331421000238","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"4121","inicio":1618263000063,"fin":1618264800063,"enRev":false,"userCrypt":"7F274E7EBDB410E95D11FCF2D28EF2C5","nombre":"giancarlo","apellidos":"moreno","documento":1,"docNumero":"09845599","celular":"951372157","correo":"giancarlo_moreno@hotmail.com"},{"id":9924,"crypt":"1B296C95F80A4BD1D21BAE23B261F58D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.800,"codigo":"SPF331421000235","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3837","inicio":1618003800758,"fin":1618005600758,"revDate":1618462800000,"enRev":true,"userCrypt":"71DAD4F41975D9DD61794C174250F7F5","nombre":"MANUEL","apellidos":"GONZALES ANGLA","documento":1,"docNumero":"08168909","celular":"993120963","correo":"manuelg270974@hotmail.com"},{"id":9922,"crypt":"B118171DFF10277341A05AB3DD1E2018","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":40000.00,"tasa":4.800,"codigo":"SPF331421000233","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"7751","inicio":1617917400931,"fin":1617919200931,"revDate":1618203600000,"enRev":true,"userCrypt":"77A0B318031FBCAE093C9BF413639B62","nombre":"Dianira ","apellidos":"Rojas ","documento":1,"docNumero":"10475686","celular":"997824913","correo":"dianira.rojas@gmail.com"},{"id":9921,"crypt":"B9134F39C3A3464FFCEA13F3FFC3E4B6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":220000.00,"tasa":5.150,"codigo":"SPF331421000232","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"9523","inicio":1617917400275,"fin":1617919200275,"revDate":1618203600000,"enRev":true,"userCrypt":"018D357605C49906FC74C2CCE5457FB8","nombre":"Jimmy  Roberth","apellidos":"Soto Carmelo","documento":1,"docNumero":"44280265","celular":"969536638","correo":"jim.rsc@gmail.com"},{"id":9920,"crypt":"1C2B76073522990A63E04A7FC12F47E3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":4.800,"codigo":"SPF331421000231","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2926","inicio":1617917400659,"fin":1617919200659,"revDate":1618203600000,"enRev":true,"userCrypt":"AEEBB38B3FBC55D68EF8BB88D6C39E88","nombre":"Juan","apellidos":"Romero","documento":1,"docNumero":"44896608","celular":"936261857","correo":"jromeroc88@gmail.com"},{"id":9918,"crypt":"74DBEA52BBC15814BB1E4DD2EBE86C35","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":4.800,"codigo":"SPF331421000229","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2326","inicio":1617917400061,"fin":1617919200061,"enRev":false,"userCrypt":"1600BD9198238598BED5C35CAC286F91","nombre":"juan ","apellidos":"pereyra","documento":1,"docNumero":"09861256","celular":"945804392","correo":"manolopereyras@gmail.com"},{"id":9917,"crypt":"47BCB502B23EC49B26B2D7A149759468","producto":1,"productoName":"DPF","moneda":1,"ubicacion":18,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":3.200,"codigo":"SPF331221000006","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"3687","inicio":1617831000457,"fin":1617832800457,"revDate":1617944400000,"enRev":true,"userCrypt":"4C806BB8FD1E4BF20AA41CA3FF585FC8","nombre":"Martha giovanna elizabeth ","apellidos":"Siccha Díaz ","documento":1,"docNumero":"76278998","celular":"938596343","correo":"marthasiccha@hotmail.com"},{"id":9916,"crypt":"2BABEB1B0731878EF32867CB17DAA727","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":5.000,"codigo":"SPF331421000228","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3321","inicio":1617744600612,"fin":1617746400612,"revDate":1618203600000,"enRev":true,"userCrypt":"F50C2DEDC8728A9CB0C22460492985F5","nombre":"Carlos","apellidos":"Manrique","documento":1,"docNumero":"42722848","celular":"959745212","correo":"cmanrike@gmail.com"},{"id":9915,"crypt":"9F8A18D8CFD37617C0C79AF07FC745E2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":15000.00,"tasa":4.800,"codigo":"SPF331421000227","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"8274","inicio":1617658200137,"fin":1617660000137,"enRev":false,"userCrypt":"F1399E0F3E4571C2D1F098FA95E6F8C4","nombre":"Lorena ","apellidos":"Villarreal Ruiz ","documento":1,"docNumero":"41047136","celular":"997207276","correo":"lorvilla@hotmail.com"},{"id":9914,"crypt":"861BA909327DD482D7B9816DBE53D98C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":1000.00,"tasa":4.800,"codigo":"SPF331421000226","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"8758","inicio":1617658200017,"fin":1617660000017,"enRev":false,"userCrypt":"EAD76BEBBFE391110FAF050868B4C5AB","nombre":"Wilmer Eduardo","apellidos":"Valdiviezo Ochoa","documento":1,"docNumero":"44797128","celular":"926661545","correo":"wvaldiviezo777@gmail.com"},{"id":9909,"crypt":"7F1E660FC4745A6A8672E3894CA4C66B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.800,"codigo":"SPF331421000221","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"4596","inicio":1617658200335,"fin":1617660000335,"enRev":false,"userCrypt":"55658E5743A077B8F9E10EA4F84679FF","nombre":"Luis ","apellidos":"Zavaleta Hernández ","documento":1,"docNumero":"45988369","celular":"948876069","correo":"luis_virgo21@hotmail.com"},{"id":9908,"crypt":"D7A59C7591171C5EB155A0523696799A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":18,"plazo":181,"tyc":true,"titular":true,"monto":3000.00,"tasa":3.200,"codigo":"SPF331221000005","situacion":"F","ganador":"Financiera Credinka","isCanceledByIfi":false,"clave":"2757","inicio":1617658200643,"fin":1617660000643,"enRev":false,"userCrypt":"87F2A5CA7BDBB0E214EAAE76940F548F","nombre":"Joseph Demir","apellidos":"Portal Villanueva","documento":1,"docNumero":"76731883","celular":"963692343","correo":"jdemirp@gmail.com"},{"id":9907,"crypt":"27FDC9A008E9B17318DA9D8127E7E47A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":12000.00,"tasa":4.800,"codigo":"SPF331421000220","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2986","inicio":1617658200039,"fin":1617660000039,"enRev":false,"userCrypt":"6602D033A4EBC4CA68A6F1F435AA07CE","nombre":"Alvaro","apellidos":"Taipe Flores","documento":1,"docNumero":"74230110","celular":"958876762","correo":"alvarotaipe12@gmail.com"},{"id":9903,"crypt":"B8B66852F39EDC5014D251BABA4D1502","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.800,"codigo":"SPF331421000216","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"8561","inicio":1617658200077,"fin":1617660000077,"enRev":false,"userCrypt":"67EBA98EDFC85B73959E667307937EAD","nombre":"Edward Alexander ","apellidos":"Angeles Albañil ","documento":1,"docNumero":"17610135","celular":"995522175","correo":"angelpediatra@yahoo.es"},{"id":9902,"crypt":"166318C74E1F5E10EF086AC0F3B54E11","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.800,"codigo":"SPF331421000215","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"1815","inicio":1617226200867,"fin":1617228000867,"enRev":false,"userCrypt":"BE52CF02D8EC55AB1A2EE2E60E66AE53","nombre":"Kevin","apellidos":"Solis Best","documento":1,"docNumero":"70694025","celular":"993201450","correo":"kevsobest@gmail.com"},{"id":9901,"crypt":"8C8EFA7937AB807D4ACCCB11D4EEE163","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":102000.00,"tasa":4.900,"codigo":"SPF331421000214","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7384","inicio":1617226200328,"fin":1617228000328,"enRev":false,
"userCrypt":"1487E0B67C9C7F269A06600973CD03B8","nombre":"Gonzalo Alberto ","apellidos":"La Puente Miyashiro","documento":1,"docNumero":"06805170","celular":"998445244","correo":"glapuente@aelucoop.com.pe"},{"id":9900,"crypt":"07650C865A41847CCC9260A2CFDEC9FC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"tyc":true,"titular":true,"monto":1450000.00,"tasa":5.200,"codigo":"SPF331421000213","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"2196","inicio":1617226200091,"fin":1617228000091,"enRev":false,"userCrypt":"17D46C0CD5B66A046405DCCE4024A7F4","nombre":"Adolfo","apellidos":"Granadino Arana","documento":1,"docNumero":"07861998","celular":"994045313","correo":"agranadinoa@hotmail.com"},{"id":9898,"crypt":"549A362A255DCABE7AEB2486C24D5432","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"tyc":true,"titular":true,"monto":110000.00,"tasa":5.100,"codigo":"SPF331421000211","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6661","inicio":1617139800813,"fin":1617141600813,"enRev":false,"userCrypt":"63BE90AEA45CF7AE6F6B0734F794568D","nombre":"Angel","apellidos":"Achahuanco Mujica","documento":1,"docNumero":"29674647","celular":"984651307","correo":"keloam@gmail.com"},{"id":9897,"crypt":"0735CF5ADE1133984CA59499D0E48D19","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.800,"codigo":"SPF331421000210","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"7498","inicio":1617139800843,"fin":1617141600843,"enRev":false,"userCrypt":"3DA8C5A7E690CF1B2393243DB7067F08","nombre":"Renzo","apellidos":"Campos","documento":1,"docNumero":"43285115","celular":"981568400","correo":"renzobag@gmail.com"},{"id":9895,"crypt":"8D1C9FF04895E200C3D15FF720EF531F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"tyc":true,"titular":true,"monto":101000.00,"tasa":5.100,"codigo":"SPF331421000208","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"3482","inicio":1617053400248,"fin":1617055200248,"enRev":false,"userCrypt":"40DDA6B873DDAD61DA5178B5AB7CA783","nombre":"Luis Enrique","apellidos":"Arce","documento":1,"docNumero":"70214099","celular":"999221983","correo":"luis2722@hotmail.com"},{"id":9894,"crypt":"17FB7863F74B0F96E17E5D8ED07B126D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.800,"codigo":"SPF331421000207","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"5313","inicio":1617053400621,"fin":1617055200621,"enRev":false,"userCrypt":"03F08E37AFAE7C782044CFCD6578D3D7","nombre":"Julio Cesar","apellidos":"González Vargas","documento":2,"docNumero":"002321780","celular":"960373645","correo":"n11gvj@yahoo.com"},{"id":9893,"crypt":"77032AAD4AC0C0927C21770608ED0FCC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.800,"codigo":"SPF331421000206","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"1973","inicio":1617053400673,"fin":1617055200673,"revDate":1617858000000,"enRev":true,"userCrypt":"9D0C6D7610E12E4C72EC0364B8582CAA","nombre":"Ines Hortensia","apellidos":"Muzante Ramos","documento":1,"docNumero":"07730123","celular":"986666016","correo":"juan.loayza.m@gmail.com"},{"id":9888,"crypt":"AC5F96841ED1B441B99C4726751D1AED","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.500,"codigo":"SPF331421000201","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"8134","inicio":1616794200068,"fin":1616796000068,"revDate":1617166800000,"enRev":true,"userCrypt":"41D46B44FBFB53259220E2085975164D","nombre":"Antonio ","apellidos":"Villegas Euribe","documento":1,"docNumero":"41363628","celular":"946074489","correo":"antoniodatosv@gmail.com"},{"id":9887,"crypt":"97F348A62BCB97C4DB1485727A651C2E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":181,"tyc":true,"titular":false,"monto":40000.00,"tasa":2.200,"codigo":"SPF331421000200","situacion":"F","otroNum":"08665587","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"4238","inicio":1616794200064,"fin":1616796000064,"revDate":1617166800000,"enRev":true,"userCrypt":"F2CD5E482FE6195A3C2CBD2BF348D837","nombre":"Ricardo Luis","apellidos":"Portocarrero Dulanto ","documento":1,"docNumero":"07782907","celular":"993123206","correo":"ricardopd270@gmail.com"},{"id":9883,"crypt":"FB923287772DE9D3D9DBC7E0FE4C36C8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":18,"plazo":1080,"tyc":true,"titular":true,"monto":40000.00,"tasa":3.650,"codigo":"SPF331221000004","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6535","inicio":1616621400311,"fin":1616623200311,"revDate":1616994000000,"enRev":true,"userCrypt":"EE7A2873E12620216A3401D0ECC46008","nombre":"IVAN CARTER","apellidos":"COTRINA ANGULO","documento":1,"docNumero":"45074712","celular":"979090498","correo":"ivanc_ca@hotmail.com"},{"id":9882,"crypt":"98D40E296A5CF7AC3C8C582105717198","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":366,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF330421000007","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"8561","inicio":1616621400522,"fin":1616623200522,"revDate":1616994000000,"enRev":true,"userCrypt":"5FFB984D31DA79A0E42D62DA354C9912","nombre":"LESLY","apellidos":"RODRIGUEZ","documento":1,"docNumero":"45121991","celular":"958346614","correo":"lesrodriguez0604@gmail.com"},{"id":9881,"crypt":"3E04D7D0730077D7ECACD7C50A77D182","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF331421000196","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7713","inicio":1616621400413,"fin":1616623200413,"revDate":1616994000000,"enRev":true,"userCrypt":"30C5C4507A0ADFDB195E7EFD8B1712FE","nombre":"JOSE MIGUEL","apellidos":"SAAVEDRA","documento":2,"docNumero":"001086972","celular":"992436734","correo":"jmsaaved@gmail.com"},{"id":9879,"crypt":"6DE9692E80C82ADC5D68C15F96BA7EB7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":365,"tyc":true,"titular":true,"monto":1000.00,"tasa":2.100,"codigo":"SPF330421000006","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"2853","inicio":1616621400280,"fin":1616623200280,"enRev":false,"userCrypt":"620ACE0DC3BB92CF8C65EFC65981F6C1","nombre":"Modesto Eudes","apellidos":"Valeriano Calsina","documento":1,"docNumero":"73764155","celular":"914238472","correo":"valerianocalsinamodesto@gmail.com"},{"id":9878,"crypt":"60297976AE109C724B380FB283E54311","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":95000.00,"tasa":4.500,"codigo":"SPF331421000194","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"4699","inicio":1616621400031,"fin":1616623200031,"enRev":false,"userCrypt":"718B781512E26E4CE6A426E43984FCA7","nombre":"Amalia","apellidos":"Medina","documento":1,"docNumero":"40861655","celular":"997094565","correo":"medina.ai@gmail.com"},{"id":9876,"crypt":"6B996CC653EFED6444494DC9C5AA1DE0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":43500.00,"tasa":3.600,"codigo":"SPF331421000192","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7356","inicio":1616535000556,"fin":1616536800556,"enRev":false,"userCrypt":"9B248BDDF15956D71CC93C6CB3FA386D","nombre":"Jose","apellidos":"Gonzales","documento":1,"docNumero":"08139629","celular":"993479039","correo":"jlgp2007@yahoo.com"},{"id":9875,"crypt":"783BA1D9E6E7FADAF0489E037F7F9688","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":1500.00,"tasa":2.100,"codigo":"SPF331421000191","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"4388","inicio":1616535000497,"fin":1616536800497,"enRev":false,"userCrypt":"1FEEF8A07FE33AB786F0EB93F86E7D04","nombre":"Lucero Bestriz","apellidos":"Arela Huatta","documento":1,"docNumero":"76440139","celular":"946371211","correo":"lbeatrizarela@gmail.com"},{"id":9874,"crypt":"44048BD6A9AE49A573C950BC3DFB6F15","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":2.900,"codigo":"SPF331421000190","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"5685","inicio":1616535000683,"fin":1616536800683,"enRev":false,"userCrypt":"86E821A7225ACA8F7245CF92363C9B36","nombre":"Leonor Consuelo","apellidos":"Garcia huamani","documento":1,"docNumero":"46848856","celular":"921138125","correo":"leonorgarciah@gmail.com"},{"id":9872,"crypt":"3DF60DC207C1ABF1083497510CE7B742","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":750,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.550,"codigo":"SPF331421000189","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"5612","inicio":1616448600867,"fin":1616450400867,"enRev":false,"userCrypt":"826341E52AF0D0E7578963F239BBFD23","nombre":"Jubher Jozsef","apellidos":"Herencia Acuña","documento":1,"docNumero":"45044802","celular":"956721144","correo":"jubher@gmail.com"},{"id":9871,"crypt":"2FE7F402BD7BBFBCC2C6BEA298F8C252","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":25000.00,"tasa":3.600,"codigo":"SPF331421000188","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"5871","inicio":1616448600550,"fin":1616450400550,"revDate":1616994000000,
"enRev":true,"userCrypt":"5EB82C848D53DCA5133BAAABFC04A030","nombre":"Flor ","apellidos":"Tello Sarmiento","documento":1,"docNumero":"74664251","celular":"995864425","correo":"tellosarmiento.flor@gmail.com"},{"id":9869,"crypt":"EA6344C627729196FF0E426F18661338","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":330000.00,"tasa":4.900,"codigo":"SPF331421000186","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"8975","inicio":1616448600874,"fin":1616450400874,"revDate":1616734800000,"enRev":false,"userCrypt":"A4C0AD3F864B4BF10DF6C0C6FCE119C8","nombre":"Eliana Verónica","apellidos":"Mansilla Sanchez","documento":1,"docNumero":"44380455","celular":"995218632","correo":"eliana.mansilla87@gmail.com"},{"id":9868,"crypt":"497FDB76E2205E522EAD1599C0E6C25B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":182,"tyc":true,"titular":true,"monto":11000.00,"tasa":2.000,"codigo":"SPF331421000185","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6496","inicio":1616448600715,"fin":1616450400715,"revDate":1616734800000,"enRev":true,"userCrypt":"135EF17E5BF43CE6A7EDBA187C8F1E3E","nombre":"WENDY","apellidos":"RIVAS","documento":1,"docNumero":"70608452","celular":"922742985","correo":"logyco-transportes@hotmail.com"},{"id":9863,"crypt":"FD89506C1349C0212347E5E460F37FBD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":721,"tyc":true,"titular":true,"monto":80000.00,"tasa":4.550,"codigo":"SPF331421000183","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"9428","inicio":1616103000482,"fin":1616104800482,"revDate":1616648400000,"enRev":true,"userCrypt":"C7B4474597F53810A4B9F3515A27542E","nombre":"Milton Juan","apellidos":"Mesares Rosales","documento":1,"docNumero":"10298178","celular":"920044869","correo":"miltonmesares@gmail.com"},{"id":9862,"crypt":"03E1811FC3619D3CBB80D96B1CAA189B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":1.500,"codigo":"SPF331421000182","situacion":"F","ganador":"Caja Maynas","isCanceledByIfi":false,"clave":"9367","inicio":1616103000619,"fin":1616104800619,"revDate":1616648400000,"enRev":true,"userCrypt":"78E7E16C9559A04C21841AF79256C0AD","nombre":"Luis Guillermo","apellidos":"Ramirez Coronado","documento":1,"docNumero":"71061659","celular":"937247196","correo":"luisramirezcoronado10@gmail.com"},{"id":9861,"crypt":"CB5E973B15F8DA8994600113D20A23DE","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF331421000181","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"1132","inicio":1616103000370,"fin":1616104800370,"revDate":1616648400000,"enRev":true,"userCrypt":"3D23CF1FA1BCA2DB5BFBC9E6791514F3","nombre":"Talia","apellidos":"De La Puente Carrasco","documento":1,"docNumero":"48091019","celular":"961090009","correo":"taliadlp@outlook.com"},{"id":9860,"crypt":"5EDBCEB0B6FF621B7A193E899EE26CA3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":3.600,"codigo":"SPF331421000180","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"9499","inicio":1616103000340,"fin":1616104800340,"revDate":1616562000000,"enRev":true,"userCrypt":"B2A4EF662193D58D6C597CB53C15A292","nombre":"David","apellidos":"Huaman","documento":1,"docNumero":"10696189","celular":"951642291","correo":"huamand@gmail.com"},{"id":9858,"crypt":"990AC0643577A3E48595DE77C1E5CC89","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":420,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF331421000178","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"2835","inicio":1616016600355,"fin":1616018400355,"revDate":1616648400000,"enRev":true,"userCrypt":"BA8FAECE1E4F4300564ACBBA0837353E","nombre":"Noe Felipe","apellidos":"Alcocer Ramos","documento":1,"docNumero":"41975429","celular":"996686439","correo":"noealcocer@gmail.com"},{"id":9855,"crypt":"A2474E6E45A948675823C1A2D37FBB66","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF331421000175","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7938","inicio":1615930200602,"fin":1615932000602,"revDate":1616043600000,"enRev":true,"userCrypt":"DA7D2B43193DFAAB72E79D8C0791FFC2","nombre":"ANA MATILDE","apellidos":"MENDOZA TUPAYACHI","documento":1,"docNumero":"20000227","celular":"964931288","correo":"anamendoza56@hotmail.com"},{"id":9854,"crypt":"D0A3BB4768CAEDC5E84999FB3926829B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":366,"tyc":true,"titular":true,"monto":100000.00,"tasa":2.250,"codigo":"SPF331421000174","situacion":"F","ganador":"Caja Maynas","isCanceledByIfi":false,"clave":"3531","inicio":1615930200793,"fin":1615932000793,"revDate":1616130000000,"enRev":true,"userCrypt":"0E4839242B04187129820C90D3DBCF7B","nombre":"Irene","apellidos":"Rodriguez ","documento":1,"docNumero":"40116959","celular":"997338162","correo":"irenerodrigo@gmail.com"},{"id":9853,"crypt":"5DDAC8FC457ED6D5FA2666C50518CCBD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":4.900,"codigo":"SPF331421000173","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"2913","inicio":1615843800136,"fin":1615845600136,"revDate":1616130000000,"enRev":true,"userCrypt":"0E4839242B04187129820C90D3DBCF7B","nombre":"Irene","apellidos":"Rodriguez ","documento":1,"docNumero":"40116959","celular":"997338162","correo":"irenerodrigo@gmail.com"},{"id":9847,"crypt":"57FAC7BC850AE12608D9D8C0C9799655","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":87000.00,"tasa":4.500,"codigo":"SPF331421000167","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7311","inicio":1615584600831,"fin":1615586400831,"revDate":1616130000000,"enRev":true,"userCrypt":"087E59163809ED475DB4BC9919C9D50E","nombre":"Cesar ","apellidos":"Calderon Heshiki","documento":1,"docNumero":"10549236","celular":"946672501","correo":"cesarheshiki@gmail.com"},{"id":9846,"crypt":"53A92EBE87CD2716195C7CA8199DCE4B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":1.500,"codigo":"SPF331421000166","situacion":"F","ganador":"Caja Maynas","isCanceledByIfi":false,"clave":"1169","inicio":1615498200303,"fin":1615500000303,"revDate":1616043600000,"enRev":true,"userCrypt":"57F2A5096958D33E66ECE742F526D79E","nombre":"Carlos","apellidos":"Mascco Rojas","documento":1,"docNumero":"46481081","celular":"985347132","correo":"cmascco@outlook.com"},{"id":9843,"crypt":"41E1933474928A7E3641C9FC61F803F0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":25000.00,"tasa":3.600,"codigo":"SPF331421000163","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"1125","inicio":1615411800721,"fin":1615413600721,"revDate":1615784400000,"enRev":true,"userCrypt":"8F001E469C04CCEC046B304FB9AA4EDE","nombre":"ANA","apellidos":"DE LA TORRE ","documento":1,"docNumero":"47138592","celular":"941388263","correo":"ana.delatorre013@gmail.com"},{"id":9842,"crypt":"10D69180A0BCE2FD0007E7C2CF63583B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":15000.00,"tasa":3.600,"codigo":"SPF331421000162","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"3292","inicio":1615411800241,"fin":1615413600241,"revDate":1615525200000,"enRev":true,"userCrypt":"F1399E0F3E4571C2D1F098FA95E6F8C4","nombre":"Lorena ","apellidos":"Villarreal Ruiz ","documento":1,"docNumero":"41047136","celular":"997207276","correo":"lorvilla@hotmail.com"},{"id":9841,"crypt":"6B8B1070E92AC2716B0771194773C3AC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":2.900,"codigo":"SPF331421000161","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"1626","inicio":1615411800118,"fin":1615413600118,"revDate":1615525200000,"enRev":true,"userCrypt":"E6E017A089285CA6F2B9DC58994B18E9","nombre":"GUIDO FRANCESCO","apellidos":"FONTTIS CALDERON","documento":1,"docNumero":"46446529","celular":"914720362","correo":"gfonttisc@gmail.com"},{"id":9836,"crypt":"7E04977988104BE2A54144B8AEF292BC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.500,"codigo":"SPF331421000156","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"9246","inicio":1615239000967,"fin":1615240800967,"revDate":1615525200000,"enRev":true,"userCrypt":"D307928C89BCDF78D5046D1B8BC3F63A","nombre":"jorge","apellidos":"Durán","documento":1,"docNumero":"70448091","celular":"997950568","correo":"j.duranagama@gmail.com"},{"id":9833,"crypt":"22C567EDEA8B639AF1FC62D2B1082617","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":500.00,"tasa":4.800,"codigo":"SPF331421000153","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6467","inicio":1614807000279,"fin":1614808800279,"revDate":1615438800000,"enRev":true,"userCrypt":"0F6F33E0A36AF7C1D99338980AADB399","nombre":"Luis Alfredo ","apellidos":"Guillinta Koori ","documento":1,"docNumero":"09646494","celular":"988477734","correo":"luguikoo@yahoo.com"},{"id":9830,"crypt":"284EDF0457A1864FE82066417FA2A5B3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":6000.00,
"tasa":4.350,"codigo":"SPF331421000150","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2711","inicio":1614807000996,"fin":1614808800996,"revDate":1614920400000,"enRev":true,"userCrypt":"70032BDC8B5A2E537E84094608E43774","nombre":"Nicole","apellidos":"Vegas Alvarez","documento":1,"docNumero":"75510373","celular":"994336493","correo":"nicole.vegas222@hotmail.com"},{"id":9829,"crypt":"6082848B8D326737AB5E41B895A21CD6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":50000.00,"tasa":4.800,"codigo":"SPF331421000149","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"8972","inicio":1614720600961,"fin":1614722400961,"revDate":1614920400000,"enRev":true,"userCrypt":"5527227A6ECBFE3D9B5D9E99AD9DF4C2","nombre":"Gustavo","apellidos":"Molina","documento":1,"docNumero":"09644614","celular":"949344849","correo":"tazz0709@yahoo.com.ar"},{"id":9824,"crypt":"3596FC576B058CF2FBDB3389F8AA6CC2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":5000.00,"tasa":4.800,"codigo":"SPF331421000144","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"6732","inicio":1614288600847,"fin":1614290400847,"revDate":1614574800000,"enRev":true,"userCrypt":"D5482569F051899F9D0F465149EFB688","nombre":"MIKE IVÁN","apellidos":"PLASENCIA CHAVEZ","documento":1,"docNumero":"40375022","celular":"976347010","correo":"miplacha@gmail.com"},{"id":9823,"crypt":"D028BF466E5345FDB5746E1FDAEB3270","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":719,"tyc":true,"titular":true,"monto":230000.00,"tasa":4.900,"codigo":"SPF331421000143","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"1864","inicio":1614288600995,"fin":1614290400995,"revDate":1614574800000,"enRev":true,"userCrypt":"6DDBC5BF2DD22E2ECB0CBBEE7055E032","nombre":"cecilia","apellidos":"cabrera ","documento":1,"docNumero":"08785639","celular":"942117624","correo":"lourdescz1@yahoo.com"},{"id":9821,"crypt":"A79D0893F4427B1E0FCDE45D440047FF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.800,"codigo":"SPF331421000141","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"8127","inicio":1614288600257,"fin":1614290400257,"revDate":1614747600000,"enRev":true,"userCrypt":"2A5BEF8C2B3AA72E69A785F9795DAC1F","nombre":"José Luis","apellidos":"Puma Suca","documento":1,"docNumero":"70441846","celular":"965722835","correo":"josepuma30@gmail.com"},{"id":9820,"crypt":"3526D84C16E21B9705B3AFEC58F9D423","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":1.200,"codigo":"SPF330421000004","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"6441","inicio":1614288600366,"fin":1614290400366,"revDate":1614574800000,"enRev":true,"userCrypt":"2E4EA7C0CA2336B590BB06A1C083DCBD","nombre":"Rosa ","apellidos":"Salazar","documento":1,"docNumero":"71933861","celular":"924331662","correo":"ross.irene2001@gmail.com"},{"id":9818,"crypt":"A1419F2E54A8FD062C9AFBECFD401939","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":181,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.350,"codigo":"SPF331121000005","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"1227","inicio":1614202200908,"fin":1614204000908,"revDate":1614747600000,"enRev":true,"userCrypt":"A564499127C0C52C47E52BC23D168FCB","nombre":"Nilton","apellidos":"Moya Chavez","documento":1,"docNumero":"42942092","celular":"945910544","correo":"niltonmch@hotmail.com"},{"id":9817,"crypt":"46EC15F1185FB209D76340EDF508BD5B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":365,"tyc":true,"titular":true,"monto":20000.00,"tasa":4.800,"codigo":"SPF331121000004","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"5115","inicio":1614202200691,"fin":1614204000691,"revDate":1614747600000,"enRev":false,"userCrypt":"A564499127C0C52C47E52BC23D168FCB","nombre":"Nilton","apellidos":"Moya Chavez","documento":1,"docNumero":"42942092","celular":"945910544","correo":"niltonmch@hotmail.com"},{"id":9815,"crypt":"0365281D07B64A49AEAB0EA09161A793","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":2000.00,"tasa":4.350,"codigo":"SPF331421000139","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"1885","inicio":1614202200120,"fin":1614204000120,"revDate":1614747600000,"enRev":false,"userCrypt":"01C4699133977FCBB9784F283B8D1C38","nombre":"JAVIER","apellidos":"PRADO","documento":1,"docNumero":"44467629","celular":"956332073","correo":"javierpraza7@gmail.com"},{"id":9814,"crypt":"ECCD90C96508BB3D4B0D253F6B536CF9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":30000.00,"tasa":4.800,"codigo":"SPF331421000138","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"5472","inicio":1614202200154,"fin":1614204000154,"revDate":1614747600000,"enRev":false,"userCrypt":"0986479D9F7BEE625C011CE987D0F415","nombre":"Edeliza","apellidos":"Julcapari","documento":1,"docNumero":"47552977","celular":"988721756","correo":"edelijc@gmail.com"},{"id":9809,"crypt":"CFB3A324F4080244085F4E67AF4E4CD6","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":100000.00,"tasa":5.000,"codigo":"SPF331421000134","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"5438","inicio":1614202200908,"fin":1614204000582,"revDate":1614574800000,"enRev":true,"userCrypt":"1397E3D023EFBC4B78C467CC27AC6554","nombre":"Carlos","apellidos":"Navarro","documento":1,"docNumero":"40591018","celular":"947350807","correo":"arkcnm@gmail.com"},{"id":9808,"crypt":"7BA0C0895968FACD2BA0398ABAF4071E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":10000.00,"tasa":4.800,"codigo":"SPF331421000133","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"4853","inicio":1614202200908,"fin":1614204000582,"revDate":1614574800000,"enRev":true,"userCrypt":"66D725FE96060C6A4418484C1D4093F3","nombre":"Alejandro","apellidos":"Nuñez del Prado","documento":1,"docNumero":"73631963","celular":"947031970","correo":"amndelpz@gmail.com"},{"id":9803,"crypt":"40DD67D07363624CFD3B987FE4106BF3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"tyc":true,"titular":true,"monto":500.00,"tasa":4.350,"codigo":"SPF331421000129","situacion":"F","ganador":"Caja Rural Del Centro","isCanceledByIfi":false,"clave":"2253","inicio":1614202200908,"fin":1614204000582,"enRev":false,"userCrypt":"BE47791EE8B5AA45B9DB6A6904F5AFCD","nombre":"Ximena","apellidos":"Jara Ccorahua","documento":1,"docNumero":"76980682","celular":"994362268","correo":"ximena200997@gmail.com"},{"id":9788,"crypt":"758F4C719FA3B40B85DCE6F02FCAFCDA","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"tyc":true,"titular":true,"monto":80000.00,"tasa":4.500,"codigo":"SPF331421000116","situacion":"F","ganador":"Financiera ProEmpresa","isCanceledByIfi":false,"clave":"7213","inicio":1613511000327,"fin":1613512800327,"revDate":1614315600000,"enRev":false,"userCrypt":"083B814C466532ABFBF7E9FA86E73E5E","nombre":"JAVIER","apellidos":"INGA URETA","documento":1,"docNumero":"40998059","celular":"961060425","correo":"javier210881@gmail.com"}]

const aperturadas = [{"id":10047,"crypt":"9E577F595FB5AC73BC8FE9BA761EAB63","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":4.300,"tasafinal":4.300,"codigo":"SPF331421000334","situacion":"T","ganador":"Financiera Credinka","apertura":1622610000000,"isCanceledByIfi":false,"clave":"1947","inicio":1622583000680,"fin":1622584800680,"enRev":false,"userCrypt":"9900D6569A12A32CAC6A45FF9ED1E652","nombre":"Claudia","apellidos":"Lalangui Castillo","documento":1,"docNumero":"41333708","celular":"950929033","correo":"claudialalangui@hotmail.com"},{"id":10027,"crypt":"992CDC98F0CE5073098309953709E27D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":15000.00,"montofinal":15000.00,"tasa":9.000,"tasafinal":9.000,"codigo":"SPF331421000316","situacion":"T","ganador":"La Cumbre (Cooperativa)","apertura":1622782800000,"isCanceledByIfi":false,"clave":"8136","inicio":1621891800489,"fin":1621893600489,"revDate":1622523600000,"enRev":true,"userCrypt":"A6F16E5FE92EAE9817E2D75C7E4E7892","nombre":"Eduardo Moisés ","apellidos":"Torres Zamora","documento":1,"docNumero":"10348805","celular":"941997144","correo":"etorres@outlook.com.pe"}]

const facturadas = [{"id":9987,"crypt":"6D58D1E437570A0855EE0D38CBA65D86","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":360,"tyc":true,"titular":true,"monto":100000.00,"montofinal":180000.00,"tasa":4.600,"tasafinal":5.000,"codigo":"SPF331421000288","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1620968400000,"isCanceledByIfi":false,"clave":"3568","inicio":1620855000783,"fin":1620856800783,"revDate":1621227600000,"enRev":true,"userCrypt":"252E693B22C5A7044AB045C7BF48FD72","nombre":"Maria Rosa","apellidos":"Simón Marcelo","documento":1,"docNumero":"08680641","celular":"977280267","correo":"mariasimon7@hotmail.com"},{"id":9956,"crypt":"3A28F2CE7456A5C50045D3458236E277","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":101136.75,"tasa":4.900,"tasafinal":4.900,"codigo":"SPF331121000007","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1622091600000,"isCanceledByIfi":false,"clave":"8611","inicio":1619472600585,"fin":1619474400585,"revDate":1619672400000,"enRev":true,"userCrypt":"9E1821B0E0A54BB668C648C2EBC4C9BD","nombre":"Yasmin Margarita","apellidos":"Ñahuín Solano","documento":1,"docNumero":"72497155","celular":"946559679","correo":"yasmin20nnii@gmail.com"},{"id":9884,"crypt":"F51FFFDF7309B59D8799F7BCCE467780","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":4.900,"tasafinal":4.900,"codigo":"SPF331421000197","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1617166800000,"isCanceledByIfi":false,"clave":"6116","inicio":1616707800487,"fin":1616709600487,"revDate":1616994000000,"enRev":true,"userCrypt":"368D3EBE3A9C833EB2A26A40A6F5D32C","nombre":"Marco Antonio","apellidos":"Mamani Utrilla","documento":1,"docNumero":"08886576","celular":"993126624","correo":"marcomamani@hotmail.com"},{"id":9831,"crypt":"58CEF6F48A84EC5012CB0F54990A970A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":4.350,"tasafinal":4.350,"codigo":"SPF331421000151","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1615179600000,"isCanceledByIfi":false,"clave":"6451","inicio":1614807000857,"fin":1614808800857,"revDate":1615179600000,"enRev":true,"userCrypt":"F2CD5E482FE6195A3C2CBD2BF348D837","nombre":"Ricardo Luis","apellidos":"Portocarrero Dulanto ","documento":1,"docNumero":"07782907","celular":"993123206","correo":"ricardopd270@gmail.com"},{"id":9719,"crypt":"72B473BAC8FDB104497D9F06E79358FB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":94500.00,"montofinal":96495.20,"tasa":5.000,"tasafinal":5.000,"codigo":"SPF331421000053","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1615525200000,"isCanceledByIfi":false,"clave":"8589","inicio":1611178200888,"fin":1611180000888,"revDate":1611550800000,"enRev":true,"userCrypt":"1E5CDB998AC447B71D19F56D0724A097","nombre":"cesar","apellidos":"rojas soto","documento":1,"docNumero":"40959580","celular":"949173413","correo":"cesars961@hotmail.com"},{"id":9708,"crypt":"9BA976B080364949B3A1AC4DAB98D6EA","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":95000.00,"montofinal":40000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331421000043","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611637200000,"isCanceledByIfi":false,"clave":"7314","inicio":1610573400138,"fin":1610575200138,"revDate":1610946000000,"enRev":true,"userCrypt":"608C1BAE555A307F5922AD2FEE9F6B9E","nombre":"Sergio","apellidos":"Palomino","documento":1,"docNumero":"70006099","celular":"932804557","correo":"sergiopr30@gmail.com"},{"id":9702,"crypt":"1952F04F889E817D805F5950CCD464C4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":390,"plazofinal":390,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331421000037","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611982800000,"isCanceledByIfi":false,"clave":"2817","inicio":1610400600013,"fin":1610402400013,"revDate":1610686800000,"enRev":true,"userCrypt":"A433AC9971B01A68D608BB0D22602334","nombre":"Esther","apellidos":"Solórzano Cabezas","documento":1,"docNumero":"07054097","celular":"915086877","correo":"esthersc12@hotmail.com"},{"id":9679,"crypt":"E72D539705A8A4448DF0330DCC964577","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"clonado":false,"monto":5000.00,"montofinal":3000.00,"tasa":5.150,"tasafinal":5.050,"codigo":"SPF331421000016","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1610082000000,"isCanceledByIfi":false,"clave":"2819","inicio":1609882200971,"fin":1609884000971,"enRev":false,"userCrypt":"4E203C9178C30534E756620273E40008","nombre":"jaime marlon","apellidos":"sevilla gutierrez","documento":1,"docNumero":"41765085","celular":"943251185","correo":"marlonstone2000@gmail.com"},{"id":9672,"crypt":"48D168C79D5034FBEA38028EB05D12EC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":50000.00,"tasa":5.750,"tasafinal":5.650,"codigo":"SPF331421000009","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611896400000,"isCanceledByIfi":false,"clave":"9549","inicio":1609795800329,"fin":1609797600329,"enRev":false,"userCrypt":"368D3EBE3A9C833EB2A26A40A6F5D32C","nombre":"Marco Antonio","apellidos":"Mamani Utrilla","documento":1,"docNumero":"08886576","celular":"993126624","correo":"marcomamani@hotmail.com"},{"id":9665,"crypt":"E9DF2DC10F842C0B06F5FC09DB5A246E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":15000.00,"montofinal":15000.00,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331421000003","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1610341200000,"isCanceledByIfi":false,"clave":"2442","inicio":1609795800552,"fin":1609797600552,"enRev":false,"userCrypt":"86E821A7225ACA8F7245CF92363C9B36","nombre":"Leonor Consuelo","apellidos":"Garcia huamani","documento":1,"docNumero":"46848856","celular":"921138125","correo":"leonorgarciah@gmail.com"},{"id":9599,"crypt":"4B0C833799B8BDFC022D50DADEA79D32","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":200000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000981","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1609218000000,"isCanceledByIfi":false,"clave":"8959","inicio":1607549400330,"fin":1607551200330,"revDate":1609304400000,"enRev":true,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":9591,"crypt":"391E668777D4684B10C93E69F263C037","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":23495.45,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000973","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1607749200000,"isCanceledByIfi":false,"clave":"8938","inicio":1607376600987,"fin":1607378400987,"revDate":1607662800000,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":9569,"crypt":"E84C9307A66A7C4C78B68AE8CADB62C2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100001.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000952","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1606453200000,"isCanceledByIfi":false,"clave":"7164","inicio":1606339800679,"fin":1606341600679,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"},{"id":9561,"crypt":"216E54DC5B09ED0167AA2CB457ECB318","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":180,"plazofinal":360,"tyc":true,"titular":true,"monto":90480.00,"montofinal":90475.00,"tasa":4.600,"tasafinal":5.000,"codigo":"SPF331420000945","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1606366800000,"isCanceledByIfi":false,"clave":"3851","inicio":1605821400016,"fin":1605823200016,"revDate":1606107600000,"enRev":true,"userCrypt":"983BB5A051B6C08395D7A8598BDB88C8","nombre":"Sergio ","apellidos":"Urday Zegarra","documento":1,"docNumero":"40280142","celular":"926800577","correo":"surday@gmail.com"},{"id":9555,"crypt":"B504B049081D5622C487EF3A365C9D07","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":200000.00,"montofinal":100705.00,"tasa":5.750,"tasafinal":6.000,"codigo":"SPF331420000940","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605589200000,"isCanceledByIfi":false,"clave":"1186","inicio":1605562200932,"fin":1605564000932,"revDate":1605848400000,"enRev":true,"userCrypt":"40A1EA6F30BF6B6116A15F998F9EEEC7","nombre":"alberto","apellidos":"bayona flores","documento":1,"docNumero":"25803643","celular":"994423880","correo":"abayonaflores@hotmail.com"},{"id":9550,"crypt":"5E81DA9006D5B6406CD8A89FAAE95300","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":90000.00,"montofinal":90000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000937",
"situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605589200000,"isCanceledByIfi":false,"clave":"7978","inicio":1605216600306,"fin":1605218400306,"revDate":1605502800000,"enRev":true,"userCrypt":"D7BB685DB6976F98109DFE321D757B24","nombre":"JACQUELINE","apellidos":"PAREDES  PEREZ","documento":1,"docNumero":"06012786","celular":"998711537","correo":"jrparedesp@outlook.com"},{"id":9522,"crypt":"5C923E99E193F8A8F8A2F8452C98B810","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":false,"titular":true,"monto":27500.00,"montofinal":25000.05,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000917","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1606798800000,"isCanceledByIfi":false,"clave":"1116","inicio":1604525400585,"fin":1604527200585,"revDate":1604638800000,"enRev":true,"userCrypt":"DEA6238AE7C4AEBF7BF16AA241CB8900","nombre":"JOSE LUIS","apellidos":"PIZARRO RODRIGUEZ","documento":1,"docNumero":"10196677","celular":"923600076","correo":"jpizarro75@hotmail.com"},{"id":9496,"crypt":"B6DC93E16C5E9CFB7BC638BF21422EF3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":400,"plazofinal":400,"tyc":true,"titular":true,"monto":25000.00,"montofinal":24300.00,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000898","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1603429200000,"isCanceledByIfi":false,"clave":"8765","inicio":1603315800100,"fin":1603317600100,"revDate":1603429200000,"enRev":true,"userCrypt":"C5BFAE141E7FF40E54B5023DA2187274","nombre":"Javier","apellidos":"Tito","documento":1,"docNumero":"44807407","celular":"969351296","correo":"javiertito.usmp@gmail.com"},{"id":9477,"crypt":"057D1BC0214496FE413C24B3E5CC5138","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000884","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605330000000,"isCanceledByIfi":false,"clave":"5843","inicio":1602883800167,"fin":1602885600167,"revDate":1603342800000,"enRev":true,"userCrypt":"D374101BDE98E45918677E1F6FD7AC0C","nombre":"David Iván ","apellidos":"Barreto Castañeda ","documento":1,"docNumero":"10745680","celular":"964792367","correo":"davidbacast@gmail.com"},{"id":9466,"crypt":"B7919A4C98D8890E8329A3249B8A12B9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":150000.00,"montofinal":35000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000873","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1603256400000,"isCanceledByIfi":false,"clave":"4766","inicio":1602624600090,"fin":1602626400090,"revDate":1602824400000,"enRev":true,"userCrypt":"ED42AFFAA80E0021716FF757BDCCB0CE","nombre":"David  Moises","apellidos":"Santisteban Fernandez","documento":1,"docNumero":"06276564","celular":"999067427","correo":"davidsf-67@hotmail.com"},{"id":9459,"crypt":"D3CC7029BE6B2258DC806182317AD12C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":60000.00,"montofinal":100000.00,"tasa":5.650,"tasafinal":5.750,"codigo":"SPF331420000866","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1604120400000,"isCanceledByIfi":false,"clave":"5449","inicio":1602279000648,"fin":1602280800648,"revDate":1602651600000,"enRev":true,"userCrypt":"37912436F043BD38EDC3A65E498AC888","nombre":"edwin","apellidos":"maldonado cortez","documento":1,"docNumero":"07765525","celular":"996298133","correo":"edwinmalcor@hotmail.com"},{"id":9457,"crypt":"B60EE24238304F23D0EB745697C0D7D9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":21300.65,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000864","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1602565200000,"isCanceledByIfi":false,"clave":"2294","inicio":1602279000620,"fin":1602280800620,"revDate":1602651600000,"enRev":true,"userCrypt":"F1399E0F3E4571C2D1F098FA95E6F8C4","nombre":"Lorena ","apellidos":"Villarreal Ruiz ","documento":1,"docNumero":"41047136","celular":"997207276","correo":"lorvilla@hotmail.com"},{"id":9435,"crypt":"93B0CB737D80C60420ED3085385C40AC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":721,"plazofinal":721,"tyc":true,"titular":true,"monto":15000.00,"montofinal":15000.00,"tasa":5.550,"tasafinal":5.550,"codigo":"SPF331420000847","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1602133200000,"isCanceledByIfi":false,"clave":"4919","inicio":1601674200436,"fin":1601676000436,"revDate":1602219600000,"enRev":true,"userCrypt":"2D40A02F54BCD0195074E8CE83744B32","nombre":"Romel","apellidos":"Jimenez Paredes","documento":1,"docNumero":"40697782","celular":"989664680","correo":"rjimenez@ieee.org"},{"id":9375,"crypt":"A89A989E2B5250EE5A6B00419392EBB0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":541,"plazofinal":550,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000799","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1601614800000,"isCanceledByIfi":false,"clave":"4655","inicio":1599773400511,"fin":1599775200511,"revDate":1600318800000,"enRev":true,"userCrypt":"85B23BE59DFFEC4E51127B9EEB8822D0","nombre":"Marleni","apellidos":"Tito Huamán","documento":1,"docNumero":"40433621","celular":"969722153","correo":"marlenititohuaman08@gmail.com"},{"id":9350,"crypt":"0D3B9B03342E701F7FC3EFF24E8C2C92","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":183,"plazofinal":365,"tyc":true,"titular":false,"monto":60000.00,"montofinal":60000.00,"tasa":4.600,"tasafinal":5.500,"codigo":"SPF331420000775","situacion":"S","otroNum":"08638472","ganador":"Caja Rural Del Centro","apertura":1599195600000,"isCanceledByIfi":false,"clave":"9253","inicio":1599082200051,"fin":1599084000051,"revDate":1599454800000,"enRev":true,"userCrypt":"1866BD33FB8AD36AA3D09572662EA8FF","nombre":"Jesus","apellidos":"Loarte","documento":1,"docNumero":"45197103","celular":"974638983","correo":"jesus204@gmail.com"},{"id":9319,"crypt":"5F662A3FF053E16E389CACB8ACFCED7F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"otroDoc":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":false,"monto":320000.00,"montofinal":325000.05,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF330420000018","situacion":"S","otroNum":"29364396","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"4365","inicio":1598563800619,"fin":1598565600619,"enRev":false,"userCrypt":"1DEF830580B2D138B179A8986909BEFA","nombre":"Fernanda","apellidos":"Mares","documento":1,"docNumero":"70004144","celular":"958768246","correo":"fercha103@hotmail.com"},{"id":9286,"crypt":"C3A2435A6723C4A5AF0A2159C42AA262","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50001.00,"montofinal":55000.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000715","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"3149","inicio":1598391000272,"fin":1598392800272,"enRev":true,"userCrypt":"7407B726540CA34CA21962E9F3708CD0","nombre":"Felix","apellidos":"Soto","documento":1,"docNumero":"09539429","celular":"995038303","correo":"felix@metacontrol.com.pe"},{"id":9261,"crypt":"8E030989275AE95B988119AF90E6D352","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":230,"plazofinal":230,"tyc":true,"titular":true,"monto":60000.00,"montofinal":60000.00,"tasa":5.500,"tasafinal":5.500,"codigo":"SPF331420000696","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"7623","inicio":1598304600545,"fin":1598306400545,"revDate":1598850000000,"enRev":true,"userCrypt":"1DEF830580B2D138B179A8986909BEFA","nombre":"Fernanda","apellidos":"Mares","documento":1,"docNumero":"70004144","celular":"958768246","correo":"fercha103@hotmail.com"},{"id":9148,"crypt":"32B6BF9FA5738079EC5636A932ADDED4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":2000.00,"montofinal":2000.00,"tasa":4.350,"tasafinal":4.350,"codigo":"SPF331420000622","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595221200000,"isCanceledByIfi":false,"clave":"4575","inicio":1595021400858,"fin":1595023200858,"enRev":false,"userCrypt":"7E73E3A1EED59BCD7DFF9138CB2C0CCA","nombre":"Rodrigo Alonso","apellidos":"Torres Arcos","documento":1,"docNumero":"72900597","celular":"948471480","correo":"rodrigo.torres94@hotmail.com"},{"id":9144,"crypt":"159695ADA2AE04AA4931F505D6D01723","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"clonado":true,"monto":209280.00,"montofinal":150000.00,"tasa":6.250,"tasafinal":6.150,"codigo":"SPF331420000620","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595048400000,"isCanceledByIfi":false,"clave":"4982","inicio":1594935000374,"fin":1594936800374,"enRev":false,"userCrypt":"9B024F6DBCF6EBE0C1AEFAAC9E5E9E3F","nombre":"Jhony Clews","apellidos":"Quiñones Herrera ","documento":1,"docNumero":"43231306","celular":"956240019","correo":"jhonytours@gmail.com"},{"id":9140,"crypt":"B2CA660B17FCC3DCB549C5A46C72F0BC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":25000.00,"montofinal":30000.00,"tasa":5.850,"tasafinal":5.850,"codigo":"SPF331420000616","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595048400000,"isCanceledByIfi":false,"clave":"8928","inicio":1594848600871,"fin":1594850400871,"enRev":false,"userCrypt":"2664C694D0C6C9F769B9171399C71D85","nombre":"Alvaro ","apellidos":"Olarte","documento":1,
"docNumero":"70514037","celular":"951367879","correo":"olartealvaro@gmail.com"},{"id":9126,"crypt":"8C7B1F2D969BAD91EE42618FDB516397","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":360,"plazofinal":360,"tyc":true,"titular":true,"monto":30000.00,"montofinal":70000.00,"tasa":5.850,"tasafinal":6.000,"codigo":"SPF331420000607","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595394000000,"isCanceledByIfi":false,"clave":"4611","inicio":1594416600849,"fin":1594418400849,"revDate":1594875600000,"enRev":true,"userCrypt":"B35249515D25BB074C120BA05C1F3054","nombre":"Miguel Angel","apellidos":"Infantes Quijano","documento":1,"docNumero":"10365647","celular":"998673277","correo":"minfantes@gmail.com"},{"id":9121,"crypt":"50B7A5BA36052D88FD4D7FB2D815CDB4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":2500.00,"montofinal":2500.00,"tasa":5.350,"tasafinal":5.350,"codigo":"SPF331420000603","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1594616400000,"isCanceledByIfi":false,"clave":"5912","inicio":1594330200840,"fin":1594332000840,"revDate":1594616400000,"enRev":true,"userCrypt":"057442D5D25FCF3B1F455BB37D9883F0","nombre":"Danny","apellidos":"Salinas Vergaray","documento":1,"docNumero":"70186858","celular":"956745306","correo":"saver2489@gmail.com"},{"id":9096,"crypt":"D43F7853ADCA7DBC645D242748FB4E48","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":45000.00,"montofinal":45000.00,"tasa":4.550,"tasafinal":4.550,"codigo":"SPF331420000588","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1593838800000,"isCanceledByIfi":false,"clave":"6929","inicio":1593639000505,"fin":1593640800505,"revDate":1594011600000,"enRev":true,"userCrypt":"F80CE7B582AE30E31197254B50F35038","nombre":"Christian","apellidos":"Rodriguez","documento":1,"docNumero":"43556972","celular":"994788419","correo":"crodriguezloayza@gmail.com"},{"id":9085,"crypt":"D1DA4FAAFF9C734625E38F1CFE5C2657","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":70000.00,"montofinal":80000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000580","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1594011600000,"isCanceledByIfi":false,"clave":"6595","inicio":1593207000543,"fin":1593208800543,"revDate":1594011600000,"enRev":true,"userCrypt":"E106326C376C11F4AA58E2906D77F7A1","nombre":"Giancarlo","apellidos":"Choy Miranda","documento":1,"docNumero":"42500442","celular":"957933756","correo":"giancarlo.choy@gmail.com"},{"id":9018,"crypt":"C6684D01415042603B01E90CC8C65FC8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF330420000017","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1592283600000,"isCanceledByIfi":false,"clave":"2213","inicio":1591133400083,"fin":1591135200083,"revDate":1591333200000,"enRev":true,"userCrypt":"640FEEBCD1A1D4FC94AA7192FCDC017F","nombre":"GONZALO","apellidos":"HUAMANI","documento":1,"docNumero":"43373875","celular":"992112651","correo":"axl_021@hotmail.com"},{"id":9013,"crypt":"0CBCCE82693EB0482248B57609C990C0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":25000.00,"montofinal":25000.05,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000529","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1591246800000,"isCanceledByIfi":false,"clave":"3491","inicio":1591047000773,"fin":1591048800773,"revDate":1591333200000,"enRev":true,"userCrypt":"71C3174A8F4A3FE27F152C2732E7791F","nombre":"Juan Carlos","apellidos":"Izquierdo Lino","documento":1,"docNumero":"09646791","celular":"997978324","correo":"jizquierdo2404@gmail.com"},{"id":8998,"crypt":"20DA82274C85065866D2CADB6A7561AB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":5000.00,"montofinal":5000.75,"tasa":5.600,"tasafinal":5.600,"codigo":"SPF331420000517","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1590642000000,"isCanceledByIfi":false,"clave":"5695","inicio":1590528600609,"fin":1590530400609,"revDate":1590728400000,"enRev":true,"userCrypt":"53E5DD0B316E3554010D605AA700CBAD","nombre":"Giancarlo","apellidos":"López Tapia","documento":1,"docNumero":"43420984","celular":"993580667","correo":"gian.lopez12@gmail.com"},{"id":8975,"crypt":"612BB9616FB9C980252D65848A2CA4B3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":210,"tyc":true,"titular":true,"monto":50500.00,"montofinal":50000.00,"tasa":5.500,"tasafinal":5.500,"codigo":"SPF331420000498","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1590728400000,"isCanceledByIfi":false,"clave":"1462","inicio":1590183000464,"fin":1590184800464,"revDate":1590555600000,"enRev":true,"userCrypt":"2AF4CEBF720196A35FE51DAA3FB68642","nombre":"Jesus","apellidos":"Santos","documento":1,"docNumero":"41213841","celular":"987212582","correo":"jesantosm99@hotmail.com"},{"id":8914,"crypt":"28135ECA56E3461EEBA1D91BE1A3231A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.710,"tasafinal":5.710,"codigo":"SPF331420000456","situacion":"S","ganador":"Caja Maynas","apertura":1589432400000,"isCanceledByIfi":false,"clave":"3421","inicio":1589319000051,"fin":1589320800051,"enRev":true,"userCrypt":"ABF9CC06095F228A06CEECE5882F909B","nombre":"Amaru","apellidos":"Aranda","documento":1,"docNumero":"10326754","celular":"941856429","correo":"amaru.aranda@gmail.com"},{"id":8885,"crypt":"6FFEC901BDF6F8DFEAF5CBC4A45CC403","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":false,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":5.810,"tasafinal":5.810,"codigo":"SPF331420000434","situacion":"S","ganador":"Caja Maynas","apertura":1589173200000,"isCanceledByIfi":false,"clave":"6263","inicio":1588627800081,"fin":1588629600081,"revDate":1588827600000,"enRev":true,"userCrypt":"A0659BA5E2E26BD34F64010CD25A7359","nombre":"rene","apellidos":"poma","documento":1,"docNumero":"40840171","celular":"994746066","correo":"rene_poma@yahoo.es"},{"id":8882,"crypt":"44E30B68CFF3A354ED5AE04E707B4838","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":366,"plazofinal":366,"tyc":true,"titular":true,"monto":93000.00,"montofinal":93000.00,"tasa":6.100,"tasafinal":6.100,"codigo":"SPF331420000431","situacion":"S","ganador":"Caja Maynas","apertura":1589259600000,"isCanceledByIfi":false,"clave":"7383","inicio":1588627800727,"fin":1588629600727,"revDate":1588741200000,"enRev":true,"userCrypt":"EC6248E28983E4ED156A93B4DCFCE891","nombre":"Gerardo","apellidos":"enrique","documento":1,"docNumero":"45604782","celular":"942780147","correo":"gerardo.rivas@outlook.com.pe"},{"id":8784,"crypt":"54C76AC40C41D8A43EFC4463FA04A00A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":360,"plazofinal":360,"tyc":true,"titular":true,"monto":20000.00,"montofinal":19999.00,"tasa":5.700,"tasafinal":6.000,"codigo":"SPF331420000355","situacion":"S","ganador":"Caja Rural Raíz","apertura":1585544400000,"isCanceledByIfi":false,"clave":"8329","inicio":1585344600125,"fin":1585346400125,"revDate":1585890000000,"enRev":true,"userCrypt":"B9D63E304DB035F285C82EB25F1A9A8F","nombre":"Mónica Cristina","apellidos":"Momiy Simabukuro","documento":1,"docNumero":"43191645","celular":"999514444","correo":"mmomiy@gmail.com"},{"id":8782,"crypt":"C3A66C6BA7334FF364C3FDF266796DDD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":540,"plazofinal":720,"tyc":true,"titular":true,"monto":10000.00,"montofinal":13000.00,"tasa":5.700,"tasafinal":5.900,"codigo":"SPF331420000353","situacion":"S","ganador":"Caja Rural Raíz","apertura":1585285200000,"isCanceledByIfi":false,"clave":"9948","inicio":1585258200669,"fin":1585260000669,"revDate":1585803600000,"enRev":true,"userCrypt":"ABC4CA7B20E66603226CD45365DDD66B","nombre":"MARIA","apellidos":"ROSSI","documento":1,"docNumero":"73373165","celular":"979723985","correo":"mariaclaudiarossi16@gmail.com"},{"id":8684,"crypt":"49BFC921E8623C90B5B23312EDD25C87","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000278","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1585112400000,"isCanceledByIfi":false,"clave":"3617","inicio":1584394200367,"fin":1584396000367,"revDate":1584766800000,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"},{"id":8665,"crypt":"0BC453624CE48BD3107AD00D2B70506A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":366,"plazofinal":365,"tyc":true,"titular":true,"monto":90000.00,"montofinal":90000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000260","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583989200000,"isCanceledByIfi":false,"clave":"3799","inicio":1583789400605,"fin":1583791200605,"revDate":1584334800000,"enRev":true,"userCrypt":"2611CE3DFE132D1399F8E6C2F38BBCC3","nombre":"Victoria","apellidos":"Rosas Maguiña","documento":1,"docNumero":"31617960","celular":"922086861","correo":"vrosas0467@gmail.com"},{"id":8655,"crypt":"99D3946340E0E6FD9D129CF8FD1A88CB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100005.00,"tasa":5.500,"tasafinal":6.000,"codigo":"SPF331420000251","situacion":"S","ganador":"Financiera Credinka",
"apertura":1583470800000,"isCanceledByIfi":false,"clave":"9866","inicio":1583357400742,"fin":1583359200742,"enRev":false,"userCrypt":"FCEC2776585DDA2F66DC26EB75947CA9","nombre":"Monica Cecilia ","apellidos":"Rosas Delgado","documento":1,"docNumero":"10273767","celular":"960990787","correo":"mcrosasd@gmail.com"},{"id":8654,"crypt":"AC55A0F7192FE1683231BDCCAE31A75E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100000.00,"tasa":6.200,"tasafinal":6.400,"codigo":"SPF331420000250","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583470800000,"isCanceledByIfi":false,"clave":"3452","inicio":1583357400798,"fin":1583359200798,"enRev":true,"userCrypt":"FCEC2776585DDA2F66DC26EB75947CA9","nombre":"Monica Cecilia ","apellidos":"Rosas Delgado","documento":1,"docNumero":"10273767","celular":"960990787","correo":"mcrosasd@gmail.com"},{"id":8638,"crypt":"7B58FC47BEEA26F8F295125A0EED3DB7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":400,"plazofinal":721,"tyc":true,"titular":true,"monto":200000.00,"montofinal":190033.19,"tasa":6.200,"tasafinal":6.400,"codigo":"SPF331420000234","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583989200000,"isCanceledByIfi":false,"clave":"8625","inicio":1583184600346,"fin":1583186400346,"revDate":1585198800000,"enRev":true,"userCrypt":"8B475D7612DA82C6E6A03446B05E72F4","nombre":"Augusto Jesus","apellidos":"Bendezu Novoa","documento":1,"docNumero":"41481820","celular":"986345466","correo":"augustbend@gmail.com"},{"id":8629,"crypt":"4C881C844E0BABD979B19EE5CC472A29","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":100661.00,"montofinal":100495.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000225","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583902800000,"isCanceledByIfi":false,"clave":"8325","inicio":1582839000480,"fin":1582840800480,"revDate":1583298000000,"enRev":true,"userCrypt":"878D5F1DB2C46B329563A5F04349DB93","nombre":"Frefy Alonso","apellidos":"Ballon Medina","documento":1,"docNumero":"45577094","celular":"959306202","correo":"fredyballon@hotmail.com"},{"id":8627,"crypt":"B45864049CFC346D0FDFB8735F0D59F2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":13000.00,"montofinal":13000.00,"tasa":4.800,"tasafinal":4.800,"codigo":"SPF331420000223","situacion":"S","ganador":"Financiera Credinka","apertura":1583125200000,"isCanceledByIfi":false,"clave":"6153","inicio":1582839000015,"fin":1582840800015,"revDate":1583125200000,"enRev":true,"userCrypt":"8BCAACBE575081BCC5FB28CD52FC1D5C","nombre":"MAURA","apellidos":"RIVERA","documento":1,"docNumero":"09558293","celular":"993479448","correo":"maura.an.rivera@gmail.com"},{"id":8617,"crypt":"5A3A0647AF38B2BB51443201FA3D3E68","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":240,"plazofinal":240,"tyc":true,"titular":true,"monto":3600.00,"montofinal":3600.00,"tasa":4.800,"tasafinal":4.800,"codigo":"SPF331420000214","situacion":"S","otroNum":"46501859","ganador":"Financiera Credinka","apertura":1582866000000,"isCanceledByIfi":false,"clave":"8242","inicio":1582666200222,"fin":1582668000222,"revDate":1583211600000,"enRev":true,"userCrypt":"F5CE03EEA41B059F5EB6E3343D4D2FB8","nombre":"medaly natalia","apellidos":"torres quispe","documento":1,"docNumero":"46501859","celular":"989505168","correo":"medalynatalia@hotmail.com"},{"id":8616,"crypt":"A514ECF87A75F4ABE7EC6D34D7A2C5DC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":270,"plazofinal":270,"tyc":true,"titular":false,"monto":9000.00,"montofinal":9000.00,"tasa":5.050,"tasafinal":5.050,"codigo":"SPF331420000213","situacion":"S","otroNum":"46501859","ganador":"Financiera Credinka","apertura":1582866000000,"isCanceledByIfi":false,"clave":"5158","inicio":1582666200647,"fin":1582668000647,"revDate":1583211600000,"enRev":true,"userCrypt":"F5CE03EEA41B059F5EB6E3343D4D2FB8","nombre":"medaly natalia","apellidos":"torres quispe","documento":1,"docNumero":"46501859","celular":"989505168","correo":"medalynatalia@hotmail.com"},{"id":8605,"crypt":"3CBBF35A18BF341E667D4FB53F6EEFB2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":10000.00,"montofinal":10000.00,"tasa":5.700,"tasafinal":6.000,"codigo":"SPF331420000203","situacion":"S","ganador":"Caja Rural Raíz","apertura":1582693200000,"isCanceledByIfi":false,"clave":"1334","inicio":1582320600515,"fin":1582322400515,"enRev":true,"userCrypt":"6F8047C90E50883FB5A4848C74585987","nombre":"jaime","apellidos":"diestra reyes","documento":1,"docNumero":"07125533","celular":"982346150","correo":"jaime.diestrar@gmail.com"},{"id":8585,"crypt":"48B196D8CD1A841E3D26676FD922B61E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":122621.89,"montofinal":122615.79,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000184","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1582261200000,"isCanceledByIfi":false,"clave":"8951","inicio":1582147800555,"fin":1582149600555,"revDate":1582606800000,"enRev":true,"userCrypt":"09289D2A93EECAAC25488874563E8822","nombre":"Alvaro","apellidos":"Abanto","documento":1,"docNumero":"10548434","celular":"947004465","correo":"alvaroabanto@gmail.com"},{"id":8580,"crypt":"89463F1257B89B0FF46CF228C12FB884","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1081,"tyc":true,"titular":true,"monto":70000.00,"montofinal":70000.05,"tasa":6.200,"tasafinal":6.300,"codigo":"SPF331420000179","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1582606800000,"isCanceledByIfi":false,"clave":"7944","inicio":1582061400259,"fin":1582063200259,"revDate":1582606800000,"enRev":true,"userCrypt":"13443A35EE24388B31C7D72C7763A5B8","nombre":"JESSY LUCIA","apellidos":"Espinoza Sanchez","documento":1,"docNumero":"70616347","celular":"997362857","correo":"jessy1604@gmail.com"},{"id":8563,"crypt":"D7306FFBCA766597B3134C1FE6832A95","producto":1,"productoName":"DPF","moneda":1,"ubicacion":13,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":3500.00,"montofinal":3500.00,"tasa":5.300,"tasafinal":5.650,"codigo":"SPF331320000001","situacion":"S","ganador":"Financiera Credinka","apertura":1581570000000,"isCanceledByIfi":false,"clave":"3458","inicio":1581543000188,"fin":1581544800188,"revDate":1581915600000,"enRev":true,"userCrypt":"86AFA5B1AC768DD2A7CF1DEEB8BA10C1","nombre":"Iván paul","apellidos":"Iparraguirre velazco","documento":1,"docNumero":"43419926","celular":"975372236","correo":"ivanpoolcero@hotmail.com"},{"id":8560,"crypt":"96BDED56456E12B3F8530C151655ECE7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":80000.00,"montofinal":80000.00,"tasa":6.200,"tasafinal":6.300,"codigo":"SPF331420000162","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1581570000000,"isCanceledByIfi":false,"clave":"1567","inicio":1581543000764,"fin":1581544800764,"revDate":1581915600000,"enRev":true,"userCrypt":"E6F0BB9367A9B73F6DEFDD8A00035727","nombre":"Edgar Alberto","apellidos":"Farfán","documento":1,"docNumero":"40578386","celular":"998844662","correo":"efarfang@gmail.com"},{"id":8558,"crypt":"E99C67F102E1B09D1ABFA5206F756B7C","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":50000.00,"montofinal":79996.00,"tasa":3.000,"tasafinal":3.000,"codigo":"SPF331420000160","situacion":"S","ganador":"Caja Rural Raíz","apertura":1582261200000,"isCanceledByIfi":false,"clave":"1122","inicio":1581543000102,"fin":1581544800102,"revDate":1581915600000,"enRev":true,"userCrypt":"0C138BDDF7EACC14B2C442165B07223B","nombre":"HENRY IVAN","apellidos":"CONDORI ALEJO","documento":1,"docNumero":"01325355","celular":"958315508","correo":"hcondori@gmail.com"},{"id":8526,"crypt":"FB0CEB64F24CDE89D55BF06FA4C9A26F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":80000.00,"montofinal":156000.00,"tasa":6.000,"tasafinal":6.200,"codigo":"SPF331420000133","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583730000000,"isCanceledByIfi":false,"clave":"3846","inicio":1580765400363,"fin":1580767200363,"revDate":1580965200000,"enRev":true,"userCrypt":"A52AFB5059CCD55AB7D7FCBF1A3237FA","nombre":"Edward Shied","apellidos":"Flores Valdivia","documento":1,"docNumero":"45200526","celular":"950282622","correo":"drawde0123@hotmail.com"},{"id":8519,"crypt":"C92777EF29CB76B165DD1940314ACB10","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":560,"plazofinal":560,"tyc":true,"titular":true,"monto":58000.00,"montofinal":60000.00,"tasa":6.000,"tasafinal":6.150,"codigo":"SPF331420000126","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1580446800000,"isCanceledByIfi":false,"clave":"6882","inicio":1580419800688,"fin":1580421600688,"revDate":1580792400000,"enRev":true,"userCrypt":"287F7CDBD3AB1E69BDD1329D8F21CAB0","nombre":"Yadira Elizabeth","apellidos":"Gamboa Izaguirre","documento":1,"docNumero":"48437149","celular":"989642622","correo":"yadiragamboa123@gmail.com"},{"id":8492,"crypt":"E79A08C3AA479A563E1F83D60F831F89","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000105","situacion":"S","ganador":"Financiera Credinka","apertura":1579755600000,"isCanceledByIfi":false,"clave":"8234","inicio":1579728600699,"fin":1579730400699,"enRev":false,"userCrypt":"F80CE7B582AE30E31197254B50F35038","nombre":"Christian","apellidos":"Rodriguez","documento":1,"docNumero":"43556972",
"celular":"994788419","correo":"crodriguezloayza@gmail.com"},{"id":8455,"crypt":"CF94853D4E9666FF4A535F0A5B51A30F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":60000.00,"montofinal":60000.00,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000074","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579323600000,"isCanceledByIfi":false,"clave":"8197","inicio":1579210200155,"fin":1579212000155,"enRev":false,"userCrypt":"1A97A49BB1E75BE2129317CEDB706454","nombre":"Sandro","apellidos":"Del Rosario","documento":1,"docNumero":"41080693","celular":"963935033","correo":"sdelros@outlook.com"},{"id":8454,"crypt":"9C8A095A27F6B2A3129A810CA7B7DED7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":30000.00,"montofinal":30000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000073","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579496400000,"isCanceledByIfi":false,"clave":"6848","inicio":1579210200955,"fin":1579212000955,"enRev":false,"userCrypt":"70EBCD2B98BAB4B29D43947203B0045B","nombre":"Mario Efrain ","apellidos":"Sarango Arias","documento":1,"docNumero":"07698942","celular":"998509256","correo":"esarangoa@hotmail.com"},{"id":8449,"crypt":"B538B8AA554A306E2A51FEA3D4E0EB2D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":94500.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331420000069","situacion":"S","ganador":"Financiera Credinka","apertura":1579496400000,"isCanceledByIfi":false,"clave":"8481","inicio":1579210200966,"fin":1579212000966,"enRev":false,"userCrypt":"1E5CDB998AC447B71D19F56D0724A097","nombre":"cesar","apellidos":"rojas soto","documento":1,"docNumero":"40959580","celular":"949173413","correo":"cesars961@hotmail.com"},{"id":8435,"crypt":"AE738763EE75CE8EB4E62A49C0C60453","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":720,"plazofinal":721,"tyc":true,"titular":true,"monto":170000.00,"montofinal":180001.00,"tasa":6.250,"tasafinal":6.500,"codigo":"SPF331420000058","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579496400000,"isCanceledByIfi":false,"clave":"5946","inicio":1579037400718,"fin":1579039200718,"revDate":1579755600000,"enRev":true,"userCrypt":"CE2B1F376405D24FEE7731DBD6EB6DC7","nombre":"Luis Alberto","apellidos":"Ortiz Flores ","documento":1,"docNumero":"07485136","celular":"992716620","correo":"lual20005@hotmail.com"},{"id":8431,"crypt":"7FF05473012EAB46E587D5888D1E9902","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":6.000,"tasafinal":5.800,"codigo":"SPF331420000055","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1580792400000,"isCanceledByIfi":false,"clave":"6781","inicio":1579037400014,"fin":1579039200014,"revDate":1580446800000,"enRev":true,"userCrypt":"686879B6C2BC69E03A6EC41E998936EC","nombre":"Héctor Raul","apellidos":"Alva Infantes","documento":1,"docNumero":"43289051","celular":"996175647","correo":"hrai_56@hotmail.com"},{"id":8429,"crypt":"AE7687DA7501762AA6D2CF3B111C19D5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":24998.80,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000053","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"5359","inicio":1578951000864,"fin":1578952800864,"enRev":true,"userCrypt":"AA326561869452804D108EE41E18F903","nombre":"julio","apellidos":"guzman","documento":1,"docNumero":"19809826","celular":"977546069","correo":"remigiogc@hotmail.com"},{"id":8421,"crypt":"F3C6C0861363D57B5E95086A02AA16A3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":270,"plazofinal":270,"tyc":true,"titular":true,"monto":70000.00,"montofinal":70000.00,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000046","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"6755","inicio":1578951000596,"fin":1578952800596,"revDate":1579150800000,"enRev":true,"userCrypt":"D7493B074E18D23D58D23B64845A4740","nombre":"Rolando","apellidos":"Yañez","documento":1,"docNumero":"45162848","celular":"953951600","correo":"fyanezcantafio@gmail.com"},{"id":8414,"crypt":"90C2518A8D2D174F8551E92EAC7CC0DF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":100600.00,"montofinal":100050.00,"tasa":5.900,"tasafinal":6.600,"codigo":"SPF331420000039","situacion":"S","ganador":"Financiera Credinka","apertura":1579064400000,"isCanceledByIfi":false,"clave":"1526","inicio":1578691800321,"fin":1578693600321,"enRev":true,"userCrypt":"4A61222EF9D36B37909D0150D5199BDF","nombre":"Rolando","apellidos":"Ruiz Romero","documento":1,"docNumero":"09221415","celular":"986667724","correo":"rolanruro@outlook.com"},{"id":8408,"crypt":"EEDA9ED12D38DF847704143E1CC9782C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":3000.00,"montofinal":5000.00,"tasa":5.550,"tasafinal":5.750,"codigo":"SPF331420000033","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"4295","inicio":1578605400743,"fin":1578607200743,"revDate":1579496400000,"enRev":true,"userCrypt":"14D81DF0D80B2CA76FC2D279702EC754","nombre":"MIKE IVAN","apellidos":"PLASENCIA CHAVEZ","documento":1,"docNumero":"40375022","celular":"976347010","correo":"mikvan03@hotmail.com"},{"id":8404,"crypt":"6941F6326BA223C254E72F406D6AE8B1","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":95000.00,"montofinal":95000.25,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331420000029","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"2575","inicio":1578519000339,"fin":1578520800339,"enRev":true,"userCrypt":"A98A0F909E3C5BE0C1C16A185A6FD138","nombre":"GUSTAVO ","apellidos":"ILLESCA DHAGA DEL CASTILLO ","documento":1,"docNumero":"07204426","celular":"989044075","correo":"gustavoillesca@yahoo.es"},{"id":8393,"crypt":"CCC77C5CCA01D47761C1DF59C012A9B7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":300000.00,"montofinal":292732.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331420000021","situacion":"S","ganador":"Financiera Credinka","apertura":1581051600000,"isCanceledByIfi":false,"clave":"7143","inicio":1578346200800,"fin":1578348000800,"revDate":1580878800000,"enRev":true,"userCrypt":"0E38A6A8DE903AD95A76647B3444A2F3","nombre":"monica","apellidos":"obando paredes","documento":1,"docNumero":"08234635","celular":"992780139","correo":"monicaobando@hotmail.com"},{"id":8376,"crypt":"B4A63F635A9280E108C3E808111D9F31","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":39000.00,"montofinal":39000.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000004","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578114000000,"isCanceledByIfi":false,"clave":"2622","inicio":1578000600778,"fin":1578002400778,"revDate":1578459600000,"enRev":true,"userCrypt":"13E82C33F20AA404C90582BE6FDB743B","nombre":"Alejandro","apellidos":"García","documento":1,"docNumero":"45085284","celular":"947589548","correo":"alejandro.g.j88@gmail.com"},{"id":8375,"crypt":"59724CE246269AC355FB49F93535CE0C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":7000.00,"montofinal":7005.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000003","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578373200000,"isCanceledByIfi":false,"clave":"1118","inicio":1578000600179,"fin":1578002400179,"revDate":1578459600000,"enRev":true,"userCrypt":"0C0BFE196974FDA722BFACB18B164747","nombre":"Cecilia ","apellidos":"Cordova","documento":1,"docNumero":"40264817","celular":"994672001","correo":"cpcordova24@yahoo.es"},{"id":8371,"crypt":"3E7520B928616B22763C0F23EA3A7D1B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":182,"plazofinal":182,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100001.00,"tasa":5.000,"tasafinal":5.500,"codigo":"SPF331419002440","situacion":"S","ganador":"Financiera Credinka","apertura":1577682000000,"isCanceledByIfi":false,"clave":"2422","inicio":1577827800943,"fin":1577829600943,"enRev":false,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":8369,"crypt":"755F0943A87974255950BFF657F165DC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":6000.00,"montofinal":5999.75,"tasa":5.300,"tasafinal":5.300,"codigo":"SPF331419002438","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578027600000,"isCanceledByIfi":false,"clave":"9958","inicio":1577741400952,"fin":1577743200952,"revDate":1578373200000,"enRev":true,"userCrypt":"0365281D07B64A49AEAB0EA09161A793","nombre":"Elizabeth","apellidos":"Hinostroza","documento":1,"docNumero":"40178689","celular":"992296390","correo":"ely242@gmail.com"},{"id":8367,"crypt":"EC0F23296D47CDD17239FA49CC9191A8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331419002437","situacion":"S","ganador":"Financiera Credinka","apertura":1578286800000,"isCanceledByIfi":false,"clave":"4825","inicio":1577741400048,
"fin":1577743200048,"enRev":false,"userCrypt":"4E1A2B4B54FCD76D63442D0B179041D0","nombre":"Paul Eladio","apellidos":"Luque Ccama","documento":1,"docNumero":"41357130","celular":"989959871","correo":"udtccss@gmail.com"},{"id":8366,"crypt":"DA7D2B43193DFAAB72E79D8C0791FFC2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":30000.00,"montofinal":30003.50,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002436","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578632400000,"isCanceledByIfi":false,"clave":"4783","inicio":1577741400138,"fin":1577743200138,"revDate":1578373200000,"enRev":true,"userCrypt":"4CB2ABFFD000088DDF6395E4EF141A6A","nombre":"Britt ","apellidos":"Barrios","documento":1,"docNumero":"45813954","celular":"924215329","correo":"brialeba@gmail.com"},{"id":8359,"crypt":"5BBFF35EEC57850129A363839D28EDC7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":3000.00,"montofinal":5000.00,"tasa":5.000,"tasafinal":5.300,"codigo":"SPF331119000006","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578027600000,"isCanceledByIfi":false,"clave":"5284","inicio":1577741400344,"fin":1577743200344,"revDate":1578373200000,"enRev":true,"userCrypt":"A564499127C0C52C47E52BC23D168FCB","nombre":"Nilton","apellidos":"Moya Chavez","documento":1,"docNumero":"42942092","celular":"945910544","correo":"niltonmch@hotmail.com"},{"id":8354,"crypt":"3F5B2EF8565ABFB7A2E9F7A42336EB78","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002426","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577509200000,"isCanceledByIfi":false,"clave":"3779","inicio":1577482200151,"fin":1577484000151,"enRev":false,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":8352,"crypt":"6013AFD0A484F63140A76D6CDF1871E7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":5000.00,"montofinal":5000.05,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331419002424","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577509200000,"isCanceledByIfi":false,"clave":"2313","inicio":1577482200795,"fin":1577484000795,"enRev":false,"userCrypt":"3553341746A598BEC2477E252E6C8ACE","nombre":"Norley ","apellidos":"Torres Cárcamo ","documento":1,"docNumero":"10300223","celular":"999121595","correo":"norleytc@hotmail.com"},{"id":8333,"crypt":"C190604E697712423B92FAA5071C1EF5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":55000.05,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002410","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577682000000,"isCanceledByIfi":false,"clave":"1269","inicio":1577136600884,"fin":1577138400884,"revDate":1577941200000,"enRev":true,"userCrypt":"3BD4549F6CDC8230F3A130B817325AD1","nombre":"Monica ","apellidos":"Vasquez ","documento":1,"docNumero":"70031342","celular":"982536169","correo":"monikvase@gmail.com"},{"id":8325,"crypt":"D655B07DEB8BBD2B90826E3315626939","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":57000.00,"montofinal":56999.00,"tasa":5.900,"tasafinal":6.500,"codigo":"SPF331419002403","situacion":"S","ganador":"Financiera Credinka","apertura":1577682000000,"isCanceledByIfi":false,"clave":"8328","inicio":1576704600393,"fin":1576706400393,"revDate":1577768400000,"enRev":true,"userCrypt":"155D0E616A72CA2808863A947F1CA93B","nombre":"Lesmes","apellidos":"Paredes","documento":1,"docNumero":"29294015","celular":"933537891","correo":"ap77461@gmail.com"},{"id":8314,"crypt":"FFFBFFCD4D38D6B500A48DA351BAF49E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50247.50,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002395","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576645200000,"isCanceledByIfi":false,"clave":"2123","inicio":1576618200807,"fin":1576620000807,"enRev":true,"userCrypt":"45E9F593656E2797E86B47B2B6FE2211","nombre":"Vanessa","apellidos":"Honorio","documento":1,"docNumero":"44360263","celular":"980441482","correo":"vanehono@gmail.com"},{"id":8301,"crypt":"8284284C5A56BEEA4F1840FD00F8A147","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":366,"plazofinal":366,"tyc":true,"titular":true,"monto":130000.00,"montofinal":120000.00,"tasa":6.300,"tasafinal":6.350,"codigo":"SPF331119000005","situacion":"S","ganador":"Financiera Credinka","apertura":1577768400000,"isCanceledByIfi":false,"clave":"2639","inicio":1576531800599,"fin":1576533600599,"enRev":true,"userCrypt":"32B13503AAA6000177BC9AB3A46FD164","nombre":"Hubert","apellidos":"Yucra Ayala","documento":1,"docNumero":"20073898","celular":"941947795","correo":"luisleiconstruct@gmail.com"},{"id":8291,"crypt":"ACCC5773001C8FE533A97564DF3B8176","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":82000.00,"montofinal":24398.80,"tasa":6.100,"tasafinal":6.000,"codigo":"SPF331419002381","situacion":"S","ganador":"Caja Rural Raíz","apertura":1576558800000,"isCanceledByIfi":false,"clave":"3171","inicio":1576272600449,"fin":1576274400449,"enRev":true,"userCrypt":"928FD6688894DC084C242FEFF9291356","nombre":"JOSE ROLANDO","apellidos":"MARTINEZ SERRA","documento":1,"docNumero":"06059657","celular":"990005884","correo":"j.r.ms20@hotmail.com"},{"id":8290,"crypt":"7754FA9DD8BAC168DCE52319C9C339CC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002380","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576558800000,"isCanceledByIfi":false,"clave":"9381","inicio":1576272600162,"fin":1576274400162,"revDate":1577768400000,"enRev":true,"userCrypt":"B54BE043AF17EADD7DFA92B43A72C0B3","nombre":"Gustavo Adolfo","apellidos":"Lozano Mendez","documento":1,"docNumero":"46900494","celular":"935819290","correo":"gadolfolozano@gmail.com"},{"id":8286,"crypt":"4231629CB1310D6984F163AB23087F30","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":40000.00,"montofinal":40000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002376","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576213200000,"isCanceledByIfi":false,"clave":"4937","inicio":1576186200644,"fin":1576188000644,"enRev":true,"userCrypt":"BDB7A6CE78E7F6AC42D512CD3CFCAC24","nombre":"Sandra ","apellidos":"Ramírez Checnes","documento":1,"docNumero":"41163665","celular":"997122115","correo":"sache22@gmail.com"},{"id":8283,"crypt":"F13BB5C74B6454D64232C139C48C3B08","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":200000.00,"montofinal":355782.25,"tasa":6.250,"tasafinal":6.250,"codigo":"SPF331419002373","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576818000000,"isCanceledByIfi":false,"clave":"5351","inicio":1576186200623,"fin":1576188000623,"revDate":1576645200000,"enRev":true,"userCrypt":"E5C326798DAC2D783AC67F8873E84D7A","nombre":"Rodrigo Eugenio","apellidos":"Perez Roncagliolo","documento":1,"docNumero":"46699133","celular":"981816332","correo":"rodrigo_2401@hotmail.com"},{"id":8279,"crypt":"2263230A428B2022F3504E09F212A8AB","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":10000.00,"montofinal":10000.00,"tasa":3.000,"tasafinal":3.000,"codigo":"SPF331419002369","situacion":"S","ganador":"Caja Rural Raíz","apertura":1576472400000,"isCanceledByIfi":false,"clave":"8345","inicio":1576186200356,"fin":1576188000356,"revDate":1576558800000,"enRev":true,"userCrypt":"BDB7A6CE78E7F6AC42D512CD3CFCAC24","nombre":"Sandra ","apellidos":"Ramírez Checnes","documento":1,"docNumero":"41163665","celular":"997122115","correo":"sache22@gmail.com"},{"id":8275,"crypt":"2E8B3E9CE876E7E538F479A058C20D4C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":190000.00,"montofinal":200000.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331419002366","situacion":"S","ganador":"Financiera Credinka","apertura":1578286800000,"isCanceledByIfi":false,"clave":"2265","inicio":1576186200876,"fin":1576188000876,"revDate":1577336400000,"enRev":true,"userCrypt":"508B669678F2F895D357C46303B8C6FE","nombre":"Fernando","apellidos":"Villaran Ortiz","documento":1,"docNumero":"40056010","celular":"955934779","correo":"fevo12@hotmail.com"},{"id":8271,"crypt":"9BCD360404D1C0013B61CFE735FA5E95","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":33000.00,"montofinal":16000.00,"tasa":5.800,"tasafinal":5.700,"codigo":"SPF331419002363","situacion":"S","ganador":"Caja Rural Raíz","apertura":1577077200000,"isCanceledByIfi":false,"clave":"2489","inicio":1576186200096,"fin":1576188000096,"revDate":1576558800000,"enRev":true,"userCrypt":"BCD8310643D7E2AD8898941EA4F4CD46","nombre":"Carmen ","apellidos":"Valladares","documento":1,"docNumero":"07965403","celular":"987188719","correo":"camuchav@yahoo.com"},{"id":8262,"crypt":"DD57B213170598E7C4328C106E8D2079","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":25000.00,"montofinal":25000.25,"tasa":6.000,"tasafinal":6.000,
"codigo":"SPF331419002356","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576558800000,"isCanceledByIfi":false,"clave":"7678","inicio":1576186200299,"fin":1576188000299,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":8254,"crypt":"11021751126E7E0D5440EC4622AA769F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":false,"monto":50000.00,"montofinal":29998.55,"tasa":6.150,"tasafinal":6.000,"codigo":"SPF331419002351","situacion":"S","otroNum":"07800633","ganador":"Financiera ProEmpresa","apertura":1578286800000,"isCanceledByIfi":false,"clave":"3639","inicio":1576186200035,"fin":1576188000035,"revDate":1578632400000,"enRev":true,"userCrypt":"4C897198E3520D1704E8A25E5D2EF88A","nombre":"Pablo","apellidos":"león Prado Dulanto","documento":1,"docNumero":"07800633","celular":"996029571","correo":"pabloleonpradodulanto@gmail.com"},{"id":8253,"crypt":"F8FA97F2F192E798158813FBFCF87A96","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":3000.00,"montofinal":3000.00,"tasa":5.000,"tasafinal":5.000,"codigo":"SPF331419002350","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576472400000,"isCanceledByIfi":false,"clave":"4152","inicio":1576186200347,"fin":1576188000347,"enRev":true,"userCrypt":"8FAE5DFFAA1A2825E5F0B36CD3DC0531","nombre":"ANLLILA Shirley ","apellidos":"Avila barrientos","documento":1,"docNumero":"47569183","celular":"964531313","correo":"shirley_alizee@hotmail.com"},{"id":8233,"crypt":"81FD9D417ACD191F14185E91E05B5000","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":50000.00,"montofinal":60000.00,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002332","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577163600000,"isCanceledByIfi":false,"clave":"9354","inicio":1575927000974,"fin":1575928800974,"revDate":1576126800000,"enRev":true,"userCrypt":"608C1BAE555A307F5922AD2FEE9F6B9E","nombre":"Sergio","apellidos":"Palomino","documento":1,"docNumero":"70006099","celular":"932804557","correo":"sergiopr30@gmail.com"},{"id":8225,"crypt":"2A4F0FD9D782B21F5B76E6885B09A234","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":40000.00,"montofinal":39998.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002325","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576213200000,"isCanceledByIfi":false,"clave":"9578","inicio":1575581400280,"fin":1575583200280,"revDate":1576126800000,"enRev":true,"userCrypt":"00D2E689CEA748019161BF4614431FB1","nombre":"abner merlid","apellidos":"zarate","documento":1,"docNumero":"00255936","celular":"957920508","correo":"abnerzar777@hotmail.com"},{"id":8219,"crypt":"E60CD52D6CBC07D3BB2783583173B88E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002319","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1575867600000,"isCanceledByIfi":false,"clave":"1391","inicio":1575581400284,"fin":1575583200284,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"}]


const popover = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Editar Simulación
    </Popover.Content>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Aperturar Simulación
    </Popover.Content>
  </Popover>
);

const popover3 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Validar Simulación
    </Popover.Content>
  </Popover>
);

const popover4 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Rechazar Simulación
    </Popover.Content>
  </Popover>
);

const popover5 = (
  <Popover id="popover-basic">
    <Popover.Content style={{color: 'black'}}>
      Facturar Simulación
    </Popover.Content>
  </Popover>
);

const dataSelectedRow = tab === '1' ? porValidar.filter(item => item.id === selectedRow) : tab === '2' ? porAperturar.filter(item => item.id === selectedRow) : tab === '3' ? porRechazar.filter(item => item.id === selectedRow) : tab === '4' ? rechazadas.filter(item => item.id === selectedRow) : tab === '5' ? aperturadas.filter(item => item.id === selectedRow) : tab === '6' ? facturadas.filter(item => item.id === selectedRow) : null;

const dataPorValidar = {
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
    rows: porValidar.map((item, i) => {

      return {   
          id:item.id,       
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            

            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaRegEdit style={{width: '25px', marginLeft: '50px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('editar'),
              setOpenModal(true)}} />
              </OverlayTrigger>

              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setModalResume('cancelar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              </div>,


          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
        }
    })
  };

  const dataPorAperturar = {
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
    rows: porAperturar.map((item, i) => {

      return {    
          id: item.id,      
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover2}>
              <FaTelegramPlane style={{width: '25px', marginLeft: '50px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setModalResume('aperturar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger>


            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setModalResume('cancelar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger>
            
            
            </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
        }
    })
  };

  const dataPorRechazar = {
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
    rows: porRechazar.map((item, i) => {

      return {    
          id: item.id,      
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
           
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer', marginLeft: '50px'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
    
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
              <FaTimes style={{width: '25px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
              setModalResume('cancelar'),
              setCodigoProducto(item.codigo),
              setOpenModal(true)}} />
              </OverlayTrigger> 
            
            </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
        }
    })
  };

  const dataRechazadas = {
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
    rows: rechazadas.map((item, i) => {



      return {       
          id: item.id,   
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <FaRegEdit style={{width: '25px', marginLeft: '50px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('editar'),
              setOpenModal(true)}} />
              </OverlayTrigger>

              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <FaCheck style={{width: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('validar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
            
            </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
      }
    })
  };

  const dataAperturadas = {
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
        label: 'Plazo',
        field: 'plazo',
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
        label: '',
        field: 'opciones',
        sort: 'asc',
        width: 150
      }
    ],
    rows: aperturadas.map((item, i) => {

      return {        
          id: item.id,  
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          opciones: <div className="row" style={{justifyItems: 'center', alignItems: 'center', marginTop: '5px'}}>
            
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover5}>
                <FaDollarSign style={{width: '25px', marginLeft: '20px', cursor: 'pointer'}} onClick={()=>{setSelectedRow(item.id),
                setMonto(item.monto),
                setPlazo(item.plazo),
                setTasa(item.tasa),
                setCodigoProducto(item.codigo),
                setModalResume('facturar'),
              setOpenModal(true)}} />
              </OverlayTrigger>
            
            </div>,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
      }
    })
  };

  const dataFacturadas = {
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
      }
    ],
    rows: facturadas.map((item, i) => {

      return {          
          id: item.id,
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,          
          registro: moment(item.inicio).format('DD/MM/YYYY'),
          docNumero: item.titular === false ? <div><span>{item.docNumero}</span><br></br><span style={{color: '#e01e2b'}}>A nombre de: {item.otroNum}</span></div> : item.docNumero,
          celular: item.celular,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
      }
    })
  };


    return (
        <React.Fragment>
           
       <div className="row">
           <div className="col-md-3" style={{marginLeft: '10px', marginTop: '15px'}}><h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Simulaciones DPF</h4></div>
           <div className="col-md-2" style={{marginLeft: '40px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Soles:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>3,965,501.00</span></div>
           <div className="col-md-2" style={{marginLeft: '10px', marginTop: '10px'}}><h6 style={{fontWeight: 'bold', fontSize: '16px', padding: '1%', color: '#146cae'}}>Total en Dolares:</h6></div>
           <div className="col-md-2" style={{marginTop: '5px'}}><span style={{fontSize: '0.9em'}}>0.00</span></div>

       </div>


    <div style={{padding: '20px', marginTop: '20px'}}>

{ detalleFila === true && openModal === false && (tab === '1' || tab === '2' || tab === '3' || tab === '4') ? 

<Detalle dataSelectedRow={dataSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile} selectedRow={selectedRow} setSelectedRow={setSelectedRow} /> 

:
detalleFila === true && openModal === false && (tab === '5' || tab === '6' ) ?

<Detalle2 dataSelectedRow={dataSelectedRow} detalleFila={detalleFila} setDetalleFila={setDetalleFila} mobile={mobile} selectedRow={selectedRow} setSelectedRow={setSelectedRow} /> 
:

       <Tabs
      id="controlled-tab-example"
      activeKey={tab}
      defaultActiveKey={1}
      onSelect={(t) => setTab(t)}
    >
        <Tab eventKey="1" title="Por Validar">
        {!dataPorValidar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
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
    data={dataPorValidar}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="2" title="Por Aperturar">
        {!dataPorAperturar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
    data={dataPorAperturar}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="3" title="Por Rechazar">
        {!dataPorRechazar.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>
: <div style={{padding: '30px'}}>
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
    data={dataPorRechazar}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="4" title="Rechazadas">
        {!dataRechazadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
    data={dataRechazadas}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="5" title="Aperturadas">
        {!dataAperturadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
    data={dataAperturadas}
    
/>
</div>
}
      </Tab>
      <Tab eventKey="6" title="Facturadas">
        {!dataFacturadas.columns.length ? <p style={{color: 'black', border: '1px solid #E2E2E2', boxShadow: '1px 1px 1px #E2E2E2', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', marginTop: '10px'}}>No hay información</p>     
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
    data={dataFacturadas}
    
/>
</div>
}
      </Tab>
    </Tabs>

}

    </div>


    <Modal style={modalResume === 'aperturar' || modalResume === 'editar' ? {} : {marginTop: '10%'}} size="lg" show={openModal} onHide={()=>{setDetalleFila(false), handleClose()}}>
        <Modal.Header closeButton>
          {modalResume === 'validar' ? 
          <Modal.Title>Validar Simulación</Modal.Title>
        : modalResume === 'editar' ?
        <Modal.Title>Editar Simulación</Modal.Title>
        : modalResume === 'aperturar' ?
        <Modal.Title>Confirmar Apertura de Simulación</Modal.Title>
        : modalResume === 'cancelar' ?
        <Modal.Title>Rechazar Simulaciòn</Modal.Title>
        : modalResume === 'facturar' ?
        <Modal.Title>Simulaciòn facturada</Modal.Title>
        : null
        }
          
        </Modal.Header>

        {modalResume === 'aperturar' ? 
        
        <Modal.Body style={{textAlign: 'center'}}>

          <p>¿Confirma que el cliente depositó el dinero, referente a la subasta <strong>{codigoProducto}</strong>, con la información que a continuación se presenta?</p>
            
      
        <div className="form-compare row" style={{paddingLeft: '25%', paddingRight: '25%'}}>
          
          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto final:</span></div>
            <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center', border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <span type="text" style={{color: '#e01e2b', marginLeft: '15%'}}>{moneda}</span>
              <input type="text" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'left', width: '80px'}} />
            </div>
            <div>
            <Slider
                                    min={1000}
                                    max={250000}
                                    step={1000}
                                    value={monto}
                                    onChange={handleMonto}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '100%'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo final:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="text" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '50px'}}/>
            <span type="text" style={{color: '#e01e2b'}}>dias</span>
            </div>
            <div>
            <Slider
                                    min={0}
                                    max={1460}
                                    step={30}
                                    value={plazo}
                                    onChange={handlePlazo}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '100%'}}
                                  />
              {/* <input type="range" min="30" max="1800" value="360" step="30" class="slider" id="daysRange" /> */}
            </div>
          </div>

          <div className="form-item col-lg-12" style={{marginBottom: '10px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tasa final:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="text" name="days" onChange={handleOnchangeTasa} value={tasa} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '50px'}}/>
            </div>
          </div>

          <div className="form-item col-lg-12">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Fecha de Apertura:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px'}}>
            <input type="date" onChange={handleOnchangeFecha} value={fechaApertura} style={{border: '0px none white', color: '#e01e2b'}} />
            </div>
          </div>

         
          
          
        </div>
  

        </Modal.Body>

        : modalResume === 'cancelar' ?

        <Modal.Body style={{}}>

          <p>¿Está seguro que quieres solicitar la cancelación de la subasta <strong>{codigoProducto}</strong>?</p>
            
       
                          

          <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
            <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
            <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
            <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
            </div>
          </div>

  

        </Modal.Body>

        : modalResume === 'editar' ?

        <Modal.Body style={{textAlign: 'center'}}>

<div  style={{backgroundColor: 'white', padding: '0px'}}>
  <div className="row">
        <div className="form-content col-lg-12" style={{textAlign: 'center'}}>
      <form method="post" id="compare" action="/depositos-plazo/result">
        <div className="form-compare row">

          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Moneda:</span></div>
            <div id="currency-div" className="radio-group">
            <button type="button" className="btn btn-outline-danger" style={moneda == 'S/' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('S/');
                }}>Soles</button>
            <button type="button" className="btn btn-outline-danger" style={moneda == '$' ? {width: '90px', marginRight: '10px', backgroundColor: '#e01e2b', color: 'white' } : {width: '90px', marginRight: '10px'}} onClick={() => {
                setMoneda('$');
                }}>Dólares</button>
              {/* <label for="soles"><input type="radio" id="soles" name="currency" class="action-key" checked="checked" value="MN" /><span class="btn">Soles</span></label>
              <label for="dolares"><input type="radio" id="dolares" name="currency" class="action-key" value="ME" /><span class="btn" >Dólares</span></label> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Monto:</span></div>
            <div>
            <span type="text" style={{color: '#e01e2b'}}>{moneda}</span>
              <input type="text" id="balance" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
            </div>
            <div>
            <Slider
                                    min={1000}
                                    max={250000}
                                    step={1000}
                                    value={monto}
                                    onChange={handleMonto}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '50%', marginLeft: '60px'}}
                                  />
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div>
            <input type="text" id="days" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '20%'}}/>
            <span type="text" style={{color: '#e01e2b'}}>dias</span>
            </div>
            <div>
            <Slider
                                    min={0}
                                    max={1460}
                                    step={30}
                                    value={plazo}
                                    onChange={handlePlazo}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '50%', marginLeft: '60px'}}
                                  />
              {/* <input type="range" min="30" max="1800" value="360" step="30" class="slider" id="daysRange" /> */}
            </div>
          </div>
                    {/* <input type="hidden" id="exclude" name="exclude" value="all" /> */}
          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Ubicación:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="LI">Lima y Callao</option>
                              
                <option value="LI">Lima y Callao</option>
                              
                <option value="AM">Amazonas</option>
                              
                <option value="AN">Ancash</option>
                              
                <option value="AP">Apurímac</option>
                              
                <option value="AR">Arequipa</option>
                              
                <option value="AY">Ayacucho</option>
                              
                <option value="CA">Cajamarca</option>
                              
                <option value="CU">Cusco</option>
                              
                <option value="HV">Huancavelica</option>
                              
                <option value="HU">Huánuco</option>
                              
                <option value="IC">Ica</option>
                              
                <option value="JU">Junín</option>
                              
                <option value="LL">La Libertad</option>
                              
                <option value="LA">Lambayeque</option>
                              
                <option value="LO">Loreto</option>
                              
                <option value="MD">Madre de Dios</option>
                              
                <option value="MO">Moquegua</option>
                              
                <option value="PA">Pasco</option>
                              
                <option value="PI">Piura</option>
                              
                <option value="PU">Puno</option>
                              
                <option value="SM">San Martín</option>
                              
                <option value="TA">Tacna</option>
                              
                <option value="TU">Tumbes</option>
                              
                <option value="UC">Ucayali</option>
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>


          <div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Pago de Intereses:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="TD">Mostrar Todo</option>
                              
                <option value="AV">Al vencimiento</option>
                              
                <option value="MS">Mensual</option>
                              
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>


          
         
          
                    
         {/* <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }}>Simular</button> */}
          
         <div className="col-lg-12" style={{margin: 'auto', paddingLeft: '20px', paddingRight: '20px', marginTop: '20px'}}>
<div className="form-check">
<label>
<input style={{marginTop: '8px'}}
type="checkbox"
name="terminos"
checked={check}
onChange={onCheckboxChange}
className="form-check-input"

/>
<span style={{color: '#e01e2b'}}>Es para otra persona </span><OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}><FaInfo size="15px" style={{color: 'black', margin: 'auto', cursor: 'pointer', marginLeft: '0px', width: '15px'}}/></OverlayTrigger>
</label>
</div>
</div>

{check === true ? 
<>
<div className="form-item col-lg-6" style={{marginTop: '20px'}}>
<div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tipo de documento:</span></div>
<div id="tipodocsimu" className="select-container select-input action-select">
  <div className="dropdown bootstrap-select required"><select name="doc" id="tdoc" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona">
                  
    <option value="LI">DNI</option>
                  
    <option value="AM">Carné de Extranjeria</option>
                  
    <option value="AN">Pasaporte</option>
                  
    
                </select>
                </div>
</div>
</div>
<div className="form-item col-lg-6" style={{marginTop: '20px'}}>
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Número de documento</span></div>
            <div>
             <input type="text" id="balance" placeholder="Ingrese su documento" onChange={handleOnchangeNumDoc} value={numDoc} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
            </div>
          </div>

        </>  
        :
        null}
        </div>  
            </form>
        </div>
    </div>
</div>
  

        </Modal.Body>

: modalResume === 'validar' ?

<Modal.Body style={{}}>

  <p>¿Está seguro que quieres validar la simulación con código: <strong>{codigoProducto}</strong>?</p>
    

                  

  {/* <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
    <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
    <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
    <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
    </div>
  </div> */}



</Modal.Body>

: modalResume === 'facturar' ? 

<Modal.Body style={{}}>

<p>¿Está seguro de pasar a FACTURADAS la simulación con codigo: <strong>{codigoProducto}</strong>?</p>
  

                

{/* <div className="form-item col-lg-12" style={{marginBottom: '10px', width: '100%'}}>
  <div className="label" style={{width: '100%'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Motivo:</span></div>
  <div style={{border: '1px solid #e01e2b', borderRadius: '5px', marginBottom: '10px', width: '100%'}}>
  <input type="text" onChange={handleOnchangeMotivo} value={motivo} style={{border: '0 none white', textAlign: 'left', width: '100%'}}/>
  </div>
</div> */}



</Modal.Body>

        : null    
      
      
      }
        
        <Modal.Footer>
          <Button style={{backgroundColor: 'white', color: '#e01e2b', borderColor: '#e01e2b'}} onClick={()=> {setDetalleFila(false), handleClose()}}>
            Cancelar
          </Button>
          <Button style={{backgroundColor: '#146cae', color: 'white', borderColor: '#146cae'}} onClick={()=>{setDetalleFila(false), handleClose()}}>
            {modalResume === 'editar' ? 'Editar' : 'Aceptar'}
          </Button>
        </Modal.Footer>
      </Modal>

       
        </React.Fragment>
    )
}

export default BodySubastasAsweb;