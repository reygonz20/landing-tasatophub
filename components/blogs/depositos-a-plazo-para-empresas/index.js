import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog33 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Las empresas también ahorran</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Las empresas también ahorran</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
{/* <!-- Breadcrumb End -->
<!-- Main Content --> */}
<div class="main-content">
{/* <!--======= Blog =======--> */}
    <section id="blog" class="iq-page-blog overview-block-ptb">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="iq-blog-box iq-mt-40">
                        <div class="" style={{float: 'left', marginTop: '2%', marginLeft: '2%', marginRight: '2%'}}>
                            <img class="" src="/assets/images/educacion/educacion33.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                <p style={{textAlign: 'justify'}}>El mercado peruano total de depósitos formales asciendió a S/233 mil millones en saldo hacia finales del 2016, creció 1% versus 2015 <sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup>, sin embargo su incremento fue relativamente bajo comparado a los créditos, los cuales tuvieron un crecimiento de 4.4%<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup>. Los depósitos formales están divididos para: personas jurídicas, personas naturales y entidades sin fines de lucro. Los dos primeros poseen 48% de participación de mercado, alrededor de S/ 110 mil millones por cada uno, dejando 5% para personas jurídicas sin fines de lucro. Sin embargo, el comportamiento de ambos segmentos en el 2016 fue distinto, mientras que el total de depósitos de personas naturales creció 6%, las cuentas de jurídicas decrecieron 1% versus el 2015.</p>
                                <p style={{textAlign: 'justify'}}>¿Hay más oferta de ahorro para personas que para empresas?</p>
                                <p style={{textAlign: 'justify'}}>Efectivamente, parte del dinamismo en depósitos de personas puede deberse a que existe mayor oferta de productos de depósito para este segmento que para jurídicos, ejemplos: cuenta sueldo, tasas promocionales para plazos fijos, tasas exclusivas de CTS, cuentas de ahorros flexibles, cuentas de ahorros con saldos mínimos, entre otros. La oferta de depósitos para empresas por parte de la banca tradicional es limitada, se centra básicamente en over night, back to backs y plazos fijos clásicos. Productos que son gestionados tradicionalmente por los sectoristas de los bancos más grandes del país (2/3 de los saldos de estos depósitos son realizados en los 4 principales bancos).</p>
                                <p style={{textAlign: 'justify'}}>Depósitos a plazo para empresas</p>
                                <p style={{textAlign: 'justify'}}>Dentro del mercado de personas jurídicas, el producto de plazos fijos representó alrededor de S/50 mil millones en el 2016, casi el doble del mercado de personas en este producto y casi cuatro veces el tamaño de los depósitos de las personas en cuentas de CTS, por lo que creemos que existe una enorme oportunidad de ingreso a este mercado, a través de una oferta no solo competitiva en tasas de interés sino en mejor servicio.</p>
                                <p style={{textAlign: 'justify'}}>Los depósitos a plazo para jurídicas están concentrados en la Banca tradicional, 96% de participación, 3% en Financieras y sólo 1% en Cajas Municipales y Rurales. Si bien el mercado decreció versus 2015, las entidades que crecieron a dos dígitos son las Cajas Municipales y Rurales, mostrando mayor agresividad comercial en tasas.</p>
                                
                                
                                <div id="referencias">
                                <p style={{textAlign: 'justify'}}>Por lo visto, creemos en la gran oportunidad de optimización de fondos que existe para las empresas si logramos acercarlas más al mercado financiero obteniendo ofertas más competitivas en tasa y servicio. Apostamos en la democratización comercial de las opciones de ahorro a través de la subasta online, en este sentido, hemos lanzado al mercado nuestro nuevo producto para empresas -depósito a plazo fijo- donde las pequeñas y medianas empresas podrán conseguir tasas competitivas de forma gratuita y segura a través de nuestra plataforma.</p>
                                <p style={{textAlign: 'justify'}}>Competimos por ti, ahora también para empresas.</p>
                                
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><sup>1</sup><a target="_blank" href= "http://www.sbs.gob.pe/app/pp/seriesHistoricas2/paso1.aspx"><span style={{color:'#146cae'}}>Todos los datos sobre el mercado de depósitos fueron obtenidos de la información pública mostrada en la Superintendencia de Banca, Seguros y AFP. </span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><sup>2</sup><a target="_blank" href= "http://gestion.pe/mercados/creditos-consumo-crecieron-74-2016-2180096"><span style={{color:'#146cae'}}>Diario Gestión.</span></a></li>
                                </ul>
                            </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i>09 AGOSTO 2017</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">EMPRESAS</a></li>
                                <li><a href="javascript:void(0)">MERCADO DE DEPÓSITOS</a></li>
                                <li><a href="javascript:void(0)">CTS</a></li>
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Las empresas también ahorran - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/alfredo-cardoso.jpg" style={{width: '90px', height: '90px'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Alfredo Cardoso</a>
                                    </div>
                                    <p class="iq-font-white">Empresario con experiencia en sectores financieros, retail, fintech, educación y productivos. Profesor de finanzas en pre y post grado. Consultor en planes de negocio y planeamiento financiero.</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fdepositos-a-plazo-para-empresas.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f2855945b4e8d68" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df382efd15f9e81%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Fff0e3d7728e08c%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fdepositos-a-plazo-para-empresas.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/depositos-a-plazo-para-empresas.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fdepositos-a-plazo-para-empresas.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f3e03fc07f95358" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df15aadf0ba37ce4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Fff0e3d7728e08c%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fdepositos-a-plazo-para-empresas.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}}></iframe></span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad"><a class="page-link" >Anterior</a></Link>
                                </li>
                                {/* <li class="page-item"><a class="page-link" href="/blog01">1</a></li> */}
                                <li class="page-item active"><a class="page-link">-</a></li>
                                {/* <li class="page-item active">
                                    <span class="page-link">
                            2
                            <span class="sr-only">(current)</span>
                                    </span>
                                </li> */}
                                {/* <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li> */}
                                <li class="page-item">
                                <Link href="/pe/educacion-financiera/cajas-financieras-o-bancos"><a class="page-link">Siguiente</a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    </section>
    {/* <!--======= End Blog =======--> */}
</div>
        </React.Fragment>
    )
}  

export default Blog33;