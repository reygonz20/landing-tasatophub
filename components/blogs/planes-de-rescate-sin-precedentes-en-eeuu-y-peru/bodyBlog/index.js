import React, { Component } from "react";
import Link from 'next/link'

const blog06 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Planes de rescate sin precedentes en EEUU y Perú</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Planes de rescate sin precedentes en EEUU y Perú</li>
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
                            <img class="" src="/assets/images/educacion/educacion06.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify'}}>El día miércoles (25/03/2020) de la semana pasada se llevó a cabo un suceso sin precedentes que quedará grabado en la historia de Estados Unidos como <strong>el paquete de ayuda económica más grande de su historia</strong> esto como medida para contrarrestar el impacto económico que viene causando el COVID-19. Algo similar ocurrió en la crisis financiera del 2008 con un paquete de ayuda por US$ 700,000 millones que equivale aprox. a la tercera parte del paquete actual aprobado por el Senado de Estados Unidos por US$ 2 Billones, que busca ayudar directamente a las personas y familias, crear fondos para cubrir el desempleo, así como cientos de miles de millones en forma de préstamos accesibles (intereses bajos y tiempo largo de devolución) a empresas, en algunos casos no reembolsables, y fondos para ayudar a las ciudades y Estados así como al sistema de salud para afrontar las consecuencias sanitarias de la pandemia del Covid-19.</p>
                                <p style={{textAlign: 'justify'}}>El proyecto fue aprobado por votación unánime entre republicanos y demócratas después de percibirse entre ellos largas negociaciones que retrasaron una votación temprana. El proyecto ya fue aprobado (24/03/2020) en el Senado y pasó a la Cámara de representantes donde paso por el mismo resultado siendo aprobado en medio de los más de 100,000 casos de COVID-19 y 1,470 muertes reportadas en el país. Aunque todavía no se dispone de los detalles completos de este proyecto ya se han dado a conocer algunos puntos de la propuesta que se mencionarán a continuación.</p>
                                <ul>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Pagos directos a individuos y familias.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El proyecto destinará US$ 250,000 millones que podría ascender hasta US$ 500,000 millones en pagos directos a personas solteras así como a familias que deberán estar sujetos a algunos requisitos. Las personas que ganan hasta US$ 75,000 anuales recibirán pagos directos de US$ 1,200 cada uno, mientras que parejas casadas que ganan hasta US$ 150,000 anuales recibirán US$ 2,400, y US$ 500 adicionales por cada hijo. El pago se reduciría según los ingresos, reduciéndose por completo para las personas solteras que lleguen a ganar entre US$ 99,000 y US$ 198,000 anuales para parejas sin hijos.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Préstamos para medianas y pequeñas empresas (pymes).<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Se destinará US$ 350,000 millones para las medianas y pequeñas empresas en forma de préstamos que en algunos casos no deberán reembolsarse si los utilizan para mantener en planilla a sus empleados.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Préstamos para grandes empresas.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Se contará con un fondo de US$ 500,000 millones para grandes empresas y compañías aéreas. Para las grandes empresas castigadas por el cese de las actividades se aginarán US$ 425,000 millones aprox. y el resto, sobre todo, para compañías aéreas. En algunos casos tampoco será reembolsable.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Fondo para hospitales, ciudades y Estados.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El proyecto de ley proporcionaría una gran cantidad de efectivo para los hospitales sobre todo aquellos que se encuentren con mayores dificultades, a estos se inyectarán US$ 150.000 millones, así como US$ 150.000 millones para los gobiernos estatales y locales que tienen problemas de efectivo debido a su respuesta para combatir el coronavirus.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Seguro de desempleo.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Para contrarrestar al desempleo se asignarán US$ 250.000 millones en beneficios de seguro de desempleo que prevé con US$ 600 semanales a cada persona durante un periodo de cuatro meses, esta será la ayuda que ofrezcan los Estados a las personas despedidas como consecuencia de la actual crisis.</p>
                                </ul>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog06-1.png" style={{marginBottom: '20px'}}></img>
                                </div>
                                <p style={{textAlign: 'justify'}}>Estados Unidos se ha visto en la necesidad de poner en marcha un plan de estímulo para reactivar su economía, también lo hicieron muchos otros países alrededor del mundo.</p>
                                <p style={{textAlign: 'justify'}}>Por otro lado, Perú está llevando a cabo <strong>un plan de rescate económico que oscila los US$ 25,000 millones y considerado como el mayor plan de estímulos de toda América Latina</strong> hasta el momento y sin precedente previo, gracias a la disciplina fiscal aplicada por décadas el Perú destinará aproximadamente 12% de PBI en el salvavidas. Pero, ¿existe una similitud entre estas medidas económicas?, ¿En qué punto se encuentra la mayor diferencia entre estos?</p>
                                <p style={{textAlign: 'justify'}}>Para poder encontrar las similitudes y diferencias es necesario entender en qué consisten estas medidas adoptadas por el Ministerio de Economía (MEF). A continuación vamos a mencionar las más representativas.</p>
                                <ul>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Bono extraordinario de S/ 380 para familias y personas vulnerables.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El gobierno ya inició hace casi dos semanas, casi junto con el inicio del aislamiento social obligatorio, <strong>la entrega de un bono por S/ 380 a las familias y personas</strong> que se encuentran vulnerables y en mayores dificultades económicas debido a la paralización y al cese de las actividades por el COVID-19, este bono se entregó en una primera instancia debido a los 14 días de cuarentena y habiéndose extendido 13 días más llega con esto una segunda entrega del bono por S/ 380.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Constitución del Fondo de apoyo empresarial a la MYPE.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El fondo de ayuda empresarial fue constituido aprox. con <strong>S/ 300 millones</strong> y tiene como objetivo principal <strong>garantizar los créditos para capital de trabajo para las MYPE.</strong> Este fondo tiene a COFIDE como articular entre el Gobierno y la banca comercial.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Retiro de efectivo de la CTS.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El estado autoriza el retiro de hasta S/ 2,400 de la compensación de tiempo de servicio (CTS) a los ciudadanos, servirá para solventar gastos el tiempo que dure el aislamiento social obligatorio.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Retiro de las AFP.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Los afiliados al Sistema Privado de Adminsitración de Fondos de Pensiones (SPP) podrán realizar, por única vez, el retiro extraordinario de hasta S/ 2,000 de su Cuenta Individual de Capitalización (CIC) siempre que hayan dejado de aportar a la cuenta por al menos 6 meses consecutivos, es decir que hace 6 meses no se encuentren en planilla.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Subsidios por incapacidad laboral.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>El MEF transferirá S/ 200 millones a EsSalud para la entrega de subsidios por incapacidad temporal a trabajadores que sean diagnosticados con COVID-19 y ganen hasta por S/ 2,400 mensual.</p>
                                <h4><li style={{listStyle: 'inside decimal', marginBottom: '2%', marginTop: '2%'}}>Subsidio para el pago de planillas.<br></br></li></h4>
                                <p style={{textAlign: 'justify'}}>Se entregará un subsidio a las empresas del 35% del total de la suma de remuneraciones mensuales de un trabajador que no excedan los S/ 1,500 de remuneración.</p>
                                </ul>
                                <p style={{textAlign: 'justify'}}>Tanto en el Perú como en Estados Unidos se pusieron en marcha diferentes medidas económicas para alcanzar un objetivo en común, el de reactivar la economía, y no es muy descabellado pensar que un mismo objetivo muchas veces nos puede llevar a adoptar medidas similares alcanzando resultados distintos. Así una de las similitudes principales encontradas fue la 1) lucha contra el desempleo, en el caso de Perú con los bonos, los subsidios, el retiro de fondos, etc; Estados Unidos por su parte atacó con los pagos directos a las personas y familias y la creación del seguro de desempleo. También se buscó 2) salvar a las grandes, medianas y pequeñas empresas de la bancarrota por medio de préstamos, si bien hasta el momento el rescate se ha centrado en PYMES en Perú, queda pendiente el paquete de medidas para empresas medianas y grandes.</p>
                                <p style={{textAlign: 'justify'}}>La diferencia principal encontrada radica en el monto del paquete económico (casi 100X de diferencia) y los niveles de formalidad de cada economía. Salvando las distancias, Estados Unidos es una economía formal que va centrando de a pocos su crecimiento en industrias locales y fortaleciendo su moneda, los niveles de bancarización están cercanos al 94% mientras en que Perú apenas supera el 40%, ratio importante al momento de ejecutar presupuestos individuales de asistencia social. Los niveles de formalidad y solidez del aparato estatal hacen que los planes y la delegación de los mismos se ejecuten con más eficiencia a diferencia de Perú.</p>
                                <div id="referencias">
                                <p style={{textAlign: 'justify'}}>Estas situaciones nos enseñan que entre nuestra economía y la americana existe un <strong>gran abismo y que hay mucho que aprender</strong>, al Perú le está pasando factura en estos momentos la falta de conectores de flujos financieros que lleguen a la base de la sociedad y si bien las decisiones del Ejecutivo vienen siendo aceptadas por la mayoría de la población la capacidad de articulación con los gobiernos locales y del sistema financiero aún tiene mucho por mejorar debido a la improvisación de las autoridades y falta de interés genuino de la banca.</p>

                                                           
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>CNN Español (25 de marzo del 2020, Por Manu Raju, Ted Barrett, Clare Foran, www.cnnespanol.cnn.com).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>BBC News Mundo (27 de marzo del 2020, www.bbc.co.uk).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>El País(25 de marzo del 2020, www.elpais.com).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Diario El Peruano (31 de marzo del 2020, www.elperuano.pe).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>La República (27 de marzo del 2020, www.larepublica.pe).</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Essalud (16 de marzo del 2020, www.essalud.gob.pe).</span></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Carlos Guzmán</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 01 ABRIL 2020</a></li>
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
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Planes de rescate sin precedentes en EEUU y Perú - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fplanes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%px', height: '28px'}}><iframe name="f18ca3550b86068" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df282dadadacc2%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3f76f00043a744%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fplanes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fplanes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f2261e66f5263ec" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd02e82e94150c%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff3f76f00043a744%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fplanes-de-rescate-sin-precedentes-en-EEUU-y-Peru.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/consejos-para-tus-inversiones-en-tiempos-del-enemigo-invisible"><a class="page-link">Siguiente</a></Link>
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

export default blog06;