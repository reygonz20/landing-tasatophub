import React, {useState, useEffect} from 'react'
import Formulario from './formulario'
import Link from 'next/link'


const login = () => {

    const [esCliente, setEsCliente] = useState(true);
    const [redirect, setRedirect] = useState();

    const cambioEsCliente = (bool) => {
        setEsCliente(bool)
    } 

    

    return (
        <>
            <section id="iq-home" className="iq-banner-03 overview-block-pt blue-bg" style={{backgroundColor:'#146cae', marginTop: '0px', marginBottom: '4%'}}>
                <div className="container" style={{marginTop: '0px'}}>
                    <div className="banner-text text-left" style={{marginTop: '0px'}}>
                        <div className="row justify-content-between" style={esCliente ? {marginTop: '10%'} : {}}>
                            <div className="col-md-6 align-self-center" style={{marginTop: '0px'}}>
                                <h1 className="iq-font-white iq-tw-4" style={{marginTop: '5%'}}>¡Ingresa tus datos para acceder a tu cuenta!</h1>
                                <h5 className="iq-font-white iq-mtb-20" style={{marginTop: '5%'}}>¿Aun no tienes cuenta?</h5>
                                
                                    <a href="/zonaprivada/registrate" className="button bt-red iq-mt-15 iq-mb-30">Registrate</a>
                            </div>
                            

                            <Formulario esCliente={true} cambioEsCliente={cambioEsCliente} />



                            

                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                        <img src="/assets/images/drive/03.png" alt="drive02" />
                    </span>
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round"/>
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round"/>
                    </span>
                    <span className="banner-objects-04" data-bottom="transform:translatex(100px)" data-top="transform:translatex(-100px);">
                        <img src="/assets/images/drive/04.png" alt="drive02" />
                    </span>
                </div>
            </section>
        </>
    )
}



export default login;
