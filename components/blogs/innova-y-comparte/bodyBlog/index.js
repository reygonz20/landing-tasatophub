import React, { Component } from "react";
import Link from 'next/link'

const Blog30 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Innova y comparte</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Innova y comparte</li>
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
                            <img class="" src="/assets/images/educacion/educacion30.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">

                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Hace poco más de 17 años se acercó a mi universidad una prestigiosa marca global de telecomunicaciones proponiendo un concurso de innovación en Latinoamérica, el nombre del concurso era algo así como "Ideas del nuevo milenio", no recuerdo muy bien, consistía en proponer una idea de negocio viable en distintos campos sociales como salud, seguridad, medio ambiente, entre otros. Los premios: mucho dinero y asesoría en la puesta en marcha y demás necesidades. Mi grupo, aún estudiantes de administración de primeros años, decidimos participar para afrontar el reto, no era posible que desde una provincia de Perú no se pueda trascender a nivel global. Luego de algunos brainstorming salió a flote la idea con la que participaríamos, decidimos trabajar en la reducción de accidentes de tránsito producto de la ingesta de alcohol en nuestra sociedad, el contexto social hacia inicios del 2000 no era tan distinto al que tenemos hoy en día (lamentablemente). Luego de algunas consultas con la Facultad de Ingeniería de nuestra universidad, resultó viable <strong style={{textDecoration: 'underline'}}>adaptar los alcoholímetros al sistema de encendido de cualquier auto</strong>, de tal manera que cualquier persona que quisiera encender su auto debía antes soplar el dispositivo, si la prueba era negativa podía encender el auto sin problema, y si era positiva impediría hacerlo.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Las dudas sobre la utilidad de esta adaptación al inicio eran razonables, ¿qué pasa si otra persona sopla el dispositivo en lugar del conductor? ¿Podríamos nosotros "fabricar" el dispositivo y venderlo? Evidentemente no podíamos estar 100% seguros de que el conductor soplaría el dispositivo y si lo hacía otro probablemente fuera cómplice o culpable de cualquier muerte lo que podría traer consecuencias legales y morales; además, no teníamos una fábrica de alcoholímetros ni menos de autos, pero la idea era buena, <strong style={{textDecoration: 'underline'}}>podríamos reducir drásticamente el nivel de accidentes a nivel global si es que algún regulador internacional</strong> (por ejemplo la OMS) exigiera éste dispositivo en todos los autos.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Llegó el momento de la inscripción, el concurso sólo consistía en proponer la idea por correo electrónico, que para la época ya era algo innovador. Todo nuestro esfuerzo estaba detallado en ese medio virtual hasta que pusimos "enviar". Pasaron algunos días y semanas y no obteníamos respuesta, ni siquiera confirmando la recepción y menos la inscripción, decidimos enviar nuevamente el correo para asegurarnos y evitar quedar fuera del concurso, <strong style={{textDecoration: 'underline'}}>confiábamos en la idea la cual atendía una necesidad global y era fácilmente escalable</strong>.</p>
                            <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Pasaron algunos meses y la ilusión se iba desvaneciendo, ¿Qué habíamos hecho mal? ¿Por qué la idea no pudo ser bien recibida por el jurado? Los exámenes y los ciclos nos abrumaron y lo dejamos ahí, en una buena intención, en una buena idea. Algunos años después, 3 o 4, uno de los integrantes del grupo me llamó y me dijo que acababa de ver nuestra idea por las noticias, una empresa de automóviles la había desarrollado en Europa con la misma descripción de nuestro proyecto original, esperé la edición nocturna del mismo noticiero para poder verlo con mis propios ojos (aún no había Youtube). Mi sorpresa y fastidio eran descomunales, era exactamente lo que habíamos descrito, buscamos a representantes de la universidad para exponerles el caso y nos pidieron copia del correo electrónico. Bendito correo, nunca lo encontramos, la cuenta de donde lo habíamos enviado ya no existía (uno de los integrantes la había cerrado hace buen tiempo), no pusimos a nadie en copia, no teníamos ningún sustento, el resto solo fueron manotazos de ahogado.</p>
                            <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Lecciones aprendidas:</h4>
                            <ol>
                                <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong style={{textDecoration: 'underline'}}>No es necesario crear la pólvora</strong>. Identificamos la necesidad y juntamos dos productos que existen y los adaptamos.</li>
                                <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong style={{textDecoration: 'underline'}}>Compartir las ideas y documentarlas</strong>. Hace algunos años el temor a compartir era más evidente, hoy en día es parte del modus operandi del sector start up. Ahora existen mecanismos de fácil acceso para registrar patentes, y asegurarse de cierta manera de tener la propiedad de un desarrollo (por varias copias en los correos importantes y solicita mensaje de confirmación de ser necesario).</li>
                                <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong style={{textDecoration: 'underline'}}>No importa qué carrera tengas ni donde te encuentres</strong>. El internet acerca al mundo, puedes ser médico, físico, historiador, la innovación no sólo es propiedad de gente de negocios ni de ingeniería. Ejemplos, muchos.</li>
                                <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong style={{textDecoration: 'underline'}}>Si tienes una idea, por más simple que parezca, estructúrala y haz números</strong>, puede cambiar la historia y el destino de muchos.</li>
                                <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong style={{textDecoration: 'underline'}}>Comparte lo que te pasó</strong>.</li>
                            </ol>
                            
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 23 ENERO 2017</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">INNOVA</a></li>
                                <li><a href="javascript:void(0)">COMPARTE</a></li>
                                <li><a href="javascript:void(0)">START UP</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Innova%20y%20comparte%20por%20Alfredo%20Cardoso&amp;url=https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
                                    <li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/articulos" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
									<li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finnova-y-comparte.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f39f1e44a18cc34" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ded6275eb253%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff31a7a18733efdc%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finnova-y-comparte.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/innova-y-comparte.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finnova-y-comparte.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f22ee923bbe3458" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6c073c5b9cff4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff31a7a18733efdc%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Finnova-y-comparte.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/deposito-plazo-fijo-a-diciembre-2016"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/competencia-para-captar-y-fidelizar-clientes"><a class="page-link">Siguiente</a></Link>
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

export default Blog30;