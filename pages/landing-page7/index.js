import React from 'react';
import Head from 'next/head';

// Import assets...
import Home from '../../components/landing-page7/home';
import About from '../../components/landing-page7/about';
import Service from '../../components/landing-page7/service';
import Specialities from "../../components/landing-page7/specialities";
import Counter from "../../components/landing-page7/counter";
import Testimonial from "../../components/landing-page7/testimonial";
import Pricing from "../../components/landing-page7/pricing";
import Team from "../../components/landing-page7/team";
import CompareService from "../../components/landing-page7/compareService";
import Faq from "../../components/landing-page7/faq";
import Blog from "../../components/landing-page7/blog";
import Contact from "../../components/landing-page7/contact";
import FooterSection from "../../components/landing-page7/footerSection";
import logoImg from '../../public/assets/images/logo.png';
// Import for the custom plugins...

import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';
// Import for the Sofbox components...
import {
    Loader,
    HeaderStyle2,
    ParallaxHeroStyle1,
    ScrollTop,
    ColorCustomizer,
    SectionTitle
} from '../../components/sofbox';






class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: [
                { href: '#iq-home', title: 'Home',
                    _is_active : true,
                    children: true,
                    child: subHeader
                },
                { href: '#how-it-works', title: 'About' },
                { href: '#software-features', title: 'Service' },
                { href: '#pricing', title: 'Pricing'},
                { href: '#team', title: 'Team' },
                { href: '#blog', title: 'Blog' },
                { href: '#contact', title: 'Contact' }
            ],
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        const { menu } = this.state;
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>Sofbox - Responsive Software Landing Page</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Sofbox - Responsive Software Landing Page" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle2
                    className={"header-fancy"}
                    navItems={menu}
                    logoImg={logoImg}
                    buttonSection={(<a className="button bt-black pull-right" href="#" navcontent=""><i className="ion-ios-unlocked-outline"></i></a>)}
                />

                {/* Home section */}
                <Home />

                <div className="main-content">

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Service />

                    {/* Specialities section */}
                    <Specialities />

                    {/* Counter section */}
                    <Counter />

                    {/* Testimonial section */}
                    <Testimonial />

                    {/* Pricing section */}
                    <Pricing />

                    {/* Team section */}
                    <Team />

                    {/* CompareService section */}
                    <CompareService />

                    {/* FAQ section */}
                    <Faq />

                    {/* Blog section */}
                    <Blog />

                </div>

                <footer>
                    <ParallaxHeroStyle1
                        className="iq-ptb-100 iq-newsletter iq-bg-over iq-over-blue-90 jarallax"
                        bgImage="/assets/images/bg/01.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <SectionTitle
                                        title="Subscribe Our Newsletter"
                                        subTitle=""
                                        className={"white iq-mb-40"}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <form className="form-inline">
                                        <input type="text" name="email" autoComplete="email"
                                               style={{ display: 'none' }}/>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                            <input type="password" className="form-control" id="inputPassword2"
                                                   placeholder="Enter your email" autoComplete="new-password" />
                                        </div>
                                        <a className="button bt-black iq-ml-25" href="#">subscribe</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ParallaxHeroStyle1>


                    {/* Contact section */}
                    <Contact />

                    {/* Footer section */}
                    <FooterSection />
                </footer>

                {/* Scroll top */}
                <ScrollTop />

                {/* Color customizer */}
                <ColorCustomizer />

            </>
        );
    }

}

export default Index;
