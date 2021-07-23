import React from 'react';

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            footerPlatform: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Linux'
                        },
                        {
                            href: '#',
                            title: 'Windows'
                        },
                        {
                            href: '#',
                            title: 'Web'
                        },
                        {
                            href: '#',
                            title: 'Android'
                        }
                    ]
                }
            ],
            footerHome: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'About us'
                        },
                        {
                            href: '#',
                            title: 'Our team'
                        },
                        {
                            href: '#',
                            title: 'Portfolio'
                        }
                    ]
                }
            ],
            footerCommunity: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Knowledge'
                        },
                        {
                            href: '#',
                            title: 'Developers'
                        },
                        {
                            href: '#',
                            title: 'FAQ'
                        },
                        {
                            href: '#',
                            title: 'Forum'
                        }
                    ]
                }
            ],
            footerCompany: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'About'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Press'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        }
                    ]
                }
            ],
            footerText: [
                {
                    icon: true,
                    iconClass: 'ion-ios-location-outline',
                    text: '1234 North Luke Lane, South Bend, IN 360001'
                },
                {
                    icon: true,
                    iconClass: 'ion-ios-telephone-outline',
                    text: '+0123 456 789'
                },
                {
                    icon: true,
                    iconClass: 'ion-ios-email-outline',
                    text: 'mail@sofbox.com'
                }
            ]
        }
    }

    render() {
        const { footerPlatform, footerHome, footerCommunity, footerCompany, footerText } = this.state;
        return (
            <>
                <FooterMain className={"iq-footerr iq-pt-40 iq-pb-20"}>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Platforms"} content={footerPlatform}  />
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Menu"} content={footerHome}  />
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Community"} content={footerCommunity}  />
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Company"} content={footerCompany}  />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                            <FooterAddress  addressContent={footerText} addressTitle={"Address"} />
                        </div>
                    </div>
                    <hr />
                    <div className="row iq-mt-20 align-items-center">
                        <div className="col-auto mr-auto">
                            <ul className="link">
                                <li className="d-inline-block img-fluid">
                                    <img className="img-fluid logo_img"
                                        id="logo_img"
                                        src="/assets/images/color-customizer/color-1.png"
                                        alt="#" />
                                </li>
                                <li className="d-inline-block iq-mr-10">
                                    <a href="#">Term and Condition</a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="#"> Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <div className="iq-copyright iq-ml-10">
                                © 2018 <a href="#">Sofbox</a> All Rights Reserved
                            </div>
                        </div>
                    </div>
                </FooterMain>

            </>
        );
    }

}

export default Index;