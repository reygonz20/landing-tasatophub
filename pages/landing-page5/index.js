import React from 'react';
import Head from 'next/head';

// Import Assets..
import Home from '../../components/landing-page5/home';
import About from '../../components/landing-page5/about';
import Feature from '../../components/landing-page5/feature';
import Service from '../../components/landing-page5/service';
import Client from '../../components/landing-page5/client';
import Pricing from '../../components/landing-page5/pricing';
import Faq from '../../components/landing-page5/faq';
import GetInTouch from '../../components/landing-page5/getInTouch';
import Footer from '../../components/landing-page5/footer';
import logoImg from '../../public/assets/images/logo.png';

// Import for the custom plugins...
import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';

// Import for the Sofbox components...
import { Loader, HeaderStyle1, ScrollTop, ColorCustomizer, FooterStyle1 } from '../../components/sofbox';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: [
                {
                    href: '#iq-home', title: 'Home',
                    _is_active: true,
                    active: true,
                    children: true,
                    child: subHeader
                },
                { href: '#about-us', title: 'About' },
                { href: '#feature', title: 'Feature' },
                { href: '#how-it-works', title: 'Service' },
                { href: '#testimonial', title: 'Testimonial' },
                { href: '#our-pricing', title: 'Pricing' },
                { href: '#get-in-tech', title: 'Contact' }
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
                <HeaderStyle1
                    styledLogo={true}
                    className={""}
                    navItems={menu}
                    logoImg={logoImg}
                    buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />


                <div className="main-content">

                    {/* Home section */}
                    <Home />

                    {/* About section */}
                    <About />

                    {/* Feature section */}
                    <Feature />

                    {/* Service section */}
                    <Service />

                    {/* Client section */}
                    <Client />

                    {/* Pricing section */}
                    <Pricing />

                    {/* Faq section */}
                    <Faq />

                    {/* GetInTouch section */}
                    <GetInTouch />

                    {/* Footer section */}
                    <Footer />

                </div>


                {/* Scroll top */}
                <ScrollTop />

                {/* Color customizer */}
                <ColorCustomizer />
            </>
        );
    }

}

export default Index;