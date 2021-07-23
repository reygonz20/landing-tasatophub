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
                                              data-count-speed="150" >1540</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-paper-outline " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Happy Clients</label>
                                        <span className="timer iq-tw-7" data-count-from="0" data-count-to="2530"
                                              data-count-speed="150" >2530</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-person-outline " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Active Accounts</label>
                                        <span className="timer iq-tw-7"  data-count-from="0" data-count-to="8120"
                                              data-count-speed="150" >8120</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    <i className="ion-ios-star " aria-hidden="true" />
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Total App Rates</label>
                                        <span className="timer iq-tw-7" data-count-from="0" data-count-to="1620"
                                              data-count-speed="150" >1620</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="counter-info iq-mt-60 iq-pt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                    <p className="iq-mt-30">It has survived not only five centuries, but also the leap into electronic type setting, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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