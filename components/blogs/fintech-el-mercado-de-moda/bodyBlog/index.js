import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog27 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Fintech, el mercado de moda</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Fintech, el mercado de moda</li>
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
                            <img class="" src="/assets/images/educacion/educacion27.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>El término fintech proviene de la unión de las palabras finance y technology (finanzas y tecnología en Inglés). Por tanto, Fintech es el sector económico dedicado a ofrecer soluciones financieras, en seguros, operaciones bancarias y financiamiento con ayuda de la tecnología, ya sea vía web o vía aplicación móvil. Es decir, las empresas Fintech son startups (o empresas vía internet en crecimiento) que ofrecen servicios financieros.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las Fintech no son una tendencia reciente en el mundo. La primera empresa fintech fue PayPal, empresa estadounidense fundada en 1998 que permite realizar pagos y transferencias entre usuarios por medio de la web. Desde ese entonces, las fintech se han desarrollado con funciones diferentes, más allá de solo realizar transferencias bancarias. Los productos van desde consulta de tasas de interés hasta educación financiera. Según la fintech española Fellow Founders, al año 2020 más del 60% de los clientes de banca hará uso de la tecnología para acceder a estos servicios. Además, el aumento en la venta de aparatos móviles es bastante evidente: cada vez más personas poseen un Smartphone.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Analizando el mercado latinoamericano apreciamos que según cantidad de fintech, el líder es México con 158 empresas. En segundo lugar se encuentra Brasil con 130 seguidos de Colombia, Argentina y Chile con 77, 60 y 56 fintech respectivamente<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup>. Sin embargo, un gran problema en Latinoamérica es la baja bancarización pues solo el 52% de la población tiene algún tipo de depósito o cuenta bancaria siendo este el mayor reto (u oportunidad) en esta parte del mundo.</p>
                            <div id="referencias">
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><a target="_blank" href="https://www.finnovista.com/fintech-radar-peru-45-startups/" style={{color:'#146cae'}}>Según el último informe de Finnovista</a>, en Perú existen 47 Fintech concentradas en número en el segmento de préstamos en línea 24% (Lending), Pagos y remesas 21% (Payments and Remittances) y Comercio y Mercados 11% (Trading & Markets). Somos un mercado en desarrollo dado que nuestra tasa de bancarización es más baja que el total latinoamericano con 40%, el país con más bajo índice de bancarización en la región. Debido a la baja tasa de bancarización y la informalidad que se presenta en nuestro país, las fintech no representan aún una amenaza para la banca tradicional como si ocurre en países con mayor participación como Inglaterra (líder mundial en este rubro). Para que las fintech empiecen a ganar terreno, primero la población debe empezar a ver a la banca tradicional con otros ojos. Esto significa reducir la alta informalidad, la pobreza, la falta de infraestructura y la desprotección al acreedor y por otra parte aumentar la educación financiera. En otras palabras, en nuestro país las fintech podemos trabajar de la mano con los Bancos en la inclusión financiera y crecimiento del mercado.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem', color:'#146cae'}}><sup>1</sup>Instituto Iberoamericano de Mercados de Valores</p>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Webs Consultadas:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><a target="_blank" href="https://semanaeconomica.com/economia-finanzas/banca/204233-las-fintech-se-abren-paso-pero-aun-no-sacuden-el-mercado-peruano"><span style={{color:'#146cae'}}>Semana Economica</span></a></li>
                                <li style={{listStyle: 'inside disc'}}><a target="_blank" href="https://elcomercio.pe/economia/negocios/bancarizacion-peru-mitad-camino-recorrido-noticia-1826982/"><span style={{color:'#146cae'}}>El Comercio</span></a></li>
                                <li style={{listStyle: 'inside disc'}}><a target="_blank" href="https://www.midpointfx.com/single-post/2017/03/07/Que-es-Fintech"><span style={{color:'#146cae'}}>Midpointfx</span></a></li>
                                <li style={{listStyle: 'inside disc'}}><a target="_blank" href="https://www.fellowfunders.es/blog/2017/02/21/fintech-el-mundo-financiero-se-mueve/"><span style={{color:'#146cae'}}>Fellowfunders</span></a></li>
                                <li style={{listStyle: 'inside disc'}}><a target="_blank" href="https://hipertextual.com/2016/06/fintech-latinoamerica"><span style={{color:'#146cae'}}>Hipertextual.</span></a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Fernando Sebastiani, Gisela Peralta</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 28 JUNIO 2017</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">FDS</a></li>
                                <li><a href="javascript:void(0)">FONDO DE SEGURO DE DEPÓSITO</a></li>
                                <li><a href="javascript:void(0)">DEPOSITO A PLAZO FIJO</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Fintech, el mercado de moda&amp;url=https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>

                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/fernando-sebastiani.jpg" style={{width: '90px', height: '90px'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Fernando Sebastiani</a>
                                    </div>
                                    <p class="iq-font-white">Customer Sales Executive responsible for supporting business expansion in Peru and Chile through the pavement industry. Looking for new clients to help them for keeping their roads at the best level.
Bachelors Degree in Business Management at Universidad de Piura, Lima, Perú.</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Ffintech-el-mercado-de-moda.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f29bd0a29e800e4" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfc6f5ebfeaa1a4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2fb81b7bda028%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Ffintech-el-mercado-de-moda.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/fintech-el-mercado-de-moda.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Ffintech-el-mercado-de-moda.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f11d82478e0648c" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df4150ac38e996c%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2fb81b7bda028%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Ffintech-el-mercado-de-moda.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/cajas-financieras-o-bancos"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/fondo-de-seguro-de-deposito"><a class="page-link">Siguiente</a></Link>
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

export default Blog27;