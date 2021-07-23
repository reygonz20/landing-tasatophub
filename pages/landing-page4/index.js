import React from 'react';
import Head from 'next/head';

// Import asset...
import Home from '../../components/landing-page4/home';
import About from '../../components/landing-page4/about';
import Service from '../../components/landing-page4/service';
import Features from '../../components/landing-page4/features';
import Blog from '../../components/landing-page4/blog';
import AboutMe from '../../components/landing-page4/aboutMe';
import Clients from '../../components/landing-page4/clients';
import Contact from '../../components/landing-page4/contact';
import logoImg from '../../public/assets/images/logo-footer.png';

// Import for the custom plugins...
import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';

// Import for the Sofbox components...
import { Loader, HeaderStyle1, ScrollTop, ColorCustomizer, FooterStyle1 } from '../../components/sofbox';
import Footer from "../../components/landing-page3/footer";


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: [
                { href: '#iq-home', title: 'Home',
                    _is_active : true,
                    active: true,
                    children: true,
                    child: subHeader
                },
                { href: '#how-it-works', title: 'About' },
                { href: '#software-features', title: 'Service' },
                { href: '#blog', title: 'Blog' },
                { href: '#contact', title: 'Contact' }
            ],
            footerText: '© 2018 Sofbox Developed by <b>iqonicthemes</b>.',
            socialNavItems: [
                { href: '#', icon: 'fab fa-twitter' },
                { href: '#', icon: 'fab fa-facebook-f' },
                { href: '#', icon: 'fab fa-google' },
                { href: '#', icon: 'fab fa-github' },
            ]
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }


    render() {

        const { menu, footerText, socialNavItems } = this.state;
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
                <HeaderStyle1 styledLogo={true}  className={"header-white p-0"} navItems={menu} logoImg={logoImg} />

                {/* Home section */}
                <Home />

                <div className="main-content">

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Service />

                    {/* Features section */}
                    <Features />

                    {/* Blog section */}
                    <Blog />

                    {/* About me */}
                    <AboutMe />

                    {/* Client carousal */}
                    <Clients />

                    {/* Contact section */}
                    <Contact />

                </div>

                <FooterStyle1 footerText={footerText} socialNavItems={socialNavItems} />

                {/* Scroll top */}
                <ScrollTop />

                {/* Color customizer */}
                <ColorCustomizer />
            </>
        );
    }

}

export default Index;