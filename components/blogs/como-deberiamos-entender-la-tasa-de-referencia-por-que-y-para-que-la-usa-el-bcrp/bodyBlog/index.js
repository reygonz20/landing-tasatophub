import React, { Component } from "react";
import Link from 'next/link'

const Blog05 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>¿Cómo deberíamos entender la Tasa de Referencia? ¿Por qué y para qué la usa el BCRP?</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">¿Cómo deberíamos entender la Tasa de Referencia? ¿Por qué y para qué la usa el BCRP?</li>
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
                            <img class="" src="/assets/images/educacion/educacion05.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                                <p style={{textAlign: 'justify'}}>El día 09 de abril de 2020, el Banco Central de Reserva del Perú (BCRP) redujo en 100 puntos básicos (1.00%) la tasa de referencia, pasando de 1.25% a 0.25%. Este tipo de reducciones suelen darse a través de movimientos sutiles de incremento o reducción de 25 puntos básicos (0.25%) pero no como se ha dado el último mes. El estado de cosas amerita este tipo de movimientos incluso sabiendo que hace veinte días tuvo otra reducción importante de 2.25% a 1.25%. En muy pocos días la tasa de referencia pasó de 2.25% a 0.25%. ¿Qué implicancias trae consigo? ¿La tasa de referencia solo se mueve en épocas de crisis? ¿Qué se espera en los siguientes meses?</p>
                                <p style={{textAlign: 'justify'}}>La tasa de referencia es un mecanismo de política monetaria que tiene BCRP para promover la circulación de efectivo, evitar el enfriamiento de la economía y dinamizar el gasto, consumo e inversión entre sus actores. El BCRP mantiene independencia en la toma de decisiones en materia macroeconómica, sus políticas no responde necesariamente a las solicitudes del Ejecutivo o cualquier otro poder del Estado.</p>
                                <p style={{textAlign: 'justify'}}>Un incremento o reducción en la tasa es una señal directa al mercado financiero para también mover sus tasas comerciales de cara a mejorar o resguardar las condiciones macro y micro de la economía peruana. Debemos saber que la tasa de referencia es la tasa interbancaria que rige el costo del dinero en la Banca, por lo tanto, si los bancos se prestan o intercambian dinero ahora se abarataría más, por lo tanto se espera que este beneficio sea traslado al público.</p>
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>¿La tasa de referencia solo se mueve en épocas de crisis?</h4>
                                <p style={{textAlign: 'justify'}}>La tasa de referencia no solo se mueve en épocas de crisis, es parte de la política monetaria que hace cualquier Banco Central en el mundo. Se va modulando conforme la economía tiene comportamientos anómalos o cuando se busca un determinado objetivo. El caso reciente en Perú y muchos países del globo, manifiesta un movimiento brusco hacia la baja, cuando cae la tasa de referencia se busca que los bancos comerciales también bajen sus tasas, el objetivo es reducir los costos de los créditos para las personas o empresas debido a la crisis económica originada por el COVID-19, lo que se verá en las siguientes semanas es un abaratamiento del crédito para que más peruanos puedan gozar de liquidez a costos bajos. A su vez, las tasas de los ahorros también disminuirán (desincentivo al ahorro), se busca que las personas no mantengan efectivo en los bancos sino por el contrario, gastar ese dinero en la economía encontrando alternativas de inversión más atractivas que dejar el dinero en la Banca, con ello se espera dinamizar el consumo y tener un impacto positivo en el PBI.</p>
                                <p style={{textAlign: 'justify'}}>Un caso contrario se dio en el lustro 2004-2008, donde el crecimiento del Perú estuvo en el rango de 5% a 9%, cifras sobresalientes apoyadas en el crecimiento del sector minería y construcción. En temor en aquellos años era caer en inflación desmedida, por lo tanto el BCRP tomó la decisión de elevar la tasa de referencia de 3.00% a 6.25% durante los 5 años que duró con el objetivo de "encarecer el crédito" y/o "fomentar el ahorro", y de esta manera quitar dinero de la economía disminuyendo su uso o manteniéndolo en cuentas de ahorro en los bancos evitando el crecimiento del consumo que podría terminar en inflaciones por encima de los rangos meta. A medida que existe más dinero en la economía, la sensación de bienestar invita a consumir e invertir más afectando los precios e incurriendo en inflación.</p>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <img src="/assets/images/blog/blog05-1.png" style={{marginBottom: '20px'}}></img>                                
                                </div>
                                <p style={{textAlign: 'justify'}}>Debe quedar claro que la banca en general no tiene la obligación de seguir estas subidas o bajadas de tasa, pero como es una tasa interbancaria se afecta los saldos de dinero que tienen todos, incluido los encajes legales que tienen dentro del BCRP, por lo tanto la tasa de referencia es una medida indirecta para corregir o promover el flujo de dinero en una economía.</p>
                                <p style={{textAlign: 'justify'}}>Según el Economista Kiel Arroyo, ex funcionario del BCRP y docente de Economía, desde su perspectiva “el éxito de la política que está proponiendo el BCRP dependerá de lo articulado que funcione el canal de transmisión. Esto es, la forma de cómo los bancos logren titulizar los créditos que otorguen y que, a su vez a través de COFIDE, puedan obtener desde el BCRP la liquidez necesaria para dotar a las empresas de su capital de trabajo. El esquema de garantías que propone el Estado a través del programa REACTIVA PERÚ es el siguiente en la escala más baja, de los créditos que no sobrepasen los 30,000 soles, las garantías estatales cubrirán el 98% del capital solicitado, con lo que sólo el 2% estaría a merced del riesgo propio de la industria a la cual pertenece la empresa. Por ende, serán las Cajas Municipales y los brazos microfinancieros de los grandes bancos lo que recibirán la mayor demanda de estos créditos, al estar prácticamente coberturada la operación. Es entonces de esperar que las instituciones microfinancieras sean las que capten mayor liquidez desde el esquema propuesto. Su capacidad de captación dependerá de su destreza de titulizar los créditos a otorgar a través COFIDE. Si las Cajas tienen mayor liquidez, su riesgo de impago se reduce, salvaguardado su capacidad de honrar sus obligaciones en todo nivel, pago de intereses CTS, pago de intereses a plazos, etc., etc.”</p>
                                <p style={{textAlign: 'justify'}}>Finaliza puntualizando que “es por ello que la política monetaria planteada por el BCRP, sólo tendrá sentido monetario si los Bancos y las Cajas viabilizan esos préstamos a través de sus sistemas de monitoreo crediticio y fortalecen sus unidades de riesgos para titulizar correctamente estos créditos.”</p>
                                
                                <div id="referencias">                                                                
                            
                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Referencias:</h4>
                                <ul>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Banco Central de Reserva del Perú www.bcrp.gob.pe</span><br></br></li>
                                <li style={{listStyle: 'inside disc'}}><span style={{color:'#146cae'}}>Equilibrium Financiero, Boletín 06, 10 de abril de 2020.</span><br></br></li>
                                </ul>
                            </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Alfredo Cardoso</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> 11 ABRIL 2020</a></li>
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
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=¿Cómo deberíamos entender la Tasa de Referencia? ¿Por qué y para qué la usa el BCRP? - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class=" fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
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
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f31b64ec3c6f35" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3c3a456432d28%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff224c5115a39bc4%26relation%3Dparent.parent&amp;container_width=1200&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/como-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '523px'}}><iframe name="f1a8f10f631e38" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1021bf3b5b64ac%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff224c5115a39bc4%26relation%3Dparent.parent&amp;container_width=1200&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2Fcomo-deberiamos-entender-la-tasa-de-referencia-por-que-y-para-que-la-usa-el-BCRP.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '523px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                <Link href="/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo"><a class="page-link" >Anterior</a></Link>
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
                                <Link href="/pe/educacion-financiera/planes-de-rescate-sin-precedentes-en-EEUU-y-Peru"><a class="page-link" >Siguiente</a></Link>
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

export default Blog05;