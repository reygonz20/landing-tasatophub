import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import FooterSection from '../../../components/landing-page1/footerSection';
import Blog04 from '../../../components/blogs/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo/bodyBlog/index'
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

                    <title>Liquidez en el mercado y productos de inversión a mediano plazo - TasaTop.com</title>
        <meta name="description" content="En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía."/>
        <meta name="keywords" content="educación financiera, fintech peru, ahorros, inversiones, deposito a plazo, plazo fijo, producto estructurado, bonos, acciones"/>
        <meta name="robots" content="En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía."/>
        <meta name="googlebot" content="En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía."/>
        <meta property="og:site_name" content="Liquidez en el mercado y productos de inversión a mediano plazo - TasaTop.com"/>
        <meta property="og:type" content="product"/>
        <meta property="og:url" content="https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html"/>
        <meta property="og:title" content="Liquidez en el mercado y productos de inversión a mediano plazo - TasaTop.com"/>
        <meta property="og:description" content="En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía."/>
        <meta property="og:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@tasatop_com"/>
        <meta name="twitter:site:id" content="854162481853456384"/>
        <meta name="twitter:url" content="https://www.tasatop.com/pe/educacion-financiera/liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.html"/>
        <meta name="twitter:title" content="Liquidez en el mercado y productos de inversión a mediano plazo - TasaTop.com"/>
        <meta name="twitter:description" content="En el país se han tomado medidas extraordinarias para asegurar la liquidez entre empresas y personas, estas medidas como el retiro de hasta S/ 2,400 de la CTS, los subsidios a trabajadores del sector privado y el retiro de hasta S/ 2,000 de las AFP buscan asegurar la circulación de dinero en la economía."/>
        <meta name="twitter:image" content="https://www.tasatop.com/static/resources/images/educacion-financiera/tasatop-liquidez-en-el-mercado-y-productos-de-inversion-a-mediano-plazo.jpg"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script src="https://connect.facebook.net/es_LA/sdk.js?hash=500be6bec0c0f00749dc5746baa7eaad&amp;ua=modern_es6" async="" crossorigin="anonymous"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script id="facebook-jssdk" src="//connect.facebook.net/es_LA/sdk.js#xfbml=1&amp;version=v2.8&amp;appId=159229711223641"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
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
                    <Blog04 />

                   
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