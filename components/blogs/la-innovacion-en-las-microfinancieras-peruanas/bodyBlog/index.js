import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog02 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>La innovación en las Microfinancieras peruanas</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">La innovación en las Microfinancieras peruanas</li>
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
                            <img class="" src="/assets/images/blog/blog02.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            <h4 style= {{marginBottom: '2%'}}>¿Qué está pasando?</h4>
                                <p style={{textAlign: 'justify'}}>La informalidad nos pasó factura. Los bajos porcentajes de bancarización y la informalidad de nuestra sociedad tenían que costarnos caro en algún momento, tanto desorden pudo preverse con anticipación. Ya quedó demostrado que había dinero en las arcas del país y pudo ser inyectado de mejor manera en programas educativos, ampliación de servicios financieros digitales y formalización del empleo.</p>
                                <p style={{textAlign: 'justify'}}>Los bancos y AFPs acaparan la atención en estos días, debido al domino del mercado financiero de los grandes grupos económicos. Fuera de escándalos mediáticos y de juego de intereses políticos, las estructuras se desbordan debido a la capacidad instalada física y digital que tiene el mercado financiero peruano. Según los datos reportados por la SBS a marzo 2020, de cada 10 soles que se otorga en créditos formales, la banca coloca 9 soles, estamos hablando de un oligopolio a todas luces y que cae en vicios y letargos propios de estos modelos, desincentivando la competencia y acaparando casi toda la torta (ver GRÁFICO 1). La gran crítica a la banca en estos días es la falta de desarrollo de mercado, jactarse de modelos evolucionados en un país cuyo nivel de bancarización es de apenas 40% lo creemos desacertado y alejado de la realidad. Esperamos mucho del recientemente lanzado YapeCard como instrumento de bancarización.</p>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog02-1.png" style={{marginBottom: '20px'}}></img>
                                <h5 style={{fontWeight: '600'}}>Gráfico 1: Participación de mercado en créditos y distribución de créditos de bancos entre tipos de empresa.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup></h5>
                                </div>
                                <p style={{textAlign: 'justify'}}>Las llamadas a liderar el cambio y canalizar adecuadamente los recursos son las Cajas y Financieras, el conocimiento especializado del mercado las hacen actores claves para la bancarización y el desarrollo de los segmentos más afectados de la población. Es evidente que serán actores importantes en la ejecución de los Fondos FAE Mype y Reactiva que se inició el 23 de abril del presente. La gran banca está apostando por captar los fondos destinados a créditos a grandes empresa (ver Gráfico 2) donde la demanda es más alta para fondos entre S/30,001 y S/5,000,000, tendiendo menor atractividad aquellos fondos menores a S/30,000, relacionados directamente a las microempresas. Según información del BCRP, a la fecha han participado 9 bancos, 2 financieras, 10 cajas municipales y 1 caja rural, por lo que aún quedan algunos millones por subastar y se espera mayor participación de las microfinancieras. Como dato importante, al 20 de mayo de 2020, se habían asignado a las empresas financieras cerca de S/27,505 millones sin embargo solo habían desembolsado a empresas S/14,971 millones, lo más alarmante es que los fondos destinados a créditos menores a S/10,000 no se ha desembolsado nada aún, ha pasado un mes y las microempresas no han recibido apoyo económico de parte de las Instituciones financieras (Ver Tabla 1).</p>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog02-2.png" style={{marginBottom: '20px'}}></img>
                                <h5 style={{fontWeight: '600'}}>Tabla 1: Ejecución de desembolsos a empresas.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup></h5>
                                </div>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog02-3.png" style={{marginBottom: '20px'}}></img>
                                <h5 style={{fontWeight: '600'}}>Gráfico 2: Demanda entre oferta (Veces). Mide el nivel de atractividad de un determinado fondo por parte de las Instituciones financieras subastantes.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">3</a></sup></h5>
                                </div>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Indicadores</h4>
                                <p style={{textAlign: 'justify'}}>A propósito de las microfinancieras, los indicadores a marzo 2020, recientemente publicados en SBS, aún no muestran el real impacto de la crisis en los Estados Financieros oficiales. Es conveniente analizarlos en perspectiva y revisar si existe algún impacto frente a marzo de 2019 y marzo de 2018, meses comparables y de no crisis que podrían darnos una mejor lectura de los resultados. En líneas generales Cajas Rurales son las más afectadas en 2020, con crecientes ratios de morosidad y pérdidas a nivel de rentabilidad; las Cajas Municipales mantienen cierta estabilidad con respecto a periodos pasados y pero muestran disminuciones en rentabilidad; por el contrario las Financieras muestran un mejor performance en morosidad, rentabilidad y crecimiento en cartera.</p>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog02-4.png" style={{marginBottom: '20px'}}></img>
                                <h5 style={{fontWeight: '600'}}>Tabla 2: Principales cuentas y ratios de Microfinancieras.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">4</a></sup></h5>
                                </div>
                                <p style={{textAlign: 'justify'}}>Si vemos a detalle los resultados presentados por las empresas participantes activas en TasaTop.com, sus números presentan leves caídas con relación a los años pasados. En el caso de Caja Raíz mantiene el ratio de atraso de 2019, con afectación en rentabilidad producto del incremento en gastos operativos y ligera disminución en ingresos financieros. En el caso de la Caja Municipal de Maynas, se vio afectada por incrementos de provisiones de créditos ante la coyuntura de COVID. En el caso de las Financieras, Proempresa presenta ratios atractivos en rentabilidad y morosidad versus los años anteriores, muestra una franca mejoría nivel de ingresos financieros y utilidad neta. En el caso de Credinka, muestra reversiones positivas de resultados versus años anteriores, cabe mencionar que esta financiera arrastra castigos de cartera adquiridas en fusiones pasadas sin embargo ha incrementado el ratio de morosidad. En líneas generales todas mantienen ratios de Capital Global superiores a 13%, siendo el mínimo exigido por SBS 10%. El ratio de Capital Global muestra el patrimonio efectivo del que disponen las microfinancieras para hacer frente a posibles fluctuaciones negativas del ciclo económico y en función al perfil de riesgo de su negocio. Un ratio elevado permite contar con una mejor clasificación de riesgos, por lo tanto, puede fondearse a una tasa mucho más baja.</p>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog02-5.png" style={{marginBottom: '20px'}}></img>
                                <h5 style={{fontWeight: '600'}}>Tabla 3: Principales cuentas y ratios de Microfinancieras participantes de TasaTop.com.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">5</a></sup></h5>
                                </div>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Testimonios</h4>
                                <p style={{textAlign: 'justify'}}>Hemos recogido el testimonio de algunos protagonistas del sector microfinanciero y las medidas que vienen adoptando para enfrentar la crisis teniendo como foco a los clientes de créditos. Es importante mencionar ninguna de ellas tiene problemas estructurales de solvencia y vienen estableciendo medidas de mejora y digitalización de procesos.</p>
                                <blockquote class="blockquote iq-mtb-40 iq-pall-20">
                                <p class="mb-0">“Desde que se inició el estado de emergencia por la pandemia del COVID 19 Raíz planteó otorgar facilidades a nuestros clientes de cuentas pasivas y activas, … por el lado de créditos se otorgaron reprogramaciones y congelamiento de cuotas sin costos adicionales e intereses hasta por 3 meses, se ha brindado acceso a los fondos de recuperación otorgados por el gobierno como FAE y Reactiva Perú. Venimos desarrollando productos acordes con la realidad post Estado de Emergencia que permitan a nuestros clientes recuperar sus actividades económicas, apoyándolos con cuotas bajas al inicio del crédito que les permita una reactivación real de su actividad económica. Por el lado de los depósitos hemos otorgado a nuestros clientes la posibilidad de realizar <strong>retiros parciales sin penalidades, apertura y cancelaciones de depósitos de forma no presencial con la orientación de proteger a nuestros clientes y trabajadores evitando desplazamientos para utilizar nuestros servicios.</strong> En los próximos días estaremos lanzando al mercado un producto de depósitos orientado a captar los fondos de los clientes de AFP que realizarán el retiro de hasta el 25% con tasas de interés muy competitivas”.</p>
                                <footer class="blockquote-footer">Omar Csirke | Jefe de Tesorería y Captaciones|
                                    <cite title="Source Title">Caja Raíz</cite>
                                </footer>
                            </blockquote>
                                <p style={{textAlign: 'justify'}}>Para Percy Rondón, Gerente de Finanzas de <strong>Financiera Proempresa</strong>, la crisis representa un gran desafío,</p>
                            <blockquote class="blockquote iq-mtb-40 iq-pall-20">
                                <p class="mb-0">“Hemos actuado rápidamente en adaptar nuestros procesos de la mano con el área de Sistemas, los servicios de créditos y depósitos siguen atendiendo a una capacidad de 50% del personal, evidentemente el número de operaciones se han reducido por lo que corresponde un menor aforo. Proempresa ha suspendido el pago de penalidades y cobros de interés compensatorios y se vienen haciendo reprogramaciones de créditos y estamos participando de los Fondos Reactiva y FAE. Por el lado de las <strong>captaciones, éstas se vienen realizando de manera virtual a través de correos electrónicos certificados.</strong> El panorama presenta muchas oportunidades de negocio y una enseñanza única para mejorar procesos y acelerar el proceso de digitalización”.</p>
                                <footer class="blockquote-footer">Percy Rondón | Gerente de Finanzas|
                                    <cite title="Source Title">Financiera Proempresa</cite>
                                </footer>
                            </blockquote>
                                <p style={{textAlign: 'justify'}}>Para <strong>Caja Maynas</strong>, la pandemia representa una ventana de optimización de sus servicios,</p>
                                <blockquote class="blockquote iq-mtb-40 iq-pall-20">
                                <p class="mb-0">“<strong>Potenciamos nuestros canales digitales y estamos próximos al lanzamiento de nuestro Home Banking.</strong> Asimismo, todas las agencias vienen atendiendo, cumpliendo rigurosamente con los protocolos de salubridad exigidos. Por otro lado, hemos otorgado facilidades para el pago de créditos, somos parte de Programa Reactiva Perú y FAE MYPE y estamos comprometidos en contribuir a la reactivación económica del país. Para los ahorristas, podemos afirmar que a pesar de la coyuntura Caja Maynas se posiciona como entidad líder en la captación de Depósitos a Plazo Fijo y CTS en la Región Loreto”.</p>
                                <footer class="blockquote-footer">Caja Maynas
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                                <p style={{textAlign: 'justify'}}>Un espacio importante se abre a nivel de operaciones para micro y pequeñas empresas e inversores, en estas épocas donde estamos forzando la innovación y necesitamos adaptarnos digitalmente al nuevo entorno surgen posibilidades muy atractivas.</p>
                                <p style={{textAlign: 'justify'}}>Para Gladys Álvarez, Gerente Comercial de <strong>Plus Capital</strong>, empresa de factoring, la perspectiva es optimista,</p>
                                <blockquote class="blockquote iq-mtb-40 iq-pall-20">
                                <p class="mb-0">“Tenemos la ventaja de que el <strong>Factoring electrónico es un producto financiero que no requiere de la presencia ni el contacto físico de los clientes</strong>, porque se respalda en aplicaciones que facilitan que tanto el cliente como pagador de la factura, SUNAT y la empresa de factoring, confirmen el documento en línea y se registre la factura en Cavali. Debido a la crisis del Covid-19 hemos actualizado y <strong>modificado nuestro foco de colocación de factoring hacía sectores no golpeados como el sector salud, minería, hidrocarburos y alimentos</strong>, cabe precisar que son sectores que no han dejado de trabajar y hemos enfocado nuestra área comercial atendiendo facturas a sus proveedores. Cabe mencionar que la industria del factoring está tomando más protagonismo y ya <strong>estamos siendo consideradas por el Fondo Crecer – COFIDE, fondo que garantiza hasta el 90% de las facturas descontadas hasta el día 13 de marzo</strong> y también para el otorgamiento de líneas de crédito. Se espera que una vez levantada la cuarentena regresen a la actividad sectores como el de construcción, servicios y metal mecánica mediana, y levante nuevamente la actividad económica, retomando el rumbo de crecimiento”.</p>
                                <footer class="blockquote-footer">Gladys Álvarez | Gerente Comercial |
                                    <cite title="Source Title">Plus Capital</cite>
                                </footer>
                            </blockquote>
                                
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Conclusiones</h4>
                                <p style={{textAlign: 'justify'}}>No cabe duda que las llamadas a liderar el sector microfinanciero son las empresas más pequeñas, por la agilidad en la toma de decisiones y sobre todo por el conocimiento del sector más vulnerable del país. Si bien es cierto, la gran banca atienda grandes clientes, corporaciones y segmentos favorecidos de la población y son los líderes del segmento (88%) existe la esperanza y voluntad para que se pueda desarrollar un nuevo ambiente digital. Las microfinancieras tienen el enorme reto de digitalizar sus procesos y mantener ratios financieros sanos.</p>
                                <p style={{textAlign: 'justify'}}>Es evidente que en los próximos meses presenciaremos un deterioro natural en las carteras de crédito, crecimiento de los ratios de morosidad y estrechez de liquidez en las microfinancieras, creemos que los fundamentos del sector son sólidos y mantienen una cercana vigilancia del supervisor por lo que es probable que exista algún apoyo o líneas de financiamiento propias para entidades financieras.</p>
                                <p style={{textAlign: 'justify'}}>La crisis ha hecho que las áreas de procesos y productos se muevan ágilmente, algunas de las innovaciones presentadas en pocas semanas son:<strong> aperturas de depósitos de manera remota con validación de correos, home banking, retiros parciales de depósitos sin penalización, exploración de firmas electrónicas; y en términos de reactivación: redireccionamiento de créditos a sectores no golpeados, apoyo con los fondos Reactiva y FAE, entre otros.</strong></p>
                                <div id="referencias">
                                <p style={{textAlign: 'justify'}}>La pandemia ha mostrado las deficiencias de nuestra realidad informal, sin embargo representa un reto y oportunidad para digitalizar la mayor cantidad de procesos tradicionales.</p>
                                
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><sup>1</sup><span style={{color:'#146cae'}}>SBS. Elaboración: propia.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><sup>2</sup><span style={{color:'#146cae'}}>BCRP, Nota Informativa 20/05/2020. Elaboración: propia.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><sup>3</sup><span style={{color:'#146cae'}}>BCRP, Notas Informativas. Elaboración: propia.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><sup>4</sup><span style={{color:'#146cae'}}>SBS, Información financiera a marzo 2020.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><sup>5</sup><span style={{color:'#146cae'}}>SBS, Información financiera a marzo 2020. Elaboración: propia.</span></li>
                                </ul>
                            </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 27 MAYO 2020</a></li>
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
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=La innovación en las Microfinancieras peruanas - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div style={{marginTop: '3%'}} class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fla-innovacion-en-las-microfinancieras-peruanas.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '450px', height: '28px'}}><iframe name="fc85e42b29515" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8735531debed4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2e10592eb31394%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fla-innovacion-en-las-microfinancieras-peruanas.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '450px', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fla-innovacion-en-las-microfinancieras-peruanas.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '550px', height: '204px'}}><iframe name="f355c77fc30cde4" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df7c1f0866e87c8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2e10592eb31394%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fla-innovacion-en-las-microfinancieras-peruanas.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '550px', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia"><a class="page-link">Siguiente</a></Link>
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

export default Blog02;