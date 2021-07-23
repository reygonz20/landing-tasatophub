import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Link from 'next/link'
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';

import './index.css';

import axios from 'axios'
import Url from '../url'

import { VscArrowSmallUp, VscArrowSmallDown  } from "react-icons/vsc";

//import slider
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap.css';
//-----------

//-------Import bootstrap table-----
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
//----------------------------------

//CONTEXT 
import PernatContext from '../../context/user/PernatContext'
import { isEmpty } from 'lodash';

const Index = ({pernat, setPernat, pernatArea}) => {


  const {getSimulacion, simulacion, getProducto} = useContext(PernatContext)

  const [active, setActive] = useState('1')

  const [monto, setMonto] = useState(10000)
  const [monto2, setMonto2] = useState(10000)
  const [plazo, setPlazo] = useState('183 dias')
  const [moneda, setMoneda] = useState('S/')
  const [monedaenv, setMonedaenv] = useState('Soles')
  const [openModal, setOpenModal] = useState(false)
  const [categoria, setCategoria] = useState('resultados')
  const grupo = "Plazo Fijo"
  const [ubicacion, setUbicacion] = useState('')
  const [pagointeres, setPagointeres] = useState('')

  const [operaciones, setOperaciones] = useState([]);

  const [orden, setOrden] = useState('asc');
  const [fechaSort, setFechaSort] = useState(false);
  const [montoSort, setMontoSort] = useState(false);
  const [plazoSort, setPlazoSort] = useState(false);
  const [numdocSort, setNumdocSort] = useState(false);
  const [codigoSort, setCodigoSort] = useState(false);

  const getOperaciones = async () => {

    
    let res = await axios.get(`${Url}/inversion`)
    setOperaciones(res.data.data)
    // console.log(res.data.data)
}

useEffect(() => {
  getOperaciones()

}, []);

  const handleMonto = (value) => {
    setMonto(value);
  };

  const handlePlazo = (value) => {
    setPlazo(`${value} dias`);
  };

  const handleOnchange = (e) => {
    if (e.target.value.length) {
      setMonto(e.target.value);
    } else {
      setMonto(0);
    }
  };

  const handleOnchangeMontoSlider = (event) => {
    // console.log(`Seleccionaste ${event.target.value}`);
    setMonto2(event.target.value);
  }

  const handleChangeSliderr = (event, newValue) => {
    setMonto(newValue);
  };

  const handleChangeSlider = (event) => {
    setMonto(event.target.value === '' ? '' : event.target.value);
  };

  const handleOnchangePlazo = (e) => {
    if (e.target.value.length) {
      setPlazo(`${e.target.value} dias`);
    } else {
      setPlazo(0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 5000);
  }, []);

  const facturadasOrder = [{"id":9884,"crypt":"F51FFFDF7309B59D8799F7BCCE467780","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":4.900,"tasafinal":4.900,"codigo":"SPF331421000197","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1617166800000,"isCanceledByIfi":false,"clave":"6116","inicio":1616707800487,"fin":1616709600487,"revDate":1616994000000,"enRev":true,"userCrypt":"368D3EBE3A9C833EB2A26A40A6F5D32C","nombre":"Marco Antonio","apellidos":"Mamani Utrilla","documento":1,"docNumero":"08886576","celular":"993126624","correo":"marcomamani@hotmail.com"},{"id":9708,"crypt":"9BA976B080364949B3A1AC4DAB98D6EA","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":95000.00,"montofinal":40000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331421000043","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611637200000,"isCanceledByIfi":false,"clave":"7314","inicio":1610573400138,"fin":1610575200138,"revDate":1610946000000,"enRev":true,"userCrypt":"608C1BAE555A307F5922AD2FEE9F6B9E","nombre":"Sergio","apellidos":"Palomino","documento":1,"docNumero":"70006099","celular":"932804557","correo":"sergiopr30@gmail.com"},{"id":9702,"crypt":"1952F04F889E817D805F5950CCD464C4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":390,"plazofinal":390,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331421000037","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611982800000,"isCanceledByIfi":false,"clave":"2817","inicio":1610400600013,"fin":1610402400013,"revDate":1610686800000,"enRev":true,"userCrypt":"A433AC9971B01A68D608BB0D22602334","nombre":"Esther","apellidos":"Solórzano Cabezas","documento":1,"docNumero":"07054097","celular":"915086877","correo":"esthersc12@hotmail.com"},{"id":9679,"crypt":"E72D539705A8A4448DF0330DCC964577","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"clonado":false,"monto":5000.00,"montofinal":3000.00,"tasa":5.150,"tasafinal":5.050,"codigo":"SPF331421000016","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1610082000000,"isCanceledByIfi":false,"clave":"2819","inicio":1609882200971,"fin":1609884000971,"enRev":false,"userCrypt":"4E203C9178C30534E756620273E40008","nombre":"jaime marlon","apellidos":"sevilla gutierrez","documento":1,"docNumero":"41765085","celular":"943251185","correo":"marlonstone2000@gmail.com"},{"id":9672,"crypt":"48D168C79D5034FBEA38028EB05D12EC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":50000.00,"tasa":5.750,"tasafinal":5.650,"codigo":"SPF331421000009","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1611896400000,"isCanceledByIfi":false,"clave":"9549","inicio":1609795800329,"fin":1609797600329,"enRev":false,"userCrypt":"368D3EBE3A9C833EB2A26A40A6F5D32C","nombre":"Marco Antonio","apellidos":"Mamani Utrilla","documento":1,"docNumero":"08886576","celular":"993126624","correo":"marcomamani@hotmail.com"},{"id":9665,"crypt":"E9DF2DC10F842C0B06F5FC09DB5A246E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":15000.00,"montofinal":15000.00,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331421000003","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1610341200000,"isCanceledByIfi":false,"clave":"2442","inicio":1609795800552,"fin":1609797600552,"enRev":false,"userCrypt":"86E821A7225ACA8F7245CF92363C9B36","nombre":"Leonor Consuelo","apellidos":"Garcia huamani","documento":1,"docNumero":"46848856","celular":"921138125","correo":"leonorgarciah@gmail.com"},{"id":9599,"crypt":"4B0C833799B8BDFC022D50DADEA79D32","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":200000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000981","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1609218000000,"isCanceledByIfi":false,"clave":"8959","inicio":1607549400330,"fin":1607551200330,"revDate":1609304400000,"enRev":true,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":9591,"crypt":"391E668777D4684B10C93E69F263C037","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":23495.45,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000973","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1607749200000,"isCanceledByIfi":false,"clave":"8938","inicio":1607376600987,"fin":1607378400987,"revDate":1607662800000,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":9569,"crypt":"E84C9307A66A7C4C78B68AE8CADB62C2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100001.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000952","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1606453200000,"isCanceledByIfi":false,"clave":"7164","inicio":1606339800679,"fin":1606341600679,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"},{"id":9555,"crypt":"B504B049081D5622C487EF3A365C9D07","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":200000.00,"montofinal":100705.00,"tasa":5.750,"tasafinal":6.000,"codigo":"SPF331420000940","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605589200000,"isCanceledByIfi":false,"clave":"1186","inicio":1605562200932,"fin":1605564000932,"revDate":1605848400000,"enRev":true,"userCrypt":"40A1EA6F30BF6B6116A15F998F9EEEC7","nombre":"alberto","apellidos":"bayona flores","documento":1,"docNumero":"25803643","celular":"994423880","correo":"abayonaflores@hotmail.com"},{"id":9550,"crypt":"5E81DA9006D5B6406CD8A89FAAE95300","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":90000.00,"montofinal":90000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000937","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605589200000,"isCanceledByIfi":false,"clave":"7978","inicio":1605216600306,"fin":1605218400306,"revDate":1605502800000,"enRev":true,"userCrypt":"D7BB685DB6976F98109DFE321D757B24","nombre":"JACQUELINE","apellidos":"PAREDES  PEREZ","documento":1,"docNumero":"06012786","celular":"998711537","correo":"jrparedesp@outlook.com"},{"id":9522,"crypt":"5C923E99E193F8A8F8A2F8452C98B810","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":false,"titular":true,"monto":27500.00,"montofinal":25000.05,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000917","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1606798800000,"isCanceledByIfi":false,"clave":"1116","inicio":1604525400585,"fin":1604527200585,"revDate":1604638800000,"enRev":true,"userCrypt":"DEA6238AE7C4AEBF7BF16AA241CB8900","nombre":"JOSE LUIS","apellidos":"PIZARRO RODRIGUEZ","documento":1,"docNumero":"10196677","celular":"923600076","correo":"jpizarro75@hotmail.com"},{"id":9496,"crypt":"B6DC93E16C5E9CFB7BC638BF21422EF3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":400,"plazofinal":400,"tyc":true,"titular":true,"monto":25000.00,"montofinal":24300.00,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000898","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1603429200000,"isCanceledByIfi":false,"clave":"8765","inicio":1603315800100,"fin":1603317600100,"revDate":1603429200000,"enRev":true,"userCrypt":"C5BFAE141E7FF40E54B5023DA2187274","nombre":"Javier","apellidos":"Tito","documento":1,"docNumero":"44807407","celular":"969351296","correo":"javiertito.usmp@gmail.com"},{"id":9477,"crypt":"057D1BC0214496FE413C24B3E5CC5138","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000884","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1605330000000,"isCanceledByIfi":false,"clave":"5843","inicio":1602883800167,"fin":1602885600167,"revDate":1603342800000,"enRev":true,"userCrypt":"D374101BDE98E45918677E1F6FD7AC0C","nombre":"David Iván ","apellidos":"Barreto Castañeda ","documento":1,"docNumero":"10745680","celular":"964792367","correo":"davidbacast@gmail.com"},{"id":9466,"crypt":"B7919A4C98D8890E8329A3249B8A12B9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":150000.00,"montofinal":35000.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000873","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1603256400000,"isCanceledByIfi":false,"clave":"4766","inicio":1602624600090,"fin":1602626400090,"revDate":1602824400000,"enRev":true,"userCrypt":"ED42AFFAA80E0021716FF757BDCCB0CE","nombre":"David  Moises","apellidos":"Santisteban Fernandez","documento":1,"docNumero":"06276564","celular":"999067427","correo":"davidsf-67@hotmail.com"},{"id":9459,"crypt":"D3CC7029BE6B2258DC806182317AD12C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":60000.00,"montofinal":100000.00,"tasa":5.650,"tasafinal":5.750,"codigo":"SPF331420000866",
"situacion":"S","ganador":"Financiera ProEmpresa","apertura":1604120400000,"isCanceledByIfi":false,"clave":"5449","inicio":1602279000648,"fin":1602280800648,"revDate":1602651600000,"enRev":true,"userCrypt":"37912436F043BD38EDC3A65E498AC888","nombre":"edwin","apellidos":"maldonado cortez","documento":1,"docNumero":"07765525","celular":"996298133","correo":"edwinmalcor@hotmail.com"},{"id":9457,"crypt":"B60EE24238304F23D0EB745697C0D7D9","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":21300.65,"tasa":5.400,"tasafinal":5.400,"codigo":"SPF331420000864","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1602565200000,"isCanceledByIfi":false,"clave":"2294","inicio":1602279000620,"fin":1602280800620,"revDate":1602651600000,"enRev":true,"userCrypt":"F1399E0F3E4571C2D1F098FA95E6F8C4","nombre":"Lorena ","apellidos":"Villarreal Ruiz ","documento":1,"docNumero":"41047136","celular":"997207276","correo":"lorvilla@hotmail.com"},{"id":9435,"crypt":"93B0CB737D80C60420ED3085385C40AC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":721,"plazofinal":721,"tyc":true,"titular":true,"monto":15000.00,"montofinal":15000.00,"tasa":5.550,"tasafinal":5.550,"codigo":"SPF331420000847","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1602133200000,"isCanceledByIfi":false,"clave":"4919","inicio":1601674200436,"fin":1601676000436,"revDate":1602219600000,"enRev":true,"userCrypt":"2D40A02F54BCD0195074E8CE83744B32","nombre":"Romel","apellidos":"Jimenez Paredes","documento":1,"docNumero":"40697782","celular":"989664680","correo":"rjimenez@ieee.org"},{"id":9375,"crypt":"A89A989E2B5250EE5A6B00419392EBB0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":541,"plazofinal":550,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":5.650,"tasafinal":5.650,"codigo":"SPF331420000799","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1601614800000,"isCanceledByIfi":false,"clave":"4655","inicio":1599773400511,"fin":1599775200511,"revDate":1600318800000,"enRev":true,"userCrypt":"85B23BE59DFFEC4E51127B9EEB8822D0","nombre":"Marleni","apellidos":"Tito Huamán","documento":1,"docNumero":"40433621","celular":"969722153","correo":"marlenititohuaman08@gmail.com"},{"id":9319,"crypt":"5F662A3FF053E16E389CACB8ACFCED7F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"otroDoc":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":false,"monto":320000.00,"montofinal":325000.05,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF330420000018","situacion":"S","otroNum":"29364396","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"4365","inicio":1598563800619,"fin":1598565600619,"enRev":false,"userCrypt":"1DEF830580B2D138B179A8986909BEFA","nombre":"Fernanda","apellidos":"Mares","documento":1,"docNumero":"70004144","celular":"958768246","correo":"fercha103@hotmail.com"},{"id":9286,"crypt":"C3A2435A6723C4A5AF0A2159C42AA262","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50001.00,"montofinal":55000.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000715","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"3149","inicio":1598391000272,"fin":1598392800272,"enRev":true,"userCrypt":"7407B726540CA34CA21962E9F3708CD0","nombre":"Felix","apellidos":"Soto","documento":1,"docNumero":"09539429","celular":"995038303","correo":"felix@metacontrol.com.pe"},{"id":9261,"crypt":"8E030989275AE95B988119AF90E6D352","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":230,"plazofinal":230,"tyc":true,"titular":true,"monto":60000.00,"montofinal":60000.00,"tasa":5.500,"tasafinal":5.500,"codigo":"SPF331420000696","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1598850000000,"isCanceledByIfi":false,"clave":"7623","inicio":1598304600545,"fin":1598306400545,"revDate":1598850000000,"enRev":true,"userCrypt":"1DEF830580B2D138B179A8986909BEFA","nombre":"Fernanda","apellidos":"Mares","documento":1,"docNumero":"70004144","celular":"958768246","correo":"fercha103@hotmail.com"},{"id":9148,"crypt":"32B6BF9FA5738079EC5636A932ADDED4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":2000.00,"montofinal":2000.00,"tasa":4.350,"tasafinal":4.350,"codigo":"SPF331420000622","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595221200000,"isCanceledByIfi":false,"clave":"4575","inicio":1595021400858,"fin":1595023200858,"enRev":false,"userCrypt":"7E73E3A1EED59BCD7DFF9138CB2C0CCA","nombre":"Rodrigo Alonso","apellidos":"Torres Arcos","documento":1,"docNumero":"72900597","celular":"948471480","correo":"rodrigo.torres94@hotmail.com"},{"id":9144,"crypt":"159695ADA2AE04AA4931F505D6D01723","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"clonado":true,"monto":209280.00,"montofinal":150000.00,"tasa":6.250,"tasafinal":6.150,"codigo":"SPF331420000620","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595048400000,"isCanceledByIfi":false,"clave":"4982","inicio":1594935000374,"fin":1594936800374,"enRev":false,"userCrypt":"9B024F6DBCF6EBE0C1AEFAAC9E5E9E3F","nombre":"Jhony Clews","apellidos":"Quiñones Herrera ","documento":1,"docNumero":"43231306","celular":"956240019","correo":"jhonytours@gmail.com"},{"id":9140,"crypt":"B2CA660B17FCC3DCB549C5A46C72F0BC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":25000.00,"montofinal":30000.00,"tasa":5.850,"tasafinal":5.850,"codigo":"SPF331420000616","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595048400000,"isCanceledByIfi":false,"clave":"8928","inicio":1594848600871,"fin":1594850400871,"enRev":false,"userCrypt":"2664C694D0C6C9F769B9171399C71D85","nombre":"Alvaro ","apellidos":"Olarte","documento":1,"docNumero":"70514037","celular":"951367879","correo":"olartealvaro@gmail.com"},{"id":9126,"crypt":"8C7B1F2D969BAD91EE42618FDB516397","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":360,"plazofinal":360,"tyc":true,"titular":true,"monto":30000.00,"montofinal":70000.00,"tasa":5.850,"tasafinal":6.000,"codigo":"SPF331420000607","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1595394000000,"isCanceledByIfi":false,"clave":"4611","inicio":1594416600849,"fin":1594418400849,"revDate":1594875600000,"enRev":true,"userCrypt":"B35249515D25BB074C120BA05C1F3054","nombre":"Miguel Angel","apellidos":"Infantes Quijano","documento":1,"docNumero":"10365647","celular":"998673277","correo":"minfantes@gmail.com"},{"id":9121,"crypt":"50B7A5BA36052D88FD4D7FB2D815CDB4","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":2500.00,"montofinal":2500.00,"tasa":5.350,"tasafinal":5.350,"codigo":"SPF331420000603","situacion":"S","ganador":"Caja Rural Del Centro","apertura":1594616400000,"isCanceledByIfi":false,"clave":"5912","inicio":1594330200840,"fin":1594332000840,"revDate":1594616400000,"enRev":true,"userCrypt":"057442D5D25FCF3B1F455BB37D9883F0","nombre":"Danny","apellidos":"Salinas Vergaray","documento":1,"docNumero":"70186858","celular":"956745306","correo":"saver2489@gmail.com"},{"id":9096,"crypt":"D43F7853ADCA7DBC645D242748FB4E48","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":45000.00,"montofinal":45000.00,"tasa":4.550,"tasafinal":4.550,"codigo":"SPF331420000588","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1593838800000,"isCanceledByIfi":false,"clave":"6929","inicio":1593639000505,"fin":1593640800505,"revDate":1594011600000,"enRev":true,"userCrypt":"F80CE7B582AE30E31197254B50F35038","nombre":"Christian","apellidos":"Rodriguez","documento":1,"docNumero":"43556972","celular":"994788419","correo":"crodriguezloayza@gmail.com"},{"id":9085,"crypt":"D1DA4FAAFF9C734625E38F1CFE5C2657","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":70000.00,"montofinal":80000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000580","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1594011600000,"isCanceledByIfi":false,"clave":"6595","inicio":1593207000543,"fin":1593208800543,"revDate":1594011600000,"enRev":true,"userCrypt":"E106326C376C11F4AA58E2906D77F7A1","nombre":"Giancarlo","apellidos":"Choy Miranda","documento":1,"docNumero":"42500442","celular":"957933756","correo":"giancarlo.choy@gmail.com"},{"id":9018,"crypt":"C6684D01415042603B01E90CC8C65FC8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":2,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF330420000017","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1592283600000,"isCanceledByIfi":false,"clave":"2213","inicio":1591133400083,"fin":1591135200083,"revDate":1591333200000,"enRev":true,"userCrypt":"640FEEBCD1A1D4FC94AA7192FCDC017F","nombre":"GONZALO","apellidos":"HUAMANI","documento":1,"docNumero":"43373875","celular":"992112651","correo":"axl_021@hotmail.com"},{"id":9013,"crypt":"0CBCCE82693EB0482248B57609C990C0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":25000.00,"montofinal":25000.05,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000529","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1591246800000,"isCanceledByIfi":false,"clave":"3491","inicio":1591047000773,"fin":1591048800773,"revDate":1591333200000,"enRev":true,"userCrypt":"71C3174A8F4A3FE27F152C2732E7791F","nombre":"Juan Carlos","apellidos":"Izquierdo Lino","documento":1,"docNumero":"09646791","celular":"997978324",
"correo":"jizquierdo2404@gmail.com"},{"id":8998,"crypt":"20DA82274C85065866D2CADB6A7561AB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":5000.00,"montofinal":5000.75,"tasa":5.600,"tasafinal":5.600,"codigo":"SPF331420000517","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1590642000000,"isCanceledByIfi":false,"clave":"5695","inicio":1590528600609,"fin":1590530400609,"revDate":1590728400000,"enRev":true,"userCrypt":"53E5DD0B316E3554010D605AA700CBAD","nombre":"Giancarlo","apellidos":"López Tapia","documento":1,"docNumero":"43420984","celular":"993580667","correo":"gian.lopez12@gmail.com"},{"id":8975,"crypt":"612BB9616FB9C980252D65848A2CA4B3","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":210,"tyc":true,"titular":true,"monto":50500.00,"montofinal":50000.00,"tasa":5.500,"tasafinal":5.500,"codigo":"SPF331420000498","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1590728400000,"isCanceledByIfi":false,"clave":"1462","inicio":1590183000464,"fin":1590184800464,"revDate":1590555600000,"enRev":true,"userCrypt":"2AF4CEBF720196A35FE51DAA3FB68642","nombre":"Jesus","apellidos":"Santos","documento":1,"docNumero":"41213841","celular":"987212582","correo":"jesantosm99@hotmail.com"},{"id":8914,"crypt":"28135ECA56E3461EEBA1D91BE1A3231A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":5.710,"tasafinal":5.710,"codigo":"SPF331420000456","situacion":"S","ganador":"Caja Maynas","apertura":1589432400000,"isCanceledByIfi":false,"clave":"3421","inicio":1589319000051,"fin":1589320800051,"enRev":true,"userCrypt":"ABF9CC06095F228A06CEECE5882F909B","nombre":"Amaru","apellidos":"Aranda","documento":1,"docNumero":"10326754","celular":"941856429","correo":"amaru.aranda@gmail.com"},{"id":8885,"crypt":"6FFEC901BDF6F8DFEAF5CBC4A45CC403","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":false,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":5.810,"tasafinal":5.810,"codigo":"SPF331420000434","situacion":"S","ganador":"Caja Maynas","apertura":1589173200000,"isCanceledByIfi":false,"clave":"6263","inicio":1588627800081,"fin":1588629600081,"revDate":1588827600000,"enRev":true,"userCrypt":"A0659BA5E2E26BD34F64010CD25A7359","nombre":"rene","apellidos":"poma","documento":1,"docNumero":"40840171","celular":"994746066","correo":"rene_poma@yahoo.es"},{"id":8882,"crypt":"44E30B68CFF3A354ED5AE04E707B4838","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":366,"plazofinal":366,"tyc":true,"titular":true,"monto":93000.00,"montofinal":93000.00,"tasa":6.100,"tasafinal":6.100,"codigo":"SPF331420000431","situacion":"S","ganador":"Caja Maynas","apertura":1589259600000,"isCanceledByIfi":false,"clave":"7383","inicio":1588627800727,"fin":1588629600727,"revDate":1588741200000,"enRev":true,"userCrypt":"EC6248E28983E4ED156A93B4DCFCE891","nombre":"Gerardo","apellidos":"enrique","documento":1,"docNumero":"45604782","celular":"942780147","correo":"gerardo.rivas@outlook.com.pe"},{"id":8784,"crypt":"54C76AC40C41D8A43EFC4463FA04A00A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":360,"plazofinal":360,"tyc":true,"titular":true,"monto":20000.00,"montofinal":19999.00,"tasa":5.700,"tasafinal":6.000,"codigo":"SPF331420000355","situacion":"S","ganador":"Caja Rural Raíz","apertura":1585544400000,"isCanceledByIfi":false,"clave":"8329","inicio":1585344600125,"fin":1585346400125,"revDate":1585890000000,"enRev":true,"userCrypt":"B9D63E304DB035F285C82EB25F1A9A8F","nombre":"Mónica Cristina","apellidos":"Momiy Simabukuro","documento":1,"docNumero":"43191645","celular":"999514444","correo":"mmomiy@gmail.com"},{"id":8782,"crypt":"C3A66C6BA7334FF364C3FDF266796DDD","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":540,"plazofinal":720,"tyc":true,"titular":true,"monto":10000.00,"montofinal":13000.00,"tasa":5.700,"tasafinal":5.900,"codigo":"SPF331420000353","situacion":"S","ganador":"Caja Rural Raíz","apertura":1585285200000,"isCanceledByIfi":false,"clave":"9948","inicio":1585258200669,"fin":1585260000669,"revDate":1585803600000,"enRev":true,"userCrypt":"ABC4CA7B20E66603226CD45365DDD66B","nombre":"MARIA","apellidos":"ROSSI","documento":1,"docNumero":"73373165","celular":"979723985","correo":"mariaclaudiarossi16@gmail.com"},{"id":8684,"crypt":"49BFC921E8623C90B5B23312EDD25C87","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000278","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1585112400000,"isCanceledByIfi":false,"clave":"3617","inicio":1584394200367,"fin":1584396000367,"revDate":1584766800000,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"},{"id":8665,"crypt":"0BC453624CE48BD3107AD00D2B70506A","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":366,"plazofinal":365,"tyc":true,"titular":true,"monto":90000.00,"montofinal":90000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000260","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583989200000,"isCanceledByIfi":false,"clave":"3799","inicio":1583789400605,"fin":1583791200605,"revDate":1584334800000,"enRev":true,"userCrypt":"2611CE3DFE132D1399F8E6C2F38BBCC3","nombre":"Victoria","apellidos":"Rosas Maguiña","documento":1,"docNumero":"31617960","celular":"922086861","correo":"vrosas0467@gmail.com"},{"id":8655,"crypt":"99D3946340E0E6FD9D129CF8FD1A88CB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100005.00,"tasa":5.500,"tasafinal":6.000,"codigo":"SPF331420000251","situacion":"S","ganador":"Financiera Credinka","apertura":1583470800000,"isCanceledByIfi":false,"clave":"9866","inicio":1583357400742,"fin":1583359200742,"enRev":false,"userCrypt":"FCEC2776585DDA2F66DC26EB75947CA9","nombre":"Monica Cecilia ","apellidos":"Rosas Delgado","documento":1,"docNumero":"10273767","celular":"960990787","correo":"mcrosasd@gmail.com"},{"id":8654,"crypt":"AC55A0F7192FE1683231BDCCAE31A75E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100000.00,"tasa":6.200,"tasafinal":6.400,"codigo":"SPF331420000250","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583470800000,"isCanceledByIfi":false,"clave":"3452","inicio":1583357400798,"fin":1583359200798,"enRev":true,"userCrypt":"FCEC2776585DDA2F66DC26EB75947CA9","nombre":"Monica Cecilia ","apellidos":"Rosas Delgado","documento":1,"docNumero":"10273767","celular":"960990787","correo":"mcrosasd@gmail.com"},{"id":8638,"crypt":"7B58FC47BEEA26F8F295125A0EED3DB7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":400,"plazofinal":721,"tyc":true,"titular":true,"monto":200000.00,"montofinal":190033.19,"tasa":6.200,"tasafinal":6.400,"codigo":"SPF331420000234","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583989200000,"isCanceledByIfi":false,"clave":"8625","inicio":1583184600346,"fin":1583186400346,"revDate":1585198800000,"enRev":true,"userCrypt":"8B475D7612DA82C6E6A03446B05E72F4","nombre":"Augusto Jesus","apellidos":"Bendezu Novoa","documento":1,"docNumero":"41481820","celular":"986345466","correo":"augustbend@gmail.com"},{"id":8629,"crypt":"4C881C844E0BABD979B19EE5CC472A29","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":100661.00,"montofinal":100495.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000225","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583902800000,"isCanceledByIfi":false,"clave":"8325","inicio":1582839000480,"fin":1582840800480,"revDate":1583298000000,"enRev":true,"userCrypt":"878D5F1DB2C46B329563A5F04349DB93","nombre":"Frefy Alonso","apellidos":"Ballon Medina","documento":1,"docNumero":"45577094","celular":"959306202","correo":"fredyballon@hotmail.com"},{"id":8627,"crypt":"B45864049CFC346D0FDFB8735F0D59F2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":13000.00,"montofinal":13000.00,"tasa":4.800,"tasafinal":4.800,"codigo":"SPF331420000223","situacion":"S","ganador":"Financiera Credinka","apertura":1583125200000,"isCanceledByIfi":false,"clave":"6153","inicio":1582839000015,"fin":1582840800015,"revDate":1583125200000,"enRev":true,"userCrypt":"8BCAACBE575081BCC5FB28CD52FC1D5C","nombre":"MAURA","apellidos":"RIVERA","documento":1,"docNumero":"09558293","celular":"993479448","correo":"maura.an.rivera@gmail.com"},{"id":8617,"crypt":"5A3A0647AF38B2BB51443201FA3D3E68","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":240,"plazofinal":240,"tyc":true,"titular":true,"monto":3600.00,"montofinal":3600.00,"tasa":4.800,"tasafinal":4.800,"codigo":"SPF331420000214","situacion":"S","otroNum":"46501859","ganador":"Financiera Credinka","apertura":1582866000000,"isCanceledByIfi":false,"clave":"8242","inicio":1582666200222,"fin":1582668000222,"revDate":1583211600000,"enRev":true,"userCrypt":"F5CE03EEA41B059F5EB6E3343D4D2FB8","nombre":"medaly natalia","apellidos":"torres quispe","documento":1,"docNumero":"46501859","celular":"989505168","correo":"medalynatalia@hotmail.com"},{"id":8616,"crypt":"A514ECF87A75F4ABE7EC6D34D7A2C5DC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":270,"plazofinal":270,"tyc":true,"titular":false,"monto":9000.00,"montofinal":9000.00,"tasa":5.050,"tasafinal":5.050,"codigo":"SPF331420000213","situacion":"S","otroNum":"46501859","ganador":"Financiera Credinka",
"apertura":1582866000000,"isCanceledByIfi":false,"clave":"5158","inicio":1582666200647,"fin":1582668000647,"revDate":1583211600000,"enRev":true,"userCrypt":"F5CE03EEA41B059F5EB6E3343D4D2FB8","nombre":"medaly natalia","apellidos":"torres quispe","documento":1,"docNumero":"46501859","celular":"989505168","correo":"medalynatalia@hotmail.com"},{"id":8605,"crypt":"3CBBF35A18BF341E667D4FB53F6EEFB2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":10000.00,"montofinal":10000.00,"tasa":5.700,"tasafinal":6.000,"codigo":"SPF331420000203","situacion":"S","ganador":"Caja Rural Raíz","apertura":1582693200000,"isCanceledByIfi":false,"clave":"1334","inicio":1582320600515,"fin":1582322400515,"enRev":true,"userCrypt":"6F8047C90E50883FB5A4848C74585987","nombre":"jaime","apellidos":"diestra reyes","documento":1,"docNumero":"07125533","celular":"982346150","correo":"jaime.diestrar@gmail.com"},{"id":8585,"crypt":"48B196D8CD1A841E3D26676FD922B61E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":122621.89,"montofinal":122615.79,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000184","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1582261200000,"isCanceledByIfi":false,"clave":"8951","inicio":1582147800555,"fin":1582149600555,"revDate":1582606800000,"enRev":true,"userCrypt":"09289D2A93EECAAC25488874563E8822","nombre":"Alvaro","apellidos":"Abanto","documento":1,"docNumero":"10548434","celular":"947004465","correo":"alvaroabanto@gmail.com"},{"id":8580,"crypt":"89463F1257B89B0FF46CF228C12FB884","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1081,"tyc":true,"titular":true,"monto":70000.00,"montofinal":70000.05,"tasa":6.200,"tasafinal":6.300,"codigo":"SPF331420000179","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1582606800000,"isCanceledByIfi":false,"clave":"7944","inicio":1582061400259,"fin":1582063200259,"revDate":1582606800000,"enRev":true,"userCrypt":"13443A35EE24388B31C7D72C7763A5B8","nombre":"JESSY LUCIA","apellidos":"Espinoza Sanchez","documento":1,"docNumero":"70616347","celular":"997362857","correo":"jessy1604@gmail.com"},{"id":8563,"crypt":"D7306FFBCA766597B3134C1FE6832A95","producto":1,"productoName":"DPF","moneda":1,"ubicacion":13,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":3500.00,"montofinal":3500.00,"tasa":5.300,"tasafinal":5.650,"codigo":"SPF331320000001","situacion":"S","ganador":"Financiera Credinka","apertura":1581570000000,"isCanceledByIfi":false,"clave":"3458","inicio":1581543000188,"fin":1581544800188,"revDate":1581915600000,"enRev":true,"userCrypt":"86AFA5B1AC768DD2A7CF1DEEB8BA10C1","nombre":"Iván paul","apellidos":"Iparraguirre velazco","documento":1,"docNumero":"43419926","celular":"975372236","correo":"ivanpoolcero@hotmail.com"},{"id":8560,"crypt":"96BDED56456E12B3F8530C151655ECE7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":80000.00,"montofinal":80000.00,"tasa":6.200,"tasafinal":6.300,"codigo":"SPF331420000162","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1581570000000,"isCanceledByIfi":false,"clave":"1567","inicio":1581543000764,"fin":1581544800764,"revDate":1581915600000,"enRev":true,"userCrypt":"E6F0BB9367A9B73F6DEFDD8A00035727","nombre":"Edgar Alberto","apellidos":"Farfán","documento":1,"docNumero":"40578386","celular":"998844662","correo":"efarfang@gmail.com"},{"id":8558,"crypt":"E99C67F102E1B09D1ABFA5206F756B7C","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":50000.00,"montofinal":79996.00,"tasa":3.000,"tasafinal":3.000,"codigo":"SPF331420000160","situacion":"S","ganador":"Caja Rural Raíz","apertura":1582261200000,"isCanceledByIfi":false,"clave":"1122","inicio":1581543000102,"fin":1581544800102,"revDate":1581915600000,"enRev":true,"userCrypt":"0C138BDDF7EACC14B2C442165B07223B","nombre":"HENRY IVAN","apellidos":"CONDORI ALEJO","documento":1,"docNumero":"01325355","celular":"958315508","correo":"hcondori@gmail.com"},{"id":8526,"crypt":"FB0CEB64F24CDE89D55BF06FA4C9A26F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":80000.00,"montofinal":156000.00,"tasa":6.000,"tasafinal":6.200,"codigo":"SPF331420000133","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1583730000000,"isCanceledByIfi":false,"clave":"3846","inicio":1580765400363,"fin":1580767200363,"revDate":1580965200000,"enRev":true,"userCrypt":"A52AFB5059CCD55AB7D7FCBF1A3237FA","nombre":"Edward Shied","apellidos":"Flores Valdivia","documento":1,"docNumero":"45200526","celular":"950282622","correo":"drawde0123@hotmail.com"},{"id":8519,"crypt":"C92777EF29CB76B165DD1940314ACB10","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":560,"plazofinal":560,"tyc":true,"titular":true,"monto":58000.00,"montofinal":60000.00,"tasa":6.000,"tasafinal":6.150,"codigo":"SPF331420000126","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1580446800000,"isCanceledByIfi":false,"clave":"6882","inicio":1580419800688,"fin":1580421600688,"revDate":1580792400000,"enRev":true,"userCrypt":"287F7CDBD3AB1E69BDD1329D8F21CAB0","nombre":"Yadira Elizabeth","apellidos":"Gamboa Izaguirre","documento":1,"docNumero":"48437149","celular":"989642622","correo":"yadiragamboa123@gmail.com"},{"id":8492,"crypt":"E79A08C3AA479A563E1F83D60F831F89","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331420000105","situacion":"S","ganador":"Financiera Credinka","apertura":1579755600000,"isCanceledByIfi":false,"clave":"8234","inicio":1579728600699,"fin":1579730400699,"enRev":false,"userCrypt":"F80CE7B582AE30E31197254B50F35038","nombre":"Christian","apellidos":"Rodriguez","documento":1,"docNumero":"43556972","celular":"994788419","correo":"crodriguezloayza@gmail.com"},{"id":8455,"crypt":"CF94853D4E9666FF4A535F0A5B51A30F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":60000.00,"montofinal":60000.00,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000074","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579323600000,"isCanceledByIfi":false,"clave":"8197","inicio":1579210200155,"fin":1579212000155,"enRev":false,"userCrypt":"1A97A49BB1E75BE2129317CEDB706454","nombre":"Sandro","apellidos":"Del Rosario","documento":1,"docNumero":"41080693","celular":"963935033","correo":"sdelros@outlook.com"},{"id":8454,"crypt":"9C8A095A27F6B2A3129A810CA7B7DED7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":30000.00,"montofinal":30000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000073","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579496400000,"isCanceledByIfi":false,"clave":"6848","inicio":1579210200955,"fin":1579212000955,"enRev":false,"userCrypt":"70EBCD2B98BAB4B29D43947203B0045B","nombre":"Mario Efrain ","apellidos":"Sarango Arias","documento":1,"docNumero":"07698942","celular":"998509256","correo":"esarangoa@hotmail.com"},{"id":8449,"crypt":"B538B8AA554A306E2A51FEA3D4E0EB2D","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":94500.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331420000069","situacion":"S","ganador":"Financiera Credinka","apertura":1579496400000,"isCanceledByIfi":false,"clave":"8481","inicio":1579210200966,"fin":1579212000966,"enRev":false,"userCrypt":"1E5CDB998AC447B71D19F56D0724A097","nombre":"cesar","apellidos":"rojas soto","documento":1,"docNumero":"40959580","celular":"949173413","correo":"cesars961@hotmail.com"},{"id":8435,"crypt":"AE738763EE75CE8EB4E62A49C0C60453","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":720,"plazofinal":721,"tyc":true,"titular":true,"monto":170000.00,"montofinal":180001.00,"tasa":6.250,"tasafinal":6.500,"codigo":"SPF331420000058","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579496400000,"isCanceledByIfi":false,"clave":"5946","inicio":1579037400718,"fin":1579039200718,"revDate":1579755600000,"enRev":true,"userCrypt":"CE2B1F376405D24FEE7731DBD6EB6DC7","nombre":"Luis Alberto","apellidos":"Ortiz Flores ","documento":1,"docNumero":"07485136","celular":"992716620","correo":"lual20005@hotmail.com"},{"id":8431,"crypt":"7FF05473012EAB46E587D5888D1E9902","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":6.000,"tasafinal":5.800,"codigo":"SPF331420000055","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1580792400000,"isCanceledByIfi":false,"clave":"6781","inicio":1579037400014,"fin":1579039200014,"revDate":1580446800000,"enRev":true,"userCrypt":"686879B6C2BC69E03A6EC41E998936EC","nombre":"Héctor Raul","apellidos":"Alva Infantes","documento":1,"docNumero":"43289051","celular":"996175647","correo":"hrai_56@hotmail.com"},{"id":8429,"crypt":"AE7687DA7501762AA6D2CF3B111C19D5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":24998.80,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000053","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"5359","inicio":1578951000864,"fin":1578952800864,"enRev":true,"userCrypt":"AA326561869452804D108EE41E18F903","nombre":"julio","apellidos":"guzman","documento":1,"docNumero":"19809826","celular":"977546069","correo":"remigiogc@hotmail.com"},{"id":8421,"crypt":"F3C6C0861363D57B5E95086A02AA16A3","producto":1,
"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":270,"plazofinal":270,"tyc":true,"titular":true,"monto":70000.00,"montofinal":70000.00,"tasa":5.800,"tasafinal":5.800,"codigo":"SPF331420000046","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"6755","inicio":1578951000596,"fin":1578952800596,"revDate":1579150800000,"enRev":true,"userCrypt":"D7493B074E18D23D58D23B64845A4740","nombre":"Rolando","apellidos":"Yañez","documento":1,"docNumero":"45162848","celular":"953951600","correo":"fyanezcantafio@gmail.com"},{"id":8414,"crypt":"90C2518A8D2D174F8551E92EAC7CC0DF","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":100600.00,"montofinal":100050.00,"tasa":5.900,"tasafinal":6.600,"codigo":"SPF331420000039","situacion":"S","ganador":"Financiera Credinka","apertura":1579064400000,"isCanceledByIfi":false,"clave":"1526","inicio":1578691800321,"fin":1578693600321,"enRev":true,"userCrypt":"4A61222EF9D36B37909D0150D5199BDF","nombre":"Rolando","apellidos":"Ruiz Romero","documento":1,"docNumero":"09221415","celular":"986667724","correo":"rolanruro@outlook.com"},{"id":8408,"crypt":"EEDA9ED12D38DF847704143E1CC9782C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":3000.00,"montofinal":5000.00,"tasa":5.550,"tasafinal":5.750,"codigo":"SPF331420000033","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"4295","inicio":1578605400743,"fin":1578607200743,"revDate":1579496400000,"enRev":true,"userCrypt":"14D81DF0D80B2CA76FC2D279702EC754","nombre":"MIKE IVAN","apellidos":"PLASENCIA CHAVEZ","documento":1,"docNumero":"40375022","celular":"976347010","correo":"mikvan03@hotmail.com"},{"id":8404,"crypt":"6941F6326BA223C254E72F406D6AE8B1","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":95000.00,"montofinal":95000.25,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331420000029","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1579064400000,"isCanceledByIfi":false,"clave":"2575","inicio":1578519000339,"fin":1578520800339,"enRev":true,"userCrypt":"A98A0F909E3C5BE0C1C16A185A6FD138","nombre":"GUSTAVO ","apellidos":"ILLESCA DHAGA DEL CASTILLO ","documento":1,"docNumero":"07204426","celular":"989044075","correo":"gustavoillesca@yahoo.es"},{"id":8393,"crypt":"CCC77C5CCA01D47761C1DF59C012A9B7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":300000.00,"montofinal":292732.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331420000021","situacion":"S","ganador":"Financiera Credinka","apertura":1581051600000,"isCanceledByIfi":false,"clave":"7143","inicio":1578346200800,"fin":1578348000800,"revDate":1580878800000,"enRev":true,"userCrypt":"0E38A6A8DE903AD95A76647B3444A2F3","nombre":"monica","apellidos":"obando paredes","documento":1,"docNumero":"08234635","celular":"992780139","correo":"monicaobando@hotmail.com"},{"id":8376,"crypt":"B4A63F635A9280E108C3E808111D9F31","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":39000.00,"montofinal":39000.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331420000004","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578114000000,"isCanceledByIfi":false,"clave":"2622","inicio":1578000600778,"fin":1578002400778,"revDate":1578459600000,"enRev":true,"userCrypt":"13E82C33F20AA404C90582BE6FDB743B","nombre":"Alejandro","apellidos":"García","documento":1,"docNumero":"45085284","celular":"947589548","correo":"alejandro.g.j88@gmail.com"},{"id":8375,"crypt":"59724CE246269AC355FB49F93535CE0C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":7000.00,"montofinal":7005.00,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331420000003","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578373200000,"isCanceledByIfi":false,"clave":"1118","inicio":1578000600179,"fin":1578002400179,"revDate":1578459600000,"enRev":true,"userCrypt":"0C0BFE196974FDA722BFACB18B164747","nombre":"Cecilia ","apellidos":"Cordova","documento":1,"docNumero":"40264817","celular":"994672001","correo":"cpcordova24@yahoo.es"},{"id":8371,"crypt":"3E7520B928616B22763C0F23EA3A7D1B","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":182,"plazofinal":182,"tyc":true,"titular":true,"monto":100001.00,"montofinal":100001.00,"tasa":5.000,"tasafinal":5.500,"codigo":"SPF331419002440","situacion":"S","ganador":"Financiera Credinka","apertura":1577682000000,"isCanceledByIfi":false,"clave":"2422","inicio":1577827800943,"fin":1577829600943,"enRev":false,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":8369,"crypt":"755F0943A87974255950BFF657F165DC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":6000.00,"montofinal":5999.75,"tasa":5.300,"tasafinal":5.300,"codigo":"SPF331419002438","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578027600000,"isCanceledByIfi":false,"clave":"9958","inicio":1577741400952,"fin":1577743200952,"revDate":1578373200000,"enRev":true,"userCrypt":"0365281D07B64A49AEAB0EA09161A793","nombre":"Elizabeth","apellidos":"Hinostroza","documento":1,"docNumero":"40178689","celular":"992296390","correo":"ely242@gmail.com"},{"id":8367,"crypt":"EC0F23296D47CDD17239FA49CC9191A8","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":361,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.200,"tasafinal":6.200,"codigo":"SPF331419002437","situacion":"S","ganador":"Financiera Credinka","apertura":1578286800000,"isCanceledByIfi":false,"clave":"4825","inicio":1577741400048,"fin":1577743200048,"enRev":false,"userCrypt":"4E1A2B4B54FCD76D63442D0B179041D0","nombre":"Paul Eladio","apellidos":"Luque Ccama","documento":1,"docNumero":"41357130","celular":"989959871","correo":"udtccss@gmail.com"},{"id":8366,"crypt":"DA7D2B43193DFAAB72E79D8C0791FFC2","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":30000.00,"montofinal":30003.50,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002436","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578632400000,"isCanceledByIfi":false,"clave":"4783","inicio":1577741400138,"fin":1577743200138,"revDate":1578373200000,"enRev":true,"userCrypt":"4CB2ABFFD000088DDF6395E4EF141A6A","nombre":"Britt ","apellidos":"Barrios","documento":1,"docNumero":"45813954","celular":"924215329","correo":"brialeba@gmail.com"},{"id":8359,"crypt":"5BBFF35EEC57850129A363839D28EDC7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":3000.00,"montofinal":5000.00,"tasa":5.000,"tasafinal":5.300,"codigo":"SPF331119000006","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1578027600000,"isCanceledByIfi":false,"clave":"5284","inicio":1577741400344,"fin":1577743200344,"revDate":1578373200000,"enRev":true,"userCrypt":"A564499127C0C52C47E52BC23D168FCB","nombre":"Nilton","apellidos":"Moya Chavez","documento":1,"docNumero":"42942092","celular":"945910544","correo":"niltonmch@hotmail.com"},{"id":8354,"crypt":"3F5B2EF8565ABFB7A2E9F7A42336EB78","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":100000.00,"montofinal":100000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002426","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577509200000,"isCanceledByIfi":false,"clave":"3779","inicio":1577482200151,"fin":1577484000151,"enRev":false,"userCrypt":"CF4B47AA035C70B3F471AC638211FABB","nombre":"Martin","apellidos":"Sosa quintana","documento":1,"docNumero":"16611792","celular":"986771062","correo":"martin_21450@hotmail.com"},{"id":8352,"crypt":"6013AFD0A484F63140A76D6CDF1871E7","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":5000.00,"montofinal":5000.05,"tasa":5.750,"tasafinal":5.750,"codigo":"SPF331419002424","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577509200000,"isCanceledByIfi":false,"clave":"2313","inicio":1577482200795,"fin":1577484000795,"enRev":false,"userCrypt":"3553341746A598BEC2477E252E6C8ACE","nombre":"Norley ","apellidos":"Torres Cárcamo ","documento":1,"docNumero":"10300223","celular":"999121595","correo":"norleytc@hotmail.com"},{"id":8333,"crypt":"C190604E697712423B92FAA5071C1EF5","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":370,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":55000.05,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002410","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577682000000,"isCanceledByIfi":false,"clave":"1269","inicio":1577136600884,"fin":1577138400884,"revDate":1577941200000,"enRev":true,"userCrypt":"3BD4549F6CDC8230F3A130B817325AD1","nombre":"Monica ","apellidos":"Vasquez ","documento":1,"docNumero":"70031342","celular":"982536169","correo":"monikvase@gmail.com"},{"id":8325,"crypt":"D655B07DEB8BBD2B90826E3315626939","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":721,"tyc":true,"titular":true,"monto":57000.00,"montofinal":56999.00,"tasa":5.900,"tasafinal":6.500,"codigo":"SPF331419002403","situacion":"S","ganador":"Financiera Credinka","apertura":1577682000000,"isCanceledByIfi":false,"clave":"8328","inicio":1576704600393,"fin":1576706400393,"revDate":1577768400000,"enRev":true,"userCrypt":"155D0E616A72CA2808863A947F1CA93B","nombre":"Lesmes",
"apellidos":"Paredes","documento":1,"docNumero":"29294015","celular":"933537891","correo":"ap77461@gmail.com"},{"id":8314,"crypt":"FFFBFFCD4D38D6B500A48DA351BAF49E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50247.50,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002395","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576645200000,"isCanceledByIfi":false,"clave":"2123","inicio":1576618200807,"fin":1576620000807,"enRev":true,"userCrypt":"45E9F593656E2797E86B47B2B6FE2211","nombre":"Vanessa","apellidos":"Honorio","documento":1,"docNumero":"44360263","celular":"980441482","correo":"vanehono@gmail.com"},{"id":8301,"crypt":"8284284C5A56BEEA4F1840FD00F8A147","producto":1,"productoName":"DPF","moneda":1,"ubicacion":28,"plazo":366,"plazofinal":366,"tyc":true,"titular":true,"monto":130000.00,"montofinal":120000.00,"tasa":6.300,"tasafinal":6.350,"codigo":"SPF331119000005","situacion":"S","ganador":"Financiera Credinka","apertura":1577768400000,"isCanceledByIfi":false,"clave":"2639","inicio":1576531800599,"fin":1576533600599,"enRev":true,"userCrypt":"32B13503AAA6000177BC9AB3A46FD164","nombre":"Hubert","apellidos":"Yucra Ayala","documento":1,"docNumero":"20073898","celular":"941947795","correo":"luisleiconstruct@gmail.com"},{"id":8291,"crypt":"ACCC5773001C8FE533A97564DF3B8176","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":1080,"plazofinal":1080,"tyc":true,"titular":true,"monto":82000.00,"montofinal":24398.80,"tasa":6.100,"tasafinal":6.000,"codigo":"SPF331419002381","situacion":"S","ganador":"Caja Rural Raíz","apertura":1576558800000,"isCanceledByIfi":false,"clave":"3171","inicio":1576272600449,"fin":1576274400449,"enRev":true,"userCrypt":"928FD6688894DC084C242FEFF9291356","nombre":"JOSE ROLANDO","apellidos":"MARTINEZ SERRA","documento":1,"docNumero":"06059657","celular":"990005884","correo":"j.r.ms20@hotmail.com"},{"id":8290,"crypt":"7754FA9DD8BAC168DCE52319C9C339CC","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002380","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576558800000,"isCanceledByIfi":false,"clave":"9381","inicio":1576272600162,"fin":1576274400162,"revDate":1577768400000,"enRev":true,"userCrypt":"B54BE043AF17EADD7DFA92B43A72C0B3","nombre":"Gustavo Adolfo","apellidos":"Lozano Mendez","documento":1,"docNumero":"46900494","celular":"935819290","correo":"gadolfolozano@gmail.com"},{"id":8286,"crypt":"4231629CB1310D6984F163AB23087F30","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":40000.00,"montofinal":40000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002376","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576213200000,"isCanceledByIfi":false,"clave":"4937","inicio":1576186200644,"fin":1576188000644,"enRev":true,"userCrypt":"BDB7A6CE78E7F6AC42D512CD3CFCAC24","nombre":"Sandra ","apellidos":"Ramírez Checnes","documento":1,"docNumero":"41163665","celular":"997122115","correo":"sache22@gmail.com"},{"id":8283,"crypt":"F13BB5C74B6454D64232C139C48C3B08","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":200000.00,"montofinal":355782.25,"tasa":6.250,"tasafinal":6.250,"codigo":"SPF331419002373","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576818000000,"isCanceledByIfi":false,"clave":"5351","inicio":1576186200623,"fin":1576188000623,"revDate":1576645200000,"enRev":true,"userCrypt":"E5C326798DAC2D783AC67F8873E84D7A","nombre":"Rodrigo Eugenio","apellidos":"Perez Roncagliolo","documento":1,"docNumero":"46699133","celular":"981816332","correo":"rodrigo_2401@hotmail.com"},{"id":8279,"crypt":"2263230A428B2022F3504E09F212A8AB","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":10000.00,"montofinal":10000.00,"tasa":3.000,"tasafinal":3.000,"codigo":"SPF331419002369","situacion":"S","ganador":"Caja Rural Raíz","apertura":1576472400000,"isCanceledByIfi":false,"clave":"8345","inicio":1576186200356,"fin":1576188000356,"revDate":1576558800000,"enRev":true,"userCrypt":"BDB7A6CE78E7F6AC42D512CD3CFCAC24","nombre":"Sandra ","apellidos":"Ramírez Checnes","documento":1,"docNumero":"41163665","celular":"997122115","correo":"sache22@gmail.com"},{"id":8275,"crypt":"2E8B3E9CE876E7E538F479A058C20D4C","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":190000.00,"montofinal":200000.00,"tasa":6.300,"tasafinal":6.300,"codigo":"SPF331419002366","situacion":"S","ganador":"Financiera Credinka","apertura":1578286800000,"isCanceledByIfi":false,"clave":"2265","inicio":1576186200876,"fin":1576188000876,"revDate":1577336400000,"enRev":true,"userCrypt":"508B669678F2F895D357C46303B8C6FE","nombre":"Fernando","apellidos":"Villaran Ortiz","documento":1,"docNumero":"40056010","celular":"955934779","correo":"fevo12@hotmail.com"},{"id":8271,"crypt":"9BCD360404D1C0013B61CFE735FA5E95","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":33000.00,"montofinal":16000.00,"tasa":5.800,"tasafinal":5.700,"codigo":"SPF331419002363","situacion":"S","ganador":"Caja Rural Raíz","apertura":1577077200000,"isCanceledByIfi":false,"clave":"2489","inicio":1576186200096,"fin":1576188000096,"revDate":1576558800000,"enRev":true,"userCrypt":"BCD8310643D7E2AD8898941EA4F4CD46","nombre":"Carmen ","apellidos":"Valladares","documento":1,"docNumero":"07965403","celular":"987188719","correo":"camuchav@yahoo.com"},{"id":8262,"crypt":"DD57B213170598E7C4328C106E8D2079","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":25000.00,"montofinal":25000.25,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002356","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576558800000,"isCanceledByIfi":false,"clave":"7678","inicio":1576186200299,"fin":1576188000299,"enRev":true,"userCrypt":"9E9AE12EAD61C349440F15F7B3D11B86","nombre":"Freddy Daniel","apellidos":"Cordova Polar","documento":1,"docNumero":"08034725","celular":"998571293","correo":"fcorpo_25@hotmail.com"},{"id":8254,"crypt":"11021751126E7E0D5440EC4622AA769F","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"otroDoc":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":false,"monto":50000.00,"montofinal":29998.55,"tasa":6.150,"tasafinal":6.000,"codigo":"SPF331419002351","situacion":"S","otroNum":"07800633","ganador":"Financiera ProEmpresa","apertura":1578286800000,"isCanceledByIfi":false,"clave":"3639","inicio":1576186200035,"fin":1576188000035,"revDate":1578632400000,"enRev":true,"userCrypt":"4C897198E3520D1704E8A25E5D2EF88A","nombre":"Pablo","apellidos":"león Prado Dulanto","documento":1,"docNumero":"07800633","celular":"996029571","correo":"pabloleonpradodulanto@gmail.com"},{"id":8253,"crypt":"F8FA97F2F192E798158813FBFCF87A96","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":181,"plazofinal":181,"tyc":true,"titular":true,"monto":3000.00,"montofinal":3000.00,"tasa":5.000,"tasafinal":5.000,"codigo":"SPF331419002350","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576472400000,"isCanceledByIfi":false,"clave":"4152","inicio":1576186200347,"fin":1576188000347,"enRev":true,"userCrypt":"8FAE5DFFAA1A2825E5F0B36CD3DC0531","nombre":"ANLLILA Shirley ","apellidos":"Avila barrientos","documento":1,"docNumero":"47569183","celular":"964531313","correo":"shirley_alizee@hotmail.com"},{"id":8233,"crypt":"81FD9D417ACD191F14185E91E05B5000","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":390,"tyc":true,"titular":true,"monto":50000.00,"montofinal":60000.00,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002332","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1577163600000,"isCanceledByIfi":false,"clave":"9354","inicio":1575927000974,"fin":1575928800974,"revDate":1576126800000,"enRev":true,"userCrypt":"608C1BAE555A307F5922AD2FEE9F6B9E","nombre":"Sergio","apellidos":"Palomino","documento":1,"docNumero":"70006099","celular":"932804557","correo":"sergiopr30@gmail.com"},{"id":8225,"crypt":"2A4F0FD9D782B21F5B76E6885B09A234","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":40000.00,"montofinal":39998.05,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002325","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1576213200000,"isCanceledByIfi":false,"clave":"9578","inicio":1575581400280,"fin":1575583200280,"revDate":1576126800000,"enRev":true,"userCrypt":"00D2E689CEA748019161BF4614431FB1","nombre":"abner merlid","apellidos":"zarate","documento":1,"docNumero":"00255936","celular":"957920508","correo":"abnerzar777@hotmail.com"},{"id":8219,"crypt":"E60CD52D6CBC07D3BB2783583173B88E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":20000.00,"montofinal":20000.00,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002319","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1575867600000,"isCanceledByIfi":false,"clave":"1391","inicio":1575581400284,"fin":1575583200284,"enRev":true,"userCrypt":"20313F187A797D074EE00600487B9E2B","nombre":"MIGUEL","apellidos":"OLAZA","documento":1,"docNumero":"10181232","celular":"941717620","correo":"altavision8@gmail.com"},{"id":8215,"crypt":"03DE6C2AB155C398354A190E0164991E","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":361,"tyc":true,"titular":true,"monto":30000.00,"montofinal":30998.50,"tasa":6.000,"tasafinal":6.000,"codigo":"SPF331419002315","situacion":"S","ganador":"Financiera ProEmpresa",
"apertura":1576472400000,"isCanceledByIfi":false,"clave":"5228","inicio":1575495000165,"fin":1575496800165,"revDate":1575867600000,"enRev":true,"userCrypt":"5DCD785AE7FFCB040EE2B295F8E722F2","nombre":"Emma Alejandrina","apellidos":"Koc Gonzales","documento":1,"docNumero":"06617371","celular":"962259284","correo":"emmykoc@gmail.com"},{"id":8186,"crypt":"29B0888BC55AA07A1B27BB63C5FF0558","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":100000.00,"montofinal":150000.00,"tasa":6.300,"tasafinal":6.500,"codigo":"SPF331419002290","situacion":"S","ganador":"Caja Rural Raíz","apertura":1575262800000,"isCanceledByIfi":false,"clave":"2373","inicio":1574803800951,"fin":1574805600951,"revDate":1575262800000,"enRev":false,"userCrypt":"EFE0090B3164FD8BF439F026C7E74230","nombre":"Jorge Walter","apellidos":"De La Cruz Macedo","documento":1,"docNumero":"41036885","celular":"997380852","correo":"jorgedelacruzm@gmail.com"},{"id":8181,"crypt":"8D0DEAB73049D391FDAD7D4F3962B4F0","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":360,"tyc":true,"titular":true,"monto":34000.00,"montofinal":34114.66,"tasa":6.100,"codigo":"SPF331419002285","situacion":"S","ganador":"Caja Rural Raíz","apertura":1574744400000,"isCanceledByIfi":false,"clave":"3396","inicio":1574458200114,"fin":1574460000114,"revDate":1574830800000,"enRev":true,"userCrypt":"34D5BCC03B04FE8C1A4A8A192B9C68E2","nombre":"CINTYA","apellidos":"ESPINOZA","documento":1,"docNumero":"10476412","celular":"999222196","correo":"cintyaes@hotmail.com"},{"id":8163,"crypt":"8849E472568361EB144926BC1A9FEBE2","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":365,"plazofinal":180,"tyc":true,"titular":true,"monto":5000.00,"montofinal":2512.90,"tasa":3.000,"tasafinal":0.700,"codigo":"SPF331419002269","situacion":"S","ganador":"Caja Rural Raíz","apertura":1574830800000,"isCanceledByIfi":false,"clave":"8923","inicio":1574199000100,"fin":1574200800100,"revDate":1575003600000,"enRev":true,"userCrypt":"8C5B5313EAFBD9A6262C6FB356209760","nombre":"María de Fátima ","apellidos":"Andrade Ramos ","documento":1,"docNumero":"07198529","celular":"956903562","correo":"marifa505@gmail.com"},{"id":8150,"crypt":"A4646471B0BEBE36D8CAD83CA072A2E5","producto":1,"productoName":"DPF","moneda":2,"ubicacion":1,"plazo":730,"plazofinal":720,"tyc":true,"titular":true,"monto":13500.00,"montofinal":27800.00,"tasa":1.450,"tasafinal":3.000,"codigo":"SPF331419002257","situacion":"S","ganador":"Caja Rural Raíz","apertura":1577941200000,"isCanceledByIfi":false,"clave":"1267","inicio":1574199000740,"fin":1574200800740,"revDate":1574658000000,"enRev":false,"userCrypt":"F51FFFDF7309B59D8799F7BCCE467780","nombre":"Ower","apellidos":"Cabanillas Pezo","documento":1,"docNumero":"40422159","celular":"993738709","correo":"ocabanillasp@pucp.pe"},{"id":8141,"crypt":"BA2179FA6A66DD9AC5D6027BBC7D11AB","producto":1,"productoName":"DPF","moneda":1,"ubicacion":1,"plazo":365,"plazofinal":365,"tyc":true,"titular":true,"monto":50000.00,"montofinal":50000.00,"tasa":6.150,"tasafinal":6.150,"codigo":"SPF331419002250","situacion":"S","ganador":"Financiera ProEmpresa","apertura":1574744400000,"isCanceledByIfi":false,"clave":"9633","inicio":1574112600887,"fin":1574114400887,"revDate":1574830800000,"enRev":true,"userCrypt":"29570B1693C6A29747511993CE53C19A","nombre":"oscar","apellidos":"huaman choque","documento":1,"docNumero":"42360824","celular":"995208747","correo":"oscarin200_@hotmail.com"}]


const changeOrden = () => {
  orden === "asc" ? setOrden("desc") : setOrden("asc")
}

const operacionesOrder = 

orden === 'asc' && fechaSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.fecha_creacion < o2.fecha_creacion){
    return -1;
  } else if (o1.fecha_creacion > o2.fecha_creacion) {
    return 1;
  } else {
    return 0;
  }
})
: orden === 'desc' && fechaSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.fecha_creacion > o2.fecha_creacion){
    return -1;
  } else if (o1.fecha_creacion < o2.fecha_creacion) {
    return 1;
  } else {
    return 0;
  }
}) 
:
orden === 'asc' && montoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.monto_nominal < o2.monto_nominal){
    return -1;
  } else if (o1.monto_nominal > o2.monto_nominal) {
    return 1;
  } else {
    return 0;
  }
})
: orden === 'desc' && montoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.monto_nominal > o2.monto_nominal){
    return -1;
  } else if (o1.monto_nominal < o2.monto_nominal) {
    return 1;
  } else {
    return 0;
  }
}) 
: orden === 'asc' && plazoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.plazo_nominal < o2.plazo_nominal){
    return -1;
  } else if (o1.plazo_nominal > o2.plazo_nominal) {
    return 1;
  } else {
    return 0;
  }
})
: orden === 'desc' && plazoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.plazo_nominal > o2.plazo_nominal){
    return -1;
  } else if (o1.plazo_nominal < o2.plazo_nominal) {
    return 1;
  } else {
    return 0;
  }
}) 
:
orden === 'asc' && numdocSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc){
    return -1;
  } else if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc) {
    return 1;
  } else {
    return 0;
  }
})
: orden === 'desc' && numdocSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.usuario_inversion.numdoc > o2.usuario_inversion.numdoc){
    return -1;
  } else if (o1.usuario_inversion.numdoc < o2.usuario_inversion.numdoc) {
    return 1;
  } else {
    return 0;
  }
}) 
:orden === 'asc' && codigoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.codigo < o2.codigo){
    return -1;
  } else if (o1.codigo > o2.codigo) {
    return 1;
  } else {
    return 0;
  }
})
: orden === 'desc' && codigoSort === true ?
operaciones.sort((o1, o2)=>{
  if (o1.codigo > o2.codigo){
    return -1;
  } else if (o1.codigo < o2.codigo) {
    return 1;
  } else {
    return 0;
  }
}) 

