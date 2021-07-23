import React from 'react';
import { CardStyle2 } from '../../sofbox';

const counterSpan = value => <span className="timer iq-tw-7 iq-font-30" >{value}</span>;

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featureList : [
                {
                    icon: 'ion-ios-lightbulb-outline',
                    title: 'Creative Ideas',
                    description: 'Creative ideas that makes your website look elegant and beautiful.'
                },
                {
                    icon: 'ion-ios-grid-view-outline',
                    title: 'Beautiful Blog',
                    description: 'Use blog section to display your website blogs.'
                },
                {
                    icon: 'ion-ios-heart-outline',
                    title: 'User Friendly',
                    description: 'Any user can visit your website with an ease.'
                },
                {
                    icon: 'ion-ios-albums-outline',
                    title: 'Perfect Showcase',
                    description: 'Template makes your website look beautiful.'
                },
                {
                    icon: 'ion-ios-settings',
                    title: 'Color Schemes',
                    description: 'Template makes your website look beautiful.'
                },
                {
                    icon: 'ion-ios-color-wand-outline',
                    title: 'Easy to Use',
                    description: 'The template can be fully customizable with ease.'
                }
            ]
        }
    }

    render() {
        const { featureList } = this.state;

        return (
            <>
                <section className="iq-feature1 overview-block-ptb grey-bg" id="software-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="heading-title text-center">
                                    <h3 className="title iq-tw-6">Our Great Features</h3>
                                    <p>these are some awesome features of the Sofbox </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            { featureList.map((feature, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 iq-mb-30">
                                    <CardStyle2 icon={feature.icon} title={feature.title} >
                                        <p>{ feature.description }</p>
                                    </CardStyle2>
                                </div>
                            )) }
                        </div>
                    </div>
                </section>

                <section className="overview-block-ptb">
                    <div className="container">
                        <div className="row align-items-center text-center text-lg-left">
                            <div className="col-12 col-md-12 col-lg-6 mr-lg-auto text-center text-md-left">
                                <h3 className="iq-tw-7 iq-mb-15">We have achieved a trust over 1000+ peoples</h3>
                                <p className="">Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.
                                    Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5">
                                <div className="row no-gutters">
                                    <div className="col-md-6 col-sm-12 mb-3 pr-3 ">
                                        <div className=" iq-shadow d-flex align-items-center flex-wrap">
                                            <i className="ion-ios-person-outline " aria-hidden="true" />
                                            <div className="text-left">
                                                <span className="timer iq-tw-7 iq-font-30" data-count-from="0" data-count-to="8000"
                                                      data-count-speed="150" >800</span>

                                                <p className="m-0 text-uppercase">Users</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 mb-3">
                                    <div className=" iq-shadow d-flex align-items-center flex-wrap">
                                        <i className="ion-ios-folder-outline " aria-hidden="true"/>
                                        <div className="text-left">
                                            <span className="timer iq-tw-7 iq-font-30" data-count-from="0" data-count-to="4000"
                                                  data-count-speed="150" >1540</span>
                                            <p className="m-0 text-uppercase">Downloads</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 pr-3 mb-3">
                                    <div className=" iq-shadow d-flex align-items-center flex-wrap">
                                        <i className="ion-ios-star " aria-hidden="true"/>
                                        <div className="text-left">
                                            <span className="timer iq-tw-7 iq-font-30" data-count-from="0" data-count-to="3060"
                                                  data-count-speed="150" >1540</span>
                                            <p className="m-0 text-uppercase">App Rate </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className=" iq-shadow d-flex align-items-center flex-wrap blue-bg ">
                                        <i className="ion-ios-paper-outline iq-font-white" aria-hidden="true"/>
                                        <div className="text-left">
                                            <span className="timer iq-tw-7 iq-font-30 iq-font-white" data-count-from="0" data-count-to="450"
                                                  data-count-speed="150" >1540</span>
                                            <p className="m-0 text-uppercase iq-font-white">Projects</p>
                                        </div>
                                    </div>
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
