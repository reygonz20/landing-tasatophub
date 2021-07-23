import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog25 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Como obtener la mejor rentabilidad para mi CTS?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Como obtener la mejor rentabilidad para mi CTS?</li>
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
                            <img class="" src="/assets/images/educacion/educacion25.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>La Compensación por Tiempo de Servicios (CTS) es un beneficio social, que previene el riesgo que origina el cese de una relación laboral y la consecuente pérdida de ingresos. Podría decirse es como un seguro de desempleo que tienen acceso los trabajadores del sector privado y a estatales de la Ley 728 y Servir. En los meses de mayo y noviembre, los empleadores deben depositar a nombre de sus trabajadores en una cuenta CTS de una entidad financiera que significa un depósito para los mismos.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>¿El mercado de depósitos de CTS crece?</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Según la Superintendencia de Banca, Seguros y AFP al cierre del primer semestre del 2017 <sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup>, el saldo acumulado en todas las entidades financieras reguladas asciende a 19 mil millones en CTS, 7% más que el mismo periodo del año pasado donde el saldo representó 17.7 mil millones a junio de 2016.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Gran parte de este crecimiento viene empujado por Cajas y Financieras, si bien los pesos de los fondos de CTS son menores a los de la gran banca (20% y 80% respectivamente), existe una marcada tendencia a que las entidades menores vayan tomando cada vez mayor relevancia. Así, en el mercado de CTS las Financieras crecieron 33.8%, las Cajas rurales lo hicieron en 22.3% y las Cajas municipales 19.5%, sin embargo la banca sólo lo hizo en 3.9%. Al crecer estas entidades, también crece los montos de depósitos dado que las Financieras y Cajas ofrecen mayor rentabilidad que los Bancos.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>¿Banco o Financieras o Cajas?</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Elegir la institución con mayor rentabilidad es tu decisión. Algunas consideraciones que debes saber sobre tu CTS:</p>
                            <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>No es obligatorio tener tu CTS en la misma institución donde tienes tu cuenta de pago de haberes.</strong> Algunas instituciones logran establecer beneficios si el cliente mantiene su cuenta sueldo, CTS y tarjetas de crédito en la misma institución, sin embargo sugerimos revisar las Tasas de Rendimiento Efectivo Anual (TREA) y las Tasas de Costo Efectivo Anual (TCEA), en muchas ocasiones las promociones no compensan las tasas de interés ofrecidas.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Puedes trasladar libremente tu CTS a cualquier entidad del sistema financiero</strong> que tenga disponible este producto financiero. Ningún empleador ni institución financiera puede negarte el libre ejercicio de la elección voluntaria de la institución de destino de tu CTS.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Tu CTS, como cualquier ahorro, está resguardado por el Fondo de Seguro de Depósitos</strong> FSD (Junio – Agosto 2017, S/97,604). Para una mejor gestión del riesgo y de la cobertura del FSD sugerimos no tener todas tus cuentas de ahorro en la misma institución, sobre todo si la suma de los depósitos superan el monto del Fondo.</li>
                            </ol>
                            <div id="referencias">
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Te recomendamos trasladar tu CTS de manera virtual haciendo clic aquí en donde podrás encontrar buenas opciones en tasa de interés y en servicio a través de un proceso sencillo y sin salir de tu trabajo.</p>

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><sup style= {{textAlign: 'justify', fontSize: '0.88rem', color:'#146cae'}}><strong>1</strong></sup>Todos los datos sobre el mercado de depósitos fueron obtenidos de la información pública mostrada en la Superintendencia de Banca, Seguros y AFP.<a style={{color:'#146cae'}} target="_blank" href="https://www.sbs.gob.pe/app/pp/seriesHistoricas2/paso1.aspx"> http://www.sbs.gob.pe/app/pp/seriesHistoricas2/paso1.aspx</a></p>

                            </div>
                            </div>

                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 02 OCTUBRE 2017</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">CTS</a></li>
                                <li><a href="javascript:void(0)">RENTABILIDAD CTS</a></li>
                                <li><a href="javascript:void(0)">DEPÓSITOS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Como obtener la mejor rentabilidad para mi CTS? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCTS-y-su-crecimiento-rentabilidad.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f35e43c4fb3a428" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df45baa6546b64c%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3ea5fc8777725c%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCTS-y-su-crecimiento-rentabilidad.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/CTS-y-su-crecimiento-rentabilidad.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCTS-y-su-crecimiento-rentabilidad.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f1d0199e34ebb5" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1942ee51fac15%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3ea5fc8777725c%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCTS-y-su-crecimiento-rentabilidad.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/diferencias-entre-cuenta-ahorro-y-plazo-fijo"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/depositos-a-plazo-para-empresas"><a class="page-link" >Siguiente</a></Link>
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

export default Blog25;