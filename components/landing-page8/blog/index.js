import React from 'react';

import OwlCarousel from 'react-owl-carousel2';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
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
            },
        }
    }

    render() {
        const { options } = this.state;
        return (
            <>
                <section id="blog" className="overview-block-ptb grey-bg iq-blog blog-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Latest Blog Post</h3>
                                    <p>Below are some of the most popular blogging solutions.</p>
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
                                                    <video style={{ width: "100%", height:"100%" }} id="player1"
                                                           poster="/assets/video/01.jpg" controls preload="none">
                                                        <source type="video/m4v" src="/assets/video/01.m4v"/>
                                                        <source type="video/webm" src="/assets/video/01.webm"/>
                                                        <source type="video/ogg" src="/assets/video/01.ogv"/>
                                                    </video>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title">
                                                    <a href="#">
                                                        <h5 className="iq-tw-7 iq-mb-10">Sharing Data With All Views</h5>
                                                    </a>
                                                </div>
                                                <div className="blog-content">
                                                    <p>you may need to share a piece of data with all views that are rendered by your application. You may do so using the view facade's share method.</p>
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
                                    </div>


                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="media-wrapper">
                                                    <div className="iq-bolg-video">
                                                        <iframe src="https://player.vimeo.com/video/176916362" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title">
                                                    <a href="#">
                                                        <h5 className="iq-tw-7 iq-mb-10"> Vue JS easy to learn</h5>
                                                    </a>
                                                </div>
                                                <div className="blog-content">
                                                    <p>you may need to share a piece of data with all views that are rendered by your application. You may do so using the view facade's share method.</p>
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
                                    </div>

                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="media-wrapper">
                                                    <img className="img-fluid center-block"
                                                         src="/assets/images/blog/01.jpg" alt="#" />
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title">
                                                    <a href="#">
                                                        <h5 className="iq-tw-7 iq-mb-10">Passing Data in VUE</h5>
                                                    </a>
                                                </div>
                                                <div className="blog-content">
                                                    <p>You can send data from a child to a parent component by means of Vue's built-in $emit() method.</p>
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
                                    </div>

                                    <div className="item">
                                        <div className="iq-blog-box">
                                            <div className="iq-blog-image clearfix">
                                                <div className="media-wrapper">
                                                    <div className="iq-bolg-video">
                                                        <iframe src="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                                                                allowFullScreen />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-blog-detail">
                                                <div className="blog-title">
                                                    <a href="#">
                                                        <h5 className="iq-tw-7 iq-mb-10">Learn react or VUE ?</h5>
                                                    </a>
                                                </div>
                                                <div className="blog-content">
                                                    <p>Vue is easier to learn than React because it leverages more traditional web technologies better than React.</p>
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
                                    </div>

                                    <div className="item">
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
                                    </div>


                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;
