import React, { Component } from "react";
import Link from 'next/link'

const Blog08 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Inversiones? ¿Depósitos a Plazo Fijo? ¿CTS?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Inversiones? ¿Depósitos a Plazo Fijo? ¿CTS?</li>
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
                            <img class="" src="/assets/images/educacion/educacion08.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Cuando hay un superávit financiero, es decir, un exceso de efectivo que no está siendo utilizado, muchas veces se busca formas de invertirlo para generar la mayor rentabilidad (ganancia) y/o beneficio posible. La manera de gestionarlo va a depender de la aversión al riesgo que presente el inversionista. En este artículo hablaremos de tres productos financieros: inversiones en productos diferenciados, depósito a plazo fijo y CTS.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En primer lugar, algunos ejemplos de inversiones son los instrumentos de renta fija (bonos), en instrumentos de renta variable (acciones), bienes inmobiliarios, divisas, entre otros. Asimismo, se encuentran las inversiones en productos estructurados, los cuales son instrumentos de inversión combinados, generalmente, entre activos de bajo o casi nulo riesgo (como los bonos y depósitos) y activos subyacentes de alto riesgo. En este sentido, la rentabilidad de los productos estructurados va a depender de la evolución de los activos de alto riesgo. Además, contará con un elemento de protección que es el activo de bajo riesgo. (Forner, 2011; Credit Suisse, 2013).</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Es importante tener en cuenta que el mercado de los productos estructurados es una potencial alternativa de inversión para los ahorristas. Según la última Encuesta Nacional de Demanda del Sistema Financiero (ENDSF) del 2016, en el Perú ahorra un 66% de la población. Si bien no hay una encuesta de demanda del sistema financiero reciente, la proporción de adultos con cuentas de ahorro, a plazo fijo y cuenta corriente es de 38% según el último Reporte de Indicadores de Inclusión Financiera de los Sistemas Financiero, de Seguros y de Pensiones de la SBS (2018), lo que representa un aumento de 8% comparado al 2013.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Por lo anterior, se infiere que hay un incremento de posibles ahorristas bancarizados que pueden ser potenciales clientes a poder adoptar, de acuerdo a la cantidad de dinero que tengan ahorrado, productos estructurados que puedan incrementar su rentabilidad y el rendimiento de sus ahorros. Es esencial hacer hincapié que no necesariamente por tener una cuenta, los peruanos ahorran.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En segundo lugar, otra forma de invertir de manera segura, sencilla y rentable es el depósito a plazo fijo. La institución financiera escogida te brinda una tasa de interés determinada según el tiempo pactado. Normalmente, los intereses acumulados se retiran junto al capital cuando el plazo del depósito ha vencido. Es un producto de bajo riesgo porque los intereses se pactan al inicio de la transacción y no hay cambio o variabilidad de los mismos al culminar el plazo.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las tasas de interés dependen de cada institución financiera con la que se trabaje, pero regularmente las cajas municipales o rurales tienen tasas de interés más altas por su propio apetito de captación de dinero y su modelo de negocio. Por ende, la rentabilidad obtenida va a depender de la aversión al riesgo del inversionista, pues estos dos conceptos van de la mano; a mayor riesgo que asuma el inversionista, mayor será la rentabilidad obtenida. Actualmente, las tasas de rendimiento, oscilan entre 5% y 1%, lo cual se puede verificar en la plataforma virtual de la Superintendencia de Banca, Seguros y AFP.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>En tercer lugar, la CTS (Compensación por Tiempo de Servicio) es un “ahorro forzado” que se encuentra inscrito en nuestra legislación laboral y su fin es poder hacer uso de este cuando uno se encuentre sin empleo (despido o renuncia). Dicha reserva es efectuada por el empleador y puesto en una institución financiera a elección del empleado. No obstante, se puede disponer parte de la CTS en un equivalente al excedente de 4 sueldos. Muchas personas no saben cuánto ganan de interés por su CTS y desconocen que no hay restricción alguna para que puedan trasladar su CTS a otra institución financiera que pague mayor interés, o por algún convenio su empleador lo apertura con algún banco de su confianza.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Para hacer una buena gestión de tu CTS se recomienda priorizar el pago de tus deudas, especialmente las atrasadas. En caso de no tener deuda, puedes ahorrarlo y así tener un mayor porcentaje de ahorro para lograr alguna meta financiera. Además, puedes diversificar para un beneficio mayor, como invertir en un fondo mutuo o abrir un depósito a plazo. Tu mejor opción será aquella que tenga una tasa de interés mayor con un riesgo controlado o diversificado.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Finalmente, en el Perú se observa un avance en maduración y sofisticación financiera, sin embargo, aún hay mucho camino por recorrer en el desarrollo y difusión de instrumentos de ahorro e inversión con una sólida base de educación financiera desde la academia, gobierno y empresas privadas. A agosto del 2019, el monto en ahorros asciende a S/ 261,814 millones, el 40% corresponde a depósitos a plazo y 29% en depósitos a cuenta corriente. El ahorro promedio en el sector financiero asciende a S/ 10,816; y solo el ahorro promedio de las personas es de S/ 4,806. La participación del ahorro con respecto al PBI ascendía a 12% a junio del 2019. (Gestión - Especial de ahorro e inversión, octubre 2019, p.6).</p>

                                
                                <div id="referencias">
                            
                                <ul>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href= "https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/no-title/43DF7690B1B28B4C4476301B7B7DA012"><span style={{color:'#146cae'}}>Atehortúa, J. (2012). Mercado de Capitales y Portafolios de Inversión. In Mercado de Capitales y Portafolios de Inversión.</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><span style={{color:'#146cae'}}>Credit Suisse (2013). Productos estructurados: protección del capital.</span></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href= "https://gestion.pe/tu-dinero/deposito-plazo-fijo-beneficios-abrirlo-nnda-nnlt-252922-noticia/"><span style={{color:'#146cae'}}>Diario Gestión (2019). ¿Qué es un depósito a plazo fijo?.</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href= "https://gestion.pe/economia/cts-debes-beneficio-laboral-232156-noticia/?foto=3"><span style={{color:'#146cae'}}>Diario Gestión (2018). CTS: Todo lo que debes saber de este beneficio laboral.</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><span style={{color:'#146cae'}}>Forner, C. (2011). Tema 6: Opciones IV: Estructurado.</span></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href="https://intranet2.sbs.gob.pe/estadistica/financiera/2018/Diciembre/CIIF-0001-di2018.PDF"><span style={{color:'#146cae'}}>Superintendencia de Banca, Seguros y AFP. (2018). Perú: Reporte de indicadores de inclusión financiera de los sistemas financieros, de seguros y pensiones.</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><a target="_blank" href="https://www.sbs.gob.pe/app/retasas/paginas/retasasInicio.aspx?p=D"><span style={{color:'#146cae'}}>Superintendencia de Banca, Seguros y AFP (2019). Costo y Rendimiento de Productos Financieros.</span></a></li>
                                <li style={{listStyle: 'inside disc', fontSize: '0.88rem'}}><span style={{color:'#146cae'}}>Superintendencia de Banca, Seguros y AFP (2016). Encuesta Nacional de Demanda del Sistema Financiero (ENDSF).</span></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Patricia Meza, Héctor Guardamino y Diego Sánchez.</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 29 NOVIEMBRE 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">INVERSIONES</a></li>
                                <li><a href="javascript:void(0)">DEPÓSITO A PLAZO FIJO</a></li>
                                <li><a href="javascript:void(0)">CTS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Inversiones? ¿Depósitos a Plazo Fijo? ¿CTS? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                {/* <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/testimonial/01.jpg"></img>
                                </div> */}
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Patricia Meza, Héctor Guardamino y Diego Sánchez.</a>
                                    </div>
                                    <p class="iq-font-white">Estudiantes de Gestión y Alta Dirección - Pontificia Universidad Católica del Perú.</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finversiones-depositos-a-plazo-fijo-cts.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f1d09633eea21a4" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1b911035c67fa8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff19ed62e05eeca%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finversiones-depositos-a-plazo-fijo-cts.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finversiones-depositos-a-plazo-fijo-cts.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="fc4e5f9ac2de" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1c2653357c46e8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff19ed62e05eeca%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finversiones-depositos-a-plazo-fijo-cts.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/para-inversiones-es-mejor-bonos-o-acciones"><a class="page-link">Siguiente</a></Link>
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

export default Blog08;




