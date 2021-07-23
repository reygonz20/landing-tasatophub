import React from 'react';

import { SectionStyle1, SectionStyle2, SectionTitle, CardStyle5 } from '../../sofbox';


const Index = ({small}) => {

    return (
        <>
        <section id="que-hacemos" className="overview-block-ptb it-works">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <SectionTitle
                        title="¿Qué hacemos?"
                        // subTitle="Sofbox is a sleek, clean and powerful landing page template."
                    />
            </div>
                </div>
                    
        </div>
        
        <section id="how-works-two" className="overview-block-ptb how-works ">
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-7">
                            <img className="iq-works-img pull-right img-fluid"
                                 src="/assets/images/home/tasatop_que_hacemos.jpg" alt="drive01" />
                        </div>

                        <div className="col-lg-5 align-self-center">
                            <p>Somos un mercado virtual de <b>ahorros e inversiones</b>, conectamos personas y empresas con nuestras instituciones afiliadas que te ofrecerán sus mejores tasas y condiciones en Soles y Dólares.</p>
                        </div>

                        <div className={small ? 'iq-objects-software' : 'iq-objects-softwarenew'}>
                            <span className="iq-objects-01" data-bottom="transform:translatey(50px)"
                                  data-top="transform:translatey(-100px);">
                              <img src="/assets/images/drive/03.png" alt="drive02"/>
                            </span>
                            <span className="iq-objects-02" data-bottom="transform:translatex(50px)"
                                  data-top="transform:translatex(-100px);">
                                <img src="/assets/images/drive/04.png" alt="drive02"/>
                            </span>
                            <span className="iq-objects-03 iq-fadebounce">
                                <span className="iq-round"/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
               
                <div className="container" style={{marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-sm-12">
                            <SectionTitle
                                title="¿Cómo funciona?"
                                // subTitle="Sofbox is a sleek, clean and powerful landing page template."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <CardStyle5 step={1} media={"/assets/images/services/icon2.png"}>
                                <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">¡Elige!</h5>
                                <p style={{minHeight: '290px'}}>Tenemos dos opciones para que decidas ahorrar o invertir hoy: Depósito a Plazo fijo e Inversiones.</p>
                            </CardStyle5>
                        </div>

                        <div className="col-md-12 col-lg-4 r-mt-30">
                            <CardStyle5 step={2} media={"/assets/images/services/icon1.png"}>
                                <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">¡Simula!</h5>
                                <p style={{minHeight: '290px'}}>Nuestro servicio es gratuito, por eso puedes simular las veces que quieras para tus ahorros e inversiones. Recuerda que tu información será compartida con las instituciones afiliadas solo si tú lo deseas y permitas. A su vez, el resultado de la simulación no es vinculante, eso quiere decir que podrás aceptar o rechazar la oferta cuando tú decidas.</p>
                            </CardStyle5>
                        </div>

                        <div className="col-md-12 col-lg-4 r-mt-30">
                            <CardStyle5 step={3} media={"/assets/images/services/icon3.png"}>
                                <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">¡Decide!</h5>
                                <p style={{minHeight: '290px'}}>Una vez que hayas simulado ya sea tu Depósito a Plazo Fijo o las oportunidades de inversión que tenemos para ti, uno de nuestros asesores comerciales se pondrá en contacto contigo para explicarte los siguientes pasos resultado de tu simulación.</p>
                            </CardStyle5>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}


export default Index;