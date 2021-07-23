import React from 'react';

import { SectionTitle, PricingCardStyle3 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <section className="overview-block-ptb white-bg iq-asked-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <SectionTitle
                                title="Frequently Asked Questions"
                                subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="iq-accordion iq-mlr-40">
                                <div className="iq-accordion accordion-active">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Ipsum is simply dummy the printing?</a>
                                    <div className="accordion-details">
                                        <div className="row">
                                            <div className="col-sm-3"><img alt="#" className="img-fluid" src="/assets/images/blog/01.jpg" /></div>
                                            <div className="col-sm-9"> It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Dummy the printing and type setting?</a>
                                    <div className="accordion-details">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.</div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Standard dummy since the 1500s?</a>
                                    <div className="accordion-details">
                                        <div className="row">
                                            <div className="col-sm-9"> It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.</div>
                                            <div className="col-sm-3"><img alt="#" className="img-fluid" src="/assets/images/blog/01.jpg" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">It has survived five centuries?</a>
                                    <div className="accordion-details">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;