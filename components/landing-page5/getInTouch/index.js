import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <ParallaxHeroStyle1
                ids="get-in-tech"
                bgImage={"/assets/images/bg/07.jpg"}
                className={"overview-block-ptb iq-bg-over text-center iq-over-blue-80 iq-screenshots iq-parallax jarallax"}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-title white iq-font-white">
                                <h3 className="title iq-tw-7">Still Thinking ?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</p>
                            </div>
                            <a href="#" className="button bt-black">Let's Started</a>
                        </div>
                    </div>
                </div>
            </ParallaxHeroStyle1>
        </>
    );
};

export default Index;