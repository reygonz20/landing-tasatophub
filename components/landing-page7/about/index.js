import React from 'react';

import { SectionStyle1, SectionStyle2, SectionTitle, CardStyle5 } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="how-it-works" className="overview-block-ptb it-works grey-bg">
                    <div className="container">
                        <div className="iq-box-shadow iq-pt-60 iq-mt-60">
                            <div className="row">
                                <div className="col-sm-12">
                                    <SectionTitle
                                        title="What is sofbox ?"
                                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <CardStyle5 step={1} media={"/assets/images/services/icon1.png"}>
                                        <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Easy to Customize</h5>
                                        <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                    </CardStyle5>
                                </div>

                                <div className="col-md-12 col-lg-4 r-mt-30">
                                    <CardStyle5 step={2} media={"/assets/images/services/icon2.png"}>
                                        <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Multipurpose layout</h5>
                                        <p>Choose the layout that suits your needs, customize the sections, headers choose from pre-made elements.</p>
                                    </CardStyle5>
                                </div>

                                <div className="col-md-12 col-lg-4 r-mt-30">
                                    <CardStyle5 step={3} media={"/assets/images/services/icon3.png"}>
                                        <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Unique Design</h5>
                                        <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant.</p>
                                    </CardStyle5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-works" className="overview-block-ptb how-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <SectionTitle
                                    title="How it works ?"
                                    subTitle=""
                                    className={"left text-left"}
                                />
                                <div className="text-discover iq-mb-25 ">
                                    <p className="iq-font-15 iq-mt-10">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <p className="iq-font-15 iq-mt-10">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                <h6 className="iq-tw-6 iq-mt-25">Discover our best ever services.</h6>
                                <a href="#" className="button iq-mt-10">Click Here</a>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img className="iq-works-img" src="/assets/images/drive/01.png" alt="drive01" />
                            </div>
                        </div>
                    </div>
                    <div className="iq-objects">
                        <span className="iq-objects-01">
                            <img src="/assets/images/drive/02.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-02 skrollable skrollable-between" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);" style={{ transform: 'translateY(6.77966px)' }}>
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-03 skrollable skrollable-between" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);" style={{ transform: 'translateX(-5.74572px)' }}>
                            <img src="/assets/images/drive/04.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-04 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </section>

            </>
        );
    }

}

export default Index;