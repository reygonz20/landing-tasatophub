import React, { Component } from "react";
import Link from 'next/link'

const Blog17 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>El presupuesto y tus metas de ahorro</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">El presupuesto y tus metas de ahorro</li>
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
                            <img class="" src="/assets/images/educacion/educacion17.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>¿Sabes en qué gastas tu dinero mes a mes? ¿sabes qué porcentaje de tus ingresos son gastos fijos o imprescindibles? ¿cómo administrar correctamente tus ingresos y tus gastos?.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Para que nuestras finanzas personales/familiares sean bien gestionadas es recomendable llevar un registro de nuestros ingresos y gastos. Un presupuesto mensual es una herramienta efectiva para controlar nuestro dinero y ahorrar. Es un documento sencillo donde se calcula y proyecta nuestros gastos familiares en función de nuestros ingresos, también nos permite establecer metas de ahorro.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Un buen presupuesto nos ayudará a:</h4>
                                <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Saber exactamente en qué gastamos nuestro dinero mes a mes.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Determinar nuestro objetivo o porcentaje de ahorro.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Conocer cuáles son gastos fijos y cuáles son variables.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Crear un fondo de emergencia para hacer frente a posibles contingencias e imprevistos.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Hacer una planificación financiera para controlar el futuro de manera mucho más estable.</li>
                                </ol>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Cómo crear un presupuesto mensual?</h4>
                                <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Determinar todos los ingresos personales y familiares.</li>
                                    <ul>
                                        <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Ingresos fijos: son las entradas de dinero regulares, los que no varían y que sabemos que llegarán a nuestra cuenta mes a mes.</li>
                                        <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Ingresos variables: entradas de dinero no constantes, predecir la cantidad y la fecha en que se obtendrán de acuerdo a un estimado o años anteriores. Por ejemplo, trabajos extras o comisiones en verano.</li>
                                    </ul>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Establecer la meta de ahorro, es recomendable separar como mínimo el 10% de los ingresos para el ahorro. De tus ahorros una parte debería ser considerada para imprevistos.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Registra todos los gastos o salidas de dinero que realizas mensualmente.</li>
                                    <ul>
                                        <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Gastos fijos u obligatorios: lo que no podemos dejar de pagar dado que son habituales o tienen una periodicidad fija. Algunos ejemplos son: la hipoteca, el alquiler de vivienda, préstamos bancarios, la luz, el agua, el gas, los colegios, etc.</li>
                                        <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Gastos variables: no tienen una periodicidad definida y no están siempre definidos. Por ejemplo, taxis, viajes, entretenimiento, etc.</li>
                                    </ul>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Determina el saldo: ingresos-ahorro-gastos.</li>
                                </ol>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué debemos tener en cuenta?</h4>
                                <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Objetivo: conseguir que los ingresos cubran todos los gastos, tener claro cuáles son tus prioridades y no vivir nunca por encima de tus posibilidades.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Compromiso: llevar al día tu presupuesto y ser lo más sincero posible contigo mismo sin ocultar ningún gasto.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Seguimiento: ordenar facturas, vigilar vencimientos de recibos y revisar las cuentas bancarias.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Ahorro: incluye el ahorro como si fuera una parte más de tus gastos fijos. Entre un 10% y un 20% de tus ingresos al ahorro mensual. Aunque cualquier cantidad es buena.</li>
                                </ol>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>¡Ordena tus cuentas personales y haz tus sueños realidad! En TasaTop.com te ayudamos a encontrar el mejor producto de ahorro o inversión que te ayude a rentabilizar tu dinero, ten en cuenta que nuestro servicio es totalmente gratuito, así que no tendrías que incluirnos en tu presupuesto como un gasto adicional.</p>

                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes:</h4>
                                
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.sbs.gob.pe/portals/3/educacion-financiera-pdf/GUIA_DOMINA_TUS_FINANZAS.pdf"><span style={{color:'#146cae'}}>http://www.sbs.gob.pe/portals/3/educacion-financiera-pdf/GUIA_DOMINA_TUS_FINANZAS.pdf</span></a></li>
                                </ul>

                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Deyanira Méndez, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i>12 AGOSTO 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">PRESUPUESTO</a></li>
                                <li><a href="javascript:void(0)">INVERSIONES</a></li>
                                <li><a href="javascript:void(0)">RENTABILIZAR TU DINERO</a></li>
                                <li><a href="javascript:void(0)">FINANZAS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=El presupuesto y tus metas de ahorro - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/deyanira-mendez.jpg" style={{width: '90px', height: '90px'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Deyanira Mendez</a>
                                    </div>
                                    <p class="iq-font-white">Administradora de Negocios Internacionales - Universidad Tecnológica del Perú.</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1170&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fel-presupuesto-y-tus-metas-de-ahorro.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f2f7541d5191ac8" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df273d3fc1fc68ac%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff147ba19a483278%26relation%3Dparent.parent&amp;container_width=1170&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fel-presupuesto-y-tus-metas-de-ahorro.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1170&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fel-presupuesto-y-tus-metas-de-ahorro.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f350ad2570f3274" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df31f805f360ff9%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff147ba19a483278%26relation%3Dparent.parent&amp;container_width=1170&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fel-presupuesto-y-tus-metas-de-ahorro.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos#referencias"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/te-ayudamos-a-invertir-mejor-tu-gratificacion"><a class="page-link">Siguiente</a></Link>
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

export default Blog17;