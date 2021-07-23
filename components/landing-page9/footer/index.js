import React from 'react';

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
                },
                {
                    section: [
                        {
                            href: '#',
                            title: 'FAQs'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Our service'
                        },
                        {
                            href: '#',
                            title: 'Contact us'
                        }
                    ]
                }
            ],
            footerHelp: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'MON - FRI: 09AM - 05PM'
                        },
                        {
                            href: '#',
                            title: 'SAT: 09AM - 01PM'
                        },
                        {
                            href: '#',
                            title: 'SUN: Enjoy Day'
                        }
                    ]
                }
            ]
        }

    }

    render() {
        const { footerText, footerHome, footerHelp } = this.state;
        return (
            <>
                <FooterMain className={"iq-footer3 iq-pt-40 iq-pb-20"}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                            <FooterLogo
                                sectionImage="/assets/images/logo-footer.png"
                                sectionText={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                            <FooterAddress  addressContent={footerText} addressTitle={"Address"} />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Office Days"} content={footerHelp}  />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                            <FooterLinks title={"Menu"} content={footerHome}  />
                        </div>
                       
                    </div>
                </FooterMain>
            </>
        );
    }

}

export default Index;