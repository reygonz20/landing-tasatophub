import React, { Component } from "react";
import Link from 'next/link'

const Blog21 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Cómo puedo convertir una tasa efectiva anual en una de menor plazo?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Cómo puedo convertir una tasa efectiva anual en una de menor plazo?</li>
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
                            <img class="" src="/assets/images/educacion/educacion21.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>A menudo las instituciones financieras que reciben nuestros depósitos nos ofrecen tasas de interés efectivas anuales (TEA), es decir los porcentajes que ganaríamos si nuestro dinero permaneciera un año (doce meses completos) en cualquier institución financiera.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Sin embargo, <strong>¿qué pasaría si me ofrecen una TEA de 7% para un depósito de S/1,000 que solo dejaré seis meses en la institución?</strong></p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Para saber cuánto es lo que recibiría en este ejemplo, te recomendamos seguir 02 pasos:</p>
                            <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Calcula la tasa del plazo que se quedará tu dinero, en este ejemplo es semestral (06 meses):</strong></li>
                            </ol>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Algunas personas creen que la manera más sencilla de hallar el resultado es dividir la tasa entre 2, dando como resultado 3.50%, sin embargo es errado. ¿Por qué? Porque las tasas efectivas son capitalizables y no son tasas simples. Los intereses ganados pasan a formar parte del capital continuamente, lo cual hace que el dinero crezca de manera exponencial permanentemente. Entonces debo hallar la tasa de interés equivalente semestral que se capitalice dos veces al año y que dé como resultado el 7% ofrecido, emplea la siguiente fórmula:</p>
                            <p style={{textAlign: 'center', fontSize: '0.88rem'}}><strong>(1 + i) x (1 + i) = (1+ 7%)</strong></p>
                            <p style={{textAlign: 'center', fontSize: '0.88rem'}}>Donde "i" es la tasa equivalente semestral a calcular</p>
                            <p style={{textAlign: 'center', fontSize: '0.88rem'}}><strong>Factoricemos (1 + i)2 = (1 + 7%)</strong></p>
                            <p style={{textAlign: 'center', fontSize: '0.88rem'}}><strong>Donde, i = √(1 + 7%) - 1</strong></p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>La respuesta correcta será i = 3.4408%, tasa efectiva semestral. Una tasa muy parecida al 3.50%, pero que a comparación de esta, resulta ser exacta y veraz.</p>
                            <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Calcula los intereses que obtendrás al final del plazo establecido.</strong></li>
                            </ol>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>De acuerdo al ejemplo, por los S/1,000 que depositarán durante seis meses:</p>
                            <p style={{textAlign: 'center', fontSize: '0.88rem'}}><strong>(3.4408% x S/ 1,000) = S/ 34.41</strong></p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Esto será lo que realmente recibiremos al dejar por seis meses nuestro depósito de S/1,000 con TEA de 7%. <strong>¡Ahora ya sabes calcular una tasa equivalente!</strong></p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Recuerda siempre revisar el periodo de la tasa ofrecida (mensual, semestral o anual) y tener claro cuántas capitalizaciones al año tiene cada una (Ejemplo: una tasa mensual se capitaliza doces veces al año; una trimestral, cuatro veces; y una semestral, dos veces).</p>

                            </div>

                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 30 ABRIL 2018</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">EDUCACIÓN FINANCIERA</a></li>
                                <li><a href="javascript:void(0)">FINTECH</a></li>
                                <li><a href="javascript:void(0)">TASAS EQUIVALENTES</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Cómo puedo convertir una tasa efectiva anual en una de menor plazo? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f316e11f1c8cb8" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df194cda58124188%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff33a26ceb11e934%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '281px'}}><iframe name="f1047f857cd42" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df32d405b5edb4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff33a26ceb11e934%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '281px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                <Link href="/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru#referencias"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/por-que-son-importantes-las-fintech"><a class="page-link" >Siguiente</a></Link>
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

export default Blog21;