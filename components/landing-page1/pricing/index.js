import React from 'react';
import Link from 'next/link'

import { PricingCardStyle2 } from '../../sofbox';

const Title = () => (<><small>Deposito Plazo Fijo</small></>);

const nuestrosProductos = () => {

    return (
        <>
            <section id="productos" className="overview-block-ptb grey-bg iq-price-table">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-title">
                                <h3 className="title iq-tw-7">Nuestros Productos</h3>
                                <p>Puedes elegir entre nuestros productos mas destacados.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent: 'center'}}>
                        <div className="col-md-5 col-lg-5">
                            <div className="iq-pricing text-center">
                                <PricingCardStyle2
                                    bgImage={"/assets/images/home/tasatop_deposito_plazo_fijo.jpg"}
                                    title={ <Title /> }
                                    // subTitle={"Caracteristicas"}
                                >
                                    <ul style={{padding: '10px'}}>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify'}}>Monto mínimo: 500 (Soles o Dólares).</li>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Plazo mínimo: 181 días (6 meses).</li>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Participan: Bancos, Financiera, Cajas y Cooperativas.</li>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Respaldo: Fondo de Seguro de Depósito.</li>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Servicio gratuito y no vinculante.</li>
                                        <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Te conseguimos las mejores tasas del mercado.</li>
                                    </ul>
                                    <div className="price-footer">
                                    <Link href="/pe"><a className="button" >Lo quiero</a></Link>
                                    </div>
                                </PricingCardStyle2>
                            </div>
                        </div>

                        {/* <div className="col-md-4 col-lg-4 wow flipInY r4-mt-30" data-wow-duration="1s">
                            <PricingCardStyle2
                                bgImage={"/assets/images/bg/08.jpg"}
                                title={(
                                    <>
                                        <small>CTS</small>
                                    </>
                                )}
                                // subTitle={"Caracteristicas"}
                            >
                                <ul>
                                    <li>Gratis, exclusivo y personalizado.</li>
                                    <li>Puedes hacerlo en soles o dolares.</li>
                                    <li>Tasas en soles entre 5.5% 7 7.5%.</li>
                                    <li>Tasa en dolares entre 0.5% y 3.0%.</li>
                                    <li>Valido a nivel nacional.</li>
                                </ul>
                                <div className="price-footer">
                                    <a className="button" href="#">Lo quiero</a>
                                </div>
                            </PricingCardStyle2>
                        </div> */}

                        <div className="col-md-5 col-lg-5">
                            <PricingCardStyle2
                                bgImage={"/assets/images/home/tasatop_inversiones.jpg"}
                                title={(
                                    <>
                                        <small>Inversiones</small>
                                    </>
                                )}
                                // subTitle={"Caracteristicas"}
                            >
                                <ul style={{padding: '10px'}}>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify'}}>Participan empresas sólidas nacionales e internacionales.</li>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Sectores: educación, tecnología, textil y entre otros.</li>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Garantías: contratos, pagares, hipotecas y cheques.</li>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px'}}>Montos y plazos de acuerdo a tu necesidad de inversión.</li>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px', marginBottom: '16px'}}>Servicio gratuito y no vinculante.</li>
                                    <li style={{listStyle: 'inside disc',lineHeight: '1.5', textAlign: 'justify', marginTop: '15px', marginBottom: '0px'}}>Asesoria personalizada de acuerdo a tu perfil de riesgo.</li>
                                </ul>
                                <div className="price-footer">
                                    <Link href="/pe/inversiones"><a className="button" >Lo quiero</a></Link>
                                </div>
                            </PricingCardStyle2>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}



export default nuestrosProductos;