import React, { Component } from "react";
import Link from 'next/link'

const Blog14 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Qué es el Fondo de Seguro de Depósito? ¿Para qué sirve?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Qué es el Fondo de Seguro de Depósito? ¿Para qué sirve?</li>
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
                            <img class="" src="/assets/images/educacion/educacion14.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En muchas oportunidades hemos tenido la duda si todas las entidades financieras que existen son confiables o suficientemente solventes, si en caso de quiebra podrán afrontar o no el pago de nuestros ahorros.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Para el caso de los grandes bancos, la solidez lo respalda su marca, trayectoria o cantidad de clientes, no obstante, existen otras entidades financieras que no generan la misma confianza, porque sus marcas no son conocidas o porque su ámbito de negocio puede parecer distante además de su ubicación geográfica. Sin embargo, todas las entidades financieras reguladas por la Superintendencia de Banca y Seguros del Perú (SBS) tienen un Fondo de Seguro de Depósito (FSD).</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>El FSD fue creado en 1991 por el Estado Peruano mediante la Ley General de Instituciones Bancarias, Financieras y de Seguros, Decreto Legislativo Nº 637. Es una institución cuya misión es proteger los ahorros y CTS depositados en entidades supervisadas por la SBS: bancos, financieras, cajas municipales y cajas rurales. En caso de cierre de la entidad financiera, el FSD devolverá a los ahorristas el dinero depositado, hasta un monto máximo de cobertura que se actualiza trimestralmente según el Índice de Precios al Por Mayor (IPM). Es un monto fijo que sale publicado cada tres meses, el monto máximo de cobertura para el periodo Diciembre 2019 – Febrero 2020 es de S/ 100,661.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué tipo de productos de ahorro o depósitos se encuentran asegurados?</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Cuentas Corrientes</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Cuentas a Plazo</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Cuentas de Ahorro</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos CTS</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Certificados de Depósito No Negociables</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos en Garantía</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos para Cuotas Iniciales</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Plan Progresivo de Depósitos</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Retenciones Judiciales</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Intereses por Depósitos</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos con Contratos Swaps y/o compra futura</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos a la Vista Inactivos</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos de Ahorro Inactivos</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}>Depósitos a Plazo Inactivos</li>
                                </ul>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué sucede si tengo depósitos en más de una empresa miembro del fondo?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Esta cobertura se da por persona y por entidad financiera. Es decir, se cubre a una misma persona en cada una de las entidades financieras por el monto máximo establecido.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Qué debo hacer si la entidad financiera quiebra? ¿Cuándo recupero mi dinero?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Una vez declarada la disolución de la empresa financiera, la SBS cuidará que en un plazo no mayor a 60 días la entidad financiera en quiebra remita al FSD la relación de los asegurados cubiertos, indicando el monto a que ascienden sus derechos, diferenciando el correspondiente a capital e intereses.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En el caso no estén considerados en la relación, pueden formular el reclamo correspondiente ante la SBS en un plazo de 60 días de iniciada la exhibición de dicho documento, lo cual debe ser certificado notarialmente.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Tiene algún costo el Fondo de Seguro de Depósito?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>No le cuesta absolutamente nada contar con el FSD. Las entidades financieras autorizadas por la SBS a captar depósitos del público deben de manera obligatoria pagar primas trimestrales al FSD para que sus depositantes se encuentren asegurados.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Necesito inscribirme para acceder a la protección?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>El depositante no necesitas inscribirse en ninguna lista para contar con la protección del Seguro de Depósitos.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Te recomendamos, antes de depositar tu dinero, verifica que sea en entidades autorizadas por la SBS, así contará con el respaldo de este seguro.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Todas las entidades financieras que están afiliadas a TasaTop.com están supervisadas por la SBS, por lo tanto tienen el fondo de seguro de depósito.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a href="http://www.fsd.org.pe/paginas/10-Preg-frecuentes.html"><span style={{color:'#146cae'}}>FSD</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a href="https://gestion.pe/blog/te-lo-cuento-facil/2019/01/el-fondo-de-seguro-de-depositos-que-es-y-como-te-beneficia.html/?ref=gesr"><span style={{color:'#146cae'}}>Diario Gestión</span></a></li>
                                </ul>

                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Deyanira Méndez</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 30 AGOSTO 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">FSD</a></li>
                                <li><a href="javascript:void(0)">FONDO SEGURO DE DEPÓSITO</a></li>
                                <li><a href="javascript:void(0)">DEPÓSITOS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Qué es el Fondo de Seguro de Depósito? ¿Para qué sirve? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f50ce736136a58" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df17ca978b009de8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff23166e8fd958dc%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f35526f7f54c818" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfff4e93a6521c8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff23166e8fd958dc%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-es-el-fondo-de-seguro-de-deposito-para-que-sirve.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/invierte-con-estrategia"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/que-productos-financieros-de-ahorro-supervisa-la-SBS"><a class="page-link">Siguiente</a></Link>
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

export default Blog14;