import React from 'react';

import { SectionTitle, CardStyle4 } from '../../sofbox';

import OwlCarousel from 'react-owl-carousel2';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                items: 3,
                nav: false,
                rewind: true,
                autoplay: true,
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
            items: [
                {
                    icon: 'ion-ios-monitor-outline',
                    title: 'Easy To Customize',
                    description: 'Sofbox allows easily to customize the template as per your business needs. it makes easy to tailor-made.'
                },
                {
                    icon: 'ion-ios-settings',
                    title: 'Multipurpose Layout',
                    description: 'Choose the layout that suits your needs, customize the sections and choose from pre-made elements.'
                },
                {
                    icon: 'ion-social-googleplus-outline',
                    title: 'Unique Design',
                    description: 'Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant.'
                },
                {
                    icon: 'ion-ios-heart-outline',
                    title: 'Clean Codes',
                    description: 'Clean code which can be understood. makes development easier, more fast and fluid.'
                },
                {
                    icon: 'ion-ios-color-wand-outline',
                    title: 'Easy to Use',
                    description: 'The template can be fully customizable with ease. And use the sofbox custom components. '
                },
                {
                    icon: 'ion-ios-checkmark-outline',
                    title: 'Responsive Design',
                    description: 'Fully responsive design and retina ready. Responsive structure will works perfectly in all size of devices.'
                },
            ]
        };
    }

    render() {
        const { options, items } = this.state;
        const { small } = this.props;
        return (
            <>
                <section id={"about-section"} className="overview-block-ptb">
                    <div className="container" id="how-it-works">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="What is sofbox ?"
                                    subTitle="Sofbox is a sleek, clean and powerful landing page template"
                                />
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <OwlCarousel options={options}>
                                    { items.map((item, index) => (
                                        <CardStyle4 key={index} iconClass={item.icon} >
                                            <div>
                                                <h5 className="iq-tw-7 iq-mb-10">{ item.title }</h5>
                                                <p>{ item.description }</p>
                                            </div>
                                        </CardStyle4>
                                    )) }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-works-section" className="how-works overview-block-ptb">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-7">
                                <img className="iq-works-img pull-right img-fluid"
                                     src="/assets/images/drive/iPad-Mockup.png" alt="drive01" />
                            </div>
                            <div className="col-lg-5 align-self-center">
                                <span className="badge iq-badge blue-bg iq-font-white">Primary new</span>
                                <h3 className="iq-tw-7 iq-mb-15">What can sofbox do ?</h3>
                                <p>With sofbox you can create beautiful and elegant websites that suits your business.</p>
                            </div>
                            <div className="iq-objectsnew">
                                <span className="iq-objects-02" data-bottom="transform:translatey(50px)"
                                    data-top="transform:translatey(-100px);">
                                    <img src="/assets/images/drive/03.png" className="img-fluid" alt="drive02"/>
                                </span>
                                <span className="iq-objects-03" data-bottom="transform:translatex(50px)"
                                      data-top="transform:translatex(-100px);">
                                    <img src="/assets/images/drive/04.png" className="img-fluid" alt="drive02"/>
                                </span>
                                <span className="iq-objects-04 iq-fadebounce">
                                    <span className="iq-round" />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-works-two" className="overview-block-ptb how-works ">
                    <div className="container">
                        <div className="row ">

                            <div className="col-lg-7">
                                <img className="iq-works-img pull-right img-fluid"
                                     src="/assets/images/drive/iPad-Mockup.png" alt="drive01" />
                            </div>

                            <div className="col-lg-5 align-self-center">
                                <span className="badge iq-badge blue-bg iq-font-white">Primary new</span>
                                <h3 className="iq-tw-7 iq-mb-15">Why Choose Sofbox ?</h3>
                                <p>You can fully customize the template with ease. Every page is fully responsive and retina ready which makes your creation look good on any device.</p>
                            </div>

                            <div className={small ? 'iq-objects-software' : 'iq-objects-softwarenew'}>
                                <span className="iq-objects-01" data-bottom="transform:translatey(50px)"
                                      data-top="transform:translatey(-100px);">
                                  <img src="/assets/images/drive/03.png" alt="drive02"/>
                                </span>
                                <span className="iq-objects-02" data-bottom="transform:translatex(50px)"
                                      data-top="transform:translatex(-100px);">
                                    <img src="/assets/images/drive/04.png" alt="drive02"/>
                                </span>
                                <span className="iq-objects-03 iq-fadebounce">
                                    <span className="iq-round"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="overview-block-ptb how-works">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-7 ">
                                <img className="iq-works-img img-fluid" src="/assets/images/drive/iPad-Mockup2.png"
                                     alt="drive01" />
                            </div>
                            <div className="col-lg-5 align-self-center ">
                                <span className="badge iq-badge blue-bg iq-font-white">Primary new</span>
                                <h3 className="iq-tw-7 iq-mb-15">Beautiful interfaces</h3>
                                <p>Prebuild beautiful custom components and interfaces which makes developer's work easier to build beautiful pages
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
