import React, { Component } from "react";
import Link from 'next/link'

const Blog04 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>Liquidez en el mercado y productos de inversión a mediano plazo</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Liquidez en el mercado y productos de inversión a mediano plazo</li>
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
                            <img class="" src="/assets/images/educacion/educacion04.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify'}}>En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía. Con todas estas medidas se espera que haya una inyección total de aproximada de S/ 10,000 millones en la economía, pero ¿cómo se distribuye este dinero? A continuación lo indicamos.</p>
                                <ol style={{ listStyleType: 'decimal',listStylePosition: 'inside' }}>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', marginBottom: '4%'}}>Para el retiro de hasta S/ 2,400 de las CTS se estima que se inyectará a la economía aproximadamente S/ 4,000 millones.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', marginBottom: '4%'}}>Para el caso de los subsidios para los trabajadores del sector privado que ganen hasta S/ 1,500 se espera un monto por S/ 600 millones.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', marginBottom: '4%'}}>Y para el retiro de hasta S/ 2,000 de las AFP con un aproximado de 2.6 millones de ex aportantes se espera una inyección de hasta S/ 5,300 millones en la economía peruana. Gráficamente se vería de la siguiente forma.</li>
                                </ol>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog04-1.png" style={{marginBottom: '20px'}}></img>                                
                                </div>
                                <p style={{textAlign: 'justify'}}>Con estas medidas tomadas por el MEF se espera que los ciudadanos dispongan de una mayor liquidez para afrontar esta crisis y aquellos que puedan percibir un excedente de efectivo sería una buena opción revisar nuevas alternativas de inversión y no dejar el dinero en la cuenta de ahorro ni bajo el colchón. Sobre esta afirmación nace esta interrogante ¿en qué puedo invertir mi dinero? Las personas que disponen de este efectivo probablemente puedan invertirlo en los siguientes instrumentos. Aquí les presentamos dos buenas alternativas que podrían incrementar tu capital y mantener ahorros de mediano plazo.</p>                                
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Depósitos a plazo fijo (DPF)</h4>
                                <p style={{textAlign: 'justify'}}>Es una de las alternativas de inversión favoritas para las personas que desean generar ganancias con bajo riesgo. ¿En qué se caracteriza este producto?, la rentabilidad es fija y no varía con el tiempo, en la cual el riesgo es muy bajo y las instituciones que brindan este producto están reguladas por la Superintendencia de Banca, Seguros y AFP (SBS), además están cubiertas por el Fondo de Seguro de Depósito hasta por S/100,123 (actualizado a mayo de 2020) en caso de quiebra. Este tipo de inversión te asegura una rentabilidad con bajo riesgo y rentabilidades conservadoras. Si estás interesado(a) en abrir un DPF, te sugerimos hacerlo lo más pronto posible debido a que las tasas todavía son atractivas. Recordemos que la Tasa de Referencia acaba de bajar a 0.25%, por lo que la banca comercial no demorará en reducir sus tasas de ahorro (y crédito). Te invitamos a realizar una subasta de tasa para tus depósitos a plazo fijo haciendo clic <a>aquí</a>, allí te pondremos en contacto con nuestras instituciones afiliadas las cuales otorgarán buenas tasas de interés a través de un servicio totalmente gratito.</p>                                
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Productos estructurados</h4>
                                <p style={{textAlign: 'justify'}}>Estos tipos de inversión tienen horizontes de mediano plazo, generan retornos interesantes al promedio del mercado (y muy superiores a los depósitos a plazo fijo). Una de las ventajas de estos productos es el mediano plazo y la moneda, ante la coyuntura es bueno pensar en mercados a uno o dos años y como moneda dominante al dólar. Al ser en dólares permite disminuir el riesgo país y refugiarse de manera directa en la moneda más fuerte del planeta. Existen productos estructurados que se vienen formulando con acciones que hoy han caído a nivel internacional, por lo que la probabilidad de incremento en el mediano plazo es alta asegurando una rentabilidad atractiva (esto lo vienen aprovechando distintos brokers a nivel global). Pero, ¿qué es un producto estructurado? Imagínate un conjunto de empresas que cotizan en mercados internacionales como Facebook, Bank of America, Disney, Netflix, entre otros, las cuales mantienen un comportamiento estable en el tiempo o mejoran sus cotizaciones, esto hace que las rentabilidades ofrecidas podrían llegar a 1% mensual en dólares, de esta manera el inversor puede distribuir sus excedentes en otros mercados y aprovechar estas ventajas que otorga el mercado internacional. No es una inversión netamente variable, sino es una renta fija condicionada al cumplimiento de unos objetivos. Si quieres saber más sobre estos productos dale clic <a>aquí</a>.</p>
                                <p style={{textAlign: 'justify'}}>Si bien la incertidumbre se mantiene, no olvidemos que toda crisis es temporal y que en ella se puede encontrar oportunidades, ya sea para comprar a precios más bajos o para aprovechar ciertos nichos de mercados que se beneficiarán. Algunos sectores favorecidos son: Alimentos, Salud, y el Digital. La mayoría de peruanos podrán disponer de dinero en las próximas semanas, es importante conocer que si no lo necesita para gastos urgentes lo mejor será invertirlos y aprovechar las oportunidades que da el mercado.</p>
                                <p style={{textAlign: 'justify'}}>La pandemia y la cuarentena que estamos viviendo nos está haciendo entender que la famosa frase “guardar pan para mayo” ha comenzado a tener mucho sentido y que aprender a administrar e invertir mejor tu dinero en el día a día se ha vuelto una actividad esencial para afrontar estos tiempos y encontrar oportunidades de inversión. Un estudio reciente de Deloitte Consulting Perú menciona una caída drástica en el consumo bienes y servicios suntuarios durante la etapa de aislamiento, sin embargo la proporción del ahorro de la renta disponible per cápita se incrementa de 8% a 16%, y para el 2021 proyecta con un 40% de crecimiento. La tendencia está marcada a que luego de pasada las etapas de aislamiento los cambios en los hábitos y consumos serán notorios, será marcada la tendencia a la acumulación e inversión, alimentación y vivienda. Es momento de invertir, diversificar y asegurar el futuro de nuestras familias.</p>                                
                                
                                <div id="referencias">
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Diario El Peruano. 29 de marzo del 2020. www.elperuano.pe</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Diario Gestión. 27 de marzo del 2020. www.gestion.pe</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Diario El comercio. 27 de marzo del 2020. www.elcomercio.pe</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Deloitte Consulting. 27 de marzo. COVID-19: Impacto y Escenarios de recuperación en Consumo y Distribución.</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Banco Central de Reserva del Perú. www.bcrp.gob.pe</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Fondo de Seguro de Depósito. Cobertura marzo – mayo 2020. www.fsd.org.pe</span></li>
                                </ul>
                                </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Carlos Guzmán</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 13 ABRIL 2020</a></li>
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
<                                   li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=Liquidez en el mercado y productos de inversión a mediano plazo - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fliquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '450px', height: '28px'}}><iframe name="f27c48b71a5bf3" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3db3d259993fe4%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2cc11293fbd58c%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fliquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '450px', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fliquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '550px', height: '204px'}}><iframe name="f2817122d96ab64" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1918d386df0f38%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff2cc11293fbd58c%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fliquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '550px', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/notas-desde-la-pandemia-para-la-post-pandemia"><a class="page-link">Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP"><a class="page-link">Siguiente</a></Link>
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

export default Blog04;




