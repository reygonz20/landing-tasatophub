import React, { Component } from "react";
import Link from 'next/link'

const blog10 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Qué son las clasificadoras de riesgo?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Qué son las clasificadoras de riesgo?</li>
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
                            <img class="" src="/assets/images/educacion/educacion10.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Según el Instituto Peruano de Economía, las clasificadoras de riesgo califican el riesgo crediticio de todo tipo de obligaciones financieras, es decir, la probabilidad de incumplimiento. Las calificaciones otorgadas pretenden ser opiniones profesionales, especializadas e independientes acerca de la capacidad y voluntad de pago de una empresa o entidad privada o pública. Para emitir su opinión, las calificadoras estiman, con criterios cuantitativos y cualitativos, la probabilidad de que el calificado incumpla con sus obligaciones contractuales o legales.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Dada esta estimación, otorgan un calificativo que busca medir de una manera comparable el riesgo crediticio de los diferentes títulos. En el caso peruano, cuando se dice que el país goza de la calificación de grado de inversión, se refiere a que el gobierno peruano tiene buena capacidad de pago y es probable que cumpla sus deudas.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Principios generales</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}>Calidad e integridad del proceso de clasificación.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}>Independencia, objetividad y conflictos de interés.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}>Transparencia y divulgación oportuna de la clasificación de riesgo.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}>Las metodologías de clasificación y el significado de las clasificaciones asignadas.</li>
                                <li style={{listStyle: 'inside disc', marginBottom: '2%', marginTop: '2%', textAlign: 'justify', fontSize: '0.88rem'}}>Confidencialidad y reserva de la información.</li>
                                </ul>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿Cuál es la importancia que tienen las empresas clasificadoras de riesgo?</h4>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>De esta manera, los inversores pueden conocer y comparar el riesgo de estos valores, sobre la base de una opinión especializada. Cuanto mejor sea la clasificación de riesgo mayor será la posibilidad de que la empresa cumpla con las obligaciones de pago asumida, sin embargo, el dictamen de clasificación no constituye una recomendación para comprar, vender o mantener un valor clasificado, es tan sólo una opinión respecto a la calidad del valor.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Según la legislación vigente en el Perú, los emisores de bonos y otras obligaciones deben contar con la opinión de al menos dos empresas clasificadoras de riesgo. Las clasificadoras de riesgo que a la fecha operan en el Perú son Apoyo & Asociados Internacionales S.A. Clasificadora de Riesgo, Clasificadora de Riesgo Pacific Credit Rating SAC, Class & Asociados S.A. Clasificadora de Riesgo, Equilibrium Clasificadora de Riesgo S.A.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En TasaTop.com sólo algunas instituciones financieras tienen la calificación de riesgo crediticio correspondiente, para más información de ellas haga click <a target="_blank">aquí</a>.</p>
                                
                                <div id="referencias">
                                                         
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href="https://www.ipe.org.pe/portal/clasificadoras-de-riesgo/"><span style={{color:'#146cae'}}>IPE</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href="https://www.sbs.gob.pe/supervisados-y-registros/registros/otros-registros/empresas-clasificadoras-de-riesgo"><span style={{color:'#146cae'}}>SBS</span></a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Deyanira Mendez</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 04 OCTUBRE 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">CLASIFICADORAS DE RIESGO</a></li>
                                <li><a href="javascript:void(0)">PERU</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Qué son las clasificadoras de riesgo? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-son-las-clasificadoras-de-riesgo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f344c0c2efef7e" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3e24c5853d1804%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff21adf4105802e8%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-son-las-clasificadoras-de-riesgo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/que-son-las-clasificadoras-de-riesgo.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-son-las-clasificadoras-de-riesgo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f1c3d530c0638fc" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2e724e483505b4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff21adf4105802e8%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fque-son-las-clasificadoras-de-riesgo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/para-inversiones-es-mejor-bonos-o-acciones"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/marketplaces-o-mercados-virtuales"><a class="page-link">Siguiente</a></Link>
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

export default blog10;