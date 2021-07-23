import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <ParallaxHeroStyle1
                ids="iq-home"
                bgImage={"/assets/images/bg/01.jpg"}
                className={"iq-banner-02 no-before overview-block-pt iq-bg-over iq-over-black-60 iq-parallax jarallax"}
            >
                <div className="container">
                    <div className="banner-text text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className=" iq-font-white iq-tw-8">Sofbox <span className="iq-font-blue">Landing Template</span></h1>
                                <p className="iq-font-white iq-pt-15 iq-mb-20 iq-mlr-100 iq-plr-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</p>
                                <a href="#" className="button bt-black iq-mt-10 iq-mb-50">Download</a>
                            </div>
                            <div className="col-md-12">
                                <iframe className="banner-video" src="https://www.youtube.com/embed/kzyFmrFky7Y?rel=0&amp;showinfo=0&amp;autoplay=1&loop=3&autopause=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                        <img src="/assets/images/drive/03.png" alt="drive02" />
                    </span>
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round" />
                    </span>
                    <span className="banner-objects-04" data-bottom="transform:translatex(100px)"
                          data-top="transform:translatex(-100px);">
                        <img src="/assets/images/drive/04.png" alt="drive02" />
                    </span>
                </div>
            </ParallaxHeroStyle1>

        </>
    );
};

export default Index;