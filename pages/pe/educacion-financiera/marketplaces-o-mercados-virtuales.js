import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
// import Home from '../components/landing-page1/home';
// import About from '../components/landing-page1/about';
// import Services from '../components/landing-page1/services';
// import Specialities from '../components/landing-page1/specialities';
// import Counter from '../components/landing-page1/counter';
// import Testimonial from '../components/landing-page1/testimonial';
// import Pricing from '../components/landing-page1/pricing';
// import Team from '../components/landing-page1/team';
// import CompareService from '../components/landing-page1/compareService';
// import Faq from '../components/landing-page1/faq';
// import Blog from '../components/landing-page1/blog';
// import Reconocimientos from '../components/landing-page1/reconocimientos';
// import Instituciones from '../components/landing-page1/instituciones';
// import Alianzas from '../components/landing-page1/alianzas';
// import Contact from '../components/landing-page1/contact';
import FooterSection from '../../../components/landing-page1/footerSection';
import Blog11 from '../../../components/blogs/marketplaces-o-mercados-virtuales/bodyBlog/index'
import logoImg from '../../../public/assets/images/logotasa.png';

// Import for the custom plugins...
import { index } from '../../../config/plugins'; 


// Import for the Sofbox components...
import { ScrollTop } from '../../../components/sofbox';
import  HeaderStyle1  from '../../../components/sofbox/HeaderStyle1' 


const Index = () => {

    const [state, setState] = useState({
        menu: [
            { href: '/pe#inicio', title: 'Inicio' },
            { href: '/pe#que-hacemos', title: '¿Qué hacemos?' },
            { href: '/pe#productos', title: 'Productos'},
            { href: '/pe/educacion-financiera', title: 'Educación Financiera',
            _is_active : true,
            active: true, },
            { href: '/pe/nosotros', title: 'Nosotros' },
            { href: '/pe#contacto', title: 'Contáctanos' },
            {href: '/zonaprivada/iniciar-sesion', title: 'Iniciar Sesión'}
        ]
    })
    
    const { menu } = state;
    
        useEffect(() => {
            setTimeout( () => {
                index();
            }, 500);
          }, []);


          return (
            <>
                {/* Heading section */}
                <Head>
                    <link rel="shortcut icon" href="/assets/images/logotasa.ico" />

                    <title>Marketplaces o mercados virtuales - TasaTop.com</title>
        <meta name="description" content="¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?"/>
        <meta name="keywords" content="educación financiera, ahorro, fintech peru, marketplace, mercado virtual"/>
        <meta name="robots" content="¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?"/>
        <meta name="googlebot" content="¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?"/>
        <meta property="og:site_name" content="Marketplaces o mercados virtuales - TasaTop.com"/>
        <meta property="og:type" content="product"/>
        <meta property="og:url" content="https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html"/>
        <meta property="og:title" content="Marketplaces o mercados virtuales - TasaTop.com"/>
        <meta property="og:description" content="¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?"/>
        <meta property="og:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-marketplaces-o-mercados-virtuales.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@tasatop_com"/>
        <meta name="twitter:site:id" content="854162481853456384"/>
        <meta name="twitter:url" content="https://www.tasatop.com/pe/educacion-financiera/marketplaces-o-mercados-virtuales.html"/>
        <meta name="twitter:title" content="Marketplaces o mercados virtuales - TasaTop.com"/>
        <meta name="twitter:description" content="¿Por qué el servicio de TasaTop es gratuito? ¿Tengo que pagarles alguna comisión por el servicio prestado? ¿Retiran algún porcentaje de mi capital para su ganancia? ¿Cuánto cobran por la asesoría financiera? ¿Cómo ganan? ¿Tengo que depositar mi dinero a TasaTop, si acepto la propuesta?"/>
        <meta name="twitter:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-marketplaces-o-mercados-virtuales.jpg"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://connect.facebook.net/es_LA/sdk.js?hash=976541d4ede19f9e5bf048655affd80b&amp;ua=modern_es6" async="" crossorigin="anonymous"></script><script id="facebook-jssdk" src="//connect.facebook.net/es_LA/sdk.js#xfbml=1&amp;version=v2.8&amp;appId=159229711223641"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
        {/* <!--Stylesheets--> */}
        <link rel="icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>
        {/* <!--Bootstrap--> */}
        <link rel="stylesheet" href="/static/resources/css/mystylo.css"/>
        {/* <!--[if lt IE 10]> */}
            {/* <div style={{background: '#212121', padding: '10px 0', boxShadow: '3px 3px 5px 0 rgba(0,0,0,.3)', clear: 'both', textAlign: 'center', position: 'relative', zIndex: '1'}}><a href="http://windows.microsoft.com/en-US/internet-explorer/.."><img src="resources/images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/></a></div> */}
            <script src="js/html5shiv.min.js"></script>
                </Head>

                

                {/* header section*/}
                <HeaderStyle1
                    className={"header-one"}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                    // buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />

               

                <div className="main-content">

                    {/* BlogSingle */}
                    <Blog11 />

                   
                </div>

                <footer>
                   

                    {/* Footer section */}
                    <FooterSection />
                </footer>


                {/* Scroll top */}
                <ScrollTop />

               
            </>
        );
    }
    

export default Index;