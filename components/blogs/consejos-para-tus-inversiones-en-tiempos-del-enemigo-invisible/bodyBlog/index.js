import React, { Component } from "react";
import Link from 'next/link'

const Blog07 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Consejos para tus inversiones en tiempos del enemigo invisible</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Consejos para tus inversiones en tiempos del enemigo invisible</li>
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
                            <img class="" src="/assets/images/educacion/educacion07.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            <p style={{textAlign: 'justify'}}>Hoy el mundo se está viendo paralizado por un enemigo microscópico que ha puesto en jaque a la economía mundial y ha generado entre los inversionistas y entidades financieras gran incertidumbre. Hablamos del ya conocido COVID-19, un virus invisible para la vista humana pero que se hace sentir tanto en la economía nacional como la mundial. Para esto los diferentes gobiernos se vieron obligados a aplicar medidas económicas para amortiguar el impacto y fomentar la inversión, es por esta razón que nos hemos creído conveniente dar algunos consejos que esperamos sean claros y prácticos en cuanto a saber qué hacer con tu capital.</p>
                                <ul>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Cuentas de ahorro<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}><strong>Mantén la liquidez suficiente de corto plazo en tus cuentas de ahorro</strong> a través de tus tarjetas de débito. Dispón del dinero suficiente para cubrir gastos de primera necesidad y evitar disponer de un Depósito a plazo fijo que mantiene una rentabilidad asegurada en mediano plazo.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Depósitos a Plazo Fijo<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Si tienes un depósito a plazo fijo con una buena tasa de interés <strong>se recomienda mantenerlo y no retirar el dinero</strong> ya que la tendencia de las tasas es hacia la baja y será difícil volver a conseguir en el corto plazo una tasa atractiva. Recordemos que la semana pasada el BCRP redujo la Tasa de Referencia por lo que en pocas semanas el sistema financiero reducirá tasas activas y pasivas.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Fondos mutuos<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>La Bolsa de Valores de Lima inició la semana con tendencia a la baja retrocediendo 2.09% en su índice general, esto tras cumplirse la primera semana de aislamiento social en el Perú, mientras que el índice selectivo retrocedió 1.77%, Diario La República, 23 de Marzo 2020. Estas caídas siguen afectando los resultados de los fondos mutuos, la volatilidad registrada afectó el retorno de aquellos fondos en los cuales el riesgo es mucho mayor como el fondo de renta variable por ejemplo. Si tienes dinero invertido en este tipo de fondos evidentemente has perdido dinero desde hace unas semanas y podrías pensar que rescatar sería una decisión acertada. Sin embargo, a largo plazo no sería beneficioso para ti ya que cuando la economía vuelva a estabilizarse el rebote que se dará en los fondos de mayor volatilidad volverán a percibir ganancias con mayor rapidez, es por esta razón que <strong>se recomienda no rescatar y mantenerlo a largo plazo.</strong> Si tienes la opción de efectuar un rescate pequeño y trasladarlo a un instrumento de renta fija, <strong>hazlo lo antes posible debido a que las tasas de Plazo fijo tienen tendencia a la baja.</strong></p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>AFP<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>La Asociación de Administradoras de Fondos de Pensiones (AAFP) informó que viene trabajando en una propuesta con el Ministerio de Economía y Finanzas (MEF) que busca evaluar alternativas para enfrentar la crisis por el coronavirus. En cuanto a las pérdidas de los fondos de los trabajadores, indicó que las personas que están trasladándose del Fondo 3 al fondo 1 pueden estar materializando temporalmente la pérdida, porque en lugar de esperar al rebote que va a tener su fondo 3, se están moviendo con lo que hoy día tienen, que es menor a lo que tenían hace 2 meses. En caso el escenario se vea pesimista es preciso <strong>recomendar no cambiar de tipo de fondos, sino mantenerlo en el mismo para generar mayor rentabilidad al momento de la estabilización económica a largo plazo.</strong></p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Dólares<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El tipo de cambio soles por dólar se encuentra en 3.535 al día de hoy, lunes 23 de marzo de 2020 y seguirá subiendo las siguientes semanas. Es natural que los inversionistas busquen cobertura en una moneda fuerte. <strong>En los casos de inversiones y depósitos a plazo fijo se recomienda mantener la moneda verde porque este se seguirá apreciando, sin embargo en caso de tener deudas en dólares, lo más conveniente es efectuar el cambio a soles para evitar un golpe en el poder adquisitivo de mediano plazo, esperar una reducción del tipo de cambio en los siguientes meses es poco probable.</strong></p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Commodities<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Existen oportunidades en la compra de metales como plata, zinc, cobre, etc. Los precios se redujeron debido a la reducción en la producción global liderada por China y al igual que en el mercado financiero se espera una rápida recuperación y alza del precio de estos metales en el mercado. A este grupo se suma el oro y el petróleo, dos activos importantes que se aprecian constantemente con el pasar del tiempo y que se espera que con el fin del COVID-19 la economía a nivel mundial vuelva al rumbo deseado. Si tienes un bróker de confianza debes explorar oportunidades de muy corto plazo donde podría generarse ganancias de capital importantes.</p>
                                </ul>
                                <p style={{textAlign: 'justify'}}>Independientemente del activo donde puedas invertir, la recomendación general es reunir la mayor cantidad de información y sobre todo no invertir en los activos que no se comprendan, no hay peor decisión que buscar explicaciones posteriores y no entender las variables que rigen el rendimiento de un determinado producto.</p>
                                <p style={{textAlign: 'justify'}}>Hay otros productos que analizaremos en función al comportamiento de estas semanas y que podría resultar un refugio interesante y rentable como el factoring, fondos privados y los estructurados.</p>
                                <p style={{textAlign: 'justify'}}>Si tienes alguna duda o esperas más consejos no dudes en escribirnos a contactos@tasatop.com</p>



                                <div id="referencias">

                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Diario La República, 23/03/2020</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Asociación de AFP</span><br></br></li>
                                </ul>



                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Carlos Guzmán</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 25 MARZO 2020</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">MICROFINANCIERAS</a></li>
                                <li><a href="javascript:void(0)">INNOVACIÓN</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Consejos para tus inversiones en tiempos del enemigo invisible - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/carlos-guzman.jpg" style={{width: '90px', height: '90px', marginTop: '20%'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Carlos Guzmán</a>
                                    </div>
                                    <p class="iq-font-white">Estudiante de Ingeniería Industrial en la Universidad de Lima. Mi objetivo profesional es el de especializarme en áreas de logística, operaciones y producción.
Considero ser una persona que asume con confianza y responsabilidad los objetivos que se me planteen, ofreciendo mis habilidades y conocimientos para generar óptimos resultados en forma eficiente y proactiva. 
</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fconsejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f25f37b497b2ef4" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2727d90d0c4bd%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff20b7421d4cf3e8%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fconsejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fconsejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f1c369f7dde44a4" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df72ad70bfce858%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff20b7421d4cf3e8%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fconsejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/inversiones-depositos-a-plazo-fijo-cts"><a class="page-link" >Siguiente</a></Link>
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

export default Blog07;