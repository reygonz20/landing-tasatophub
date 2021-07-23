import React from 'react';

import { SectionTitle, PricingCardStyle3 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <section id="our-pricing" className="overview-block-pt iq-mt-20 our-pricing-1 grey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <SectionTitle
                                title="Our Pricing"
                                subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="panel pricing-table">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <PricingCardStyle3
                                    icon="ion-ios-person-outline"
                                    title="Personal"
                                >
                                    <ul className="pricing-features">
                                        <li className="pricing-features-item">Custom domains</li>
                                        <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
                                    </ul>
                                    <span className="pricing-price">Free</span>
                                    <a className="iq-mt-40 button" href="#">Purchase</a>
                                </PricingCardStyle3>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <PricingCardStyle3
                                    icon="ion-ios-people-outline" title="Small team"
                                >
                                    <ul className="pricing-features">
                                        <li className="pricing-features-item">Never sleeps</li>
                                        <li className="pricing-features-item">Multiple workers for more powerful apps</li>
                                    </ul>
                                    <span className="pricing-price">$150</span>
                                    <a className="iq-mt-40 button" href="#">Purchase</a>
                                </PricingCardStyle3>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <PricingCardStyle3
                                    icon="ion-ios-world-outline"
                                    title="Enterprise"
                                >
                                    <ul className="pricing-features">
                                        <li className="pricing-features-item">Dedicated</li>
                                        <li className="pricing-features-item">Simple horizontal scalability</li>
                                    </ul>
                                    <span className="pricing-price">$400</span>
                                    <a className="iq-mt-40 button" href="#">Purchase</a>
                                </PricingCardStyle3>
                            </div>
                        </div>
                    </div>
                    <div className="iq-ptb-80">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="false" data-items="5" data-items-laptop="5" data-items-tab="4" data-items-mobile="3" data-items-mobile-sm="1" data-margin="30" >
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/01.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/02.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/03.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/04.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/05.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/06.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/07.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/08.png" alt="#" /></div>
                                    <div className="item"> <img className="img-fluid center-block" src="/assets/images/clients/09.png" alt="#" /></div>
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