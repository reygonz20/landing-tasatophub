import React from 'react'
import Head from 'next/head';

// Import asset...
import Home from '../../components/landing-page3/home';
import About from '../../components/landing-page3/about';
import Service from '../../components/landing-page3/service';
import Team from '../../components/landing-page3/team';
import Pricing from '../../components/landing-page3/pricing';
import Blog from '../../components/landing-page3/blog';
import Clients from '../../components/landing-page3/clients';
import Contact from '../../components/landing-page3/contact';
import Footer from '../../components/landing-page3/footer';
import logoImg from '../../public/assets/images/logo-footer.png';

// Import for the custom plugins...
import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';

// Import for the Sofbox components...
import { Loader, HeaderStyle1, Topbar, ScrollTop, ColorCustomizer } from '../../components/sofbox';


class Index extends React.Component {

    constructor (props) {
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
                { href: '#team', title: 'Team' },
                { href: '#pricing', title: 'Pricing'},
                { href: '#blog', title: 'Blog' },
                { href: '#contact', title: 'Contact' }
            ]
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
                <HeaderStyle1 styledLogo={true}  className={"header-one"} navItems={menu} logoImg={logoImg} >
                    <Topbar />
                </HeaderStyle1>


                {/* Home section*/}
                <Home />


                <div className="main-content">

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Service />

                    {/* Team section */}
                    <Team />

                    {/* Pricing section */}
                    <Pricing />

                    {/* Blog section */}
                    <Blog />

                    {/* Client carousal section */}
                    <Clients />

                    {/* Contact section */}
                    <Contact />

                </div>

                {/* Footer section */}
                <Footer />

                {/* Scroll top */}
                <ScrollTop />

                {/* Color customizer */}
                <ColorCustomizer />
            </>
        )
    }
}

export default Index;
