import React from 'react';

import OwlCarousel from 'react-owl-carousel2';

import { CardStyle7 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                items: 3,
                nav: false,
                rewind: true,
                autoplay: true,
                margin: 30,
                loop: true,
                dots: false,
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
                        items: 2
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: 3
                    },
                    1199: {
                        items: 3
                    }
                }
            },
        }
    }

    render() {
        const { options } = this.state;
        return (
            <>
                <section className="overview-block-ptb white-bg iq-loved-customers">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Loved By Our Customers</h3>
                                    <p>Here are the sayings of our customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <OwlCarousel options={options}>

                                    <div className="item">
                                        <CardStyle7 image={"/assets/images/testimonial/01.jpg"}>
                                            <div className="client-info">
                                                <div className="client-name iq-mb-10">
                                                    <h5 className="iq-tw-6">Jason Adams</h5>
                                                    <span className="sub-title">CEO, Sofbox</span>
                                                </div>
                                                <p>Excellent customer service and best savings on our energy bills to date. Glad I came across this website.</p>
                                            </div>
                                        </CardStyle7>
                                    </div>

                                    <div className="item">
                                        <CardStyle7 image={"/assets/images/testimonial/02.jpg"}>
                                            <div className="client-info">
                                                <div className="client-name iq-mb-10">
                                                    <h5 className="iq-tw-6">Jenny Adams</h5>
                                                    <span className="sub-title">CEO, Sofbox</span>
                                                </div>
                                                <p>Curtis ci8 has been very helpful and I'm happy with the service he has given me today. Thank you.</p>
                                            </div>

                                        </CardStyle7>
                                    </div>

                                    <div className="item">
                                        <CardStyle7 image={"/assets/images/testimonial/02.jpg"}>
                                            <div className="client-info">
                                                <div className="client-name iq-mb-10">
                                                    <h5 className="iq-tw-6">John Deo</h5>
                                                    <span className="sub-title">CEO, Sofbox</span>
                                                </div>
                                                <p>Great experience with Fivestars, really easy to use. A lot of good rewards in my favorite restaurants.</p>
                                            </div>

                                        </CardStyle7>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    }

}

export default Index;