import React, { Component } from "react";
import Link from 'next/link'

const Blog22 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Por qué son importantes las Fintech?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Por qué son importantes las Fintech?</li>
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
                            <img class="" src="/assets/images/educacion/educacion22.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Hoy en día el hablar de fintech se viene haciendo más cotidiano, sin embargo para quienes no lo saben, Fintech es la unión de los términos “finanzas y tecnología” y se utiliza para denominar a empresas que ofrecen servicios financieros a través de tecnologías modernas. <a style={{color:'#146cae'}} target="_blank" href="https://assets.kpmg/content/dam/kpmg/es/pdf/2017/11/fintech-innovacion-servicio-cliente.pdf">Según el informe de KPMG</a>, se estima más de 15,000 empresas tecnológicas Fintech en todo el mundo, con EEUU y Reino Unido en la cabeza de este movimiento. En América Latina, según el informe <a style={{color:'#146cae'}} target="_blank" href="https://publications.iadb.org/publications/spanish/document/FINTECH-Innovaciones-que-no-sab%C3%ADas-que-eran-de-Am%C3%A9rica-Latina-y-Caribe.pdf">Emprendimientos Fintech en América Latina</a> de Finnovista del año pasado, existen alrededor de 703 emprendimientos en 15 países, con una oferta de soluciones que incluye todos los segmentos y las tecnologías. Por ejemplo: plataformas de financiación alternativa, pagos, gestión de finanzas personales, entre otros. <a style={{color:'#146cae'}} target="_blank" href="https://www.finnovista.com/fintech-radar-peru-45-startups/">En Perú en el 2017 se mapearon 46 empresas Fintech</a>, enfocadas principalmente en préstamos en línea, pagos y remesas y comercio/mercado.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las Fintech son una tendencia global donde innovaciones tecnológicas ayudan a las finanzas a ser más democráticas y eficientes. Algunas empresas grandes pioneras en el mundo Fintech son: PayPal, Bitcoin, Forex, entre otros. Cualquier tecnología que innove en el amplio campo de los servicios financieros se le podría considerar como tal, existe un abanico de posibilidades en créditos, ahorros, cambio de moneda, medios de pago, cobranzas, factoring, scoring crediticio, y muchos más. Entonces, ¿Por qué resultan ser son importantes las fintech hoy? Porque nuestro mundo hoy es también digital y las finanzas no son la excepción. El mayor de desarrollo de la humanidad fue a través de internet hacia finales del siglo XX, hoy cada década transcurrida significa un crecimiento exponencial en avances digitales. En esta línea de digitalización y bienestar la importancia de las fintech radica en:</p>
                            <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Facilitan el acceso al mundo financiero digital,</strong> cualquier persona con acceso a internet o telefonía (ahora servicios básicos) está en la posibilidad de gozar de estos servicios, sin ir al banco y desde cualquier ubicación.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Brindan servicios más especializados enfocados a las necesidades del cliente, flexibles y ágiles,</strong> atienden segmentos o nichos de clientes que hoy en día son desatendidos o excluidos por la banca tradicional por falta de capacidades y/o flexibilidad.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Reducen los costos,</strong> brindan precios acorde a oferta y demanda descremando las posibilidades de pago del cliente y rentabilizando inversiones fijas en tecnología. Al ser intensiva en tecnología, la reducción de gastos de personal, servicios, alquileres entre otros derivan en mayores márgenes y traslados de beneficios al cliente.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Aumentan la velocidad del servicio al ser mayormente “monoproducto”,</strong> se enfocan en un servicio específico lo cual permite especialización y eficiencia en el modelo de negocio.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Educan y asesoran al cliente,</strong> al estar más cerca a ellos existen la posibilidad de crear una mejor relación y fidelización en el tiempo. En países de nuestra región sigue siendo un reto la educación financiera y creemos que las fintech están en la posibilidad de cubrir brechas también de inclusión financiera.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Reactivan la innovación y la competencia en toda la industria financiera.</strong> Es evidente que los servicios financieros hace diez años y los de ahora son claramente diferentes, esta ola disruptiva ha hecho que algunas instituciones viren su atención hacia start ups que con pocos recursos y mucho ingenio han logrado solucionar problemas que ellas no pudieron resolver (o no sabían que existían).</li>
                            </ol>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Gracias a las fintech los niveles de bienestar del cliente vienen en aumento haciendo funcionar al mercado desde muchas aristas. Las reales dimensiones de este tipo de emprendimientos tecnológicos recién se mostrarán en 10 años, cuando las generaciones nativas de internet maximicen su uso o inventen un nuevo orden.</p>

                            <div id="referencias">
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes</h4>
                                
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://assets.kpmg/content/dam/kpmg/es/pdf/2017/11/fintech-innovacion-servicio-cliente.pdf"><span style={{color:'#146cae'}}>https://assets.kpmg.com/content/dam/kpmg/es/pdf/2017/11/fintech-innovacion-servicio-cliente.pdf</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://publications.iadb.org/bitstream/handle/11319/8265/FINTECH-Innovaciones-que-no-sabias-que-eran-de-America-Latina-y-Caribe.pdf"><span style={{color:'#146cae'}}>https://publications.iadb.org/bitstream/handle/11319/8265/FINTECH-Innovaciones-que-no-sabias-que-eran-de-America-Latina-y-Caribe.pdf</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.finnovista.com/fintech-radar-peru-45-startups/"><span style={{color:'#146cae'}}>https://www.finnovista.com/fintech-radar-peru-45-startups/</span></a></li>
                                </ul>
                            </div>
                            </div>                         
                            
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 20 SEPTIEMBRE 2018</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">FINTECH</a></li>
                                <li><a href="javascript:void(0)">TECNOLOGÍA</a></li>
                                <li><a href="javascript:void(0)">FINANZAS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Por qué son importantes las Fintech? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fpor-que-son-importantes-las-fintech.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f10c2fc45838b74" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1864a447ecb96%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff233d91d70cee3c%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fpor-que-son-importantes-las-fintech.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/por-que-son-importantes-las-fintech.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fpor-que-son-importantes-las-fintech.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="fbb5d3b3840c8" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfde58f8a87a7bc%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff233d91d70cee3c%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fpor-que-son-importantes-las-fintech.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/11-respuestas-para-sacarle-el-jugo-a-tu-CTS"><a class="page-link">Siguiente</a></Link>
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

export default Blog22;