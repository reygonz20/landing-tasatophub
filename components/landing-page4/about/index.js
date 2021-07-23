import React from 'react';

import { SectionTitle } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <section id="how-it-works" className="iq-counter-box-1 overview-block-ptb it-works re4-mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <SectionTitle
                                title="What is sofbox ?"
                                subTitle="Sofbox is a sleek, clean and powerful landing page template."
                            />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-4 text-center">
                            <div className="iq-counter">
                                <div className="counter-date">
                                    <span className="timer iq-tw-7 iq-font-blue" data-count-from="0" data-count-to="5656123"
                                          data-count-speed="150" >5656123</span>
                                    <label className="iq-font-grey">App Download</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-auto text-center r4-mt-30">
                            <div className="iq-counter">
                                <div className="counter-date">
                                    <span className="timer iq-tw-7 iq-font-blue" data-count-from="0" data-count-to="2530"
                                          data-count-speed="150" >2530</span>
                                    <label className="iq-font-grey">Happy Clients</label>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-4 text-center r4-mt-30">
                            <div className="iq-counter">
                                <div className="counter-date">
                                    <span className="timer iq-tw-7 iq-font-blue" data-count-from="0" data-count-to="8120"
                                          data-count-speed="150" >8120</span>
                                    <label className="iq-font-grey">Active Accounts</label>
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