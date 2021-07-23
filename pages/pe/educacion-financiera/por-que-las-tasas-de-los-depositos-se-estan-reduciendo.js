import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import FooterSection from '../../../components/landing-page1/footerSection';
import Blog12 from '../../../components/blogs/por-que-las-tasas-de-los-depositos-se-estan-reduciendo/bodyBlog/index'
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

                    <title>¿Por qué las tasas de los depósitos se están reduciendo? - TasaTop.com</title>
        <meta name="description" content="Muchos inversionistas vienen sufriendo una reducción en sus tasas de interés en las últimas semanas. ¿Cuál es la razón? ¿Por qué ya no encontramos tasas de interés atractivas en el sistema financiero peruano? ¿Por qué mis renovaciones de depósitos a plazos fijos se hacen con uno o dos puntos porcentuales menos comparado al año pasado? ¿Es algo relevante para nosotros los ciudadanos? a continuación responderemos a estas dudas."/>
        <meta name="keywords" content="educación financiera, ahorro, fintech peru, tasas, bonos, acciones, depósito a plazo fijo, inversiones, tasa de referencia"/>
        <meta name="robots" content="Muchos inversionistas vienen sufriendo una reducción en sus tasas de interés en las últimas semanas. ¿Cuál es la razón? ¿Por qué ya no encontramos tasas de interés atractivas en el sistema financiero peruano? ¿Por qué mis renovaciones de depósitos a plazos fijos se hacen con uno o dos puntos porcentuales menos comparado al año pasado? ¿Es algo relevante para nosotros los ciudadanos? a continuación responderemos a estas dudas."/>
        <meta name="googlebot" content="Muchos inversionistas vienen sufriendo una reducción en sus tasas de interés en las últimas semanas. ¿Cuál es la razón? ¿Por qué ya no encontramos tasas de interés atractivas en el sistema financiero peruano? ¿Por qué mis renovaciones de depósitos a plazos fijos se hacen con uno o dos puntos porcentuales menos comparado al año pasado? ¿Es algo relevante para nosotros los ciudadanos? a continuación responderemos a estas dudas."/>        <meta property="og:site_name" content="¿Por qué las tasas de los depósitos se están reduciendo? - TasaTop.com"/>
        <meta property="og:type" content="product"/>
        <meta property="og:url" content="https://www.tasatop.com/pe/educacion-financiera/por-que-las-tasas-de-los-depositos-se-estan-reduciendo.html"/>
        <meta property="og:title" content="¿Por qué las tasas de los depósitos se están reduciendo? - TasaTop.com"/>
        <meta property="og:description" content="Muchos inversionistas vienen sufriendo una reducción en sus tasas de interés en las últimas semanas. ¿Cuál es la razón? ¿Por qué ya no encontramos tasas de interés atractivas en el sistema financiero peruano? ¿Por qué mis renovaciones de depósitos a plazos fijos se hacen con uno o dos puntos porcentuales menos comparado al año pasado? ¿Es algo relevante para nosotros los ciudadanos? a continuación responderemos a estas dudas."/>
        <meta property="og:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-por-que-las-tasas-de-los-depositos-se-estan-reduciendo.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@tasatop_com"/>
        <meta name="twitter:site:id" content="854162481853456384"/>
        <meta name="twitter:url" content="https://www.tasatop.com/pe/educacion-financiera/por-que-las-tasas-de-los-depositos-se-estan-reduciendo.html"/>
        <meta name="twitter:title" content="¿Por qué las tasas de los depósitos se están reduciendo? - TasaTop.com"/>
        <meta name="twitter:description" content="Muchos inversionistas vienen sufriendo una reducción en sus tasas de interés en las últimas semanas. ¿Cuál es la razón? ¿Por qué ya no encontramos tasas de interés atractivas en el sistema financiero peruano? ¿Por qué mis renovaciones de depósitos a plazos fijos se hacen con uno o dos puntos porcentuales menos comparado al año pasado? ¿Es algo relevante para nosotros los ciudadanos? a continuación responderemos a estas dudas."/>
        <meta name="twitter:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-por-que-las-tasas-de-los-depositos-se-estan-reduciendo.jpg"/>
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
                    <Blog12 />

                   
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