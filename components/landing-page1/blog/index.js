import React, { useState } from 'react';

import OwlCarousel from 'react-owl-carousel2';


const hablandeNosotros = () => {


    const [options, setOptions] = useState({
        items: 3,
                nav: true,
                rewind: true,
                autoplay: true,
                margin: 30,
                loop: true,
                dots: false,
                navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1
                    },
                    // breakpoint from 786 up
                    786: {
                        items: 2
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: 3
                    },
                    1199: {
                        items: 3
                    }
                }
    })

    return (
        <>
            <section id="blog" className="overview-block-ptb grey-bg iq-blog blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-title">
                                <h3 className="title iq-tw-7">Hablan de nosotros</h3>
                                {/* <p>Below are some of the most popular blogging solutions.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <OwlCarousel options={options}>
                            <div className="item">
                                    <div className="iq-blog-box">
                                        <div className="iq-blog-image clearfix">
                                            <div className="media-wrapper">
                                                <img className="img-fluid center-block"
                                                     src="/assets/images/blog/001.jpg" alt="#" />
                                            </div>
                                        </div>
                                        <div className="iq-blog-detail">
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h5 className="iq-tw-7 iq-mb-10">Emprendedores que simplifican las finanzas personales</h5>
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <p>Fintech para conectar clientes con entidades financieras. El cliente se registra en TasaTop y de manera anónima indica cuánto es el monto que quisiera ahorrar.</p>
                                            </div>
                                            <div className="iq-blog-meta">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-user-circle" aria-hidden="true" /> Julio Escalante
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> 25 Sep 2017
                                                        </a>
                                                    </li>
                                                    {/* <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-comment" aria-hidden="true" /> 5
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="iq-blog-box">
                                        <div className="iq-blog-image clearfix">
                                            <div className="media-wrapper">
                                                <img className="img-fluid center-block"
                                                     src="/assets/images/blog/002.jpg" alt="#" />
                                            </div>
                                        </div>
                                        <div className="iq-blog-detail">
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h5 className="iq-tw-7 iq-mb-10">¿Quieres una buena tasa de interés para tu plazo fijo?</h5>
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <p>Conoce a TasaTop, una fintech peruana de subastas online que permite al ahorrista obtener una mejor rentabilidad. Iniciaron en diciembre del 2016. Hasta abril, han logrado levantar más...</p>
                                            </div>
                                            <div className="iq-blog-meta">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-user-circle" aria-hidden="true" /> María Rosa Villalobos
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> 23 May 2017
                                                        </a>
                                                    </li>
                                                    {/* <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-comment" aria-hidden="true" /> 5
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="iq-blog-box">
                                        <div className="iq-blog-image clearfix">
                                            <div className="media-wrapper">
                                                <img className="img-fluid center-block"
                                                     src="/assets/images/blog/003.jpg" alt="#" />
                                            </div>
                                        </div>
                                        <div className="iq-blog-detail">
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h5 className="iq-tw-7 iq-mb-10">Una startup para ahorristas que nació en las aulas de ESAN</h5>
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <p>El término fintech ha despegado con fuerza en el sector de la startups durante los últimos años, haciendo hincapié en aquellas empresas financieras que emplean tecnologías...</p>
                                            </div>
                                            <div className="iq-blog-meta">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-user-circle" aria-hidden="true" /> ESAN
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> 02 Feb 2017
                                                        </a>
                                                    </li>
                                                    {/* <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-comment" aria-hidden="true" /> 5
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="iq-blog-box">
                                        <div className="iq-blog-image clearfix">
                                            <div className="media-wrapper">
                                                <img className="img-fluid center-block"
                                                     src="/assets/images/blog/004.jpg" alt="#" />
                                            </div>
                                        </div>
                                        <div className="iq-blog-detail">
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h5 className="iq-tw-7 iq-mb-10">TasaTop: ¿Cómo regatear con las entidades financieras?</h5>
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <p>¡Atención, hay una pelea por sus ahorros! Bueno, no una pelea, exactamente. Está bien, es una subasta. La organizadora es una startup peruana y su nombre es TasaTop.</p>
                                            </div>
                                            <div className="iq-blog-meta">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-user-circle" aria-hidden="true" /> Gestion Perú
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> 21 Dic 2016
                                                        </a>
                                                    </li>
                                                    {/* <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-comment" aria-hidden="true" /> 5
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="item">
                                    <div className="iq-blog-box">
                                        <div className="iq-blog-image clearfix">
                                            <div className="media-wrapper">
                                                <img className="img-fluid center-block"
                                                     src="/assets/images/blog/03.jpg" alt="#" />
                                                <div className="players" id="player2-container">
                                                    <div className="media-wrapper">
                                                        <audio id="player2" preload="none" controls>
                                                            <source
                                                                src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                                                type="audio/mp3" />
                                                        </audio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-blog-detail">
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h5 className="iq-tw-7 iq-mb-10">Creating Views</h5>
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <p>Views contain the HTML served by your application and separate your controller / application logic from your presentation logic. </p>
                                            </div>
                                            <div className="iq-blog-meta">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-comment" aria-hidden="true" /> 5
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default hablandeNosotros;
