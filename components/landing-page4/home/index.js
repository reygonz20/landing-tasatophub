import React from 'react'

import { ParallaxHeroStyle1 } from '../../sofbox';


class index extends React.Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1
                    ids="iq-home"
                    bgImage={"/assets/images/bg/10.jpg"}
                    className={"iq-banner-07 hero-section overview-block-pt iq-bg-over iq-over-black-10 iq-parallax jarallax"}
                >
                    <div className="container">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <h1 className="text-uppercase iq-font-dark iq-tw-3">Provides To Make Better <b className="iq-tw-6">software</b></h1>
                                    <p className="iq-pt-15 iq-mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <a href="#" className="button">Download</a>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxHeroStyle1>
            </>
        )
    }
}

export default index;
