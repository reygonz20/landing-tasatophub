import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const Blog01 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Herramientas digitales para las empresas del mercado de valores</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Herramientas digitales para las empresas del mercado de valores</li>
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
                            <img class="" src="/assets/images/blog/blog01.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero. En otros casos, luego de conocer a la empresa, seguramente el inversionista preferirá no emplear mucho tiempo en traslados, esperas o molestias que puede ahorrarse si se implementan algunas herramientas sencillas para su comodidad.</p>
                                <p style={{textAlign: 'justify'}}>Por ello, resulta indispensable desarrollar herramientas digitales que permitan: (i) ahorrar la interacción física, más aún en una situación en la cual el Covid-19 ha cambiado permanentemente nuestras costumbres sociales; e (ii) incorporar de una forma sencilla a los nativos digitales que usan consistentemente sus smartphones, laptops o redes sociales para adquirir productos o servicios.</p>
                                <p style={{textAlign: 'justify'}}>Empresas como las sociedades administradoras de fondos de inversión (SAFI), las sociedades administradoras de fondos mutuos (SAFM), las sociedades titulizadoras o las sociedades agentes de bolsa (SAB), a través de las cuales se invierten en los emisores y se interactúa con la Bolsa de Valores de Lima (BVL), vienen trabajando diversas herramientas digitales a fin de no solamente tener costos eficientes, sino también facilitar la experiencia de sus clientes e incorporar nuevos inversionistas de forma masiva. Esta iniciativa ha sido canalizada a través de las asociaciones gremiales al regulador con la finalidad de adecuar o mejorar algunas normas a los cambios tecnológicos o sociales.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Propuestas de desarrollo de herramientas digitales</h4>
                                <p style={{textAlign: 'justify'}}>A continuación, explicamos algunos cambios en desarrollo y propuestas para mejorar la interacción digital o no presencial con los inversionistas.</p>
                                <ol style={{ listStyleType: 'lower-alpha',listStylePosition: 'inside' }}>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Eliminar obligaciones o actividades innecesarias. Antes de efectuar cualquier gasto de caja y en recursos humanos para digitalizar actividades, es necesario pensar qué actividades no son necesarias y pueden suprimirse a nivel normativo o interno. Digitalizar una actividad innecesaria sigue siendo ineficiente. Aunque parece una tarea sencilla, requiere de mucho esfuerzo y trabajo en equipo de las áreas operativas. Muchas empresas tienen áreas o comités específicos de innovación, contratan consultores o invierten en empresas que han desarrollado algún producto innovador otorgando mayor valor a sus clientes. Ahora bien, si para implementar esta innovación se requiriera modificaciones normativas, el esfuerzo de coordinación sería mayor. La propuesta debe llegar consolidada al regulador con el objetivo de que pueda ser evaluada sin que se desnaturalice en el camino. Es conocida la política de apertura al diálogo y promoción del mercado del regulador que en conjunto con las empresas del mercado de valores se encuentran evaluando propuestas en la llamada Mesa Digital del Consejo Consultivo del Mercado de Capitales. No obstante, creemos fundamental que ante los avances tecnológicos y con el fin de otorgarle mayor competitividad a la industria, se regule creando espacios amplios y flexibles (sandbox) para la innovación digital con el fin de alentarla.</li>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Contratación no presencial. En línea con el punto anterior, primero se debe evaluar si la regulación de las SAB y las SAFI puede eliminar los contratos que suscriben con sus clientes. En el caso de las SAB, antes del actual Reglamento de Agentes de Intermediación<sup><a onClick={ () => { jumpTo('#referencias') } } href= "#referencias">1</a></sup> solo existían las Fichas y Políticas de Clientes; esto impactaría a todo el mercado pues las SAB intermedian valores de emisores y otros instrumentos. En el caso de las SAFI, las cuales son colocadores primarios de sus cuotas de participación, creemos importante eliminar el contrato suscrito con el partícipe (puede ser un Acto Marco inscrito en el Registro Público del Mercado de Valores –RPMV-) y que sea la Ficha de Cliente que suscriben los clientes, el Reglamento de Participación (inscrito en el RPMV), y las órdenes<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">2</a></sup> de compra (que pueden ser por una grabación telefónica, intranet u otro medio electrónico, telemático, digital o que permita manifestar la voluntad del inversionista y que quede evidencia indubitable de su decisión) las cuales creen el vínculo de forma similar que en la colocación primaria de bonos por oferta pública. En ambos casos, estos cambios requerirían modificar la regulación con el fin de que estos contratos no sean obligatorios. Sobre la contratación no presencial, se viene trabajando un proyecto de modificación de la regulación a fin de permitir la contratación a través de firmas electrónicas, lo cual creemos que debe ampliarse a cualquier tipo de manifestación de voluntad para contratar de forma escrita, telefónica o a través de otros medios, siempre que se implementen políticas y se hayan analizado los riesgos operativos y de prevención de lavado de activos. Creemos también importante que las declaraciones juradas de los inversionistas o las empresas del mercado de valores se puedan emitir a través de estos medios.</li>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Representantes o promotores. Actualmente, los agentes de intermediación y las administradoras de fondos pueden colocar sus valores solo a través de personas naturales llamadas representantes y promotores respectivamente. Si bien se creó el Agente Distribuidor para fondos mutuos, este todavía no tenido un gran impacto. El objetivo de que los representantes o promotores sean personas naturales es identificar al responsable de la colocación. No obstante, creemos que es momento de promover alianzas entre las empresas del mercado de valores y las Fintechs (startups o no) a fin de colocar a través de sus plataformas, adquirirlas o arrendarlas. Es claro que el Decreto de Urgencia N° 13-2020, el cual no permite que las plataformas de financiamiento participativo puedan colocar valores de fondos<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">3</a></sup>, titulizaciones o para las SAB, crea una desventaja a las empresas del mercado de valores sobre las empresas del sistema financiero que sí están adquiriendo carteras de crédito o acciones de las Fintech. Si bien las Fintech podrían crear dos empresas con una misma plataforma, una para las empresas del mercado de valores y otra para colocar fuera de ellas, esto crea ineficiencias, sobrecostos y atenta contra el incremento de volumen de colocación. En este contexto, resulta necesario modificar la regulación a fin de que las empresas del mercado de valores puedan contratar personas jurídicas con tecnología y pagarles por colocar, a las cuales se puede asignar una persona natural responsable y requerirles estándares de calidad mínimos sin incurrir en contingencias laborales. Si bien hubo un avance con el denominado “Referenciador” para el caso de los agentes de intermediación<sup><a onClick={ () => { jumpTo('#referencias') } } href="#referencias">4</a></sup>, este no puede colocar valores sino solo referir inversionistas a la empresa colocadora y es siempre una persona natural, por lo cual en este caso el pago para las personas jurídicas estaría restringido.</li>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Mercado secundario. La liquidez y profundidad de los valores colocados por las empresas del mercado de valores son atributos importantes para los inversionistas. En este análisis creemos que hay un espacio para que valores no listados en la BVL puedan tener un mercado secundario eficiente, se creen incentivos para la liquidez y puedan, en algún momento, ser listados en la BVL de considerarlo conveniente. Como ejemplo, podemos mencionar la negociación de deuda que se realiza a través de plataformas como Datatec o Bloomberg. Consideramos que crear espacios de negociación no simultánea de certificados de participación, bonos u otros instrumentos financieros resulta fundamental. Ampliar o crear nuevos espacios para esta negociación es importante a fin de que administradoras de fondos, agentes de intermediación, inversionistas institucionales, entre otros, puedan otorgar liquidez a instrumentos financieros no listados. En estos casos, tampoco debería requerirse un contrato de transferencia o de intermediación como se señaló en el segundo punto, sino solo órdenes de compra y de venta. Debo destacar que el sistema implementado por Cavali ICLV para la negociación de facturas negociables es un buen ejemplo a seguir para darle liquidez a otros instrumentos financieros.</li>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Juntas, asambleas, comités y otros órganos colegiados. A la fecha de redacción de este artículo, se encontraba en consulta ciudadana el Proyecto de Normas para las convocatorias y celebraciones de juntas generales de accionistas y asambleas de obligacionistas no presenciales a que se refiere el artículo 5 del Decreto de Urgencia N° 056-2020. Mediante este proyecto se establecería de forma excepcional la facultad de realizar Juntas o Asambleas de Obligacionistas (solo deuda de oferta pública) no presenciales, aunque no esté establecido en el estatuto social o contrato de emisión durante la vigencia del Estado de Emergencia Nacional establecido por el Decreto Supremo N° 044-2020-PCM y sus prórrogas, y hasta noventa (90) días hábiles de culminado el Estado de Emergencia Nacional. Asimismo, se encuentra en revisión el Proyecto de Normas para las convocatorias y celebraciones de asambleas de fideicomisarios y partícipes, así como comités, el cual creemos será un gran avance regulatorio adaptándose a la realidad en muchos casos. Si bien la Ley General de Sociedades establece que las juntas deben efectuarse en el domicilio de la sociedad, salvo que el estatuto prevea celebrarlo en un lugar distinto, debemos tomar en cuenta que esta norma se emitió en el año 1997. Debemos recordar que durante este año o los anteriores, en el Perú se desarrollaba un incipiente internet, las computadoras o teléfonos móviles eran escasos, pero ahora es impensable no tener estos aparatos con cámara, WhatsApp y otras herramientas. Es de resaltar que la Ley del Mercado de Valores y la Ley de Fondos de Inversión y sus Sociedades Administradoras son contemporáneas a esta norma y si bien estas han tenido modificaciones, debe efectuarse una revisión de esta regulación para adaptarlas, entre otros aspectos, a que las partes o socios puedan pactar su convivencia en un entorno digital.</li>
                                    <li style={{listStyle: 'inside lower-alpha', textAlign: 'justify', marginBottom: '4%'}}>Valores sin derecho a voto. Si bien está previsto para los fondos de inversión y los emisores, este podría utilizarse también para titulizaciones. Son muchos los inversionistas no institucionales que nunca asisten a una junta o asamblea. Esta realidad hace que, en algunos casos, sea complicado tomar acuerdos cuando la participación es atomizada. Creemos que si promovemos la creación de valores sin derecho de voto, otorgando beneficios económicos y los covenants de alineamiento de intereses con las clases con derecho a voto, se evitaría este problema y se sinceraría la realidad de los inversionistas rentistas.</li>
                                    
                                </ol>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Comentarios finales</h4>
                                <p style={{textAlign: 'justify'}}>Existen muchas herramientas digitales que promueven la interrelación no presencial con los inversionistas o la creación de procesos digitales en actividades como los estados de cuenta, reclamos, consultas, prevención de lavado de activos y financiamiento del terrorismo, distribución, algoritmos para inversión, acortar el plazo de demandas o reclamos y en consecuencia de conservación de documentos, e-prospectus (no solo para fondos mutuos o algunos instrumentos de deuda) entre otros que podrían ser utilizadas en beneficio del crecimiento del mercado de valores incorporando nuevos inversionistas de una forma más eficiente y masiva.</p>
                                <div id="referencias">
                                <p style={{textAlign: 'justify'}}>Creemos importante que las empresas del mercado de valores, las asociaciones gremiales, el regulador y otros stakeholders continúen con sus esfuerzos por mejorar la competitividad de la industria con el objetivo de competir con otras entidades financieras y que la interconexión de mercados nos encuentre en mejores condiciones que otros competidores de la región.</p>
                                
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}><sup>1</sup>El antiguo Reglamento de Agentes de Intermediación (RAI) fue aprobado por la Resolución Conasev N° 045-2006-EF/94.10, el cual fue derogado por la Resolución SMV N° 034-2015-SMV/01 (actual RAI).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}><sup>2</sup>Las órdenes son instrucciones impartidas a los agentes de intermediación por medio de las cuales los inversionistas manifiestan sus decisiones relativas a la negociación de valores o instrumentos financieros y demás servicios que les pueden brindar de acuerdo con el artículo 175 de la Ley del Mercado de Valores.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}><sup>3</sup>Prohibición establecida en el artículo 26, numeral 8, del Decreto de Urgencia N° 013-2020.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}><sup>4</sup>Último párrafo del artículo 40 del actual RAI.</span><br></br></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Marcos Cirilo</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 17 JUNIO 2020</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            {/* <blockquote class="blockquote iq-mtb-40 iq-pall-20">
                                <p class="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                <footer class="blockquote-footer">Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">MERCADO DE VALORES</a></li>
                                <li><a href="javascript:void(0)">INNOVACIÓN</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                        <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                            <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                            <li><a href="https://twitter.com/intent/tweet?text=Herramientas digitales para las empresas del mercado de valores - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                            <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
											<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                            <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                        </ul>
                                    </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/marcos-cirilo.jpg" style={{width: '90px', height: '90px', marginTop: '40%'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Marcos Cirilo</a>
                                    </div>
                                    <p class="iq-font-white">MBA, Abogado por la Pontificia Universidad Católica del Perú, con más de 12 años de experiencia en el sector financiero público y privado. Especialista en Mercado de Capitales y Derecho Corporativo. Estudios de Postgrado en Innovation and Value Creation y Compliance. Nombrado como Presidente del Comité Legal de la Asociación de Fondos mutuos y Miembro del Comité Regulatorio de la Asociación de Fondos de Inversión. Alta capacidad de liderazgo de equipos, negociación e innovación de procesos. Actual Profesor en la PUCP.</p>
                                </div>
                            </div>
                            <div style={{marginTop: '3%'}} class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fherramientas-digitales-para-las-empresas-del-mercado-de-valores.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f399018ccdee93c" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://web.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df114704918d71b8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff1739d7b7d03eb%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fherramientas-digitales-para-las-empresas-del-mercado-de-valores.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/herramientas-digitales-para-las-empresas-del-mercado-de-valores.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fherramientas-digitales-para-las-empresas-del-mercado-de-valores.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', minHeight: '238px'}}><iframe name="f1aadd5f319ec4c" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df726ba5506ebb8%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ffdc68cee7862fc%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fherramientas-digitales-para-las-empresas-del-mercado-de-valores.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', minHeight: '238px'}} __idm_frm__="868" class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item disabled">
                                    <span class="page-link">Anterior</span>
                                </li>
                                {/* <li class="page-item active"><a class="page-link">1</a></li> */}
                                <li class="page-item"><a class="page-link">-</a></li>
                                {/* <li class="page-item">
                                    <span class="page-link">
                            2
                            <span class="sr-only">(current)</span>
                                    </span>
                                </li> */}
                                {/* <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li> */}
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/la-innovacion-en-las-microfinancieras-peruanas"><a class="page-link">Siguiente</a></Link>
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

export default Blog01;