import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog03 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Notas desde la pandemia para la post-pandemia</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Notas desde la pandemia para la post-pandemia</li>
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
                            <img class="" src="/assets/images/blog/blog03.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify'}}>En 1995, José Saramago publicó “Ensayo sobre la ceguera”, novela que le valiera el premio Nobel de Literatura, tres años más tarde. El libro llegó a mí el 17 de junio de 2010, y pude terminarlo esa misma noche. Nunca olvidaré que, al despertar, me enteré por un tweet de que Saramago había fallecido precisamente mientras yo leía su obra a miles de kilómetros de distancia.</p>
                                <p style={{textAlign: 'justify'}}>En su memoria, inicio este artículo con un extracto del párrafo final:</p>
                                <blockquote className="blockquote iq-mtb-40 iq-pall-20" style={{marginTop: '100px'}}>
                                <p class="mb-0">"Va a quedarse ciego. No, en cuanto la vida esté normalizada, cuando todo empiece a funcionar, lo opero, será cuestión de semanas. Pero, ¿por qué nos hemos quedado ciegos? No lo sé, quizá un día lleguemos a saber la razón. ¿Quieres que te diga lo que estoy pensando? Dime. Creo que no nos quedamos ciegos, creo que estamos ciegos, ciegos que ven, ciegos que, viendo, no ven."</p>
                                <footer class="blockquote-footer">José Saramago | Escritor 
                                    <cite title="Source Title"></cite>
                                </footer>
                                </blockquote>
                            <p style={{textAlign: 'justify'}}>El 3 de abril de 2020, Estados Unidos, la nación que encarna el capitalismo, aprobó una Orden Ejecutiva que prohíbe el acaparamiento de productos escasos en el contexto de la pandemia, declarando ilegal el lucro asociado a dichos productos, y ordenando además su confiscación inmediata<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">1</a></sup>. Unas horas antes, los medios anunciaban que el nuevo récord histórico de desempleados formalmente registrados, había superado los diez millones de personas<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup>. Al día siguiente, Alemania acusaba al gobierno americano de “piratería moderna”, por apropiarse de insumos sanitarios.</p>
                            <p style={{textAlign: 'justify'}}>¿Se pudo prever que el país abanderado del libre mercado tomaría medidas de este tipo? ¿Y qué se puede decir sobre sus datos de desempleo?<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">3</a></sup> Definitivamente, estas circunstancias no estaban en las previsiones de ningún analista o futurólogo, por lo cual conviene preguntar si acaso habrá algo que no estemos viendo, ¿alguna noción que nos ayude a enfrentar la nueva realidad que nos ha puesto en una situación tan precaria como la ceguera de Saramago?</p>
                            <p style={{textAlign: 'justify'}}>Una primera observación, la más evidente, es que el mundo, y particularmente nuestra visión de la realidad global, ha cambiado frente a nuestros ojos: Estados Unidos es el país menos preparado para una pandemia. El Santo Grial del crecimiento económico resultó un humilde vaso de madera, sin valor alguno, incapaz de brindarnos la vida eterna, ni mucho menos. La economía global, en última instancia, se sostiene sobre un único pilar: El trabajo humano. Sin trabajadores no puede haber emprendedores unicornios, ni capitales ángeles, que puedan levantar y sostener sistema alguno. El ser humano, su bienestar general, es el fundamento principal y a la vez el fin último de la sociedad. Para decirlo con un cliché: Somos lo más valioso que tenemos.</p>
                            <p style={{textAlign: 'justify'}}>Otro aspecto que debe quedar claro, es que probablemente nada volverá a la normalidad en un futuro próximo. Hay que aceptar la realidad y confrontarla. Y, entre los escenarios posibles, <strong>es necesario comenzar a deconstruir conceptos que se habían vuelto naturales: Globalización, pues las fronteras están cerradas y los medios de transporte y carga están paralizados. Libre mercado, pues se impone el control de precios y la intervención estatal para controlar el impacto social de la emergencia, como viene ocurriendo en Estados Unidos, por ejemplo. Crecimiento económico, pues la suspensión de las actividades nos hace presentir una profunda recesión. Y, si la situación se complica aún más, tendríamos que cuestionar, inclusive, la continuidad de actividades esenciales para la civilización como la conocemos: Agua potable, alcantarillado, combustible, energía eléctrica e Internet, pues todas ellas dependen de suscripciones mensuales, las cuales están postergadas, y del trabajo de sus operadores, quienes son susceptibles de contraer la enfermedad y paralizar su labor, dejándonos eventualmente sin suministro. Lo que sigue, lo podemos intuir, es la barbarie<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">4</a></sup></strong>.</p>
                            <p style={{textAlign: 'justify'}}>Ante tal incertidumbre del mundo exterior, hoy, tenemos la oportunidad única en la Historia de concentrarnos en un aspecto postergado indefinidamente por las distracciones del trabajo y la rutina: Ser humanos. Individuos dotados de cualidades extraordinarias en la Naturaleza, capaces de increíbles prodigios científicos, pero también de aberraciones apocalípticas y guerras. Por muchas razones, es difícil lograr algo de gran envergadura desde casa, pero sí algo que en estas condiciones tiene mucho mayor valor práctico: Gobernarnos a nosotros mismos, y prepararnos para la post-pandemia desde nuestro fuero interno y entorno próximo.</p>
                            <p style={{textAlign: 'justify'}}>Cuando arrecia el temporal, conviene arriar las velas. En términos prácticos, esto significa entrar en un estado de hibernación, donde la actividad se reduce al mínimo posible, y la eficiencia de recursos se vuelve extrema. Y, en las circunstancias actuales, donde la pandemia ha paralizado el comercio, las inversiones, y hasta el trabajo asalariado<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">5</a></sup>, es indispensable bajar las revoluciones al máximo. Sin embargo, particularmente en estas condiciones, resulta también imprescindible pensar en alternativas de escenarios futuros, y cursos de acción posibles. El acto de pensar, después de todo, es económicamente eficiente, pues la imaginación es un recurso ilimitado, cuya única restricción es temporal.</p>
                            <p style={{textAlign: 'justify'}}>Actualmente, se encuentra suspendida la mayoría de las actividades. No hay trabajo, y sin ingresos no es posible el consumo, ni siquiera de productos de subsistencia. Es por ello que se asigna bonos, se suspende el pago de servicios, y se posterga deudas. Pero, ¿qué ocurrirá cuando los recursos se agoten? La respuesta corta es que los recursos no se agotan fácilmente. Mientras exista personas, habrá capacidad productiva. Mientras se preserve el conocimiento, habrá posibilidades de supervivencia, e inclusive de éxito y prosperidad. La clave para ello se puede expresar de distintas maneras según la condición actual de la persona, pero se resume en dos conceptos que han sido el motor de la civilización desde que esta existe: Ahorro e inversión.</p>
                            <p style={{textAlign: 'justify'}}>¿Es posible invertir en un contexto de tal incertidumbre? Si. podemos y debemos invertir todo nuestro tiempo, y todo el dinero que podamos, en prepararnos para el futuro, en adquirir las habilidades que nos permitirán prosperar en un contexto totalmente distinto<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">6</a></sup>. Pero, ¿cómo adaptarnos a un cambio tan drástico, que nos pone a prueba haciendo patentes nuestras necesidades más elementales? Como dijo alguien: Empecemos tendiendo nuestra cama. Aprendamos todo lo que podamos. Aprendamos a cocinar como el que más, y ahorraremos el precio del almuerzo. A cultivar frutas o verduras mediante hidroponía, que nos alimentarán luego de unas cuantas semanas. Aprendamos carpintería, fontanería, electricidad, electrónica, construcción y no necesitaremos servicios de terceros, o seremos capaces de tercerizarlos en mejores condiciones, conociendo sus pormenores. Invirtamos en herramientas y útiles que soporten nuestra nueva forma de vida. Invirtamos también en desarrollar pasatiempos que llenen nuestro espíritu de satisfacción inmaterial. Aprendamos a tocar un instrumento, a pintar un cuadro, a esculpir, escribir, ¡o a bailar!</p>
                            <p style={{textAlign: 'justify'}}>Claramente, toda inversión debe ir de la mano de la eficiencia, en el sentido de que el retorno no se medirá necesariamente en términos de ganancia, sino de reducción en los gastos operativos, y de mejoras en el proceso operativo. En esa misma línea, la eficiencia en el uso de recursos, debe venir acompañada de una política de austeridad y de ahorro. Este ahorro no será necesaria y exclusivamente monetario, sino que debe contemplar el acopio y reserva de todo ingreso o bien del que dispongamos hoy -por lo cual conviene hacer un inventario de los mismos, especialmente de aquellos cuyo valor sea sostenible en el tiempo-, a fin de utilizarlos (reinvertirlos) posteriormente en continuar mejorando nuestras habilidades y cualidades personales, entrando en un círculo virtuoso de ahorro y reinversión permanente.</p>
                            <p style={{textAlign: 'justify'}}>Una regla fundamental para hacer sostenible esta nueva forma de economía particular, sería limitar el consumo a lo estrictamente indispensable, lo cual permitirá enfocar nuestros recursos en mejorar continuamente para alcanzar mejores niveles de flexibilidad operativa, con la autosostenibilidad como norte y criterio transversal a nuestras actividades. Un ejemplo extremo, real y actual de esta forma de vida, está dado por las llamadas comunidades off-the-grid, donde se practica estrategias de supervivencia basadas en la autosuficiencia, la reutilización, y la autonomía comunitaria<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">7</a></sup>.</p>
                            <p style={{textAlign: 'justify'}}>Desde otros ámbitos del quehacer humano, también hay aportes. Así, algunos intelectuales contemporáneos, plantean que desde hace buen tiempo nos encontramos a vuelta de tuerca de un cambio estructural en la civilización, para la cual conviene estar preparados con criterio crítico, especialmente respecto del status quo, sin prejuicios dogmáticos en torno a posibilidades futuras<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">8</a></sup>. Por otro lado, algunos políticos y sociólogos, ya presentan planteamientos post-capitalistas, como el bono universal<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">9</a></sup>, y toman fuerza e impulso iniciativas del siglo XXI como la reducción de la jornada laboral a la mitad<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">10</a></sup>, la optimización del trabajo productivo<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">11</a></sup>, la corriente del Decrecimiento Económico<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">12</a></sup>, y propuestas más holísticas como la de Jacques Fresco y su economía global basada en recursos.<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">13</a></sup></p>
                            <div id="referencias">
                            <p style={{textAlign: 'justify'}}>Conviene, por tanto, prepararse para diversos escenarios, ahorrando recursos e invirtiendo con vistas a un futuro incierto, pero diferente, donde solo la adaptación e innovación con carácter crítico permitirán la subsistencia.</p>
                                
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <a style={{fontWeight: '400'}} href="https://fcpablog.com/2020/04/03/compliance-alert-covid-19-related-hoarding-and-profiteering-are-now-federal-offenses/%22" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>1</sup>Fcpablog.com</p></a>
                                <a style={{fontWeight: '400'}} href="https://www.washingtonpost.com/business/2020/04/02/jobless-march-coronavirus/" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>2</sup>Washington Post</p></a>
                                <a style={{fontWeight: '400'}} href="https://www.cnbc.com/2020/04/22/another-4point3-million-workers-expected-to-have-filed-unemployment-claims.html" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>3</sup>CNBC</p></a>
                                <p style={{color:'#146cae', textAlign: 'justify'}}><sup>4</sup>Slavoj Zizek: “La mayor amenaza de la pandemia del Covid-19, no es el retroceso a la violencia por la supervivencia, sino la barbarie estructural con rostro humano”.</p>
                                <a style={{fontWeight: '400'}} href="https://beta.elperuano.pe/noticia-sepa-todo-sobre-suspension-perfecta-laboral-y-como-protegera-estado-a-trabajadores-94368.aspx" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>5</sup>El 13 de abril de 2020, el Estado Peruano anuncia un decreto que permite a las empresas suspender sin goce de haber a sus trabajadores bajo ciertas condiciones.</p></a>
                                <p style={{color:'#146cae', textAlign: 'justify'}}><sup>6</sup>Ipsos, 14 de abril de 2020, Resultados de encuesta online. Acerca de la situación post-pandemia, la población que disminuirá o eliminará el gasto será: En restaurantes, 77%, en entretenimiento fuera del hogar, 67%, en ropa y accesorios 60%, en cuidado personal, 46%, en servicios de streaming pagados, 35%. Asimismo, es un consenso que más del 50% reducirá o eliminará su asistencia a espacios públicos comerciales.</p>
                                <a style={{fontWeight: '400'}} href="https://permacultureprinciples.com/" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>7</sup>Permacultureprinciples.com</p></a>
                                <p style={{color:'#146cae', textAlign: 'justify'}}><sup>8</sup>José Luis Sampedro, en una entrevista sobre el futuro de la civilización, señalaba que nos encontramos en una etapa crítica en ausencia de pensamiento crítico: “Corresponde capear el temporal a corto plazo, y a largo plazo, cambiar de pensamiento, es decir, reeducarnos”. Slavoj Zizek anuncia el fin del Capitalismo y un nuevo Comunismo.</p>
                                <a style={{fontWeight: '400'}} href="https://larepublica.pe/politica/2020/04/17/coronavirus-bono-universal-1000-soles-es-propuesta-por-el-frente-amplio-en-el-congreso/" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>9</sup>La Republica</p></a>
                                <a style={{fontWeight: '400'}} href="https://neweconomics.org/2010/02/21-hours" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>10</sup>Neweconomics.org</p></a>
                                <a style={{fontWeight: '400'}} href="https://www.youtube.com/watch?v=j3TeLsaKzAM" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>11</sup>The 4-hour workweek by Tim Ferris - Animated Book Summary.</p></a>
                                <a style={{fontWeight: '400'}} href="https://es.wikipedia.org/wiki/Decrecimiento" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>12</sup>La consigna del decrecimiento tiene especialmente como meta, insistir fuertemente en abandonar el objetivo del crecimiento por el crecimiento mismo.</p></a>
                                <a style={{fontWeight: '400'}} href="https://www.resourcebasedeconomy.org/" target="_blank"><p style={{color:'#146cae', textAlign: 'justify'}}><sup>13</sup>La economía tradicional basada en recursos implica subsistir con lo que se posee naturalmente. Pero, si se invierte parte de esa producción en optimización de procesos, en automatización de tareas, y en minimización del tiempo productivo, es posible pasar a lo que se llama una economía global basada en recursos, en la que la clave es la generación de abundancia mediante el uso inteligente de los recursos para su distribución entre los miembros de la comunidad, sin valor de cambio de por medio.</p></a>
                            </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Luis Coca</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 05 MAYO 2020</a></li>
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
                                            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                            <li><a href="https://twitter.com/intent/tweet?text=Notas desde la pandemia para la post-pandemia - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                            <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
											<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                            <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                        </ul>
                                    </div>
                            </div>




                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/luis-coca.jpg" style={{width: '90px', height: '90px', marginTop: '40%'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Luis Coca</a>
                                    </div>
                                    <p class="iq-font-white">Profesional con más de 14 años de experiencia en Ingeniería de Software, liderando equipos de desarrollo de software de alto desempeño.
Especializado en desarrollo de aplicaciones, migrando al área de Telecomunicaciones desde 2014, enfocado en ingeniería de equipos de red basados en software, con despliegues en más de 7 países en distintas regiones del mundo, incluyendo los Estados Unidos de América.
Estudios culminados de Maestría en Ingeniería de Sistemas con mención en Gestión de TI por la Universidad Nacional Mayor de San Marcos.
</p>
                                </div>
                            </div>
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fnotas-desde-la-pandemia-para-la-post-pandemia.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '450px', height: '28px'}}><iframe name="f2430a6736ad538" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1e141cca7e8144%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff38ba9f1d84a658%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fnotas-desde-la-pandemia-para-la-post-pandemia.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '450px', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fnotas-desde-la-pandemia-para-la-post-pandemia.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '550px', height: '376px'}}><iframe name="f2b7e572ade1f2c" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1a21e1c00a8cc4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff38ba9f1d84a658%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fnotas-desde-la-pandemia-para-la-post-pandemia.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '550px', height: '376px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo"><a class="page-link">Siguiente</a></Link>
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

export default Blog03;