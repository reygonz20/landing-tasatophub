import React, { Component } from "react";
import Link from 'next/link'

const blog11 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Marketplaces o mercados virtuales</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Marketplaces o mercados virtuales</li>
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
                            <img class="" src="/assets/images/educacion/educacion11.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Estas son algunas de las preguntas que nos realizan cuando explicamos que TasaTop es un marketplace de ahorro e inversiones, completamente gratuito y no vinculante. A continuación, explicamos con mayor detalle a qué nos referimos con estos conceptos.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué es un Marketplace?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Gracias a la tecnología, ahora existen plataformas digitales que permiten conectar compradores y vendedores bajo un mismo espacio “virtual” con el fin de un intercambio comercial, ya sea de información o transaccional. A estos nuevos negocios digitales se le denomina Marketplace o mercado virtual, cuyas funciones principales son la conexión y la intermediación, prestando un servicio independiente, confiable y transparente para compradores y vendedores.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Cómo gana dinero un Marketplace?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Para Marketplaces enfocados en comercio electrónico o intercambio comercial de productos o servicios, la comisión puede ser pagada por ambos agentes (vendedores y compradores), sin embargo, el delivery del bien físico tiene un costo adicional asumido generalmente por el comprador. No obstante, para algunas plataformas, también conocidas como “informediarios”, brindan información al usuario final y la comisión es pagada sólo el vendedor o comprador. Otra manera de ganar dinero es a través de la publicidad en la propia plataforma entre otras actividades.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En el caso de TasaTop, el servicio es gratuito para el usuario final (o ahorrista) quien busca tasas de interés, se ofrece la plataforma para conectarte con opciones de inversión confiables que van desde depósitos a plazo hasta productos estructurados. Tasatop es un intermediario entre el ahorrista y las instituciones, por eso no recibe dinero o depósitos. Finalmente, el servicio es no vinculante, si el ahorrista recibe una oferta de tasa de interés no está obligado a concretar la operación si es que no lo desea. Nosotros tenemos contratos privados con cada institución afiliada, garantizando el cumplimiento de las obligaciones ofrecidas en tasa, plazo y documentación, son ellas quienes nos pagan comisiones en función a operaciones concretadas por los ahorristas.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Cuáles son las características de un Marketplace?</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Especialización</strong>, permite que vendedores y compradores logren encontrar lo que estaban buscando en un solo sitio.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Transparencia</strong>, muestra información homologada, comparable y clara sobre distintos tipos de productos.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Accesibilidad</strong>, establece distintos mecanismos de pago, cargo y crédito para facilitar las transacciones. Asimismo, tiene distintas adaptaciones a página web, celulares y tablets, haciendo la navegación fluida.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Seguridad</strong>, dispone de distintos mecanismos digitales y analógicos de seguridad de la información y deberían estar registrados formalmente en un ente regulador oficial en un país.</li>
                                </ul>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>TasaTop es un Marketplace de ahorro e inversión donde podrás encontrar productos tanto mercado financiero como mercado de valores: subasta de depósito a plazo fijo, traslado de CTS, productos estructurados, financiamiento privado, fondos de factoring, fondos mutuos, portafolios globales entre otros. Más información: <a style={{color:'#146cae'}} target="_blank" href="https://www.tasatop.com/pe/">www.tasatop.com</a></p>


                                <div id="referencias">
                                                         
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href="https://en.wikipedia.org/wiki/Infomediary"><span style={{color:'#146cae'}}>Wikipedia</span></a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Deyanira Mendez</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 26 SETIEMBRE 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">MARKETPLACE</a></li>
                                <li><a href="javascript:void(0)">MERCADO VIRTUAL</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Marketplaces o mercados virtuales - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fmarketplaces-o-mercados-virtuales.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f32f00883a3c2ac" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df33a8c11b8df56c%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3ee715c83be2f4%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fmarketplaces-o-mercados-virtuales.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fmarketplaces-o-mercados-virtuales.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f27fb43dd36c428" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3b902df591c998%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3ee715c83be2f4%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fmarketplaces-o-mercados-virtuales.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/por-que-las-tasas-de-los-depositos-se-estan-reduciendo"><a class="page-link">Siguiente</a></Link>
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

export default blog11;