import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <section id="software-features" className="overview-block-ptb grey-bg main-service-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Sofbox Specialities</h3>
                                    <p>Sofbox is popular for the below specialities that can make your website look beautiful
                                   </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <img src="/assets/images/drive/iPad-Mockup.png" className="img-fluid" alt="#" />
                            </div>
                            <div className="col-lg-5 col-md-12 left-img">
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-pie-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Design</h5>
                                        Sofbox’s beautiful and super clean looks will make your website look beautiful and elegant.

                                    </div>
                                </div>
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-grid-view-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Code</h5>
                                        Source code is written clean which can be understood.
                                    </div>
                                </div>
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-monitor-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Functionality</h5>
                                        Allows easily to customize as per your business needs.
                                    </div>
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