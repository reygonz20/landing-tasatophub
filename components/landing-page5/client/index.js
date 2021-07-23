import React from 'react';

import OwlCarousel from 'react-owl-carousel2';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                items: 1,
                nav: false,
                rewind: true,
                autoplay: true,
                margin: 30,
                loop: true,
                dots: false,
                //navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1
                    },
                    // breakpoint from 786 up
                    786: {
                        items: 1
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: 1
                    },
                    1199: {
                        items: 1
                    }
                }
            },
        }
    }

    render() {
        const { options } = this.state;
        return (
            <>
                <div id="testimonial" className="iq-testimonial2 overview-block-ptb iq-pb-120 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="heading-title text-center">
                                    <h3 className="title iq-tw-6">Client Feedback</h3>
                                    <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <OwlCarousel options={options}>
                                    <div className="item">
                                        <div className="feedback">
                                            <div className="iq-info text-left">
                                                <div className="iq-avtar iq-mr-20">
                                                    <img alt="#" className="img-fluid center-block" src="/assets/images/team/small/01.jpg" />
                                                </div>
                                                <p>Simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    1500s.</p>
                                            </div>
                                            <div className="iq-mt-30">
                                                <div className="avtar-name">
                                                    <div className="iq-lead iq-mb-0 iq-tw-6 iq-font-blue">Rinks Cooper
                                                    </div>
                                                    <span>CEO, Qwilo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="feedback">
                                            <div className="iq-info text-left">
                                                <div className="iq-avtar iq-mr-20">
                                                    <img alt="#" className="img-fluid center-block" src="/assets/images/team/small/02.jpg" />
                                                </div>
                                                <p>Simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    1500s.</p>
                                            </div>
                                            <div className="iq-mt-30">
                                                <div className="avtar-name">
                                                    <div className="iq-lead iq-mb-0 iq-tw-6 iq-font-blue">Rinks Cooper
                                                    </div>
                                                    <span>CEO, Qwilo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="feedback">
                                            <div className="iq-info text-left">
                                                <div className="iq-avtar iq-mr-20">
                                                    <img alt="#" className="img-fluid center-block" src="/assets/images/team/small/03.jpg" />
                                                </div>
                                                <p>Simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    1500s.</p>
                                            </div>
                                            <div className="iq-mt-30">
                                                <div className="avtar-name">
                                                    <div className="iq-lead iq-mb-0 iq-tw-6 iq-font-blue">Rinks Cooper
                                                    </div>
                                                    <span>CEO, Qwilo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Index;