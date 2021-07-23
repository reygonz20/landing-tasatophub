import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1 ids="iq-home" bgImage={"/assets/images/bg/10.jpg"} className={"iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}>
                    <div className="container-fluid">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="text-uppercase iq-font-white iq-tw-3">We are building <b
                                        className="iq-tw-7">software</b> to help</h1>
                                    <p className="iq-font-white iq-pt-15 iq-mb-40">We are a company boutique for digital transformation and software development that offers state-of - the-art engineering solutions, helping businesses and business customers untangle complicated problems.

                                    </p>
                                    <div className="waves-box">
                                        <a href="https://www.youtube.com/watch?v=kzyFmrFky7Y"
                                           className="iq-video popup-youtube" >
                                            <i className="ion-ios-play-outline" />
                                        </a>
                                        <div className="iq-waves">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <a href="#" className="button bt-black iq-mt-5 iq-ml-40">Download</a>
                                </div>
                                <div className="col-lg-6">
                                    <img className="banner-img img-fluid watch-img wow slideInDown"
                                         src="/assets/images/banner/19.png" alt="" />
                                    <img className="banner-img wow bounceInDown" data-wow-duration="2s"
                                         src="/assets/images/banner/17.png" alt="" />
                                    <img className="banner-phone img-fluid center-block wow fadeInUp"
                                         src="/assets/images/product/mob.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxHeroStyle1>
            </>
        );
    }
}

export default Index;