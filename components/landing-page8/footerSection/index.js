import React from 'react';

const Index = (props) => {

    return (
        <>
            <section className="footer-info iq-pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-location-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Address</h4>
                                    <p>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 r4-mt-30">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-telephone-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Phone</h4>
                                    <p>+0123 456 789
                                        <br />Mon-Fri 8:00am - 8:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 r-mt-30">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-email-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Mail</h4>
                                    <p>support@sofbox.com
                                        <br />24 X 7 online support
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 r-mt-30">
                            <ul className="info-share">
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                <li><a href="#"><i className="fab fa-google" /></a></li>
                                <li><a href="#"><i className="fab fa-github" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row iq-mt-40">
                        <div className="col-sm-12 text-center">
                            <div className="footer-copyright iq-ptb-20">© <span id="copyright"> 2019</span>
                                <a href="#" className="text-green">Sofbox.</a> All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Index;