import React from 'react';
import Head from 'next/head';

// Import assets...
import Home from '../../components/landing-page6/home';
import About from '../../components/landing-page6/about';
import Service from '../../components/landing-page6/service';
import Features from '../../components/landing-page6/features';
import Contact from '../../components/landing-page6/contact';
import Footer from '../../components/landing-page6/footer';
import logoImg from '../../public/assets/images/logo-footer.png';

// Import for the custom plugins...
import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';

// Import for the Sofbox components...
import { Loader, HeaderStyle1, ParallaxHeroStyle1 } from '../../components/sofbox';


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
                { href: '#great-features', title: 'Features' },
                { href: '#contact', title: 'Contact' },
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
                    className={"dark"}
                    navItems={menu}
                    logoImg={logoImg}
                />


                <div className="main-content">

                    {/* Home section */}
                    <Home />

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Service />

                    {/* Features section */}
                    <Features />

                    {/* Contact section */}
                    <Contact />

                    {/* Footer section */}
                    <Footer />
                </div>
            </>
        );
    }

}

export default Index;