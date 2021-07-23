import React from 'react'
import Head from 'next/head';

// Import asset...
import Home from '../../components/landing-page8/home';
import About from '../../components/landing-page8/about';
import Service from '../../components/landing-page8/services';
import Team from '../../components/landing-page8/team';
import Pricing from '../../components/landing-page8/pricing';
import Blog from '../../components/landing-page8/blog';
import Clients from '../../components/landing-page8/clients';
import Contact from '../../components/landing-page8/contact';
import FooterSection from '../../components/landing-page8/footerSection';
import logoImg from '../../public/assets/images/logo-footer.png';
import Specialities from '../../components/landing-page8/specialities';
import Faq from '../../components/landing-page8/faq';
import Counter from '../../components/landing-page8/counter';
// Import for the custom plugins...
import { index } from '../../config/plugins';
import { subHeader } from '../../constants/menu';
import CompareService from '../../components/landing-page8/compareService';
import Testimonial from '../../components/landing-page8/testimonial';

// Import for the Sofbox components...
import { Loader, HeaderStyle1, Topbar, ScrollTop, ColorCustomizer ,ParallaxHeroStyle1} from '../../components/sofbox';


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
                <HeaderStyle1 styledLogo={true}  className={"header-one"} navItems={menu}
                logoImg={logoImg} 
                buttonSection={(<a className={"button  pull-right"} href="#">Download</a>)} >
                    
                </HeaderStyle1>


                {/* Home section*/}
                <Home />


                <div className="main-content">

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Service />

                    <Specialities />
                    <Counter />
                    {/* Team section */}
                    <Testimonial />
                    <Pricing />
                    <Team />
                    {/* Pricing section */}
                    <CompareService />
                    <Faq />
                    {/* Blog section */}
                    <Blog />

                    {/* Client carousal section */}
                    <Clients />
                    
                    {/* Contact section */}

                </div>

                <footer>
                    <ParallaxHeroStyle1
                        className="iq-ptb-100 iq-newsletter iq-bg-over iq-over-blue-90 jarallax"
                        bgImage="/assets/images/bg/01.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title white iq-mb-40">
                                        <h3 className="title iq-tw-7">Subscribe Our Newsletter</h3>
                                    </div>
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
        )
    }
}

export default Index;

