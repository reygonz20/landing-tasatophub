import React from 'react';

import {ParallaxHeroStyle1, SectionTitle} from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <ParallaxHeroStyle1
                    ids="compare-services"
                    className="iq-compare-services overview-block-ptb iq-over iq-over-blue-90 iq-parallax jarallax"
                    bgImage={"/assets/images/bg/05.jpg"}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="Compare Services"
                                    subTitle="Comparison of services as per the features and services provided."
                                    className={"white"}
                                    pClassName={"iq-font-white"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-monitor-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Easy to Customize</h5>
                                        <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>


                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>90</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="90" style={{width:"90%",transition: "width 2s ease 0s"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 align-self-center text-center">
                                <h2 className="iq-font-white">V/S</h2>
                            </div>
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-monitor-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Easy to Customize</h5>
                                        <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>70</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="70" style={{width:"70%",transition: "width 2s ease 0s"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row iq-mt-50">
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-albums-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Multipurpose layout</h5>
                                        <p>Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements</p>
                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>50</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="50" style={{width:"50%",transition: "width 2s ease 0s"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 align-self-center text-center">
                                <h2 className="iq-font-white">V/S</h2>
                            </div>
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-albums-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Multipurpose layout</h5>
                                        <p>Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>80</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="80" style={{width:"80%",transition: "width 2s ease 0s"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row iq-mt-50">
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-color-wand-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Unique Design</h5>
                                        <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>
                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>100</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="100" style={{width:"100%",transition: "width 2s ease 0s"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 align-self-center text-center">
                                <h2 className="iq-font-white">V/S</h2>
                            </div>
                            <div className="col-sm-5">
                                <div className="iq-services-box text-left iq-font-white">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className="ion-ios-color-wand-outline" />
                                    </div>
                                    <div className="services-content">
                                        <h5 className="iq-tw-6 iq-pb-10 iq-font-white">Unique Design</h5>
                                        <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>
                                        <div className="iq-progress-bar">
                                            <p className="iq-progress-bar-text">
                                                <span>40</span>
                                            </p>
                                            <div className="iq-progress-bar">
                                                <span data-percent="40" style={{width:"40%"}}/>
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