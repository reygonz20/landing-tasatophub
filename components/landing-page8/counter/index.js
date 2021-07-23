import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';


import {index} from "../../../config/plugins";

class Index extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {

        return (
            <>
                <ParallaxHeroStyle1
                    ids="counter"
                    bgImage="/assets/images/bg/02.jpg"
                    className="iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax jarallax">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-folder-outline " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">App Downloads</label>
                                        <span className="timer iq-tw-7" data-count-from="0" data-count-to="1540"
                                              >1540</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-paper-outline " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Happy Clients</label>
                                        <span className="timer iq-tw-7" data-count-from="0" data-count-to="2530"
                                              >2530</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-person-outline " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Active Accounts</label>
                                        <span className="timer iq-tw-7"  data-count-from="0" data-count-to="8120"
                                              >8120</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-star " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Total App Rates</label>
                                        <span className="timer iq-tw-7" data-count-from="0" data-count-to="1620"
                                              >1620</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="counter-info iq-mt-60 iq-pt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>
                                    <p className="iq-mt-30">Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
                                    <a href="#"
                                       className="button bt-black iq-mt-15 iq-mb-30">Download</a>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter-info-img">
                                        <img className="center-block" src="/assets/images/drive/07.png" alt="#" />
                                        <div className="waves-box">
                                            <a href="https://www.youtube.com/watch?v=kzyFmrFky7Y"
                                               className="iq-video popup-youtube">
                                                <i className="ion-ios-play-outline" />
                                            </a>
                                            <div className="iq-waves">
                                                <div className="waves wave-1" />
                                                <div className="waves wave-2" />
                                                <div className="waves wave-3" />
                                            </div>
                                        </div>
                                    </div>
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