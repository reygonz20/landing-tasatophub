import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import $ from 'jquery';
// Import asset...

// Import Components...
import Menu from '../../../../../components/ifi/sideMenu/menu-ifi'
import FooterSection from '../../../../../components/pernat/footer/footerPernat';
import Header from '../../../../../components/ifi/header/header-ifi'

// Import for the custom plugins...
import { index } from '../../../../../config/plugins';

import Router from 'next/router';


const Index = () => {

    const [mobile, setMobile] = useState(false);
    const [midScreen, setMidScreen] = useState(false);
    const [openMenu, setOpenMenu] = useState(!mobile ? true : false)

    useEffect(()=> {
      if(!localStorage.getItem('tasaToken') || !localStorage.getItem('tasaID') || !localStorage.getItem('tasaRol') || !localStorage.getItem('tasaUsuario') || !localStorage.getItem('tasaApellido') || !localStorage.getItem('tasaCorreo')){
        Router.push({
          pathname:'/zonaprivada/iniciar-sesion',
      })
      } else
      null
  },)
  
  useEffect(()=> {
    if(localStorage.getItem('tasaRol') != '2' ){
      localStorage.removeItem('tasaToken')
        localStorage.removeItem('tasaID')
        localStorage.removeItem('tasaUsuario')
        localStorage.removeItem('tasaApellido')
        localStorage.removeItem('tasaCorreo')
        localStorage.removeItem('tasaRol')
      Router.push({
        pathname:'/zonaprivada/iniciar-sesion',
    })  
    } else
    null
  },)

    useEffect(() => {
        if (window.innerWidth <= 823) {
          setMobile(true);
          setOpenMenu(false);
        } else {
          setMobile(false);
          setOpenMenu(true);
        }
    
        if (window.innerHeight < 960) {
          setMidScreen(true);
        } else {
          setMidScreen(false);
        }
    
        window.addEventListener('resize', (e) => {
          if (window.innerWidth <= 823) {
            setMobile(true);
            setOpenMenu(false);
          } else {
            setMobile(false);
            setOpenMenu(true);
          }
    
          if (window.innerHeight < 960) {
            setMidScreen(true);
          } else {
            setMidScreen(false);
          }
        });
      }, []);

    useEffect(() => {
        setTimeout( () => {
            index();
        }, 500);
      }, []);

const botonMenu = () => {
    $('nav').toggleClass('mostrar')
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
}

const botonMenu2 = () => {
    $('nav').toggleClass('mostrar')
}

    return (
        <>
            {/* Heading section */}
            <Head>
            <title>Zona Privada - TasaTop.com Perú</title>
                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="TasaTop Perú - Encuentra la mejor manera de ahorrar e invertir en un solo lugar." />
                <link rel="shortcut icon" href="/assets/images/logotasa.ico" />

                {/* <title>Tasatop.com | Encuentra la mejor manera de ahorrar e invertir en un solo lugar.</title>
                <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <meta property="og:title" content="Tasatop.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="video.movie"/>
                <meta property="og:url" content="https://www.tasatop.com/"/>
                <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg"/>
                <link rel="shortcut icon" href="/static/resources/images/favicon.ico" type="image/x-icon"/>
                <link rel="stylesheet" href="/static/resources/css/landing.css"/> */}
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


            {/* header section*/}
                <Header botonMenu={botonMenu} botonMenu2={botonMenu2} mobile={mobile} midScreen={midScreen} setMobile={setMobile} openMenu={openMenu} setOpenMenu={setOpenMenu} />

           

            <div className="main-content" style={{height: '100%', minHeight: 'calc(100vh - 80px - 53px)'}}>

                {/* About section */}
                <Menu botonMenu={botonMenu} botonMenu2={botonMenu2} mobile={mobile} midScreen={midScreen} setMobile={setMobile} openMenu={openMenu} setOpenMenu={setOpenMenu}/>

                
            </div>

<div style={{width: '100%'}}>
            <footer>
                

                {/* Footer section */}
                <FooterSection />
            </footer>
            </div>

        </>
    );
}

export default Index;
