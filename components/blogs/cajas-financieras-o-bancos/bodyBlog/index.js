import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};


const Blog26 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Cajas, Financieras o Bancos</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Cajas, Financieras o Bancos</li>
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
                            <img class="" src="/assets/images/educacion/educacion26.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Hace unas semanas una cliente con una buena suma de dinero nos llamó pidiendo información sobre el proceso de subasta de tasas de plazo fijo en TasaTop, luego de la explicación, nos confesó que “no sabía de la regulación que tiene la SBS en todas las entidades financieras del sistema ni tampoco acerca del Fondo de Seguro de Depósito para mis ahorros”. La señora nunca había trabajado con Cajas Municipales o Financieras y desconocía el respaldo de los grupos económicos detrás, en el caso específico de dos de nuestros socios.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Entonces, ¿Por qué sí confiar en una caja o una financiera? ¿Qué similitudes tienen éstas instituciones frente a la gran banca comercial? ¿Cuáles son las diferencias?</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Aquí algunas respuestas:</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Similitudes</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Misma regulación.</strong> Las Cajas y Financieras están reguladas por la SBS<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup>, tal cual lo hace con la Banca tradicional. Los estándares de control y supervisión son realmente de primer nivel y hoy en día es difícil encontrarse con alguna sorpresa de quiebra o desfalco a gran escala.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Fondo de Seguro de Depósito.</strong> Todas las instituciones del sistema financiero son participantes del Fondo, éste cubre sus ahorros hasta por S/ 97,604 (junio – agosto 2017) ante cualquier riesgo de quiebra, poco probable hoy en día<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup>.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Directorios y gerencias de respaldo.</strong> Las Cajas y Financieras poseen Directorios y Gerencias de primer nivel, muchos con experiencia en banca pero que se han desarrollado nuevos negocios adaptando su oferta comercial a segmentos donde la banca tradicional no ha llegado aún.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Diferencias</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Los objetivos sociales.</strong> Los Bancos y Financieras buscan ganar dinero y retribuyen utilidades a sus accionistas mayoritariamente privados, mientras que las Cajas están conformados por un Consejo municipal y las utilidades las distribuyen en 50% a la ciudad de origen a través obras de la Municipalidad<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">3</a></sup>.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Las cajas crecen más en Depósito a Plazo Fijo.</strong> En 2016, el mercado del depósito a plazo fijo creció en 2%, la Banca sin duda es el líder indiscutible del mercado con 65% de participación, luego vienen las Cajas y Financieras con 26% y 8% respectivamente. Sin embargo, el crecimiento de las cajas versus el 2015 ha sido de 14% y 11%, contrario al decrecimiento de -2% de la Banca<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">4</a></sup>. La agresividad comercial en tasas de interés y condiciones de las Cajas y Financieras vienen ganando terreno a la Banca tradicional.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Especialización e inclusión.</strong> Las Cajas y Financieras han desarrollado a profundidad su modelo de negocio al llegar a satisfacer la necesidad de su consumidor situado en la base de la pirámide, no por algo el Perú ha sido considerado uno de los países con mejor clima para las microfinanzas<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">5</a></sup>. Las cajas buscan atender a poblaciones y grupos minoritarios facilitando la inclusión financiera a través de enfoques innovadores. La cercanía al cliente ha hecho que el conocimiento del segmento sea superior al de la Banca, los equipos de desarrollo de negocios ubicados en provincias están continuamente experimentando adaptaciones de productos.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Mejores tasas de interés a plazo fijo.</strong> Evidentemente las Cajas y Financieras al atender a la base de la pirámide también incurre en riesgos mayores pero controlados, los que se refleja en los índices de morosidad ligeramente superiores a la Banca pero también con mayores tasas activas. Esta rentabilidad del negocio activo se traslada en mejores tasas pasivas, las cuales mejoran los rendimientos de los depósitos a plazo y que a su vez dotan del fondeo necesario para los negocios que impulsan, haciendo de éste un círculo virtuoso.</p>
                                <div id="referencias">
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En resumen, tanto los Bancos como Cajas y Financieras enriquecen el entorno financiero peruano, sin embargo los segundos han atendido el mercado con más velocidad los últimos años, desarrollando modelos más cercanos a los segmentos más deprimidos de la población, incrementando el consumo, bancarizando y generando una mayor red de atención a nivel nacional. En tasatop estamos orgullosos de poder trabajar con ambas entidades para crecer nuestro sistema financiero y ofrecer las mejores condiciones a nuestros clientes.</p>
                                
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias</h4>
                                
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><strong><sup style={{color:'#146cae'}}>1</sup></strong><span>Superintendencia de Banca, Seguros y AFP. </span><a target="_blank" href="https://www.sbs.gob.pe/" style={{color:'#146cae'}}>http://www.sbs.gob.pe</a></li>
                                <li style={{listStyle: 'inside disc'}}><strong><sup style={{color:'#146cae'}}>2</sup></strong><span>Fondo de Seguro de Depósito. </span><a target="_blank" href="http://www.fsd.org.pe/" style={{color:'#146cae'}}>http://www.fsd.org.pe</a></li> 
                                <li style={{listStyle: 'inside disc'}}><strong><sup style={{color:'#146cae'}}>3</sup></strong><span>Ley General de Banca y Seguros.</span></li>
                                <li style={{listStyle: 'inside disc'}}><strong><sup style={{color:'#146cae'}}>4</sup></strong><span>Superintendencia de Banca, Seguros y AFP. </span><a target="_blank" href="https://www.sbs.gob.pe/app/pp/seriesHistoricas2/paso1.aspx" style={{color:'#146cae'}}>http://www.sbs.gob.pe/app/pp/seriesHistoricas2/paso1.aspx</a></li>
                                <li style={{listStyle: 'inside disc'}}><strong><sup style={{color:'#146cae'}}>5</sup></strong><span>Microscopio Global 2016. Análisis del entorno para la inclusión financiera. The Economist Intelligence Unit. </span><a target="_blank" href="http://mifftp.iadb.org/website/publications/fbec31e3-97e6-45f8-a827-176366ea5d37.pdf" style={{color:'#146cae'}}>http://mifftp.iadb.org/website/publications/fbec31e3-97e6-45f8-a827-176366ea5d37.pdf</a></li>
                                </ul>
                                </div>


                                
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 19 JULIO 2017</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">TASA A PLAZO FIJO</a></li>
                                <li><a href="javascript:void(0)">MEJORES TASAS DE INTERÉS A PLAZO FIJO</a></li>
                                <li><a href="javascript:void(0)">DEPÓSITOS A PLAZO</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Cajas, Financieras o Bancos&amp;url=https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcajas-financieras-o-bancos.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f42f5c527ddc14" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1d27c5e5b3baa4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff361dc63586554%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcajas-financieras-o-bancos.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/cajas-financieras-o-bancos.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcajas-financieras-o-bancos.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f161228d525b714" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df38afb1434e48e%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff361dc63586554%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcajas-financieras-o-bancos.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/depositos-a-plazo-para-empresas"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/fintech-el-mercado-de-moda"><a class="page-link" >Siguiente</a></Link>
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

export default Blog26;