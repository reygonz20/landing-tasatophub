import React from 'react';
import { ParallaxHeroStyle1 } from '../../sofbox';
import Simulador from '../simulador'
import Simuinversiones from '../simuinversiones'
import Link from 'next/link'

const homeInv = () =>  {

    return (
        <>
            <ParallaxHeroStyle1
                ids="inicio"
                bgImage={"/assets/images/bg/fondohome.jpg"}
                className={"iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
            >
                <div className="container-fluid" style={{display: 'flex', alignItems: 'center', marginBottom: '8%'}}>
                    <div className="banner-text">
                        <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                            <div className="col-lg-6">
                                <h1 className="iq-font-white iq-tw-3" style={{fontSize: '2.5rem'}}>
                                Encuentra la mejor manera de <b className="iq-tw-7">ahorrar e invertir</b> en un solo lugar.
                                </h1>
                                <p className="iq-font-white iq-pt-15 iq-mb-40" style={{fontSize: '1.5rem', textAlign: 'center'}}>
                                Servicio gratuito y personalizado.
                                </p>
                                
                                {/* <div className="waves-box">
                                    <a href="http://www.youtube.com/watch?v=kzyFmrFky7Y"
                                       className="iq-video popup-youtube">
                                        <i className="ion-ios-play-outline" /></a>
                                    <div className="iq-waves">
                                        <div className="waves wave-1" />
                                        <div className="waves wave-2" />
                                        <div className="waves wave-3" />
                                    </div>
                                </div> */}
                                {/* <a href="#"
                                   className="button bt-black iq-mt-5 iq-ml-40">Download</a> */}
                            </div>
                            <div className="col-lg-6">
                                <Simuinversiones />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                        <img src="/assets/images/drive/03.png" alt="drive02" />
                    </span>
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                </div>
            </ParallaxHeroStyle1>

        </>
    );
}


export default homeInv;