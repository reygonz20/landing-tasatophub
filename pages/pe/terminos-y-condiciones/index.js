import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import FooterSection from '../../../components/landing-page1/footerSection';
import Terminos from '../../../components/landing-page1/terminos-y-condiciones/terminos'
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
            { href: '/pe/educacion-financiera', title: 'Educación Financiera' },
            { href: '/pe/nosotros', title: 'Nosotros'},
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


    return(
        <>
                {/* Heading section */}
                <Head>
                    <link rel="shortcut icon" href="/assets/images/logotasa.ico" />

                    <title>Términos y Condiciones - TasaTop.com - Subasta tus ahorros, competimos por ti</title>
        <meta name="description" content="Estos son nuestros terminos y condiciones de nuestro servicio para simplificar la búsqueda de la mejor tasa de interés para ahorros a través de una competencia ágil, confiable y eficiente entre entidades financieras."/>
        <meta name="keywords" content="deposito a plazo fijo,subasta,mejor tasa de interes,subasta de ahorros,interes plazo fijo,tasa de interes,comparabien,compara bien, afluenta,como ahorrar,plazo fijo,tasas de interes bancos,interes plazo fijo,cuenta de ahorros,tasatop,donde es mejor ahorrar,subasta online, ganar dinero, hola andy, holaandy"/>
        <meta name="robots" content="deposito a plazo fijo,subasta,mejor tasa de interes,subasta de ahorros,interes plazo fijo,tasa de interes,comparabien,compara bien, afluenta,como ahorrar,plazo fijo,tasas de interes bancos,interes plazo fijo,cuenta de ahorros,tasatop,donde es mejor ahorrar,subasta online, ganar dinero, hola andy, holaandy"/>
        <meta name="googlebot" content="deposito a plazo fijo,subasta,mejor tasa de interes,subasta de ahorros,interes plazo fijo,tasa de interes,comparabien,compara bien, afluenta,como ahorrar,plazo fijo,tasas de interes bancos,interes plazo fijo,cuenta de ahorros,tasatop,donde es mejor ahorrar,subasta online, ganar dinero, hola andy, holaandy"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
        {/* <script type="text/javascript">
            {function nav() {
                if (base.startsWith("http://tasatop") || base.startsWith("http://www") || base.startsWith("www.") || base.startsWith("tasatop.")) {
                    location.href = "https://www.tasatop.com/pe/nosotros.html";
//                    location.href = "https://www.tasatop.com/?tt=p"+Math.round(Math.random()*10000000);
                }
            }
            nav();}
        </script> */}
        {/* <script src="/static/resources/js/sojo.js"></script><script async="" type="text/javascript" charset="utf-8" src="https://rec.smartlook.com/recorder.js"></script> */}
        {/* <!--Stylesheets--> */}
        <link rel="shortcut icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>
        {/* <!--Bootstrap--> */}
        <link rel="stylesheet" href="/static/resources/css/mystylo.css"/>
        {/* <!--[if lt IE 10]> */}
            {/* <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="http://windows.microsoft.com/en-US/internet-explorer/.."><img src="/static/resources/images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div> */}
            {/* <script src="js/html5shiv.min.js"></script> */}
        {/* <script async="" crossorigin="anonymous" type="text/javascript" charset="utf-8" src="https://rec.smartlook.com/analytics-20200827125917.js"></script><script async="" crossorigin="anonymous" type="text/javascript" charset="utf-8" src="https://rec.smartlook.com/main-20200827125917.js"></script> */}
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

                    {/* faq section */}
                    <Terminos />

                    
                </div>

                <footer>
                   
                    {/* Footer section */}
                    <FooterSection />
                </footer>


                {/* Scroll top */}
                <ScrollTop />

            </>
    )
}



export default Index;