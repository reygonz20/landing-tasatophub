import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <ParallaxHeroStyle1
                ids="iq-home"
                bgImage={"/assets/images/bg/01.jpg"}
                className={"overview-block-ptb iq-over-blue-80 text-center iq-parallax jarallax"}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 search-btn">
                            <div className="heading-title white iq-mb-40">
                                <h3 className="title iq-tw-7">Subscribe Our Newsletter</h3>
                            </div>
                            <input type="text" placeholder="Enter your email" name="email" />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                        </div>
                    </div>
                </div>
            </ParallaxHeroStyle1>
        </>
    );
};

export default Index;