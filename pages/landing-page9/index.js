import React from 'react';
import Head from 'next/head';

// Import Assets..
import Home from '../../components/landing-page9/home';
import logoImg from '../../public/assets/images/logo-footer.png';
import FancyCard from '../../components/landing-page9/fancyCard';
import About from '../../components/landing-page9/about';
import Blog from '../../components/landing-page9/blog';
import SecondBlog from '../../components/landing-page9/secondBlog';
import Team from '../../components/landing-page9/team';
import Cilent from '../../components/landing-page9/cilent';
import Contact from '../../components/landing-page9/contact';
import Footer from '../../components/landing-page9/footer';
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
               
                { href: '#how-it-works', title: 'Service' },
                { href: '#team', title: 'Team' },
                { href: '#counter', title: 'Counter' },
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
        const { menu ,footerText, socialNavItems} = this.state;

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
                    className={"header-white"}
                    navItems={menu}
                    logoImg={logoImg}
                    buttonSection={(<a className={"button-line pull-right"} href="#">Download</a>)}
                />


                <div className="main-content">

                    {/* Home section */}
                    <Home />


                    {/* Service section */}
                    <About />

                  <Blog />

                <Team />
                <Cilent />
                <SecondBlog />
                <Contact />
                </div>
            <Footer />
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