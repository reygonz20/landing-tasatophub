import React, { Component } from "react";
import $ from 'jquery';
import Link from 'next/link'

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
    console.log(top)
};

const Blog16 = () => {
    return (
        <React.Fragment>
        
    {/* <!-- Breadcrumb --> */}
    <section className="iq-breadcrumb overview-block-pt text-center jarallax iq-over-blue-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="heading-title white iq-breadcrumb-title iq-mtb-100">
                        <h3 className="title iq-tw-7" style={{fontSize: '2rem'}}>05 tips para enseñar el ahorro a los niños</h3>
                        {/* <p className="iq-front-white" style={{color: 'white'}}>¿El inversionista quiere asistir a nuestras oficinas? En algunos casos la respuesta será sí, a fin de conocer a la empresa a la cual va a entregar su confianza y dinero.</p> */}
                    </div>
                    <nav aria-aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/educacion-financiera"><i className="ion-home"></i>Educación Financiera</a></li>
                            <li className="breadcrumb-item active" aria-current="page">05 tips para enseñar el ahorro a los niños</li>
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
                            <img class="" src="/assets/images/educacion/educacion16.jpg" alt="#"></img>
                        </div>
                        <div class="iq-blog-detail">
                            {/* <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6 iq-mb-10">Blogpost With Image</h5></a></div> */}
                            <div class="blog-content">
                            
                                
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Suele creerse que las finanzas son cosas de adultos, pero lo cierto es que toda edad es buena para aprender sobre temas financieros. Si tus hijos o sobrinos aprenden a ahorrar serán capaces de administrar sus recursos, cuidar los que tienen y entender que el dinero no es ilimitado, esto le evitará muchos malos ratos cuando sean grandes y tengan que hacerse responsables de sus finanzas.</p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Lo importante es entender el valor del dinero y es ahí donde se les muestra la importancia del ahorro ¿Para qué deben ahorrar? ¿cómo deben hacerlo?.</p>
                                
                                <ol>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Enséñales de dónde viene el dinero.</strong> Es importante los niños sepan que el dinero proviene del esfuerzo y trabajo de las personas. Con el dinero obtenido, la familia puede cubrir sus necesidades básicas y gustos.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Muéstrales los usos del dinero.</strong> Tendrán que aprender qué el gasto y qué es el ahorro, ambos son completamente distintos. Los gastos comprenden todas aquellas cosas que deban costear en el mes o semana dependiendo que tanto dinero reciben y el ahorro es el dinero que se guarda para utilizarlo más<br></br> adelante <a onClick={ () => { jumpTo('#referencias') } } href="#referencias"><sup>1</sup></a>. Se asocia a objetivos a los que no pueden acceder de manera inmediata, para ello necesitará esfuerzo, constancia y paciencia.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Explícales la diferencia entre los gastos: los necesarios, útiles y los gustos.</strong> Los gastos necesarios son aquellos que nos hace falta en nuestra vida diaria como alimentos, ropa, vivienda, agua, electricidad. Los gastos útiles son aquellos que cumplen un propósito, nos sirven. Por ejemplo: la lonchera donde se lleva todo lo comerás en el colegio.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Ayúdalos a fijarse metas de ahorro.</strong> ¿Hay algo que tu hijo anhele y que pueda conseguir mediante sus ahorros? Eso que tanto quiere puede ser un excelente incentivo para ahorrar. Antes de comprarle todo lo que quiera, dale la posibilidad de conseguir cosas gracias a sus propios esfuerzos y/o propinas, lo valorará aún más. El que tengan una meta clara de ahorro les motivará más.</li>
                                    <li style={{listStyle: 'inside decimal', textAlign: 'justify', fontSize: '0.88rem'}}><strong>Muéstrales opciones para ahorrar.</strong> La alcancía siempre será un buen método para guardar dinero, sobre todo si se trata de niños pequeños. Esta alcancía puede tener muchas formas y colores. Incluso, pueden poner sobre ella un dibujo o foto de la meta para que no olvide por qué está haciendo el esfuerzo.</li>
                                </ol>

                            <div id="referencias">
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>La Superintendencia de Banca, Seguro y AFP (SBS) está trabajando en el diseño de una nueva política de inclusión financiera, a través de la cual impulsarán proyectos para que los adolescentes desde los 14 o 16 años puedan realizar ahorros en el sistema financiero. Es importante que entiendan que la cuenta de ahorro tiene comisiones e intereses que variarán según el banco que elijan<a onClick={ () => { jumpTo('#referencias') } } href="#referencias"><sup>2</sup>.</a></p>
                                <p style={{textAlign: 'justify', fontSize: '0.88rem'}}>Nunca es demasiado temprano para enseñar conceptos financieros. Si quieres que tus hijos se transformen en adultos responsables con su economía empieza a enseñarles desde pequeños.</p>
                                


                                <h4 style= {{marginBottom: '2%', marginTop: '2%'}}>Fuentes:</h4>
                                
                                <ul>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a href="https://www.sbs.gob.pe/educacion-financiera/minifinanzas#sbc4116"><span style={{color:'#146cae'}}><sup>1</sup> http://www.sbs.gob.pe/educacion-financiera/minifinanzas#sbc4116</span></a></li>
                                <li style={{listStyle: 'inside disc', textAlign: 'justify', fontSize: '0.88rem'}}><a href="https://gestion.pe/economia/sbs-retomara-proyecto-adolescentes-abran-cuenta-bancos-14-anos-262354-noticia/"><span style={{color:'#146cae'}}><sup>2</sup>https://gestion.pe/economia/sbs-retomara-proyecto-adolescentes-abran-cuenta-bancos-14-anos-262354-noticia/</span></a></li>
                                </ul>
                            </div>
                            </div>
                            <div class="iq-blog-meta">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true"></i>Deyanira Méndez</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i>18 AGOSTO 2019</a></li>
                                    {/* <li class="list-inline-item"><a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i> 3</a></li> */}
                                </ul>
                            </div>
                            
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <pre class="iq-pall-10 iq-mtb-30 grey-bg">&lt;p&gt;Text here...&lt;/p&gt;</pre>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <ul class="iq-tags list-inline iq-mtb-50">
                                <li><a href="javascript:void(0)">AHORRO</a></li>
                                <li><a href="javascript:void(0)">FINANZAS</a></li>
                                <li><a href="javascript:void(0)">NIÑOS</a></li>
                                {/* <li><a href="javascript:void(0)">Wordpress</a></li> */}
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{display: 'flex', justifyContent: 'space-around'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <li><span class="small font-secondary text-uppercase text-light-clr fa fa-share-alt"> Compartir</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;" class="fab fa-facebook text-primary"></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?text=05 tips para enseñar el ahorro a los niños - TasaTop.com&amp;url=https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="fab fa-twitter text-primary"></a></li>
                                    <li><a href="https://plus.google.com/share?url=https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-google-plus text-danger"></a></li>
									<li><a href="https://www.linkedin.com/cws/share?url=https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html%3Falign-class%3Dmiddle-center&amp;token=&amp;isFramed=true&amp;lang=es_ES&amp;_ts=1498693931547.97&amp;xd_origin_host=https://www.tasatop.com/pe/educacion-financiera" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="fab fa-linkedin text-primary"></a></li>
                                    <li><a href="https://api.whatsapp.com/send?text=https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" data-action="share/whatsapp/share" class="fab fa-whatsapp text-success"></a></li>
                                </ul>
                            </div>
                            </div>


                            <div class="iq-post-author iq-mtb-20 iq-pall-30 blue-bg" style={{backgroundColor: '#146cae'}}>
                                <div class="iq-post-author-pic iq-mr-25">
                                    <img alt="#" class="rounded-circle" src="/assets/images/blog/deyanira-mendez.jpg" style={{width: '90px', height: '90px'}}></img>
                                </div>
                                <div class="iq-comment-content">
                                    <div class="iq-comment-author">
                                        <a class="lead iq-mtb-10 iq-tw-6 iq-font-white" href="javascript:void(0)">Deyanira Mendez</a>
                                    </div>
                                    <p class="iq-font-white">Administradora de Negocios Internacionales - Universidad Tecnológica del Perú.</p>
                                </div>
                            </div>
                            
                            <div class="fb-like col-md-12 fb_iframe_widget" data-href="https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=159229711223641&amp;container_width=1170&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2F05-tips-para-ensenar-el-ahorro-en-los-ninos.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style={{verticalAlign: 'bottom', width: '100%', height: '28px'}}><iframe name="f26d5270b5db27" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3ac31435ef784%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff398c43bd765a64%26relation%3Dparent.parent&amp;container_width=1170&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2F05-tips-para-ensenar-el-ahorro-en-los-ninos.html&amp;layout=standard&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style={{border: 'none', visibility: 'visible', width: '100%', height: '28px'}} class=""></iframe></span></div>
                            <div class="fb-comments col-md-12 fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://www.tasatop.com/pe/educacion-financiera/05-tips-para-ensenar-el-ahorro-en-los-ninos.html" data-numposts="5" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=159229711223641&amp;container_width=1170&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2F05-tips-para-ensenar-el-ahorro-en-los-ninos.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"><span style={{verticalAlign: 'bottom', width: '100%', height: '204px'}}><iframe name="f3a89dbc2fe45fc" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=159229711223641&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3d23d3c26bddfc%26domain%3Dwww.tasatop.com%26origin%3Dhttps%253A%252F%252Fwww.tasatop.com%252Ff398c43bd765a64%26relation%3Dparent.parent&amp;container_width=1170&amp;height=100&amp;href=https%3A%2F%2Fwww.tasatop.com%2Fpe%2Feducacion-financiera%2F05-tips-para-ensenar-el-ahorro-en-los-ninos.html&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550" style={{border: 'none', visibility: 'visible', width: '100%', height: '204px'}} class=""></iframe></span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row iq-mt-80">
                    <div class="col-sm-12">
                        <nav aria-label="">
                            <ul class="pagination  justify-content-center">
                                <li class="page-item">
                                    <Link href="/pe/educacion-financiera/que-productos-financieros-de-ahorro-supervisa-la-SBS"><a class="page-link" >Anterior</a></Link>
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
                                    <a class="page-link" href="/pe/educacion-financiera/el-presupuesto-y-tus-metas-de-ahorro">Siguiente</a>
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

export default Blog16;