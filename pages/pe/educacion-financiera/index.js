import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import FooterSection from '../../../components/landing-page1/footerSection';
import BlogSection from '../../../components/educacion-financiera/blogSection/bloglist'
import logoImg from '../../../public/assets/images/logotasa.png';

// Import for the custom plugins...
import { index } from '../../../config/plugins'; 


// Import for the Sofbox components...
import { ScrollTop } from '../../../components/sofbox';
import HeaderStyleOtros from '../../../components/sofbox/HeaderStyleOtros';



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

                    <title>Educación Financiera - TasaTop.com Perú</title>
        <meta name="description" content="Aquí se listan toda la información referente a educación e inclusión financiera para nuestra comunidad de TasaTop.com. Comparte y dejanos tus comentarios."/>
        <meta name="keywords" content="articulos, noticias, deposito-plazo-fijo, deposito-plazo, fijo, plazo-fijo, subasta, educacion-financiera, finanzas"/>
        <meta name="robots" content="articulos, noticias, deposito-plazo-fijo, deposito-plazo, fijo, plazo-fijo, subasta, educacion-financiera, finanzas"/>
        <meta name="googlebot" content="Sarticulos, noticias, deposito-plazo-fijo, deposito-plazo, fijo, plazo-fijo, subasta, educacion-financiera, finanzas"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>
        
        <meta property="og:site_name" content="TasaTop.com"/>
        <meta property="og:type" content="product"/>
        <meta property="og:url" content="https://www.tasatop.com/pe/educacion-financiera.html"/>
        <meta property="og:title" content="Artículos de TasaTop.com - Subasta tus ahorros, competimos por ti"/>
        <meta property="og:description" content="Aquí se listan todas los artículos de TasaTop.com. Comparte y dejanos tus comentarios."/>
        <meta property="og:image" content="https://www.tasatop.com/static/resources/images/tasatop-social.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@tasatop_peru"/>
        <meta name="twitter:site:id" content="854162481853456384"/>
        <meta name="twitter:url" content="https://www.tasatop.com/pe/educacion-financiera/"/>
        <meta name="twitter:title" content="Artículos de TasaTop.com - Subasta tus ahorros, competimos por ti"/>
        <meta name="twitter:description" content="Aquí se listan todas los artículos de TasaTop.com. Comparte y dejanos tus comentarios."/>
        <meta name="twitter:image" content="https://www.tasatop.com/static/resources/images/tasatop-social.png"/>
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
        {/* <script type="text/javascript">
            {function nav() {
                if (base.startsWith("http://tasatop") || base.startsWith("http://www") || base.startsWith("www.") || base.startsWith("tasatop.")) {
                    location.href = "https://www.tasatop.com/pe/educacion-financiera/";
					// location.href = "https://www.tasatop.com/?tt=p"+Math.round(Math.random()*10000000);
                }
            }
            nav();}
        </script> */}
        {/* <!--script src="/static/resources/js/sojo.js"></script--> */}
        {/* <!--Stylesheets--> */}
        <link rel="shortcut icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>

        {/* <!--Bootstrap--> */}
        <link rel="stylesheet" href="/static/resources/css/mystylo.css"/>
        {/* <!--[if lt IE 10]> */}
            {/* <div style={{background: '#212121', padding: '10px 0', boxShadow: '3px 3px 5px 0 rgba(0,0,0,.3)', clear: 'both', textAlign: 'center', position: 'relative', zIndex: '1'}}><a href="http://windows.microsoft.com/en-US/internet-explorer/.."><img src="resources/images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/></a></div> */}
            <script src="js/html5shiv.min.js"></script>
                </Head>

                

                {/* header section*/}
                <HeaderStyleOtros
                    className={"header-one"}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                    // buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />

                


                <div className="main-content">

                    {/* Simulador */}
                    <BlogSection />

                   
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