import React, { Component } from "react";
import Link from 'next/link'

const Blog13 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Invierte con estrategia</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Invierte con estrategia</li>
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
                            <img class="" src="/assets/images/educacion/educacion13.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las estrategias de inversión son variadas y dependerán de lo que se quiera conseguir con su dinero. Muchas veces las personas se dejan llevar por lo que le dicen otras pero tenga presente que lo que fue bueno para uno, no lo será necesariamente para otro. Tres aspectos que al menos tienen que considerar son: objetivo, tiempo y riesgo que quieren asumir. Detallemos cada uno.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Objetivo</strong>, debe determinar cuál o cuáles son sus objetivos a alcanzar. Estos pueden ser de corto, mediano y largo plazo. Recuerde que irán cambiando de acuerdo a su posición laboral y familiar. Por tal motivo, tenga en consideración lo siguiente:</p>
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Conservación de capital</strong>, minimizar su riesgo de pérdida y buscar mantener su poder de compra. En estos casos, se busca que el retorno no sea menor que la inflación, ya que se perdería nivel adquisitivo. Generalmente esta es una estrategia para inversores con una fuerte aversión al riesgo.</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Apreciación de capital</strong>, lograr que su cartera crezca a lo largo del tiempo y esto sólo se da cuando obtenemos ganancias de capital. Se utilizan estrategias de largo plazo.</li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span><strong>Renta fija</strong>, lograr que su cartera genere rentas y no buscar obtener ganancias de capital. Esta clase de inversores buscan complementar sus ingresos con renta generada por la cartera para cumplir, entre otros, con sus gastos corrientes.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem', marginBottom: '2%'}}><span><strong>Retorno total</strong>, es similar al de apreciación de capital. En este caso los inversionistas quieren que su cartera crezca a lo largo del tiempo, de tal manera que el portafolio se incremente tanto con las ganancias de capital como reinvirtiendo la renta obtenida.</span></li>
                                </ul>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Tiempo</strong>, esta variable también es importante y definitivamente dependerá del objetivo que ha determinado. De acuerdo al punto anterior, cualquiera de las estrategias que asuma dependerá de su posición actual, tanto laboral como familiar. Algunos ejemplos de estrategias pueden ser, pagar la cuota de inscripción del colegio de sus hijos o ahorro para la universidad, cuota inicial para la compra de un inmueble, pago de una maestría, etc.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Como verán dependiendo del objetivo, los tiempos varían. A continuación un resumen de como consideran los inversionistas los tiempos en sus decisiones.</p>
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span><strong>Corto plazo</strong>, se considera a este período, un plazo menor a un año. Eso quiere decir que el dinero estará invertido en un tiempo muy corto.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span><strong>Mediano plazo</strong>, por lo general se considera un período que va de uno a tres años aunque algunos consideran que el rango es hasta cinco años.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem', marginBottom: '2%'}}><span><strong>Largo plazo</strong>, la gran mayoría de inversionistas tienen en cuenta que este período es de cinco años a más.</span></li>
                                </ul>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}><strong>Tolerancia al riesgo</strong>, este es otro aspecto de suma importancia. Muchas empresas financieras realizan un test a cada inversor para determinar su perfil de riesgo. Este test consiste en un cuestionario de preguntas sobre su edad, conocimiento de mercados, objetivo, entre otras más. Es relevante saber antes de invertir, cual es el riesgo máximo que quiere asumir con su dinero. La buena noticia es que el riesgo es una variable que podemos medir y decidir si es adecuado o no para nosotros.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Algunos consejos adicionales:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>	No invierta en algo que no entienda.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>Diversifique en distintos activos.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>No se dejé llevar por rendimientos pasados.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>Verifique la parte tributaria.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>Tenga muy en claro comisiones y otros gastos que incurra en una determinada inversión.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>Lo que es bueno para otro no necesariamente lo será para uno.</span></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><span>Tenga claro la tasa de inflación.</span></li>
                                </ul>
                                
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Manuel Lozano Merino</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 06 SETIEMBRE 2019 </a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">CAPITALES</a></li>
                                <li><a href="javascript:void(0)">RENTA FIJA</a></li>
                                <li><a href="javascript:void(0)">INVERSIONES</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Invierte con estrategia - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>

                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/manuel-lozano.jpg" style={{width: '90px', height: '90px', marginTop: '30%'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Manuel Lozano Merino</a>
                                    </div>
                                    <p class="iq-font-white">Ejecutivo de negocios con amplia experiencia en buscar oportunidades de inversión en el mercado local e internacional. La gran enseñanza en mi labor como asesor financiero la aprendí de las crisis económicas que han sucedido en los últimos 25 años en el mundo.<br></br>
Me motiva ayudar a las personas a generar prosperidad y que puedan alcanzar sus objetivos y meta de acuerdo a lo que realmente están buscando o necesitando.
</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finvierte-con-estrategia.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f4455a01eec13" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3978677c322b84%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff10675e7bb207e%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finvierte-con-estrategia.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/invierte-con-estrategia.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finvierte-con-estrategia.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f2892504d5b307c" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfa7a956e8f6d18%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff10675e7bb207e%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finvierte-con-estrategia.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/por-que-las-tasas-de-los-depositos-se-estan-reduciendo"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/que-es-el-fondo-de-seguro-de-deposito-para-que-sirve"><a class="page-link">Siguiente</a></Link>
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

export default Blog13;