import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="overview-block-ptb grey-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center ">
                                <h2 className="iq-mb-25 iq-tw-7">Develop more beautiful thing with Sofbox</h2>
                                <p className="">Choose unique elements and customize sections as per your business requirements. We are a design company, we create beautiful and creative designs that makes your website look elegant.
                                </p>
                                <div className="media iq-mt-30">
                                    <img className="mr-3 rounded-circle align-self-center"
                                         src="/assets/images/testimonial/01.jpg" alt="Generic placeholder image" />
                                        <div className="media-body iq-pr-30 iq-pt-15">
                                            <p>"Sofbox’s unique design and super clean looks made my website look beautiful and elegant."
                                            </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center r-mt-30">
                                <div className="media-wrapper">
                                    <video style={{ width:"100%", height:"100%" }} id="player1" poster="/assets/video/01.jpg"
                                           controls="" preload="none">
                                        <source type="video/m4v" src="/assets/video/01.m4v" />
                                        <source type="video/webm" src="/assets/video/01.webm" />
                                        <source type="video/ogg" src="/assets/video/01.ogv" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;