: operaciones;

// console.log(operacionesOrder)

  const dataFacturadas = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(true), changeOrden()}}>Código <VscArrowSmallUp style={orden === "asc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && codigoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setFechaSort(false), setMontoSort(true), changeOrden()}}>Monto <VscArrowSmallUp style={orden === "asc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && montoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'monto',
        sort: 'asc',
        width: 200,
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setNumdocSort(false), setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(true), changeOrden()}}>Plazo <VscArrowSmallUp style={orden === "asc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && plazoSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setCodigoSort(false), setNumdocSort(false), setPlazoSort(false), setMontoSort(false), setFechaSort(true), changeOrden()}}>Fecha de registro <VscArrowSmallUp style={orden === "asc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && fechaSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
        field: 'registro',
        sort: 'asc',
        width: 150
      },
      {
        label: <div className="col-lg-12" style={{cursor: 'pointer'}} onClick={()=>{setFechaSort(false), setMontoSort(false), setCodigoSort(false), setPlazoSort(false), setNumdocSort(true), changeOrden()}}>Número de documento <VscArrowSmallUp style={orden === "asc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/><VscArrowSmallDown style={orden === "desc" && numdocSort === true ? {width: '20px', cursor: 'pointer'} : {width: '20px', cursor: 'pointer', color: 'grey'}}/></div>,
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
    rows: operacionesOrder.map((item, i) => {

      return {          
          id: item.id,
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto_nominal)}`,
          plazo: `${item.plazo_nominal} días`,          
          registro: item.fecha_creacion
          // moment(item.inicio).format('DD/MM/YYYY')
          ,
          docNumero: item.titular === false ? `${item.usuario_inversion.numdoc} a nombre de: ${item.numdoc_titular}` : item.usuario_inversion.numdoc,
          celular: item.usuario_inversion.celular,
          clickEvent: (item) => {setSelectedRow(item.id), setDetalleFila(true)}
      }
    })
  };

  

  

    return (
      <React.Fragment>
        <div  style={{backgroundColor: 'white', padding: '0px'}}>
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', marginBottom: '10px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Simula tu Depósito a Plazo</span></div>
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
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Valor del Depósito:</span></div>
            <div>
            <span type="text" style={{color: '#e01e2b'}}>{moneda}</span>
              <input type="text" id="balance" onChange={handleOnchange} prefix="S/" value={monto.toLocaleString('en')} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '30%'}} />
            </div>
            <div>
            {/* <Slider
                                    min={1000}
                                    max={250000}
                                    step={1000}
                                    value={monto}
                                    onChange={handleMonto}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '50%', marginLeft: '110px'}}
                                  /> */}
              {/* <input type="range" min="2000" max="800000" value="40000" step="2000" class="slider" id="balanceRange"  /> */}
            </div>
          </div>
          <div className="form-item col-lg-4">
            <div className="label"><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Plazo:</span></div>
            <div>
            <input type="text" id="days" name="days" onChange={handleOnchangePlazo} value={plazo} style={{border: '0 none white', color: '#e01e2b', textAlign: 'center', width: '15%'}}/>
            <span type="text" style={{color: '#e01e2b'}}></span>
            </div>
            <div>
            {/* <Slider
                                    min={0}
                                    max={1460}
                                    step={30}
                                    value={plazo}
                                    onChange={handlePlazo}
                                    trackStyle={{ backgroundColor: '#e01e2b' }}
                                    handleStyle={{ borderColor: '#e01e2b' }}
                                    style={{width: '50%', marginLeft: '110px'}}
                                  /> */}
              {/* <input type="range" min="30" max="1800" value="360" step="30" class="slider" id="daysRange" /> */}
            </div>
          </div>
                    {/* <input type="hidden" id="exclude" name="exclude" value="all" /> */}
          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
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


          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
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


          
          <div className="form-item col-lg-4" style={{marginTop: '20px'}}>
            <div className="label" style={{marginBottom: '10px'}}><span className="form-label" style={{color: 'black', fontSize: '1rem', fontWeight: '700'}}>Tipo de institución:</span></div>
            <div id="geo-container" className="select-container select-input action-select">
              <div className="dropdown bootstrap-select required"><select name="geo" id="geo" style={{borderColor: 'white', color: '#e01e2b'}} className="selectpicker required" data-container="body" title="Selecciona"><option className="bs-title-option" value="LI">Todas</option>
                              
                <option value="LI">Bancos, Cajas y Financieras</option>
                              
                <option value="AM">Cooperativas</option>
                              
                <option value="AN">Solo Bancos</option>
                              
                
                            </select>
                            {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="geo" title="Lima y Callao"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Lima y Callao</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div> */}
                            </div>
            </div>
          </div>
          
                    
         {pernat ? <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }} onClick={() => {
                setPernat(false);
                }}>Simular</button>
          :
          <div id="compara" className="form-item col-lg-12" style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
            <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }} onClick={() => getSimulacion(monto, monedaenv, grupo, plazo, pagointeres, ubicacion)}>Simular</button>
          </div>}
          
          
        </div>  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
            </form>
        </div>
    </div>
</div>


<div style={{padding: '30px'}}>
<MDBDataTable
sortable={false}
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






{/* <input type="range" min="500" max="1000000" step="500" color={{color: 'red'}} style={{backgroundColor: 'red', color: 'red'}}/> */}




 
      

</React.Fragment>
    )
}


export default Index;