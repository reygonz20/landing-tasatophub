import React from 'react';

import { PricingCardStyle2 } from '../../sofbox';

const Title = () => (<><small>$</small>19<small>/Month</small></>);

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <section id="pricing" className="overview-block-ptb grey-bg iq-price-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Affordable Price</h3>
                                    <p>Make custom website as per our custom website packages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="iq-pricing pricing-03 text-center">
                                    <PricingCardStyle2
                                        bgImage={"/assets/images/bg/08.jpg"}
                                        title={ <Title /> }
                                        subTitle={"BASIC"}
                                    >
                                        <ul>
                                            <li><s>100 MB Disk Space</s></li>
                                            <li>2 Subdomains</li>
                                            <li>5 Email Accounts</li>
                                            <li><s>Webmail Support</s></li>
                                            <li><s>Customer Support 24/7</s></li>
                                        </ul>
                                        <div className="price-footer">
                                            <a className="button" href="#">Purchase</a>
                                        </div>
                                    </PricingCardStyle2>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 wow flipInY r4-mt-30 iq-pricing pricing-03 text-center" data-wow-duration="1s">
                                <PricingCardStyle2
                                    bgImage={"/assets/images/bg/08.jpg"}
                                    title={(
                                        <>
                                            <small>$</small>29<small>/Month</small>
                                        </>
                                    )}
                                    subTitle={"STANDARD"}
                                >
                                    <ul>
                                        <li>100 MB Disk Space</li>
                                        <li>2 Subdomains</li>
                                        <li>5 Email Accounts</li>
                                        <li><s>Webmail Support</s></li>
                                        <li>Customer Support 24/7</li>
                                    </ul>
                                    <div className="price-footer">
                                        <a className="button" href="#">Purchase</a>
                                    </div>
                                </PricingCardStyle2>
                            </div>

                            <div className="col-md-4 col-lg-4 iq-pricing pricing-03 text-center">
                                <PricingCardStyle2
                                    bgImage={"/assets/images/bg/08.jpg"}
                                    title={(
                                        <>
                                            <small>$</small>49<small>/Month</small>
                                        </>
                                    )}
                                    subTitle={"STANDARD"}
                                >
                                    <ul>
                                        <li>100 MB Disk Space</li>
                                        <li>2 Subdomains</li>
                                        <li>5 Email Accounts</li>
                                        <li><s>Webmail Support</s></li>
                                        <li>Customer Support 24/7</li>
                                    </ul>
                                    <div className="price-footer">
                                        <a className="button" href="#">Purchase</a>
                                    </div>
                                </PricingCardStyle2>
                            </div>


                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;