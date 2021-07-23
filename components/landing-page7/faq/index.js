import React from 'react';
import {SectionTitle} from "../../sofbox";


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <section className="overview-block-ptb white-bg iq-asked">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="Frequently Asked Questions"
                                    subTitle="Here you can find solution to your questions or queries for template."
                                />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6">
                                <img className="img-fluid center-block" src="/assets/images/drive/10.png" alt="drive10"
                                     style={{ zIndex: 9, position: 'relative' }} />
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="iq-accordion">
                                    <div className="iq-accordion accordion-active">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Can sofbox be used for any business ?</a>
                                        <div className="accordion-details">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <img alt="#" className="img-fluid" src={ '/assets/images/blog/01.jpg' } />
                                                </div>
                                                <div className="col-sm-9"> Yes. You can use this template for any business and can be customized as per your needs.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-accordion">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Is sofbox template responsive ?</a>
                                        <div className="accordion-details">Yes. Every page is fully responsive and retina ready, which makes your creation look good on any device.

                                        </div>
                                    </div>
                                    <div className="iq-accordion">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Can we change the color scheme ?</a>
                                        <div className="accordion-details">
                                            <div className="row">
                                                <div className="col-sm-9"> Yes. You can change the color scheme of the website. There is customizer available from which you can change the websites color.
                                                </div>
                                                <div className="col-sm-3">
                                                    <img alt="#" className="img-fluid" src={"/assets/images/blog/01.jpg"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-accordion">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Are the sections customizable ?</a>
                                        <div className="accordion-details">Yes. You can choose the layout and change the sections as per your needs. You can also choose pre-made useful elements.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-objects-asked">
                        <span className="iq-objects-01">
                            <img src={"/assets/images/drive/02.png"} alt="drive02" />
                        </span>
                        <span className="iq-objects-02" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
                            <img src={"/assets/images/drive/04.png"} alt="drive02" />
                        </span>
                        <span className="iq-objects-03 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </section>

            </>
        );
    }

}

export default Index;