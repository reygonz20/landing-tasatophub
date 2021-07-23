import React, {useState, useContext, useEffect} from 'react'
import {ParallaxHeroStyle1} from '../../sofbox';
import Formulario from "../../landing-page1/login/formulario"
import axios from 'axios'
import Link from 'next/link'
import Spinner from 'react-bootstrap/Spinner'

import Url from '../../url'

import Router from 'next/router';

import { useRouter } from 'next/router';

import PernatContext from '../../../context/user/PernatContext' 


const Seleccion = ({mobile, pernat}) => {
    const {usuario} = useContext(PernatContext)

    const pantallaSeleccion = true;

    const [esCliente, setEsCliente] = useState(false);
    const [resultados, setResultados] = useState(false);
    const [producto, setProducto] = useState([])
    const titularEnv = true;
    const numdocTitularEnv = "002038502";
    const codigoEvn = "20210630-DPFP00001";
    const ipCreacionEnv = "192.168.0.15";
    const situacionEnv = 1;
    const idTipoDocEnv = 1;
    const idCiudadEnv = 1;
    const tipoProductoEnv = "DPF"


    const cambioEsCliente = (bool) => {
        setEsCliente(bool)
    } 
    
    const getProducto = async (id) => {

        let userInfo = { id: id }
    
        let res = await axios.post(`${Url}/simulacionid`, userInfo)
        setProducto(res.data.data)
    }

//Recuperar los paraemtros enviados desde el componente simulador del home
const router = useRouter();
const { query: { pid, pmonto, pplazo } } = router;
// console.log('PAgina 2', pid);

// llamar la funcion getSimulacion enviandole los parametros para tener respuesta
useEffect(() => {
  getProducto(pid)

  

  setTimeout( () => {
    //   console.log(producto)
    setResultados(true);
}, 5000);

}, []);

const regPro = producto[0];

const registrarInversion = async (montoNom, plazoNom, montoReal, titular, numdocTitular, codigo, tasaNom, usuarioCreacion, ipCreacion, idUsuario, idProducto, idMoneda, idSituacion, idProveedor, idTipoDoc, idCiudad, tipoProducto) => {
    let userInfo = { monto_nominal: montoNom, plazo_nominal: plazoNom, monto_real: montoReal, titular: titular, numdoc_titular: numdocTitular, codigo: codigo, tasa_nominal: tasaNom, usuario_creacion: usuarioCreacion, ip_creacion: ipCreacion, id_usuario: idUsuario, id_producto: idProducto, id_moneda: idMoneda, id_situacion: idSituacion, id_proveedor: idProveedor, id_tipo_documento: idTipoDoc, id_ciudad: idCiudad, tipo_producto: tipoProducto}
    
    let res = await axios.post(`${Url}/inversion`, userInfo)
   console.log(res.data)

}


const product = producto.map((item) => {
    return (
<React.Fragment>
                                <div style={pernat === false ? {backgroundColor: 'white', padding: '30px', width: '250px', margin: 'auto', marginTop: '50px', marginBottom: '50px'} : {backgroundColor: 'white', padding: '30px', width: '250px', margin: 'auto', marginTop: '50px', marginBottom: '50px'}}>
                                <img src="/assets/images/financieras/financiera02.png"></img>
                                </div>
                                <div>
                                <div className="row" style={mobile === true ? {width: '95%', margin: 'auto'} : {width: '95%', margin: 'auto'}}>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', borderTopLeftRadius: '10px', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Producto:
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', borderTopRightRadius: '0px', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', borderTopRightRadius: '10px', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {item.id}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Tasa de interés (TREA):
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {`${item.tea}%`}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Monto:
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {`S/ ${Intl.NumberFormat("en-US").format(pmonto)}`}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Plazo:
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {`${pplazo} días`}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Ganancia total (Aprox.):
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {`S/ ${Intl.NumberFormat("en-US").format(item.monto_maximo)}`}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Ganancia mensual (Aprox.):
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'} : {textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    {`S/ ${Intl.NumberFormat("en-US").format(item.monto_minimo)}`}
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', borderBottomLeftRadius: '0px', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'} : {textAlign: 'right', backgroundColor: 'white', borderBottomLeftRadius: '10px', height: '30px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '0px'}}>
                                    Monto mínimo:
                                    </div>
                                    <div className="col-md-6 col-sm-12" style={mobile === true ? {textAlign: 'center', backgroundColor: 'white', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', height: '30px', fontSize: '0.8rem', marginBottom: '0px'} : {textAlign: 'left', backgroundColor: 'white', borderBottomRightRadius: '10px', height: '30px', fontSize: '0.8rem'}}>
                                    {`S/ ${Intl.NumberFormat("en-US").format(item.monto_maximo)}`}
                                    </div>
                                </div>
                                </div>
                                </React.Fragment>
    )
})



    return (
        <>
            <ParallaxHeroStyle1
                ids="iq-home"
                bgImage={"/assets/images/home/tasatop_deposito_plazo_fijo.jpg"}
                className={"iq-banner-02 overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
            >
                <div className="container">
                    <div className="banner-text text-center" style={{marginTop: '0%', paddingBottom: '50px'}}>
                        <div className="row">
                            {/* Inicio del resumen de seleccion */}

                            {<div className={pernat === false ? "col-md-6" : "col-md-12"} style={{marginBottom: '100px'}}>
                                
                            
                                                          
                                <h4 className=" iq-font-white iq-tw-8">¡Felicitaciones! <br></br> Has elegido el siguiente Depósito a Plazo Fijo</h4>
                                
                                {product}

           { producto.length && pernat === true ? 
           
           <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }} onClick={() => {
             registrarInversion(pmonto, pplazo, pmonto, titularEnv, numdocTitularEnv, codigoEvn, regPro.tea, localStorage.getItem("tasaUsuario"), ipCreacionEnv, localStorage.getItem("tasaID"), regPro.id_producto, regPro.id_moneda, situacionEnv, regPro.id_proveedor, idTipoDocEnv, idCiudadEnv, tipoProductoEnv )  
            ,
            Router.push({
            pathname:'/zonaprivada/beta/dashboard/pernat/dpf/pendientes',
        })
    }}>Registrar</button>
            :
            null} 
                            
                            </div>}
                                
                            {/* Fin del resumen de seleccion */}
                            {/* Comienzo del formulario */}
                            {pernat === true ? null :
                            <Formulario seleccion={true} esCliente={esCliente} cambioEsCliente={cambioEsCliente} pantallaSeleccion={pantallaSeleccion} />
                            }

                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01 skrollable skrollable-before" style={{transform: "translateY(50px)"}}>
                    </span>
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round"></span>
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round"></span>
                    </span>
                    <span className="banner-objects-04 skrollable skrollable-between" data-bottom="transform:translatex(100px)" data-top="transform:translatex(-100px);" style={{transform: "translateX(-66.3317px)"}}>
                        <img alt="drive02"  src="/assets/images/drive/04.png" />
                    </span>
                </div>
            </ParallaxHeroStyle1>
        </>
    )
}




export default Seleccion;
