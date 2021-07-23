import React, {useState} from 'react'
import {ParallaxHeroStyle1} from '../../sofbox';
import Link from 'next/link'

import Router from 'next/router';

import { useRouter } from 'next/router';
import Formulario from '../../landing-page1/login/formulario'



const SeleccionInversion = ({pernat}) => {


    const [esCliente, setEsCliente] = useState(false);

    const pantallaSeleccion = true;

    const cambioEsCliente = (bool) => {
        setEsCliente(bool)
    } 
    

    return (
        <>
            <ParallaxHeroStyle1
                ids="iq-home"
                bgImage={"/assets/images/home/tasatop_inversiones.jpg"}
                className={"iq-banner-02 overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
            >
                <div className="container">
                    <div className="banner-text text-center" style={{marginTop: '0%', paddingBottom: '50px'}}>
                        <div className="row">
                            {/* Inicio del resumen de seleccion */}
                            <div className={pernat === false ? "col-md-6" : "col-md-12"} style={{marginBottom: '100px'}}>
                                <h4 className=" iq-font-white iq-tw-8">¡Felicitaciones! <br></br> Has elegido la siguiente oportunidad de inversión</h4>
                                <div style={{backgroundColor: 'white', padding: '30px', width: '250px', margin: 'auto', marginTop: '50px', marginBottom: '50px'}}>
                                <img src="/assets/images/financieras/financiera02.png"></img>
                                </div>
                                <div style={{height: '350px'}}>
                                <div className="row" style={{width: '95%', margin: 'auto'}}>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', borderTopLeftRadius: '10px', marginTop: '0px', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Empresa:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', borderTopRightRadius: '10px', marginTop: '0px', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    Empresa educativa
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Producto:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    SP001
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Tipo de renta:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    Fija
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Caificación TasaTop:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    3
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Supervisado:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    No
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Contrato y garantia:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    Pagaré, contrato.
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Rentabilidad (TEA):
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    12% en soles, 10% en dolares
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Plazo mínimo:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    1 o 2 años
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontWeight: '700', fontSize: '0.8rem', padding: '0px'}}>
                                    Monto mínimo:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', height: '30px', marginTop: '0px', marginBottom: '2px', fontSize: '0.8rem'}}>
                                    S/ 35,000.00 o $10,000.00
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'right', backgroundColor: 'white', borderBottomLeftRadius: '10px', fontWeight: '700', marginBottom: '2px', fontSize: '0.8rem', padding: '2px'}}>
                                    Descripción:
                                    </div>
                                    <div className="col-md-6 col-sm-6" style={{textAlign: 'left', backgroundColor: 'white', borderBottomRightRadius: '10px', fontSize: '0.8rem', marginBottom: '2px'}}>
                                    Empresa educativa ubicada en Lima busca capital para inversión y crecimiento de instalaciones.
                                    </div>
                                </div>
                                </div>
                                
                                {pernat === true ? 
                                <button type="button" className="btn btn-outline-danger" style={{width: '90px', margin: 'auto', backgroundColor: '#e01e2b', color: 'white', marginTop: '50px' }} onClick={() => {Router.push({
                                    pathname:'/zonaprivada/beta/dashboard/pernat/inv/pendientes',
                                })}}>Registrar</button>
                            :
                            null
                            }
                                


                            </div>
                            {/* Fin del resumen de seleccion */}
                            {/* Comienzo del formulario */}
                            
                                                        
                            
                {/* Fin del formulario */}
                {pernat === true ? null :
                            <Formulario seleccion={true} esCliente={esCliente} cambioEsCliente={cambioEsCliente} pantallaSeleccion={pantallaSeleccion} pernat={pernat} />
                            }
                {/* Comienzo del formulario inicio sesion */}
                
                {/* Fin del formulario inicio sesion */}

                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01 skrollable skrollable-before" style={{transform: "translateY(50px)"}}>
                        {/* <img alt="drive02" src="./assets/images/drive/03.png" /> */}
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




export default SeleccionInversion;
