import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

import FooterSection from '../../../components/landing-page1/footerSection/index';
import Registro from '../../../components/landing-page1/login/registro'
import logoImg from '../../../public/assets/images/logotasa.png';

// Import for the custom plugins...
import { index } from '../../../config/plugins';


// Import for the Sofbox components...
import { ScrollTop } from '../../../components/sofbox';
import HeaderStyleOtros from '../../../components/sofbox/HeaderStyleOtros';

import Router from 'next/router';

const Index = () => {


    const [state, setState] = useState({
        menu: [
            { href: '/pe#inicio', title: 'Inicio'},
            { href: '/pe#que-hacemos', title: '¿Qué hacemos?' },
            { href: '/pe#productos', title: 'Productos'},
            { href: '/pe/educacion-financiera', title: 'Educación Financiera' },
            { href: '/pe/nosotros', title: 'Nosotros' },
            { href: '/pe#contacto', title: 'Contáctanos' },
            {href: '/zonaprivada', title: 'Iniciar Sesión',
            _is_active : true,
            active: true,}
        ]
    })
    
    const { menu } = state;
    
        useEffect(() => {
            setTimeout( () => {
                index();
            }, 500);
          }, []);

          useEffect(() => {
           if (localStorage.getItem('tasaToken') && localStorage.getItem('tasaID') && localStorage.getItem('tasaRol') && localStorage.getItem('tasaUsuario') && localStorage.getItem('tasaApellido') && localStorage.getItem('tasaCorreo')) {
                localStorage.getItem('tasaRol') === '1' ? 
                Router.push({
                    pathname:'/zonaprivada/beta/dashboard/aseweb/usuarios',
                }) : localStorage.getItem('tasaRol') === '2' ?
                Router.push({
                    pathname:'/zonaprivada/beta/dashboard/ifi',
                }) : localStorage.getItem('tasaRol') === '3' ?
                Router.push({
                    pathname:'/zonaprivada/beta/dashboard/pernat',
                }) : null
            }
          }, []);

    return(
        <>
                {/* Heading section */}
                <Head>
                    <link rel="shortcut icon" href="/assets/images/logotasa.ico" />

                    <title>Login - TasaTop.com Perú</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-T4WFHGK"></script><script src="/static/resources/js/gtm.js"></script>
        {/* <script type="text/javascript">
            {function nav() {
                if (base.startsWith("http://tasatop") || base.startsWith("http://www") || base.startsWith("www.") || base.startsWith("tasatop.")) {
                    location.href = "https://www.tasatop.com/pe/faq.html";
//                    location.href = "https://www.tasatop.com/?tt=p"+Math.round(Math.random()*10000000);
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
            {/* <div style={{background: '#212121', padding: '10px 0px', boxShadow: '3px 3px 5px 0 rgba(0,0,0,.3)', clear: 'both', textAlign: 'center', position: 'relative', zIndex:'1'}}><a href="http://windows.microsoft.com/en-US/internet-explorer/.."><img src="/static/resources/images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/></a></div> */}
            <script src="js/html5shiv.min.js"></script>
                </Head>

                {/* Loader section */}
                {/* <Loader /> */}

                {/* header section*/}
                <HeaderStyleOtros
                    className={"header-one"}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                    // buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
                />

                {/* Home section*/}
                {/* <Home /> */}


                <div className="main-content">

                    {/* faq section */}
                    <Registro />

                   
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