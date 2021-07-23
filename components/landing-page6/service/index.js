import React from 'react';

import { CardStyle9 } from "../../sofbox";

const Index = (props) => {

    return (
        <>
            <div className="overview-block-ptb services-page grey-bg" id="software-features">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h3 className="iq-tw-6 iq-mb-25 ">Sofbox Features </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <CardStyle9
                                iconImage={"/assets/images/icon/01.png"}
                            >
                                <h4>Fully Support</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the have suffered in some form.</p>
                            </CardStyle9>
                        </div>

                        <div className="col-sm-4">
                            <CardStyle9
                                iconImage={"/assets/images/icon/02.png"}
                            >
                                <h4>Market Analysis</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the have suffered in some form.</p>
                            </CardStyle9>
                        </div>

                        <div className="col-sm-4">
                            <CardStyle9
                                iconImage={"/assets/images/icon/03.png"}
                            >
                                <h4>Product Review</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the have suffered in some form.</p>
                            </CardStyle9>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;