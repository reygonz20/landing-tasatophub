import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            
            <section id="iq-home" className="iq-banner-02 style-1 overview-block-pt iq-bg-over iq-over-Gradient-top">
                
            
                <div className="container">
                    <div className="banner-text text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className=" iq-font-dark iq-tw-8">Perfect Landing Template</h1>
                                <p className="iq-font-dark iq-pt-15 iq-mb-20 iq-plr-100 iq-mlr-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</p>
                                <a href="#" className="button-blue-shadow iq-mt-10 iq-mr-30">Sign up For 30 day Trial</a>
                                <a href="#" className="button-line-shadow iq-mt-10">Buy Now license Here</a>
                            </div>
                            <div className="col-md-12">
                             <img  className="banner-img img-fluid center-block iq-mt-60" src="/assets/images/banner/12.png" /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01 skrollable skrollable-between" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                        <img src="/assets/images/drive/18.png" alt="drive02" />
                    </span>
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                    <span className="banner-objects-04 skrollable skrollable-between" data-bottom="transform:translatex(100px)"
                          data-top="transform:translatex(-100px);">
                        <img src="/assets/images/drive/17.png" alt="drive02" />
                    </span>
                </div>
            </section>

        </>
    );
};

export default Index;