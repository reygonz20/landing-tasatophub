import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog20 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Cooperativas de Ahorro y Crédito en el Perú</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Cooperativas de Ahorro y Crédito en el Perú</li>
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
                            <img class="" src="/assets/images/educacion/educacion20.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <h4 style= {{marginBottom: '2%'}}>¿Qué son las cooperativas?</h4>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>El régimen cooperativista nació a mediados del siglo XIX en Inglaterra, tiene como pilares la voluntaria adhesión de los socios, la autogestión de la empresa sin interferencia de externos y se destinan todas las ganancias a favor de sus socios.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En Perú, la Ley General de Cooperativas fue aprobada por Decreto Legislativo N° 85 del 20 de mayo de 1981 y sus modificaciones se recogen en el Texto Único Ordenado aprobado por Decreto Supremo N° 074-90-TR publicado en 1990.</p>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Cuáles son los tipos de cooperativas?</h4>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las más conocidas son las agrarias, pesqueras, artesanales, industriales, de vivienda, de servicios educativos, entre otras. Sin embargo las Cooperativas de ahorro y créditos (Coopac) han estado últimamente en los medios de comunicación los últimos meses, la razón: la falta de supervisión directa por parte de la Superintendencia de Banca, Seguros y AFPs (SBS).</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Hoy en día las Coopac son supervisadas por la Federación Nacional de Cooperativas de Ahorro y Crédito del Perú (FENACREP), entidad encargada de velar por la solidez financiera y económica de las Coopac no autorizadas a captar fondos públicos a través de supervisiones in y extra situ. Una Coopac es constituida para captar ahorros de sus socios y generar préstamos a quienes lo necesiten en cualquier eventualidad, emprendimiento, educación, gastos, entre otros. Técnicamente no manejan fondos públicos debido a que los socios aportan capital a la Coopac, por lo que se convierten en privados. Sin embargo, cualquier persona natural o jurídica puede acceder si pasa el proceso de afiliación de la cooperativa.</p>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Son competitivas las tasas de préstamo o captación de las cooperativas de ahorro y crédito?</h4>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Sí. Las tasas de interés pagadas (ahorros) o cobradas (créditos) son tan o más competitivas a las encontradas en el sistema financiero no bancario supervisado. Cabe mencionar que hoy existen 134 cooperativas según ranking FENACREP<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup> sin embargo según un estudio de Macroconsult esta misma fuente menciona que existen más de 500 en el país que no están supervisadas y algunas fueron presuntamente creadas para lavado de activos entre otros delitos<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup>. Es importante señalar que la labor de supervisión de las cooperativas la ejerce la FENACREP quien vela por la transparencia de la información y el cumplimiento normativo.</p>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué tan grandes son las cooperativas de ahorro y crédito?</h4>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Existen 84 Coopac con activos mayores a 1500 UIT, éstas administran más de 12 mil millones de soles; si las comparamos con el Sistema financiero tradicional representan solo el 3% del total de activos. Sin embargo si desglosamos esta cifra, el total de activos administrados por las Coopac es similar al volumen de activos que tienen las Financieras y la mitad de activos que las Cajas Municipales (CMAC) manejan en conjunto. Cifras para nada despreciables.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Algunas de las características de las Coopac:</p>
                            <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Están exoneradas del IGV, al igual que las otras empresas del sistema financiero.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>La mayoría de sus operaciones no están gravadas con Impuesto a la Renta.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>Están exoneradas de ITF, salvo aquellas captaciones de ahorros del público.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}>A diferencia del Sistema Financiero tradicional que goza del Fondo de Seguro de Depósito (FSD), algunas Coopac cuentan con el Fondo de Garantía de Depósitos (FGDE<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">3</a></sup>) que cubre los depósitos de los socios hasta por S/ 20,000.</li>                                    
                            </ol>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Son confiables?</h4>
                            <div id="referencias">
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Como cualquier institución financiera, la confianza que generará está asociada a la transparencia de la información, a sus políticas de manejo de riesgo, a la salud de los Estados financieros, a la regulación y a la integridad del equipo gerencial y el Directorio. No satanicemos a las Coopac, existen varias de prestigio nacional y con fondeo internacional que tienen estándares bancarios de primer nivel, así como políticas claras y cumplimiento normativo rígido. Se viene un gran desafío para la SBS quien tendrá que triplicar esfuerzos para seguir velando por la salvaguarda de los fondos del sistema financiero nacional.</p>
                            
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes</h4>
                                
                            <ul>
                            <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.produce.gob.pe/index.php/cooperativas/que-es-una-cooperativa"><span style={{color:'#146cae'}}>https://www.produce.gob.pe/index.php/cooperativas/que-es-una-cooperativa</span></a></li>
                            <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="blank" href="https://www.aciamericas.coop/IMG/pdf/cooperu.pdf"><span style={{color:'#146cae'}}>https://www.aciamericas.coop/IMG/pdf/cooperu.pdf</span></a></li>
                            <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://elcomercio.pe/economia/peru/macroconsult-son-cooperativas-operan-noticia-524287"><span style={{color:'#146cae'}}>https://elcomercio.pe/economia/peru/macroconsult-son-cooperativas-operan-noticia-524287</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.fenacrep.org/"><span style={{color:'#146cae'}}><sup>1</sup>https://www.fenacrep.org</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://elcomercio.pe/economia/peru/macroconsult-son-cooperativas-operan-noticia-524287"><span style={{color:'#146cae'}}><sup>2</sup>https://elcomercio.pe/economia/peru/macroconsult-son-cooperativas-operan-noticia-524287</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.fenacrep.org/53-55-coopac-asociadas"><span style={{color:'#146cae'}}><sup>3</sup>https://www.fenacrep.org/53-55-coopac-asociadas</span></a></li>
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
                                <li><a href="javascript:void(0)">EDUCACIÓN FINANCIERA</a></li>
                                <li><a href="javascript:void(0)">FINTECH</a></li>
                                <li><a href="javascript:void(0)">COOPERATIVAS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Cooperativas de Ahorro y Crédito en el Perú - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/cCooperativas-de-Ahorro-y-Credito-en-el-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCooperativas-de-Ahorro-y-Credito-en-el-Peru.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="fb1ba9489b2e6" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6c9df7e3fb42c%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff372a1229bb89a8%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCooperativas-de-Ahorro-y-Credito-en-el-Peru.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/Cooperativas-de-Ahorro-y-Credito-en-el-Peru.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCooperativas-de-Ahorro-y-Credito-en-el-Peru.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '511px'}}><iframe name="f28a01158fb2bf" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dffc62f8428beb%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff372a1229bb89a8%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2FCooperativas-de-Ahorro-y-Credito-en-el-Peru.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '511px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/productos-de-inversion-en-2019"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/como-puedo-convertir-una-tasa-efectiva-anual-en-una-de-menor-plazo"><a class="page-link" >Siguiente</a></Link>
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

export default Blog20;