import React, {useState, useEffect} from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import FooterSection from '../../../components/landing-page1/footerSection';
import Productos from '../../../components/productos-de-inversion/simuInvResultados'
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

    return(
        <>
                {/* Heading section */}
                <Head>
                    <title>TasaTop Perú - Encuentra la mejor manera de ahorrar e invertir en un solo lugar.</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="TasaTop Perú - Encuentra la mejor manera de ahorrar e invertir en un solo lugar." />
                    <meta name="author" content="http://iqonic.design/" />
                    <link rel="shortcut icon" href="/assets/images/logotasa.ico" />
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
                    <Productos pernat={false} />

                    
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