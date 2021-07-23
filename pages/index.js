import React, {useEffect} from 'react';
import Head from 'next/head';
// Import asset...
import Router from 'next/router';
// Import Components...
import Pais from '../components/seleccion-de-pais/pais';

// Import for the custom plugins...
import { index } from '../config/plugins';


// Import for the Sofbox components...


const Index = () => {

    useEffect(() => {
        setTimeout( () => {
            index();
        }, 500);
      }, []);

      useEffect(() => {
        localStorage.getItem('paisSeleccion') === 'peru' ? 
        Router.push({
            pathname:'/pe',
        }) 
        :
        null
      }, []);

    return (
        <>
        {/* Heading section */}
        <Head>
            <title>TasaTop Perú - Encuentra la mejor manera de ahorrar e invertir en un solo lugar.</title>
            <meta name="keywords" content="HTML5 Template" />
            <meta name="description" content="TasaTop Perú - Encuentra la mejor manera de ahorrar e invertir en un solo lugar." />
            <link rel="shortcut icon" href="/assets/images/logotasa.ico" />

            <title>Tasatop.com | Encuentra la mejor manera de ahorrar e invertir en un solo lugar.</title>
            <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            <meta property="og:title" content="Tasatop.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="video.movie"/>
            <meta property="og:url" content="https://www.tasatop.com/"/>
            <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg"/>
            <link rel="shortcut icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>
            <link rel="stylesheet" href="/static/resources/css/landing.css"/>
{/* <script>
    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        console.log(d.toGMTString());
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                //return c.substring(name.length, c.length);
                console.log(c.substring(name.length, c.length));
                switch(c.substring(name.length, c.length)){
                    case 'PE':location.href ="/pe";break;
                    case 'MX':location.href ="/mx";break;
                }
            }
        }
        return "";
    }
    getCookie('country');
</script> */}
        </Head>

        {/* Loader section */}
        {/* <Loader /> */}

        {/* header section*/}
        {/* <HeaderStyle1
            className={"header-one"}
            navItems={menu}
            logoImg={logoImg}
            styledLogo={false}
            outside={false}
            // buttonSection={(<a className={"button bt-black pull-right"} href="#">Download</a>)}
        /> */}

        {/* Home section*/}
        {/* <Home /> */}


        <div className="main-content">

            {/* About section */}
            <Pais />

            {/* Instituciones section */}
            {/* <Instituciones /> */}

            {/* Services section */}
            {/* <Services /> */}

            {/* Specialities section */}
            {/* <Specialities /> */}

            {/* Counter section */}
            {/* <Counter /> */}

            {/* Testimonial section */}
            {/* <Testimonial /> */}

            {/* Pricing section */}
            {/* <Pricing /> */}

            {/* Alianzas section */}
            {/* <Alianzas /> */}

            {/* Team section */}
            {/* <Team /> */}

            {/* CompareService section */}
            {/* <CompareService /> */}

            {/* FAQ section */}
            {/* <Faq /> */}

            {/* Blog section */}
            {/* <Blog /> */}

            {/* Client section */}
            {/* <Reconocimientos /> */}
        </div>

        <footer>
            {/* <ParallaxHeroStyle1
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
            </ParallaxHeroStyle1> */}


            {/* Contact section */}
            {/* <Contact /> */}

            {/* Footer section */}
            {/* <FooterSection /> */}
        </footer>


        {/* Scroll top */}
        {/* <ScrollTop /> */}

        {/* Color customizer */}
        {/* <ColorCustomizer /> */}
    </>
    )
}



export default Index;