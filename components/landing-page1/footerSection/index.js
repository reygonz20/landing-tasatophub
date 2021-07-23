import React, { useState } from 'react';
import Link from 'next/link'

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../sofbox';


const footer = () => {

    const [footerText, setFooterText] = useState([
        {
            icon: true,
            iconClass: 'ion-ios-location-outline',
            text: 'Calle las Palmeras 216 San Isidro - Lima'
        },
        {
            icon: true,
            iconClass: 'ion-ios-telephone-outline',
            text: '+51 993 271 177'
        },
        {
            icon: true,
            iconClass: 'ion-ios-email-outline',
            text: 'contactos@tasatop.com'
        }
    ])
    const [footerHome, setFooterHome] = useState([
        {
            section: [
                {
                    href: '/pe#inicio',
                    title: 'Inicio'
                },
                {
                    href: '/pe/nosotros',
                    title: 'Nosotros'
                },
                {
                    href: '/pe/terminos-y-condiciones',
                    title: 'Terminos y condiciones'
                }
            ]
        },
        {
            section: [
                {
                    href: '/pe/faq',
                    title: 'Preguntas Frecuentes'
                },
                {
                    href: '/pe/educacion-financiera',
                    title: 'Educación Financiera'
                },
                // {
                //     href: '#',
                //     title: 'Our service'
                // },
                {
                    href: '#',
                    title: 'Contactanos'
                }
            ]
        }
    ])
    const [footerHelp, setFooterHelp] = useState([
        {
            section: [
                {
                    href: '#',
                    title: 'MON - FRI: 09AM - 05PM'
                },
                {
                    href: '#',
                    title: 'SAT: 09AM - 01PM'
                },
                {
                    href: '#',
                    title: 'SUN: Enjoy Day'
                }
            ]
        }
    ])


    return (
        <>
            <FooterMain className={"iq-footer3 iq-pt-40 iq-pb-20"}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20" >
                        <FooterLogo
                            sectionImage="/assets/images/tasatop-logo-footer.png"
                            sectionText={"© 2020Todos los derechos reservados"}
                        />Ley de protección de datos el consumidor - LEY Nº 29733
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20" >
                        <FooterAddress  addressContent={footerText} addressTitle={"Dirección"} />
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                        <FooterLinks title={"Office Days"} content={footerHelp}  />
                    </div> */}
                    <div className="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
                        <FooterLinks title={"Menu"} content={footerHome}  />
                    </div>
                    <div className="col-md-6 col-lg-3 iq-mtb-20">
                        <h5 style={{color: 'white', marginBottom: '10%', fontWeight: '600'}}>Nuestras redes sociales</h5>
                            <ul className="info-share">
                                <li><a href="https://twitter.com/tasatop_com" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href="https://www.facebook.com/tasatop/" target="_blank"><i className="fab fa-facebook" /></a></li>
                                <li><a href="https://www.linkedin.com/company/maquinando-fintech-sac/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=51993271177&text=%C2%A1Hola!,%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20como%20obtener%20mayor%20rentabilidad%20para%20mi%20dinero" target="_blank"><i className="fab fa-whatsapp" /></a></li>
                                <li style={{marginTop: '2%'}}><a href="https://www.instagram.com/tasatop_com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                </div>
            </FooterMain>
        </>
    );
}


export default footer;