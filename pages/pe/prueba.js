import React, {useState, useEffect} from 'react';
import Head from 'next/head';

// Import asset...

// Import Components...
import Prueba from '../../components/pruebas/index'
import logoImg from '../../public/assets/images/logotasa.png';

// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Sofbox components...
import { HeaderStyle1, ScrollTop } from '../../components/sofbox';
import HeaderStyleOtros from '../../components/sofbox/HeaderStyleOtros/index'

const Index = () => {

    const [state, setState] = useState({
        menu: [
            { href: '#inicio', title: 'Inicio',
                _is_active : true,
                active: true,},
            { href: '#que-hacemos', title: '¿Qué hacemos?' },
            { href: '#productos', title: 'Productos'},
            { href: '/pe/educacion-financiera', title: 'Educación Financiera' },
            { href: '/pe/nosotros', title: 'Nosotros' },
            { href: '#contacto', title: 'Contáctanos' },
            {href: '/zonaprivada/iniciar-sesion', title: 'Iniciar Sesión'}
        ]
    })
    
    const { menu } = state;
    
        useEffect(() => {
            setTimeout( () => {
                index();
            }, 500);
          }, []);

    return(
        <>
                {/* Heading section */}
                <Head>
                    <React.Fragment>
                    <link rel="shortcut icon" href="/assets/images/logotasa.ico" />
                    <title>TasaTop Perú | Encuentra la mejor manera de ahorrar e invertir en un solo lugar.</title>
        <meta http-equiv="expires" content="0"/>
        <meta http-equiv="Cache-Control" content="no-cache"/>
        <meta http-equiv="Pragma" content="no-cache"/>

        <meta name="keywords" content="ahorros, inversiones, tasa plazo fijo, fintech, depósitos, mejores depositos a plazo fijo, deposito a plazo fijo, mejor ahorro, deposito a plazo fijo, deposito plazo, plazo fijo, CTS, mejor plazo fijo, deposito persona, deposito empresa, ahorro, deposito plazo juridicas"/>
        <meta name="robots" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta name="googlebot" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <meta name="description" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta property="og:site_name" content="TasaTop.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.tasatop.com/pe/"/>
        <meta property="og:title" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta property="og:description" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta property="og:image" content="https://www.tasatop.com/static/resources/images/tasatop-social.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@tasatop_peru"/>
        <meta name="twitter:site:id" content="854162481853456384"/>
        <meta name="twitter:url" content="https://www.tasatop.com/"/>
        <meta name="twitter:title" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta name="twitter:description" content="Encuentra la mejor manera de ahorrar e invertir en un solo lugar. - TasaTop.com"/>
        <meta name="twitter:image" content="https://www.tasatop.com/static/resources/images/tasatop-social.png"/>
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://connect.facebook.net/signals/config/526453721372077?v=2.9.29&amp;r=stable" async=""></script><script src="https://connect.facebook.net/es_ES/sdk.js?hash=92e498dd0cd0b9bd14699c53f5c6e02f&amp;ua=modern_es6" async="" crossOrigin="anonymous"></script><script id="facebook-jssdk" src="//connect.facebook.net/es_ES/sdk.js#xfbml=1&amp;version=v2.8&amp;appId=159229711223641"></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
        {/* <script type="text/javascript">
            {function nav = () => {
                if (base.startsWith("http://tasatop.com/pe") || base.startsWith("http://www.tasatop.com/pe") || base.startsWith("www.tasatop.com/pe") || base.startsWith("tasatop.com/pe")) {
                    location.href = "https://www.tasatop.com/pe";
                }
            }
            nav();}
        </script> */}
        {/* <script type="application/ld+json">
            {"@context" : "http://schema.org",
            "@type" : "Organization",
            "name" : "TasaTop.com Perú | Encuentra la mejor opción de ahorro e inversión",
            "url" : "https://www.tasatop.com/pe",
            "logo" : "https://www.tasatop.com/static/resources/images/logoweb.png",
            "image" : "https://www.tasatop.com/static/resources/images/logoweb.png",
            "sameAs" : [ "https://www.facebook.com/tasatop",
            "https://twitter.com/tasatop_com",
            "https://plus.google.com/102882341122230681602",
            "https://www.youtube.com/channel/UCKR11Fx0OnM8Y-wNb6pQkiQ",
            "https://www.linkedin.com/company/tasatop.com",
            "https://www.instagram.com/tasatop_com"]
            }
        </script> */}
        {/* <!--Stylesheets--> */}
        <link rel="shortcut icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>
        {/* <!--Bootstrap--> */}
        <link rel="stylesheet" href="/static/resources/css/mystylo.css"/>
        {/* <script src="/static/resources/js/sojo.js"></script><script async="" type="text/javascript" charset="utf-8" src="https://rec.smartlook.com/recorder.js"></script> */}
        {/* <!--[if lt IE 10]> */}
            {/* <div style={{backgroundColor: '#212121', padding: '10px',  textAlign:'center', position: 'relative', zIndex:'1'}}><a href="http://windows.microsoft.com/en-US/internet-explorer/.."><img src="/static/resources/images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/></a>
            </div>
            <script src="js/html5shiv.min.js"></script> */}
			
		{/* <!-- Facebook Pixel Code -->  */}
		{/* <script>
		  {!function(f,b,e,v,n,t,s)
		  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		  n.queue=[];t=b.createElement(e);t.async=!0;
		  t.src=v;s=b.getElementsByTagName(e)[0];
		  s.parentNode.insertBefore(t,s)}(window, document,'script',
		  'https://connect.facebook.net/en_US/fbevents.js');
		  fbq('init', '526453721372077');
		  fbq('track', 'PageView');}  		  
		</script> */}
		{/* <noscript>
            <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=526453721372077&ev=PageView&noscript=1"/>
        </noscript> */}
		{/* <!-- End Facebook Pixel Code --> */}
        </React.Fragment>
                </Head>

               

                {/* header section*/}
                <HeaderStyleOtros
                    className={"header-one"}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                    outside={false}
                    // buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />

                {/* Home section*/}
                {/* <Home /> */}
                <Prueba />


                <div className="main-content">

                    {/* About section */}
                    {/* <About /> */}

                    {/* Instituciones section */}
                    {/* <Instituciones /> */}

                    

                    {/* Counter section */}
                    {/* <Counter /> */}

                   
                    {/* Pricing section */}
                    {/* <Pricing /> */}

                    {/* Alianzas section */}
                    {/* <Alianzas /> */}

                   

                    {/* Blog section */}
                    {/* <Blog /> */}

                    {/* Client section */}
                    {/* <Reconocimientos /> */}
                </div>

                <footer>
                   
                    {/* Contact section */}
                    {/* <Contact /> */}

                    {/* Footer section */}
                    {/* <FooterSection /> */}
                </footer>


                {/* Scroll top */}
                <ScrollTop />

               
            </>
    )
}



export default Index;